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
 * Create a string representation of an XML array that defines the menu system used
 * in the editor page.
 *
 * @type {string}
 *
 * @description
 *
 * Block definitions may contain the 'experimental=true' attribute. This designates
 * the menu item as 'not ready for production' and will be excluded from systems that
 * are configured to disbale experimental code. See the configuration option 'experimental'
 * for additional details.
 *
 * Note that the code below currently detects that the attribute
 * exists and DOES NOT evaluate the value of the attribute.
 */

var xmlToolbox = '';
xmlToolbox += '<xml id="toolbox">';
xmlToolbox += '    <category key="category_control" colour="205">';
xmlToolbox += '        <block type="comment"></block>';
xmlToolbox += '        <block type="controls_if"></block>';
xmlToolbox += '        <block type="controls_repeat">';
xmlToolbox += '            <mutation TYPE="FOREVER"></mutation>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="controls_repeat" include="s3,">';
xmlToolbox += '            <mutation type="TIMES"></mutation>';
xmlToolbox += '            <field name="TYPE">TIMES</field>';
xmlToolbox += '            <value name="TIMES">';
xmlToolbox += '                 <block type="math_number">';
xmlToolbox += '                     <field name="NUM">10</field>';
xmlToolbox += '                 </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="control_repeat_for_loop">';
xmlToolbox += '            <value name="START">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">1</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="END">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">10</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="STEP">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">1</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="scribbler_exit_loop" include="s3,"></block>';
xmlToolbox += '        <block type="controls_select">';
xmlToolbox += '            <value name="SWITCH">';
xmlToolbox += '                <block type="variables_get"></block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="controls_break" exclude="s3,"></block>';
xmlToolbox += '        <block type="base_delay" exclude="s3,">';
xmlToolbox += '            <value name="DELAY_TIME">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">1000</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="scribbler_wait" include="s3,">';
xmlToolbox += '            <value name="WAITTIME">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">500</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <field name="TIMESCALE">1</field>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="cog_new" exclude="s3,"></block>';
xmlToolbox += '        <block type="controls_return" exclude="s3,"></block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_operators" exclude="s3," colour="275">';
xmlToolbox += '        <category key="category_operators_numbers" >';
xmlToolbox += '            <block type="math_arithmetic"></block>';
xmlToolbox += '            <block type="math_limit"></block>';
xmlToolbox += '            <block type="constrain_value"></block>';
xmlToolbox += '            <block type="math_crement"></block>';
xmlToolbox += '            <block type="math_random">';
xmlToolbox += '                <value name="A">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="B">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">100</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="math_bitwise"></block>';
xmlToolbox += '            <block type="logic_operation"></block>';
xmlToolbox += '            <block type="logic_negate"></block>';
xmlToolbox += '            <block type="parens"></block>';
xmlToolbox += '            <block type="logic_compare"></block>';
xmlToolbox += '            <block type="map_value"></block>';
xmlToolbox += '            <block type="math_advanced"></block>';
xmlToolbox += '            <block type="math_inv_trig">';
xmlToolbox += '                <value name="ARG3">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_operators_strings" >';
xmlToolbox += '            <block type="string_var_length"></block>';
xmlToolbox += '            <block type="string_compare"></block>';
xmlToolbox += '            <block type="string_length"></block>';
xmlToolbox += '            <block type="combine_strings"></block>';
xmlToolbox += '            <block type="find_substring_zero">';
xmlToolbox += '                <value name="LOC">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="get_char_at_position_zero">';
xmlToolbox += '                <value name="POSITION">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="set_char_at_position_zero">';
xmlToolbox += '                <value name="POSITION">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="get_substring_zero">';
xmlToolbox += '                <value name="START">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="END">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">2</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="string_split">';
xmlToolbox += '                <value name="CHAR">';
xmlToolbox += '                    <block type="char_type_block"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="string_trim"></block>';
xmlToolbox += '            <block type="string_null"></block>';
xmlToolbox += '            <block type="string_sprint_multiple"></block>';
xmlToolbox += '            <block type="string_scan_multiple"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <sep></sep>';
xmlToolbox += '    <category key="category_values" exclude="s3," colour="205">';
xmlToolbox += '        <block type="math_number"></block>';
xmlToolbox += '        <block type="string_type_block"></block>';
xmlToolbox += '        <block type="char_type_block"></block>';
xmlToolbox += '        <block type="music_note">';
xmlToolbox += '            <field name="OCTAVE">0.125</field>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="number_binary"></block>';
xmlToolbox += '        <block type="number_hex"></block>';
xmlToolbox += '        <block type="logic_boolean"></block>';
xmlToolbox += '        <block type="high_low_value"></block>';
xmlToolbox += '        <block type="constant_define"></block>';
xmlToolbox += '        <block type="constant_value"></block>';
xmlToolbox += '        <block type="color_picker" exclude="heb,"></block>';
xmlToolbox += '        <block type="color_value_from" exclude="heb,">';
xmlToolbox += '            <value name="RED_VALUE">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="GREEN_VALUE">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="BLUE_VALUE">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="get_channel_from" exclude="heb,">';
xmlToolbox += '            <value name="COLOR">';
xmlToolbox += '                <block type="color_picker"></block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="compare_colors" exclude="heb,">';
xmlToolbox += '            <value name="COLOR1">';
xmlToolbox += '                <block type="color_picker"></block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="COLOR2">';
xmlToolbox += '                <block type="color_picker"></block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="heb_color_val" include="heb,"></block>';
xmlToolbox += '        <block type="system_counter" exclude="other,"></block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_operators_arrays" colour="250">';
xmlToolbox += '        <block type="array_init"></block>';
xmlToolbox += '        <block type="array_fill"></block>';
xmlToolbox += '        <block type="array_get">';
xmlToolbox += '            <value name="NUM">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="array_set">';
xmlToolbox += '            <value name="NUM">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="VALUE">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="array_clear"></block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_variables" custom="VARIABLE" colour="250"></category>';
xmlToolbox += '    <category key="category_functions" custom="PROCEDURE" colour="225"></category>';
xmlToolbox += '    <category key="category_input-output_pin-states" exclude="s3,heb,heb-wx," colour="185">';
xmlToolbox += '        <block type="make_pin"></block>';
xmlToolbox += '        <block type="make_pin_input">';
xmlToolbox += '            <value name="PIN">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="check_pin"></block>';
xmlToolbox += '        <block type="check_pin_input">';
xmlToolbox += '            <value name="PIN">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="set_pins"></block>';
xmlToolbox += '        <block type="get_pins"></block>';
xmlToolbox += '        <block type="set_pins_binary">';
xmlToolbox += '            <value name="VALUE">';
xmlToolbox += '                <block type="number_binary"></block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <sep include="heb,heb-wx,"></sep>';
xmlToolbox += '    <category key="category_communicate" exclude="s3," colour="340">';
xmlToolbox += '        <category key="category_hackable-electronic-badge_oled" include="heb,heb-wx,">';
xmlToolbox += '            <block type="heb_print_numeric_var">';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_print_string_var">';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="string_type_block">';
xmlToolbox += '                        <field name="TEXT">Hello</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_print_multiple"></block>';
xmlToolbox += '            <block type="heb_cursor_position_large"></block>';
xmlToolbox += '            <block type="heb_cursor_position_small">';
xmlToolbox += '                <value name="ROWS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_clear_screen"></block>';
xmlToolbox += '            <block type="heb_rotate"></block>';
xmlToolbox += '            <block type="heb_oled_point">';
xmlToolbox += '                <value name="X0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_oled_line">';
xmlToolbox += '                <value name="X0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="X1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_oled_box">';
xmlToolbox += '                <value name="X0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="W">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="H">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_oled_circle">';
xmlToolbox += '                <value name="X0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="R">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_oled_triangle">';
xmlToolbox += '                <value name="X0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="X1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="X2">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y2">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_hackable-electronic-badge_ir-communication" include="heb,heb-wx,">';
xmlToolbox += '            <block type="heb_ir_send_signal">';
xmlToolbox += '                <value name="MESSAGE">';
xmlToolbox += '                    <block type="string_type_block">';
xmlToolbox += '                        <field name="TEXT">Hello</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_ir_read_signal"></block>';
xmlToolbox += '            <block type="heb_ir_clear_buffer"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_graphing" exclude="heb-wx,">';
xmlToolbox += '            <block type="graph_settings">';
xmlToolbox += '                <field name="XAXIS">40,S</field>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="graph_output"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_hackable-electronic-badge_led_control" include="heb,heb-wx,">';
xmlToolbox += '            <block type="ws2812b_init" include="heb-wx,"></block>';
xmlToolbox += '            <block type="ws2812b_set" include="heb-wx,">';
xmlToolbox += '                <value name="LED">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="ws2812b_set_multiple" include="heb-wx,">';
xmlToolbox += '                <value name="START">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="END">';
xmlToolbox += '                    <block type="math_number" include="heb-wx,">';
xmlToolbox += '                        <field name="NUM">4</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker">#000000</block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="ws2812b_update" include="heb-wx,"></block>';
xmlToolbox += '            <block type="heb_toggle_led" include="heb,"></block>';
xmlToolbox += '            <block type="heb_toggle_led_open" include="heb,">';
xmlToolbox += '                <value name="LED_NUM">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="LED_STATE">';
xmlToolbox += '                    <block type="high_low_value">';
xmlToolbox += '                        <field name="VALUE">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_pwm_led" include="heb-wx,">';
xmlToolbox += '                <value name="BRIGHTNESS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_set_led_rgb" include="heb,">';
xmlToolbox += '                <value name="RGB">';
xmlToolbox += '                    <block type="heb_color_val"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_badge_lock" include="heb-wx,">';
xmlToolbox += '            <block type="heb_wx_lock"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_oled" exclude="heb,heb-wx,">';
xmlToolbox += '            <block type="oled_initialize"></block>';
xmlToolbox += '            <block type="oled_font_loader"></block>';
xmlToolbox += '            <block type="oled_get_max_height"></block>';
xmlToolbox += '            <block type="oled_get_max_width"></block>';
xmlToolbox += '            <block type="oled_clear_screen"></block>';
xmlToolbox += '            <block type="oled_text_color">';
xmlToolbox += '                <value name="FONT_COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="BACKGROUND_COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_text_size"></block>';
xmlToolbox += '            <block type="oled_set_cursor">';
xmlToolbox += '                <value name="X_POS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_POS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_print_text">';
xmlToolbox += '                <value name="MESSAGE">';
xmlToolbox += '                    <block type="string_type_block"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_print_number">';
xmlToolbox += '                <value name="NUMIN">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_print_multiple"></block>';
xmlToolbox += '            <block type="oled_draw_pixel">';
xmlToolbox += '                <value name="X_AXIS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_AXIS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_draw_line">';
xmlToolbox += '                <value name="X_ONE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_ONE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="X_TWO">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_TWO">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_draw_triangle">';
xmlToolbox += '                <value name="POINT_X0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_X1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_X2">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y2">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_draw_rectangle">';
xmlToolbox += '                <value name="POINT_X">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RECT_WIDTH">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RECT_HEIGHT">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RECT_ROUND">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_draw_circle">';
xmlToolbox += '                <value name="POINT_X">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RADIUS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="oled_bitmap">';
xmlToolbox += '                <value name="POS_X">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POS_Y">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';

