/*
 *   TERMS OF USE: MIT License
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a
 *   copy of this software and associated documentation files (the "Software"),
 *   to deal in the Software without restriction, including without limitation
 *   the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *   and/or sell copies of the Software, and to permit persons to whom the
 *   Software is furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFINGEMENT. IN NO EVENT SHALL
 *   THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *   FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *   DEALINGS IN THE SOFTWARE.
 */



/**
 *
 * @type {number}
 */
var cursorX = 0;


/**
 *
 * @type {number}
 */
var cursorY = 0;


/**
 *
 * @type {number}
 */
var cursorGotoX = 0;


/**
 *
 * @type {number}
 */
var cursorGotoY = 0;


/**
 *
 * @type {number}
 * 0 = normal, 1 = set X, 2 = set Y, 3 = set X then to 2 to set Y
 */
var termSetCursor = 0;


/**
 *
 * @type {any[]}
 */
var textContainer = [''];


/**
 *
 * @type {number}
 */
var terminalBeenScrolled = 0;


/**
 *
 * @type {string}
 */
var terminalPixelsWide;


/**
 *
 * @type {string}
 */
var terminalPixelsHigh;


/**
 *
 * @type {number}
 */
var terminalLineHeight;


/**
 *
 * @type {number}
 */
var terminalCharactersWide = 256;  // if null, it's auto-calculated based on the pixel-width of the terminal


/**
 *
 * @type {string[]}
 */
var ascii2unicode = [
    '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7', '\u00EA',
    '\u00EB', '\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6',
    '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9', '\u00FF', '\u00D6', '\u00DC',
    '\u00A2', '\u00A3', '\u00A5', '\u20A7', '\u0192', '\u00E1', '\u00ED', '\u00F3', '\u00FA',
    '\u00F1', '\u00D1', '\u00AA', '\u00BA', '\u00BF', '\u2310', '\u00AC', '\u00BD', '\u00BC',
    '\u00A1', '\u00AB', '\u00BB', '\u2591', '\u2592', '\u2593', '\u2502', '\u2524', '\u2561',
    '\u2562', '\u2556', '\u2555', '\u2563', '\u2551', '\u2557', '\u255D', '\u255C', '\u255B',
    '\u2510', '\u2514', '\u2534', '\u252C', '\u251C', '\u2500', '\u253C', '\u255E', '\u255F',
    '\u255A', '\u2554', '\u2569', '\u2566', '\u2560', '\u2550', '\u256C', '\u2567', '\u2568',
    '\u2564', '\u2565', '\u2559', '\u2558', '\u2552', '\u2553', '\u256B', '\u256A', '\u2518',
    '\u250C', '\u2588', '\u2584', '\u258C', '\u2590', '\u2580', '\u03B1', '\u00DF', '\u0393',
    '\u03C0', '\u03A3', '\u03C3', '\u00B5', '\u03C4', '\u03A6', '\u0398', '\u03A9', '\u03B4',
    '\u221E', '\u03C6', '\u03B5', '\u2229', '\u2261', '\u00B1', '\u2265', '\u2264', '\u2320',
    '\u2321', '\u00F7', '\u2248', '\u00B0', '\u2219', '\u00B7', '\u221A', '\u207F', '\u00B2',
    '\u25A0', '\u00A0'];


/**
 *
 * @type {Array}
 */
var echoTrapBuffer = [];


/**
 *
 * @type {boolean}
 */
var trapEchos = false;


/**
 *
 * @type {boolean}
 */
var echoKeys = true;


/**
 *
 * @type {string}
 */
var terminalBuffer = '';


/**
 *
 * @type {null}
 */
var updateTermInterval = null;


/**
 *
 * @type {boolean}
 */
var bufferAlert = false;


/**
 *
 * @type {object}
 */
var terminalContainerElement = {};


/**
 *
 */
