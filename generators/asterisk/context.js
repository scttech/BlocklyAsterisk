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

goog.provide('Blockly.Asterisk.Context');

goog.require('Blockly.Asterisk');

Blockly.Asterisk['context'] = function(block) {
  var text_contextname = block.getFieldValue('contextName');
  var text_contextdesc = block.getFieldValue('contextDesc');
  var statements_commands = Blockly.Asterisk.statementToCode(block, 'commands');
  var code = '; ' + text_contextdesc + '\n';
  code += '[' + text_contextname + ']\n';
  code += statements_commands;
  return code;
};