xmlToolbox += '        <category key="category_communicate_epaper" exclude="heb,heb-wx,">';
xmlToolbox += '            <block type="epaper_initialize"></block>';
xmlToolbox += '            <block type="oled_font_loader"></block>';
xmlToolbox += '            <block type="epaper_update"></block>';
xmlToolbox += '            <block type="epaper_get_max_height"></block>';
xmlToolbox += '            <block type="epaper_get_max_width"></block>';
xmlToolbox += '            <block type="epaper_clear_screen"></block>';
xmlToolbox += '            <block type="epaper_text_color"></block>';
xmlToolbox += '            <block type="epaper_text_size"></block>';
xmlToolbox += '            <block type="epaper_set_cursor">';
xmlToolbox += '                <value name="X_POS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_POS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_print_text">';
xmlToolbox += '                <value name="MESSAGE">';
xmlToolbox += '                    <block type="string_type_block"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_print_number">';
xmlToolbox += '                <value name="NUMIN">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_print_multiple"></block>';
xmlToolbox += '            <block type="epaper_draw_pixel">';
xmlToolbox += '                <value name="X_AXIS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_AXIS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_draw_line">';
xmlToolbox += '                <value name="X_ONE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_ONE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="X_TWO">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_TWO">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_draw_triangle">';
xmlToolbox += '                <value name="POINT_X0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y0">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_X1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_X2">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y2">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_draw_rectangle">';
xmlToolbox += '                <value name="POINT_X">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RECT_WIDTH">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RECT_HEIGHT">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RECT_ROUND">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_draw_circle">';
xmlToolbox += '                <value name="POINT_X">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POINT_Y">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RADIUS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="epaper_bitmap">';
xmlToolbox += '                <value name="POS_X">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POS_Y">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';