$(document).ready(function () {

    terminalContainerElement = document.getElementById('serial_console');
    var terminalComputedStyle = window.getComputedStyle(terminalContainerElement);

    terminalPixelsWide = parseFloat(terminalComputedStyle.getPropertyValue('width') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('border-left') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('border-right') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('padding-left') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('padding-right') || '0');

    terminalPixelsHigh = parseFloat(terminalComputedStyle.getPropertyValue('height') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('border-top') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('border-bottom') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('padding-top') || '0') - 
            parseFloat(terminalComputedStyle.getPropertyValue('padding-bottom') || '0');

    terminalCharacterWidth = getCharacterSize(terminalComputedStyle.getPropertyValue('font'));
    terminalLineHeight = parseFloat(terminalComputedStyle.getPropertyValue('line-height'));

    if (!terminalCharactersWide) {
        terminalCharactersWide = Math.floor(((terminalPixelsWide - 20) / terminalCharacterWidth));
    }

    terminalContainerElement.style.overflowX = 'scroll';    

    // Register a keydown event callback function
    terminalContainerElement.addEventListener('keydown', function (e) {
        //Validate key (or emit special key character)
        var keycode = e.keyCode || e.which;

        if (keycode === 8 || keycode === 13) {
            //Emit special character
            processKey(keycode);
        }

        //Validate key
        if ((keycode > 47  && keycode < 58)  ||  //  number keys
            (keycode === 32)                 ||  //  spacebar
            (keycode > 64  && keycode < 91)  ||  //  letter keys
            (keycode > 95  && keycode < 112) ||  //  numpad keys
            (keycode > 185 && keycode < 193) ||  //  ;=,-./` (in order)
            (keycode > 218 && keycode < 223)) {  //  [\]' (in order)

            processKey(e.key.charCodeAt(0));
        }
    });

    // Register a click event callback function
    terminalContainerElement.addEventListener('click', function () {
        var terminalHTML = terminalContainerElement.innerHTML;

        if (terminalHTML[terminalHTML.length - 1] !== '\u258D') {
            terminalContainerElement.innerHTML = terminalHTML + '\u258D';
        }
    });

    // Register a blur event callback function
    terminalContainerElement.addEventListener('blur', function () {
        var terminalHTML = terminalContainerElement.innerHTML;

        if (terminalHTML[terminalHTML.length - 1] === '\u258D') {
            terminalContainerElement.innerHTML = terminalHTML.slice(0, -1);
            if (terminalHTML === '\u258D') {
                terminalContainerElement.innerHTML = '';
            }
        }
    });
});


/**
 *
 * @param keyPressCode
 */
function processKey(keyPressCode) {
    var characterToSend = String.fromCharCode(keyPressCode);

    // TODO: Add callback here to send keypress to device

    if (echoKeys) {
        displayInTerm(characterToSend);
    }
    if (trapEchos) {
        echoTrapBuffer.push(keyPressCode);
    }
    
    //TODO: move all of the below into a callback.
    //Emit key keyPressCode to its proper destination
    if (active_connection !== null && active_connection !== 'simulated' && active_connection !== 'websocket') {
        active_connection.send(client_version >= minEnc64Ver ? btoa(characterToSend) : characterToSend);

    } else if (active_connection === 'websocket') {
        var msg_to_send = {
            type: 'serial-terminal',
            outTo: 'terminal',
            portPath: getComPort(),
            baudrate: baudrate.toString(10),
            msg: characterToSend,
            action: 'msg'
        };
        client_ws_connection.send(JSON.stringify(msg_to_send));

    } 
}


/**
 *
 * @param str
 */
function displayInTerm(str) {
    if(!str) {
        updateTermBox(0);
        terminalBuffer = '';
    } else {
        var termStatus = terminalBuffer.length;
        terminalBuffer += str;

        if (termStatus === 0) {
            sendBufferToTerm();
        } else if (termStatus > 255 && bufferAlert === false) {
            termBufferWarning();
        }
    }
}


/**
 *
 */
