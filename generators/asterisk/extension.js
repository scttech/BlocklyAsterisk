/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Asterisk.extension');

goog.require('Blockly.Asterisk');


Blockly.Asterisk['extensiontimeout'] = function (block) {
    var text_extensiondescription = block.getFieldValue('extensionDescription');
    var statements_commands = Blockly.Asterisk.statementToCode(block, 'commands');
    var code = 'exten => i,1,NoOp(' + text_extensiondescription + ')\n';
    code += 'same => 2,Playback(pbx-invalid)\n'
    code += 'same => 3,Hangup\n';
    code += statements_commands;
    return code;
};

Blockly.Asterisk['extensioninvalid'] = function (block) {
    var text_extensiondescription = block.getFieldValue('extensionDescription');
    var statements_commands = Blockly.Asterisk.statementToCode(block, 'commands');
    var code = 'exten => i,1,NoOp(' + text_extensiondescription + ')\n';
    code += 'same => 2,Playback(pbx-invalid)\n'
    code += 'same => 3,Hangup\n';
    code += statements_commands;
    return code;
};

Blockly.Asterisk['extension'] = function (block) {
    var text_extensionname = block.getFieldValue('extensionName');
    var text_extensiondescription = block.getFieldValue('extensionDescription');
    var statements_commands = Blockly.Asterisk.statementToCode(block, 'commands');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