xmlToolbox += '        <category key="category_communicate_protocols" exclude="heb,heb-wx,">';
xmlToolbox += '            <block type="serial_open"></block>';
xmlToolbox += '            <block type="serial_send_text"></block>';
xmlToolbox += '            <block type="serial_status"></block>';
xmlToolbox += '            <block type="serial_print_multiple"></block>';
xmlToolbox += '            <block type="serial_receive_text"></block>';
xmlToolbox += '            <block type="serial_scan_multiple"></block>';
xmlToolbox += '            <block type="i2c_send" experimental="true">';
xmlToolbox += '                <value name="DATA">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">10</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="ADDR">';
xmlToolbox += '                    <block type="number_hex"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="DEVICE">';
xmlToolbox += '                    <block type="number_hex"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="i2c_receive" experimental="true">';
xmlToolbox += '                <value name="ADDR">';
xmlToolbox += '                    <block type="number_hex"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="DEVICE">';
xmlToolbox += '                    <block type="number_hex"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="i2c_busy" experimental="true">';
xmlToolbox += '                <value name="DEVICE">';
xmlToolbox += '                    <block type="number_hex"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="i2c_mode" experimental="true"></block>';
xmlToolbox += '            <block type="shift_in"></block>';
xmlToolbox += '            <block type="shift_out">';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">10</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_WS2812B" exclude="heb,heb-wx,">';
xmlToolbox += '            <block type="ws2812b_init"></block>';
xmlToolbox += '            <block type="ws2812b_set">';
xmlToolbox += '                <value name="LED">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="ws2812b_set_multiple">';
xmlToolbox += '                <value name="START">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="END">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">4</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLOR">';
xmlToolbox += '                    <block type="color_picker">#000000</block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="ws2812b_update"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_serial-lcd" exclude="heb,heb-wx,">';
xmlToolbox += '            <block type="debug_lcd_init"></block>';
xmlToolbox += '            <block type="debug_lcd_print">';
xmlToolbox += '                <value name="MESSAGE">';
xmlToolbox += '                    <block type="string_type_block"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="debug_lcd_number">';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="debug_lcd_print_multiple"></block>';
xmlToolbox += '            <block type="debug_lcd_action"></block>';
xmlToolbox += '            <block type="debug_lcd_set_cursor">';
xmlToolbox += '                <value name="ROW">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLUMN">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="debug_lcd_music_note"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_parallel-lcd" exclude="heb,heb-wx," experimental="true">';
xmlToolbox += '            <block type="parallel_lcd_init"></block>';
xmlToolbox += '            <block type="parallel_lcd_print">';
xmlToolbox += '                <value name="MESSAGE">';
xmlToolbox += '                    <block type="string_type_block"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="parallel_lcd_number">';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="parallel_lcd_print_multiple"></block>';
xmlToolbox += '            <block type="parallel_lcd_action"></block>';
xmlToolbox += '            <block type="parallel_lcd_set_cursor">';
xmlToolbox += '                <value name="ROW">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLUMN">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_serial-terminal" exclude="heb-wx,">';
xmlToolbox += '            <block type="console_print">';
xmlToolbox += '                <value name="MESSAGE">';
xmlToolbox += '                    <block type="string_type_block"></block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="console_print_variables">';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="console_print_multiple"></block>';
xmlToolbox += '            <block type="console_scan_text"></block>';
xmlToolbox += '            <block type="console_scan_number"></block>';
xmlToolbox += '            <block type="console_newline"></block>';
xmlToolbox += '            <block type="console_clear"></block>';
xmlToolbox += '            <block type="console_move_to_position">';
xmlToolbox += '                <value name="ROW">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="COLUMN">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="console_close"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category name="WX Module" exclude="heb,">';
xmlToolbox += '            <category name="Simple" experimental="true">';
xmlToolbox += '                <block type="wx_init" exclude="heb-wx,"></block>';
xmlToolbox += '                <block type="wx_config_page"></block>';
xmlToolbox += '                <block type="wx_set_widget"></block>';
xmlToolbox += '                <block type="wx_send_widget">';
xmlToolbox += '                    <value name="NUM">';
xmlToolbox += '                        <block type="math_number">';
xmlToolbox += '                            <field name="NUM">10</field>';
xmlToolbox += '                        </block>';
xmlToolbox += '                    </value>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_read_widgets"></block>';
xmlToolbox += '                <block type="wx_get_widget"></block>';
xmlToolbox += '                <block type="wx_evt_connected"></block>';
xmlToolbox += '                <block type="wx_reconnect"></block>';
xmlToolbox += '            </category>';
xmlToolbox += '            <category name="Advanced">';
xmlToolbox += '                <block type="wx_init_adv" exclude="heb-wx,"></block>';
xmlToolbox += '                <block type="wx_listen">';
xmlToolbox += '                    <field name="ID">wxConnId1</field>';
xmlToolbox += '                    <value name="PATH">';
xmlToolbox += '                        <block type="string_type_block">';
xmlToolbox += '                            <field name="TEXT">path</field>';
xmlToolbox += '                        </block>';
xmlToolbox += '                    </value>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_poll">';
xmlToolbox += '                    <field name="EVENT">wxEvent</field>';
xmlToolbox += '                    <field name="ID">wxId</field>';
xmlToolbox += '                    <field name="HANDLE">wxHandle</field>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_print_multiple">';
xmlToolbox += '                    <field name="HANDLE">wxHandle</field>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_send_string">';
xmlToolbox += '                    <field name="HANDLE">wxHandle</field>';
xmlToolbox += '                    <value name="DATA">';
xmlToolbox += '                        <block type="string_type_block"></block>';
xmlToolbox += '                    </value>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_scan_multiple">';
xmlToolbox += '                    <field name="HANDLE">wxHandle</field>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_scan_string">';
xmlToolbox += '                    <field name="HANDLE">wxHandle</field>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_receive_string">';
xmlToolbox += '                    <field name="HANDLE">wxHandle</field>';
xmlToolbox += '                    <value name="MAX">';
xmlToolbox += '                        <block type="math_number">';
xmlToolbox += '                            <field name="NUM">64</field>';
xmlToolbox += '                        </block>';
xmlToolbox += '                    </value>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_mode"></block>';
xmlToolbox += '                <block type="wx_code"></block>';
xmlToolbox += '                <block type="wx_buffer">';
xmlToolbox += '                    <field name="BUFFER">wxBuffer</field>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_join"></block>';
xmlToolbox += '                <block type="wx_disconnect">';
xmlToolbox += '                    <field name="ID">wxId</field>';
xmlToolbox += '                </block>';
xmlToolbox += '                <block type="wx_ip"></block>';
xmlToolbox += '            </category>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate_xbee" exclude="heb,heb-wx,">';
xmlToolbox += '            <block type="xbee_setup"></block>';
xmlToolbox += '            <block type="xbee_transmit"></block>';
xmlToolbox += '            <block type="xbee_print_multiple"></block>';
xmlToolbox += '            <block type="xbee_receive"></block>';
xmlToolbox += '            <block type="xbee_scan_multiple"></block>';
//xmlToolbox += '            <block type="xbee_configure" experimental="true"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_sensor-input" include="heb,heb-wx," colour="140">';
xmlToolbox += '        <category key="category_hackable-electronic-badge_accelerometer" >';
xmlToolbox += '            <block type="heb_badge_axis_acceleration"></block>';
xmlToolbox += '            <block type="heb_badge_was_shaken"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_hackable-electronic-badge_touchpad-control" >';
xmlToolbox += '            <block type="heb_touchpad_status"></block>';
xmlToolbox += '            <block type="heb_touchpad_sensitivity" include="heb-wx,">';
xmlToolbox += '                <field name="LEVEL">7</field>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_sony-remote" >';
xmlToolbox += '            <block type="sirc_get"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_memory" include="heb,heb-wx," colour="165">';
xmlToolbox += '        <category key="category_memory_contacts">';
xmlToolbox += '            <block type="heb_badge_eeprom_store">';
xmlToolbox += '                <value name="CONTACT">';
xmlToolbox += '                    <block type="string_type_block">';
xmlToolbox += '                        <field name="TEXT">Last, First</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_badge_eeprom_is_stored">';
xmlToolbox += '                <value name="CONTACT">';
xmlToolbox += '                    <block type="string_type_block">';
xmlToolbox += '                        <field name="TEXT">Last, First</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_badge_eeprom_retrieve">';
xmlToolbox += '                <value name="INDEX">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_count_contacts"></block>';
xmlToolbox += '            <block type="heb_erase_all_contacts"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_memory_sdcard" include="heb-wx,">';
xmlToolbox += '            <block type="sd_open"></block>';
xmlToolbox += '            <block type="sd_read">';
xmlToolbox += '                <value name="SIZE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">10</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="sd_file_pointer"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_sensor-input" exclude="s3,heb,heb-wx," colour="140">';
xmlToolbox += '        <category key="category_sensor-input_2axis-joystick" include="activity-board,">';
xmlToolbox += '            <block type="joystick_input_xaxis"></block>';
xmlToolbox += '            <block type="joystick_input_yaxis"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_4x4-keypad" >';
xmlToolbox += '            <block type="keypad_initialize"></block>';
xmlToolbox += '            <block type="keypad_read"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_BME680">';
xmlToolbox += '            <block type="bme680_init"></block>';
xmlToolbox += '            <block type="bme680_read"></block>';
xmlToolbox += '            <block type="bme680_get_value"></block>';
xmlToolbox += '            <block type="bme680_heater"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_colorpal" >';
xmlToolbox += '            <block type="colorpal_enable"></block>';
xmlToolbox += '            <block type="colorpal_get_colors_raw"></block>';
xmlToolbox += '            <block type="colorpal_get_colors"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_ping" >';
xmlToolbox += '            <block type="sensor_ping"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_gps" >';
xmlToolbox += '            <block type="GPS_init"></block>';
xmlToolbox += '            <block type="GPS_hasFix"></block>';
xmlToolbox += '            <block type="GPS_latitude"></block>';
xmlToolbox += '            <block type="GPS_longitude"></block>';
xmlToolbox += '            <block type="GPS_heading"></block>';
xmlToolbox += '            <block type="GPS_altitude"></block>';
xmlToolbox += '            <block type="GPS_velocity"></block>';
xmlToolbox += '            <block type="GPS_satsTracked"></block>';
xmlToolbox += '            <block type="GPS_date_time"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_fingerprint" >';
xmlToolbox += '            <block type="fp_scanner_init"></block>';
xmlToolbox += '            <block type="fp_scanner_add">';
xmlToolbox += '                <value name="USER">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="fp_scanner_scan"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_hmc5883l" include="other,">';
xmlToolbox += '            <block type="HMC5883L_init"></block>';
xmlToolbox += '            <block type="HMC5883L_read"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_LIS3DH" >';
xmlToolbox += '            <block type="lis3dh_init"></block>';
xmlToolbox += '            <block type="lis3dh_read"></block>';
xmlToolbox += '            <block type="lis3dh_temp"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_LSM9DS1" >';
xmlToolbox += '            <block type="lsm9ds1_init"></block>';
xmlToolbox += '            <block type="lsm9ds1_mag_calibrate"></block>';
xmlToolbox += '            <block type="lsm9ds1_read"></block>';
xmlToolbox += '            <block type="lsm9ds1_tilt"></block>';
xmlToolbox += '            <block type="lsm9ds1_heading"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_mma7455" include="other,">';
xmlToolbox += '            <block type="MMA7455_init"></block>';
xmlToolbox += '            <block type="MMA7455_acceleration"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_memsic-2axis" >';
xmlToolbox += '            <block type="MX2125_acceleration_xaxis"></block>';
xmlToolbox += '            <block type="MX2125_acceleration_yaxis"></block>';
xmlToolbox += '            <block type="MX2125_rotation"></block>';
xmlToolbox += '            <block type="MX2125_tilt_xaxis"></block>';
xmlToolbox += '            <block type="MX2125_tilt_yaxis"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <!--';
xmlToolbox += '                    <category key="category_sensor-input_mma7455" >';
xmlToolbox += '                        <block type="MMA7455_init"></block>';
xmlToolbox += '                        <block type="MMA7455_acceleration"></block>';
xmlToolbox += '                    </category>';
xmlToolbox += '        -->';
xmlToolbox += '        <category key="category_sensor-input_pir" >';
xmlToolbox += '            <block type="PIR_Sensor"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_rfid" >';
xmlToolbox += '            <block type="rfid_enable"></block>';
xmlToolbox += '            <block type="rfid_get"></block>';
xmlToolbox += '            <block type="rfid_disable"></block>';
xmlToolbox += '            <block type="rfid_close"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_sony-remote" >';
xmlToolbox += '            <block type="sirc_get"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_sound-impact-sensor" >';
xmlToolbox += '            <block type="sound_impact_run"></block>';
xmlToolbox += '            <block type="sound_impact_get"></block>';
xmlToolbox += '            <block type="sound_impact_end"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_temperature-humidity" >';
xmlToolbox += '            <block type="dht22_read"></block>';
xmlToolbox += '            <block type="dht22_value"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_memory" include="activity-board,flip,other," colour="165">';
xmlToolbox += '        <category key="category_memory_eeprom" >';
xmlToolbox += '            <block type="eeprom_read">';
xmlToolbox += '                <value name="ADDRESS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="eeprom_write">';
xmlToolbox += '                <value name="ADDRESS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_memory_sdcard">';
xmlToolbox += '            <block type="sd_init" exclude="activity-board,"></block>';
xmlToolbox += '            <block type="sd_open"></block>';
xmlToolbox += '            <block type="sd_read">';
xmlToolbox += '                <value name="SIZE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">10</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="sd_file_pointer"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_analog-pulses" exclude="s3,heb,heb-wx," colour="185">';
xmlToolbox += '        <category key="category_analog-pulses_pulse-in-out" exclude="s3,">';
xmlToolbox += '            <block type="pulse_in"></block>';
xmlToolbox += '            <block type="pulse_out">';
xmlToolbox += '                <value name="PULSE_LENGTH">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="base_count">';
xmlToolbox += '                <value name="DURATION">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">1</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_analog-pulses_pwm">';
xmlToolbox += '            <!-- <block type="pwm_start"></block> -->';
xmlToolbox += '            <block type="pwm_set">';
xmlToolbox += '                <value name="DUTY_CYCLE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">50</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="pwm_stop"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_analog-pulses_rc">';
xmlToolbox += '            <block type="rc_charge_discharge"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_analog-pulses_voltage" include="activity-board,">';
xmlToolbox += '            <block type="ab_volt_in"></block>';
xmlToolbox += '            <block type="ab_volt_out">';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_analog-pulses_voltage" include="flip,other,">';
xmlToolbox += '            <block type="mcp320x_read"></block>';
xmlToolbox += '            <block type="mcp320x_set_vref"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_audio" exclude="s3," colour="185">';
xmlToolbox += '        <category key="category_audio_freqout" >';
xmlToolbox += '            <block type="base_freqout">';
xmlToolbox += '                <value name="DURATION">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="FREQUENCY">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="sound_init" include="activity-board,">';
xmlToolbox += '                <field name="PINL">26</field>';
xmlToolbox += '                <field name="PINR">27</field>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="sound_init" include="flip,other,"></block>';
xmlToolbox += '            <block type="sound_play"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_hackable-electronic-badge_text-to-speech" >';
xmlToolbox += '            <block type="heb_text_to_speech_pins"></block>';
xmlToolbox += '            <block type="heb_text_to_speech_volume"></block>';
xmlToolbox += '            <block type="heb_text_to_speech_say">';
xmlToolbox += '                <value name="STRING">';
xmlToolbox += '                    <block type="string_type_block">';
xmlToolbox += '                        <field name="TEXT">heloa</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="heb_text_to_speech_spell">';
xmlToolbox += '                <value name="STRING">';
xmlToolbox += '                    <block type="string_type_block">';
xmlToolbox += '                        <field name="TEXT">hello</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_audio_audio" exclude="flip,">';
xmlToolbox += '            <block type="wav_set_pins" include="activity-board,">';
xmlToolbox += '                <field name="PINL">26</field>';
xmlToolbox += '                <field name="PINR">27</field>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="wav_play"></block>';
xmlToolbox += '            <block type="wav_status"></block>';
xmlToolbox += '            <block type="wav_volume">';
xmlToolbox += '                <value name="VOLUME">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="wav_stop"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_servo" exclude="s3,heb,heb-wx," colour="165">';
xmlToolbox += '        <block type="servo_move">';
xmlToolbox += '            <value name="ANGLE">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="servo_speed">';
xmlToolbox += '            <value name="SPEED">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="servo_set_ramp">';
xmlToolbox += '            <value name="RAMPSTEP">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">50</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="fb360_init"></block>';
xmlToolbox += '        <block type="fb360_setup">';
xmlToolbox += '            <field name="PARAM">setAcceleration</field>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="fb360_set">';
xmlToolbox += '            <value name="VALUE">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="fb360_get"></block>';
xmlToolbox += '        <block type="fb360_status"></block>';
xmlToolbox += '        <block type="scribbler_stop_servo"></block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_robot"  include="activity-board," colour="295">';
xmlToolbox += '        <block type="ab_drive_init"></block>';
xmlToolbox += '        <block type="ab_drive_ramping">';
xmlToolbox += '            <field name="RAMPING">600</field>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="ab_drive_speed">';
xmlToolbox += '            <value name="LEFT">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">64</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="RIGHT">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">64</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="ab_drive_goto">';
xmlToolbox += '            <value name="LEFT">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">64</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="RIGHT">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">64</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="ab_drive_goto_max_speed">';
xmlToolbox += '            <value name="SPEED">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">64</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="ab_drive_stop"></block>';
xmlToolbox += '        <block type="ab_drive_get_ticks"></block>';
xmlToolbox += '        <block type="activitybot_calibrate"></block>';
xmlToolbox += '        <block type="activitybot_display_calibration"></block>';
xmlToolbox += '        <block type="activitybot_parallaxy_load"></block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_robot" include="flip," colour="295" experimental="true">';
xmlToolbox += '        <block type="ab_drive_init"></block>';
xmlToolbox += '        <block type="ab_drive_ramping">';
xmlToolbox += '            <field name="RAMPING">600</field>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="ab_drive_speed">';
xmlToolbox += '            <value name="LEFT">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">64</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="RIGHT">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">64</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="ab_drive_stop"></block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_s3-math" include="s3," colour="275">';
xmlToolbox += '        <block type="math_number"></block>';
xmlToolbox += '        <block type="scribbler_boolean"></block>';
xmlToolbox += '        <block type="scribbler_random_boolean"></block>';
xmlToolbox += '        <block type="math_random">';
xmlToolbox += '            <value name="A">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">1</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="B">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">10</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="math_arithmetic"></block>';
xmlToolbox += '        <block type="math_limit"></block>';
xmlToolbox += '        <block type="logic_operation"></block>';
xmlToolbox += '        <block type="math_crement"></block>';
xmlToolbox += '        <block type="logic_negate"></block>';
xmlToolbox += '        <block type="logic_compare"></block>';
xmlToolbox += '        <block type="constrain_value"></block>';
xmlToolbox += '        <block type="map_value"></block>';
xmlToolbox += '        <block type="math_advanced"></block>';
xmlToolbox += '        <block type="math_inv_trig">';
xmlToolbox += '            <value name="ARG3">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">1</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_sensor-input" include="s3," colour="140">';
xmlToolbox += '        <category key="category_sensor-input_s3-line" >';
xmlToolbox += '            <block type="calibrate_line_sensor"></block>';
xmlToolbox += '            <!-- <block type="scribbler_if_line"></block> -->';
xmlToolbox += '            <block type="scribbler_simple_line"></block>';
xmlToolbox += '            <block type="line_sensor"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_s3-obstacle" >';
xmlToolbox += '            <!-- <block type="scribbler_if_obstacle"></block>';
xmlToolbox += '            <block type="obstacle_sensor"></block> -->';
xmlToolbox += '            <block type="scribbler_simple_obstacle"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_s3-light" >';
xmlToolbox += '            <!-- <block type="scribbler_if_light"></block> -->';
xmlToolbox += '            <block type="scribbler_simple_light"></block>';
xmlToolbox += '            <block type="light_sensor"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_s3-stall" >';
xmlToolbox += '            <!-- <block type="scribbler_if_stalled"></block> -->';
xmlToolbox += '            <block type="stall_sensor"></block>';
xmlToolbox += '            <!-- <block type="spinning_sensor"></block> -->';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_s3-sirc" >';
xmlToolbox += '            <block type="sirc_s3_get"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_s3-mic" >';
xmlToolbox += '            <block type="mic_s3_get"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_sensor-input_s3-button" >';
xmlToolbox += '            <block type="reset_button_presses"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_s3-actions" include="s3," colour="185">';
xmlToolbox += '        <category key="category_s3-actions_motors" >';
xmlToolbox += '            <block type="scribbler_drive">';
xmlToolbox += '                <field name="DRIVE_ANGLE">STRAIGHT</field>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="scribbler_spin"></block>';
xmlToolbox += '            <block type="scribbler_stop"></block>';
xmlToolbox += '            <block type="move_motors">';
xmlToolbox += '                <value name="LEFT_MOTOR_SPEED">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RIGHT_MOTOR_SPEED">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="MOTOR_DURATION">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="move_motors_distance">';
xmlToolbox += '                <value name="LEFT_MOTOR_DISTANCE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="RIGHT_MOTOR_DISTANCE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="MOTOR_SPEED">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="move_motors_xy">';
xmlToolbox += '                <value name="X_DISTANCE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="Y_DISTANCE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="MOTOR_SPEED">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="move_motors_angle">';
xmlToolbox += '                <value name="ROTATE_ANGLE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="ROTATE_RADIUS">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="ROTATE_SPEED">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_s3-actions_sound" include="s3,">';
xmlToolbox += '            <block type="scribbler_play">';
xmlToolbox += '                <field name="NOTE_DURATION">250</field>';
xmlToolbox += '                <field name="NOTE_OCTAVE">4</field>';
xmlToolbox += '                <field name="NOTE_FREQUENCY">4186</field>';
xmlToolbox += '                <field name="NOTE_VOLUME">50</field>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="play_polyphony">';
xmlToolbox += '                <value name="FREQUENCY_1">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="FREQUENCY_2">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POLYPHONY_DURATION">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="POLYPHONY_VOLUME">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_s3-actions_leds" include="s3,">';
xmlToolbox += '            <block type="scribbler_LED"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_communicate" include="s3,">';
xmlToolbox += '            <block type="scribbler_serial_send_text"></block>';
xmlToolbox += '            <block type="scribbler_serial_send_decimal"></block>';
xmlToolbox += '            <block type="scribbler_serial_send_char"></block>';
xmlToolbox += '            <block type="scribbler_serial_send_ctrl"></block>';
xmlToolbox += '            <!--';
xmlToolbox += '                            <block type="scribbler_serial_cursor_xy">';
xmlToolbox += '                                <value name="X">';
xmlToolbox += '                                    <block type="spin_integer">';
xmlToolbox += '                                        <field name="INT_VALUE">0</field>';
xmlToolbox += '                                    </block>';
xmlToolbox += '                                </value>';
xmlToolbox += '                                <value name="Y">';
xmlToolbox += '                                    <block type="spin_integer">';
xmlToolbox += '                                        <field name="INT_VALUE">0</field>';
xmlToolbox += '                                    </block>';
xmlToolbox += '                                </value>';
xmlToolbox += '                            </block>';
xmlToolbox += '            -->';
xmlToolbox += '            <block type="scribbler_serial_rx_byte"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_memory" include="s3,">';
xmlToolbox += '            <block type="s3_eeprom_read">';
xmlToolbox += '                <value name="ADDR">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="s3_eeprom_write">';
xmlToolbox += '                <value name="ADDR">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '                <value name="VALUE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">0</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_s3-actions_reset" include="s3,">';
xmlToolbox += '            <block type="factory_reset"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_s3-hacker-port" include="s3," colour="295">';
xmlToolbox += '        <category key="category_s3-hacker-port_sensors" >';
xmlToolbox += '            <block type="scribbler_ping"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_s3-hacker-port_pins" >';
xmlToolbox += '            <block type="make_pin"></block>';
xmlToolbox += '            <block type="check_pin"></block>';
xmlToolbox += '            <block type="analog_input"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '        <category key="category_s3-hacker-port_servo" >';
xmlToolbox += '            <block type="servo_move">';
xmlToolbox += '                <value name="ANGLE">';
xmlToolbox += '                    <block type="math_number">';
xmlToolbox += '                        <field name="NUM">90</field>';
xmlToolbox += '                    </block>';
xmlToolbox += '                </value>';
xmlToolbox += '            </block>';
xmlToolbox += '            <block type="scribbler_stop_servo"></block>';
xmlToolbox += '        </category>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category key="category_system" exclude="s3," colour="320">';
xmlToolbox += '        <block type="run_as_setup" experimental="true"></block>';
xmlToolbox += '        <block type="custom_code_multiple"></block>';
xmlToolbox += '        <block type="waitcnt">';
xmlToolbox += '            <value name="TARGET">';
xmlToolbox += '                <block type="math_arithmetic">';
xmlToolbox += '                    <value name="A">';
xmlToolbox += '                        <block type="system_counter"></block>';
xmlToolbox += '                    </value>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="wait_pin" experimental="true">';
xmlToolbox += '            <value name="PIN">';
xmlToolbox += '                <block type="math_number">';
xmlToolbox += '                    <field name="NUM">0</field>';
xmlToolbox += '                </block>';
xmlToolbox += '            </value>';
xmlToolbox += '            <value name="STATE">';
xmlToolbox += '                <block type="high_low_value"></block>';
xmlToolbox += '            </value>';
xmlToolbox += '        </block>';
xmlToolbox += '        <block type="register_set"></block>';
xmlToolbox += '        <block type="register_get"></block>';
xmlToolbox += '        <block type="system_counter" include="other,"></block>';
xmlToolbox += '    </category>';
xmlToolbox += '    <category name="PTHS Robot Arm" include="activity-board," colour="#B00000">';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="gND^n:Y+vVu4NcaGZmGn" x="-902" y="-1958">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;0&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;MAIN&quot;:&quot;start_servos();&quot;,&quot;GLOBALS&quot;:&quot;&quot;,&quot;INCLUDES&quot;:&quot;const int MY_MAXSPD = 100;\n'
           +              'const int MY_MINSPD = 20;\n'
           +              'const int MY_MAXPOS = 990;\n'
           +              'const int MY_MINPOS = 10;\n'
           +              'const int MY_LIFT = 0;\n'
           +              'const int MY_CURL = 1;\n'
           +              'const int MY_ROTATE = 2;\n'
           +              'const int LIFT_ZERO = 215;\n'
           +              'const int CURL_ZERO = 844;\n'
           +              'const int GRIP_PIN = 13;\n'
           +              '\n'
           +              'char _servo[3] = {17, 15, 14};\n'
           +              'char _feedback[3] = {16, 11, 10};\n'
           +              'int _initpos[3] = {0, 0, 0};\n'
           +              'int _interpos[3] = {0, 0, 0};\n'
           +              'int _targpos[3] = {0, 0, 0};\n'
           +              'int _currpos[3] = {0, 0, 0};\n'
           +              'int _currt[3] = {0, 0, 0};\n'
           +              'int _totalt[3] = {0, 0, 0};\n'
           +              'int _nextspd = 20;\n'
           +              'char _lastgrip = 100;\n'
           +              'int _max_rem_time = 0;\n'
           +              'int _rem_time[3] = {0, 0, 0};\n'
           +              'int _prverr[3] = {0, 0, 0};\n'
           +              'int  _interr[3] = {0, 0, 0};\n'
           +              'int _t;\n'
           +              'int _grip_pulse = 0;\n'
           +              'char _servos_started = 0;\n'
           +              'char _servos_powered = 0;\n'
           +              'int _servospd[3] = {0, 0, 0};\n'
           +              'char _servo_fault = 0;\n'
           +              'char _lockno;\n'
           +              'int  _kp = 250;\n'
           +              'int _ki = 10;\n'
           +              'int _kd = 2500;\n'
           +              'int _lpmin = 31;\n'
           +              'int _lpmax = 15;\n'
           +              'int _idecay = 99;\n'
           +              'int _lpf[3] = {0, 0, 0};\n'
           +              'int _numbers[3] = {0, 0, 0};\n'
           +              'char _newdata = 0;\n'
           +              '\n'
           +              'short _sigmoid[257] = {\n'
           +              '      0,    8,   16,   25,   34,   44,   54,   64,   75,   86,   97,  109,  122,  135,  149,  163,\n'
           +              '    178,  193,  209,  225,  242,  260,  279,  298,  318,  339,  361,  383,  407,  431,  456,  483,\n'
           +              '    510,  538,  568,  599,  630,  663,  698,  733,  771,  809,  849,  890,  933,  978, 1024, 1073,\n'
           +              '   1122, 1174, 1228, 1284, 1342, 1401, 1464, 1528, 1595, 1664, 1736, 1810, 1887, 1966, 2049, 2134,\n'
           +              '   2223, 2314, 2409, 2506, 2608, 2712, 2820, 2932, 3047, 3166, 3289, 3416, 3547, 3682, 3822, 3965,\n'
           +              '   4113, 4265, 4422, 4584, 4750, 4921, 5096, 5277, 5462, 5653, 5848, 6048, 6254, 6464, 6680, 6900,\n'
           +              '   7126, 7357, 7593, 7834, 8080, 8331, 8587, 8848, 9113, 9384, 9659, 9938,10222,10510,10802,11098,\n'
           +              '  11398,11701,12008,12318,12631,12947,13266,13587,13911,14236,14563,14891,15220,15551,15882,16213,\n'
           +              '  16545,16876,17207,17538,17867,18196,18523,18848,19171,19492,19811,20127,20440,20750,21057,21361,\n'
           +              '  21660,21956,22249,22536,22820,23100,23374,23645,23910,24171,24427,24678,24924,25165,25401,25632,\n'
           +              '  25858,26078,26294,26505,26710,26910,27106,27296,27481,27662,27837,28008,28174,28336,28493,28645,\n'
           +              '  28793,28937,29076,29211,29342,29469,29592,29711,29826,29938,30046,30151,30252,30350,30444,30536,\n'
           +              '  30624,30709,30792,30871,30948,31023,31094,31163,31230,31295,31357,31417,31475,31530,31584,31636,\n'
           +              '  31686,31734,31780,31825,31868,31909,31949,31988,32025,32060,32095,32128,32160,32190,32220,32248,\n'
           +              '  32275,32302,32327,32351,32375,32397,32419,32440,32460,32479,32498,32516,32533,32549,32565,32581,\n'
           +              '  32595,32610,32623,32636,32649,32661,32672,32684,32694,32705,32715,32724,32733,32742,32751,32759,\n'
           +              '  32767\n'
           +              '};\n'
           +              '\n'
           +              '\n'
           +              'void arm_wait() {\n'
           +              '  if (!_servos_started) return;\n'
           +              '  pause(75);\n'
           +              '  while (_max_rem_time) {pause(50);}\n'
           +              '}\n'
           +              '\n'
           +              'void one_wait(int i) {\n'
           +              '  while (_rem_time[i] &amp;&amp; _targpos[i]) {pause(25);}\n'
           +              '}  \n'
           +              '\n'
           +              'void get_trajectory(int i, int pos) {\n'
           +              '   _totalt[i] = 0;\n'
           +              '  if (pos &gt; 0) {\n'
           +              '    pos = constrainInt(pos, MY_MINPOS, MY_MAXPOS);\n'
           +              '    if (i == MY_CURL) pos = 999 - pos;\n'
           +              '    _currt[i] = 0;\n'
           +              '    int spd = constrainInt(i == 0 ? _nextspd : 2 * _nextspd / 3, MY_MINSPD, MY_MAXSPD);\n'
           +              '    _totalt[i] = constrainInt((abs(pos - _currpos[i]) &lt;&lt; 15) / (spd * 10), 1, 256000);\n'
           +              '    _lpf[i] = (_lpmin * (MY_MAXSPD - spd) + _lpmax * (spd - MY_MINSPD)) / (MY_MAXSPD - MY_MINSPD);\n'
           +              '    if (_targpos[i]) {\n'
           +              '      _initpos[i] = _interpos[i] = _targpos[i];\n'
           +              '    } else {\n'
           +              '      _initpos[i] = _interpos[i] = _currpos[i];\n'
           +              '    }\n'
           +              '    _targpos[i] = pos;\n'
           +              '  }\n'
           +              '}\n'
           +              '\n'
           +              'void run_servo(int i, int pos) {\n'
           +              '  if (!_servos_started) return;\n'
           +              '  pause(50);\n'
           +              '  if (i &gt;= 0 &amp;&amp; i &lt;= 2) {\n'
           +              '    one_wait(i);\n'
           +              '    while (lockset(_lockno)) {pause(25);}\n'
           +              '    get_trajectory(i, pos);\n'
           +              '    lockclr(_lockno);\n'
           +              '    pause(25);\n'
           +              '  }\n'
           +              '}\n'
           +              '\n'
           +              'void sync_servos(int lift, int curl, int rotate) {\n'
           +              '  if (!_servos_started) return;\n'
           +              '  pause(50);\n'
           +              '  arm_wait();\n'
           +              '  while (lockset(_lockno)) {pause(25);}\n'
           +              '  int pos[3];\n'
           +              '  pos[0] = lift;\n'
           +              '  pos[1] = curl;\n'
           +              '  pos[2] = rotate;\n'
           +              '  for (int i = 0; i &lt;= 2; i++) {\n'
           +              '    if (pos[i])  get_trajectory(i, pos[i]);\n'
           +              '  }\n'
           +              '  int maxt = 0;\n'
           +              '  for (int i = 0; i &lt;= 2; i++) {\n'
           +              '    if (pos[i] &amp;&amp; _totalt[i] &gt; maxt) maxt = _totalt[i];\n'
           +              '  }\n'
           +              '  for (int i = 0; i &lt;= 2; i++) {\n'
           +              '    if (pos[i]) _totalt[i] = maxt;\n'
           +              '  }\n'
           +              '  lockclr(_lockno);\n'
           +              '  pause(25);  \n'
           +              '}  \n'
           +              '\n'
           +              'void grip_angle(int angle) {\n'
           +              '  if (!_servos_started) return;\n'
           +              '  if (angle == 0) {\n'
           +              '    _grip_pulse = 0;\n'
           +              '    return;\n'
           +              '  }\n'
           +              '  int ang = constrainInt(angle, 0, 100) * 9 / 2 + 550;\n'
           +              '  if (ang &gt; _lastgrip) {\n'
           +              '    for (int i = _lastgrip; i &lt;= ang; i += 10) {\n'
           +              '      _grip_pulse = ang;\n'
           +              '      pause(25);\n'
           +              '    }\n'
           +              '  } else {\n'
           +              '    for (int i = _lastgrip; i &gt;= ang; i -= 10) {\n'
           +              '      _grip_pulse = ang;\n'
           +              '      pause(25);\n'
           +              '    }\n'
           +              '  }    \n'
           +              '  _lastgrip = ang;\n'
           +              '}\n'
           +              '\n'
           +              'void redefine_constants(int kp, int ki, int kd, int lpmin, int lpmax, int idecay) {\n'
           +              '  if (!_servos_started) return;\n'
           +              '  while (lockset(_lockno)) {pause(25);}\n'
           +              '  if (kp) _kp = kp;\n'
           +              '  if (ki) _ki = ki;\n'
           +              '  if (kd) _kd = kd;\n'
           +              '  if (lpmin) _lpmin = lpmin;\n'
           +              '  if (lpmax) _lpmax = lpmax;\n'
           +              '  if (idecay) _idecay = idecay;  \n'
           +              '  lockclr(_lockno);\n'
           +              '}\n'
           +              '\n'
           +              'int number(const char *digits, int n) {\n'
           +              '  char c;\n'
           +              '  for (int i = 0; i &lt; n; i++) {\n'
           +              '    int value = 0;\n'
           +              '    while ((c = *digits++) == &#39; &#39;) {}\n'
           +              '    while (1) {\n'
           +              '      if (c &gt;= &#39;0&#39; &amp;&amp; c &lt;= &#39;9&#39;) {\n'
           +              '        value = value * 10 + c - &#39;0&#39;;\n'
           +              '      } else {\n'
           +              '        _numbers[i] = value;\n'
           +              '        break;\n'
           +              '      }\n'
           +              '      c = *digits++;\n'
           +              '    }\n'
           +              '  }\n'
           +              '  return _numbers[0];\n'
           +              '}    \n'
           +              '\n'
           +              'void chain(const char *cmds) {\n'
           +              '  if (!_servos_started) return;\n'
           +              '  char c;\n'
           +              '  while (1) {\n'
           +              '    switch (c = *cmds++) {\n'
           +              '      case &#39;S&#39;:\n'
           +              '      case &#39;s&#39;:\n'
           +              '        _nextspd = number(cmds, 1);\n'
           +              '        break;\n'
           +              '      case &#39;L&#39;:\n'
           +              '      case &#39;l&#39;:\n'
           +              '        run_servo(MY_LIFT, number(cmds, 1));\n'
           +              '        break;\n'
           +              '      case &#39;C&#39;:\n'
           +              '      case &#39;c&#39;:\n'
           +              '        run_servo(MY_CURL, number(cmds, 1));\n'
           +              '        break;\n'
           +              '      case &#39;R&#39;:\n'
           +              '      case &#39;r&#39;:\n'
           +              '        run_servo(MY_ROTATE, number(cmds, 1));\n'
           +              '        break;\n'
           +              '      case &#39;W&#39;:\n'
           +              '      case &#39;w&#39;:\n'
           +              '        arm_wait();\n'
           +              '        pause(number(cmds, 1));\n'
           +              '        break;\n'
           +              '      case &#39;P&#39;:\n'
           +              '      case &#39;p&#39;:\n'
           +              '        pause(number(cmds, 1));\n'
           +              '        break;\n'
           +              '      case &#39;G&#39;:\n'
           +              '      case &#39;g&#39;:\n'
           +              '        grip_angle(number(cmds, 1));\n'
           +              '        break;\n'
           +              '      case &#39;M&#39;:\n'
           +              '      case &#39;m&#39;:\n'
           +              '        number(cmds, 3);\n'
           +              '        sync_servos(_numbers[0], _numbers[1], _numbers[2]);\n'
           +              '        break;\n'
           +              '      case &#39;/&#39;:\n'
           +              '        while (1) {\n'
           +              '          c = *cmds++;\n'
           +              '          if (c == 10) break;\n'
           +              '          if (c == 0) return;\n'
           +              '        }\n'
           +              '        break;\n'
           +              '      case 0:\n'
           +              '        return;\n'
           +              '    }\n'
           +              '  }\n'
           +              '}\n'
           +              '\n'
           +              'void set_speed(int spd) {\n'
           +              '  if (!_servos_started) return;\n'
           +              '  _nextspd = constrainInt(spd, MY_MINSPD, MY_MAXSPD);\n'
           +              '}\n'
           +              '\n'
           +              'int get_position(int i) {\n'
           +              '  if (!_servos_started) return 0;\n'
           +              '  switch (i) {\n'
           +              '    case 0: /* MY_LIFT */\n'
           +              '    case 2: /* MY_ROTATE */\n'
           +              '      return _currpos[i];\n'
           +              '    case 1: /* MY_CURL */\n'
           +              '      return 999 - _currpos[MY_CURL];\n'
           +              '    default:\n'
           +              '      return 0;\n'
           +              '  }\n'
           +              '} \n'
           +              '\n'
           +              'int sigmoid(int curr_t, int total_t) {\n'
           +              '  int i = curr_t * 4096 / total_t;\n'
           +              '  int p = i % 16;\n'
           +              '  i &gt;&gt;= 4;\n'
           +              '  return (_sigmoid[i] * (16 - p) + _sigmoid[i + 1] * p) &gt;&gt; 4;\n'
           +              '}\n'
           +              '\n'
           +              'void fault(int n) {\n'
           +              '  _servo_fault = n;\n'
           +              '  while (1) {\n'
           +              '    for (int i = 1; i &lt;= n; i++) {\n'
           +              '      pulse_out(26, 125000);\n'
           +              '      pause(125);\n'
           +              '    }\n'
           +              '    pause(500);\n'
           +              '  }\n'
           +              '}\n'
           +              '\n'
           +              'void run_servos() {\n'
           +              '  int _20ms = CLKFREQ / 52;\n'
           +              '  int power_history = 0;\n'
           +              '  while (1) {\n'
           +              '    _t = CNT;\n'
           +              '    int powered = 1;\n'
           +              '    int max_rem_time = 0;\n'
           +              '    int pos[3];\n'
           +              '    for (int i = 0; i &lt;= 2; i++) {\n'
           +              '      int t1 = (pulse_in(_feedback[i], 1));\n'
           +              '      if (t1 == 0) {\n'
           +              '        powered = 0;\n'
           +              '        break;\n'
           +              '      }\n'
           +              '      int t2 = (pulse_in(_feedback[i], 0));\n'
           +              '      if (abs(t1 + t2 - 1100) &gt; 100) {\n'
           +              '        powered = 0;\n'
           +              '        break;\n'
           +              '      }\n'
           +              '      pos[i] = constrainInt(( ((1000 * t1) / (t1 + t2)) - 29) * 1000 / 941, 0, 999);\n'
           +              '    }\n'
           +              '    power_history = (power_history &lt;&lt; 1) + powered;\n'
           +              '    if (_servos_powered &amp;&amp; !powered) fault(1);\n'
           +              '    if ((power_history &amp; 0x0ffff) == 0x0ffff) {\n'
           +              '      for (int i = 0; i &lt;= 2; i++) {\n'
           +              '        while (lockset(_lockno)) {}\n'
           +              '        if (_targpos[i] &gt; 0) {\n'
           +              '          int rem_time = _totalt[i] - _currt[i];\n'
           +              '          if (rem_time &gt; max_rem_time) max_rem_time = rem_time;\n'
           +              '          _currt[i] = constrainInt(_currt[i] + 256, 0, _totalt[i]);\n'
           +              '          int relpos = sigmoid(_currt[i], _totalt[i]);\n'
           +              '          _interpos[i] = (_initpos[i] * (32767 - relpos) + _targpos[i] * relpos) &gt;&gt; 15;\n'
           +              '          int errp = _interpos[i] - pos[i];\n'
           +              '          if (abs(errp) &gt; 100) {\n'
           +              '            fault(2);\n'
           +              '          }\n'
           +              '          _interr[i] = _interr[i] * _idecay / 100 + errp;\n'
           +              '           int srvspd = -(errp * _kp - (_prverr[i] - errp) * _kd + _interr[i] * _ki) / 100;\n'
           +              '           srvspd = (_servospd[i] * _lpf[i] + srvspd) / (_lpf[i] + 1);\n'
           +              '          if (srvspd &lt; 0) {\n'
           +              '            pulse_out(_servo[i], 1477 + srvspd);\n'
           +              '          } else {\n'
           +              '            pulse_out(_servo[i], 1523 + srvspd);\n'
           +              '          }\n'
           +              '           _rem_time[i] = rem_time;\n'
           +              '           _prverr[i] = errp;\n'
           +              '          _servospd[i] = srvspd;\n'
           +              '        }\n'
           +              '        _currpos[i] = pos[i];\n'
           +              '        lockclr(_lockno);\n'
           +              '      }\n'
           +              '    }\n'
           +              '    _servos_powered = (power_history &amp; 0x0ffff) == 0x0ffff;\n'
           +              '    _max_rem_time = max_rem_time;\n'
           +              '    if (_grip_pulse &amp;&amp; _servos_powered) pulse_out(GRIP_PIN, _grip_pulse);\n'
           +              '    _newdata = 1;\n'
           +              '    while (CNT - _t &lt; _20ms) {}\n'
           +              '  }\n'
           +              '}\n'
           +              '\n'
           +              'void start_servos() {\n'
           +              '  if (_servos_started) return;\n'
           +              '  _lockno = locknew();\n'
           +              '  cog_run(run_servos, 128);\n'
           +              '  pause(50);\n'
           +              '  while (!_servos_powered) {pause(25);}\n'
           +              '  _servos_started = 1;\n'
           +              '  pause(500);\n'
           +              '}\n'
           +              '&quot;,&quot;SETUPS&quot;:&quot;&quot;,&quot;LABEL_SET&quot;:&quot;Start Robot Arm&quot;,&quot;FUNCTIONS&quot;:&quot;&quot;,&quot;TYPE&quot;:&quot;INL&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="c[aVcI2qRuEh+@aDmMna" x="-842" y="-1912">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;1&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Set arm&quot;,&quot;LABEL_ARG1&quot;:&quot;speed&quot;,&quot;MAIN&quot;:&quot;set_speed(@1+0);\n'
           +              '&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="6c:Jlqza)d,g}`rhLf?^" x="-867" y="-1825">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;1&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Set lift&quot;,&quot;LABEL_ARG1&quot;:&quot;position&quot;,&quot;LABEL_ARG2&quot;:&quot;Speed&quot;,&quot;MAIN&quot;:&quot;run_servo(MY_LIFT, @1+0);\n'
           +              '&quot;,&quot;LABEL_ARG3&quot;:&quot;Wait?&quot;,&quot;INCLUDES&quot;:&quot;&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="YEvXy;r6rN{k44g9G?~Y" x="-833" y="-1771">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;1&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Set curl&quot;,&quot;LABEL_ARG1&quot;:&quot;position&quot;,&quot;LABEL_ARG2&quot;:&quot;Speed&quot;,&quot;MAIN&quot;:&quot;run_servo(MY_CURL, @1+0);&quot;,&quot;FUNCTIONS&quot;:&quot;&quot;,&quot;LABEL_ARG3&quot;:&quot;Wait?&quot;,&quot;INCLUDES&quot;:&quot;&quot;,&quot;GLOBALS&quot;:&quot;&quot;,&quot;SETUPS&quot;:&quot;&quot;,&quot;TYPE&quot;:&quot;INL&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="cpr}8CqXTFPUt}W2KiLb" x="-951" y="-1717">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;1&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Set rotate&quot;,&quot;MAIN&quot;:&quot;run_servo(MY_ROTATE, @1+0);&quot;,&quot;LABEL_ARG1&quot;:&quot;position&quot;,&quot;LABEL_ARG2&quot;:&quot;Speed&quot;,&quot;LABEL_ARG3&quot;:&quot;Wait?&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="0))f6DjP|:DFk.,l?/9m" x="-842" y="-1654">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;0&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Wait for arms&quot;,&quot;MAIN&quot;:&quot;arm_wait();\n'
           +              '&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="]B/In@e`0@D2!OXm/#bw" x="-934" y="-1604">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;1&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Set grip&quot;,&quot;MAIN&quot;:&quot;grip_angle(@1 + 0);&quot;,&quot;LABEL_ARG1&quot;:&quot;position&quot;,&quot;LABEL_ARG2&quot;:&quot;Speed&quot;,&quot;TYPE&quot;:&quot;INL&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="NbpsIdZwGx%dt,/VIk)#" x="-836" y="-1531">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;1&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Chain arm&quot;,&quot;LABEL_ARG1&quot;:&quot;commands&quot;,&quot;MAIN&quot;:&quot;chain(@1);&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '            <value name="ARG1">';