function termBufferWarning() {
    bufferAlert = true;
    var wrn = document.getElementById('serial-conn-info');
    var ptx = wrn.innerHTML;
    wrn.innerHTML = '<span class="alert-danger">Your program is sending too much data to the terminal at once.<br>Try adding pauses or sending less data.</span>';

    setTimeout(function () {
        wrn.innerHTML = ptx;
        bufferAlert = false;
    }, 5000);
}


/**
 *
 */
function sendBufferToTerm() {
    do {
        updateTermBox(terminalBuffer.charCodeAt(0));
        terminalBuffer = terminalBuffer.substr(1);
    } while (terminalBuffer.length > 0)

    displayTerm();
}


/**
 *
 * @param c
 */
function updateTermBox(c) {
    if (trapEchos) {
        for (var i = 0; i < echoTrapBuffer.length; i++) {
            if (echoTrapBuffer[i] === c) {
                echoTrapBuffer.splice(i, 1);
                return;
            }
        }
    }

    cursorGotoY = cursorY;

    if (termSetCursor !== 4) {
        cursorGotoX = cursorX;
    }

    c = parseInt(c);


    // FIXME: Convert the values evaluated in the switch statement to constants
    //  to make this code more readable.
    // https://www.parallax.com/portals/0/help/BASICStamp/PBASIC click on Debug
    switch (termSetCursor) {
        case 3:
            cursorGotoX = parseInt(c);
            termSetCursor = 4;
            break;
        case 2:
            // fall through
        case 4:
            cursorGotoY = parseInt(c);
            termSetCursor = 0;
            setCursor(cursorGotoX, cursorGotoY);
            break;
        case 1:
            cursorGotoX = parseInt(c);
            termSetCursor = 0;
            setCursor(cursorGotoX, cursorGotoY);
            break;
        case 0:
            // TODO: Null is important to Parallax - Ask Jeff
            switch (c) {
                case 127:
                    // fall through
                case 8:
                    if (cursorX + cursorY > -1) {
                        if (textContainer[cursorY].length > 1) {
                            if (cursorX === textContainer[cursorY].length) {
                                textContainer[cursorY] = textContainer[cursorY].slice(0, -1);
                            } else if (cursorX > 0) {
                                var currentLine = textContainer[cursorY];
                                textContainer[cursorY] = currentLine.substr(0, cursorX - 1) + ' ' + currentLine.substr(cursorX);
                            }
                        } else if (textContainer[cursorY].length === 1) {
                            textContainer[cursorY] = textContainer[cursorY] = '';
                        }
                        changeCursor(-1, 0);
                        break;
                    }
                    // fall through
                case 13:
                    // fall through
                case 10:
                    terminalBeenScrolled = 2;  // check to see if the div needs to be scrolled down, and check again after any char is entered.
                    changeCursor(0, 1);
                    break;
                case 9:
                    var j = 5 - (cursorX) % 5;
                    for (var k = 0; k < j; k++) {
                        textContainer[cursorY] += ' ';
                        changeCursor(1, 0);
                    }
                    break;
                case 0:
                    // fall through
                case 16:
                    textContainer = null;
                    textContainer = new Array;
                    textContainer[0] = '';
                    // fall through
                case 1:
                    cursorX = 0;
                    cursorY = 0;
                    changeCursor(0, 0);
                    break;
                case 3:
                    changeCursor(-1, 0);
                    break;
                case 4:
                    changeCursor(1, 0);
                    break;
                case 5:
                    changeCursor(0, -1);
                    break;
                case 6:
                    changeCursor(0, 1);
                    break;
                case 7: // Beep
                    terminalContainerElement.classList.remove("visual-beep");
                    var ow = terminalContainerElement.offsetWidth;
                    terminalContainerElement.classList.add("visual-beep");
                    var sound = document.getElementById("term-beep");
                    sound.play();
                    break;
                case 11: // clear to end of line
                    textContainer[cursorY] = textContainer[cursorY].substr(0, cursorX);
                    break;
                case 12: // clear down
                    for (var n = cursorY + 1; n < textContainer.length; n++) {
                        textContainer[n].pop();
                    }
                    break;
                case 2:
                    termSetCursor = 3;
                    break;
                case 14:
                    // fall through
                case 15:
                    termSetCursor = c - 13;
                    break;
                default:
                    var char = '';
                    if (c > 127 && c < 256) {
                        char = ascii2unicode[c - 128];
                    } else {
                        char = String.fromCharCode(c);
                    }
                    if ((textContainer[cursorY] || '').length > cursorX) {
                        currentLine = textContainer[cursorY] || '';
                        textContainer[cursorY] = currentLine.substr(0, cursorX) + char + currentLine.substr(cursorX + 1);
                    } else {
                        textContainer[cursorY] += char;
                    }
                    changeCursor(1, 0);
                    break;
            }
    }

    if (c === 0) {
        displayTerm();
    }

    //if (updateTermInterval) {
    //    clearTimeout(updateTermInterval);
    //}
    //updateTermInterval = setTimeout(function() {sendBufferToTerm();}, 250);
    return;
}