xmlToolbox += '               <block colour="F00"  type="string_type_block_multiple" id="#q5k%Cj.6r)~(8M9lWX5">';
xmlToolbox += '                  <field name="TEXT" />';
xmlToolbox += '               </block>';
xmlToolbox += '            </value>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="NWqsu#enaCRKYUb76!~;" x="-953" y="-1483">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;3&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Multi-sync&quot;,&quot;LABEL_ARG1&quot;:&quot;Lift&quot;,&quot;LABEL_ARG2&quot;:&quot;Curl&quot;,&quot;LABEL_ARG3&quot;:&quot;Rotate&quot;,&quot;MAIN&quot;:&quot;sync_servos(@1 + 0, @2 + 0, @3 + 0);&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="4@qsE09AK_9!W8rW7o%_" x="-939" y="-1366">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;0&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Lift position&quot;,&quot;TYPE&quot;:&quot;NUM&quot;,&quot;MAIN&quot;:&quot;get_position(MY_LIFT)&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="D$][cLdiucpT{Tu9RjmM" x="-941" y="-1325">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;0&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Curl Position&quot;,&quot;TYPE&quot;:&quot;NUM&quot;,&quot;MAIN&quot;:&quot;get_position(MY_CURL)&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="IGi5V*UgzHbr1|+$`HU`" x="-943" y="-1284">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;0&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_SET&quot;:&quot;Rotate Position&quot;,&quot;TYPE&quot;:&quot;NUM&quot;,&quot;MAIN&quot;:&quot;get_position(MY_ROTATE)&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '         <block colour="F00"  xmlns="https://developers.google.com/blockly/xml" type="custom_code_multiple_locked" id="A3].D+pgnQy.4nnusEhp" x="-958" y="-1213">';
xmlToolbox += '            <mutation xmlns="http://www.w3.org/1999/xhtml" field_values="{&quot;ARG_COUNT&quot;:&quot;6&quot;,&quot;COLOR&quot;:&quot;#b00000&quot;,&quot;EDIT&quot;:&quot;FALSE&quot;,&quot;LABEL_ARG1&quot;:&quot;kP (250)&quot;,&quot;LABEL_ARG2&quot;:&quot;kI (10)&quot;,&quot;LABEL_ARG3&quot;:&quot;kD (2500)&quot;,&quot;LABEL_SET&quot;:&quot;Constants&quot;,&quot;LABEL_ARG4&quot;:&quot;pMinV (31)&quot;,&quot;LABEL_ARG5&quot;:&quot;pMaxV (15)&quot;,&quot;LABEL_ARG6&quot;:&quot;dI (99)&quot;,&quot;MAIN&quot;:&quot;redefine_constants(@1 + 0, @2 + 0, @3 + 0, @4 + 0, @5 + 0, @6 + 0);&quot;}" />';
xmlToolbox += '            <field name="EDIT">FALSE</field>';
xmlToolbox += '         </block>';
xmlToolbox += '     </category>';
xmlToolbox += '   </xml>';