/**
 *
 * @param x
 * @param y
 */
function changeCursor(x, y) {
    if (y === 1 && textContainer[cursorY].length >= cursorX) {
        textContainer[cursorY] = textContainer[cursorY].substr(0, cursorX);
    }

    cursorX += x;
    cursorY += y;

    if (cursorX > terminalCharactersWide - 1) {
        cursorX -= terminalCharactersWide;
        cursorY++;
        if (!textContainer[cursorY])
            textContainer[cursorY] = '';
    }

    if (cursorX < 0) {
        cursorY--;
        cursorX = textContainer[cursorY].length;
        if (cursorX > terminalCharactersWide - 1) {
            cursorX = terminalCharactersWide - 1;
            textContainer[cursorY] = textContainer[cursorY].substr(0, cursorX);
        }
    }

    if (cursorY < 0) {
        cursorY = 0;
        cursorX = 0;
    }

    if (y === 1) {
        cursorX = 0;
        if (!textContainer[cursorY]) {
            textContainer[cursorY] = '';
        }
    }
}


/**
 *
 */
function displayTerm() {
    updateTermInterval = null;

    if (cursorY < textContainer.length - 1 && textContainer[textContainer.length - 1] === '') {
        textContainer.pop();
    }

    var terminalLinesHigh = Math.floor(terminalPixelsHigh / terminalLineHeight);
    var cursorChar = '';
    var tempText = '';

    if (terminalContainerElement === document.activeElement) {
        cursorChar = '\u258D';
    }

    tempText = textContainer.join('\r') + cursorChar;

    if (textContainer.join('') === '') {
        tempText = cursorChar;
    }

    if (cursorY >= terminalLinesHigh && terminalBeenScrolled > 0) {
        terminalContainerElement.style.overflowY = 'hidden';
        terminalContainerElement.scroll(0, (cursorY - terminalLinesHigh + 1.1) * terminalLineHeight);
        terminalContainerElement.style.overflowY = 'scroll';
        terminalBeenScrolled--;
    }

    terminalContainerElement.innerHTML = tempText.replace(/ /g, '&nbsp;').replace(/\r/g, '<br>');
}


/**
 *
 * @param cx
 * @param cy
 */
function setCursor(cx, cy) {
    if (cx > terminalCharactersWide - 1) {
        cx = cx % terminalCharactersWide;
    }

    if (!textContainer[cy]) {
        for (var i = textContainer.length; i <= cy; i++) {
            textContainer[i] = '';
        }
    }

    while (!textContainer[cy][cx]) {
        textContainer[cy] += ' ';
    }

    cursorX = cx;
    cursorY = cy;
    changeCursor(0, 0);
}

/**
 *
 * @param font
 * @returns a floating-point value representing how many pixels wide a character is.
 */
function getCharacterSize(font) {
    // re-use canvas object for better performance
    var canvas = getCharacterSize.canvas || (getCharacterSize.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText('AA').width - context.measureText('A').width;
    return metrics;
}