var colorChanges = {
    '140': '#AAAAAA',
    '165': '#222222',
    '185': '#333333',
    '205': '#444444',
    '225': '#555555',
    '250': '#666666',
    '275': '#777777',
    '295': '#888888',
    '320': '#999999',
    '340': '#111111'
};


/**
 * Filter the blocks available in the toolbox.
 *
 * @param {object} project - projectData object
 * @returns {string}
 */
function filterToolbox(project) {
    let profileName = project.board;
    let customCategoryList = null;

    // Set the category's label (internationalization)
    xmlToolbox = xmlToolbox.replace(/key="([\S]+)"/g, function (m, p) {
        return 'name="' + toolbox_label[p] + '"';
    });

    // Set the palette colors
    if (window.getURLParameter('grayscale') == '1') {
        xmlToolbox = xmlToolbox.replace(/colour="([\S]+)"/g, function (m, p) {
            return 'colour="' + colorChanges[p] + '"';
        });
    }

    // Convert the xmlToolBox string to an XML object
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlToolbox, "text/xml");

    // Extract custom categories from the project code and insert them into the toolbox
    // Insert them after the "Functions" category
    if (project.code) {
        // If custom categories are in their own key (after a page refresh/reload), reintegrate them
        if (project.categories && project.categories !== '' && project.code.indexOf('<category') === -1) {
            let tempProjectCode = project.code.replace(/<\/xml>/g,'');
            project.code = tempProjectCode + project.categories + '</xml>';
        }
        let projectXml = parser.parseFromString(project.code, "text/xml");
        let customCategories = projectXml.getElementsByTagName('category') || [];
        // Turn the HTMLcollection into an array
        customCategoryList = [...projectXml.getElementsByTagName('category')];
        let toolboxCategories = xmlDoc.getElementsByTagName('category') || [];
        let k = 0;
        // Find the "Functions" menu category so the custom menu can be placed after it. 
        for (let j = 0; j < toolboxCategories.length; j++) {
            if (toolboxCategories[j].getAttribute('custom') === "PROCEDURE") {
                k = j + 1;
                break;
            }
        }
        // Insert the custom categories
        for (let j = 0; j < customCategories.length; j++) {
            xmlDoc.getElementById('toolbox').insertBefore(customCategories[j], toolboxCategories[k]);
            // Remove the category XML from the project code
            if (customCategories[j] && customCategories[j].parentNode) {
                customCategories[j].parentNode.removeChild(customCategories[j]);
            }
        }
    }

    // Loop through the specified tags and filter based on their attributes
    let tagSearch = ['category', 'sep', 'block'];

    // Toolbox entries to be removed from the menu
    let toRemove = [];

    // Scan the toolBox XML document for each search tag
    for (let j = 0; j < tagSearch.length; j++) {

        let xmlElem = xmlDoc.getElementsByTagName(tagSearch[j]);

        for (let t = 0; t < xmlElem.length; t++) {

            // Get the current XML element
            let toolboxEntry = xmlElem[t];

            // The include attribute defines specific supported board types
            let include = toolboxEntry.getAttribute('include');

            // The exclude attribute defines board types that are specifically excluded
            // from the block under consideration
            let exclude = toolboxEntry.getAttribute('exclude');

            // The experimental attribute is used to decalre that the current menu item
            // is considered experimental
            let experimental = toolboxEntry.getAttribute('experimental');

            // Place this entry on the removal list if the include attribute is
            // defined and is does not match the board type that is currently
            // defined for the project.
            if (include && include.indexOf(profileName) === -1) {
                toRemove.push(toolboxEntry);
            }

            // Place this entry on the removal list if the exclude attribute is
            // defined and does match the board type that is currently defined
            // for the project.
            else if (exclude && exclude.indexOf(profileName) > -1) {
                toRemove.push(toolboxEntry);
            }

            // if the XML element has an experimental attribute and the current
            // experimental>blocks fuse is not set, exclude the menu entry
            else if (experimental && isExperimental.indexOf('blocks') < 0) {
                // Remove toolbox categories that are experimental
                toRemove.push(toolboxEntry);
            }
        }
    }

    // Remove the XML nodes that were set to be deleted
    for (let j = 0; j < toRemove.length; j++) {
        toRemove[j].parentNode.removeChild(toRemove[j]);
    }

    // Turn the XML object back into a string
    let out = new XMLSerializer();
    let outStr = out.serializeToString(xmlDoc);

    // turn the custom category XML into a string so it can be added back into a save (SVG) file.
    if (projectData && customCategoryList && customCategoryList.length > 0) {
        projectData.categories = '';
        for (let j = 0; j < customCategoryList.length; j++) {
            if (customCategoryList[j] && customCategoryList[j].outerHTML) {
                projectData.categories += customCategoryList[j].outerHTML;
            }
        }
    }
    return outStr;
}
