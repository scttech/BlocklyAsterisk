/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Constants.Asterisk');

goog.require('Blockly.Blocks');
goog.require('Blockly');


/**
 * Common HSV hue for all blocks in this category.
 * This should be the same as Blockly.Msg.COLOUR_HUE.
 * @readonly
 */
Blockly.Constants.Asterisk.HUE = 20;

Blockly.defineBlocksWithJsonArray([{
  "type": "context",
  "message0": "%1 %2 %3 %4 Extensions %5",
  "args0": [
    {
      "type": "field_input",
      "name": "contextName",
      "text": "Context Name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "contextDesc",
      "text": "Context Description"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "commands",
      "check": "extension"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Define an asterisk context",
  "helpUrl": "https://www.voip-info.org/wiki/view/Asterisk+config+extensions.conf"
},
{
  "type": "background",
  "message0": "Background %1 Audio Files %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "audioFiles",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "Play audio in the background",
  "helpUrl": "https://www.voip-info.org/wiki/view/Asterisk+cmd+BackGround"
},
{
  "type": "playback",
  "message0": "Playback %1 Audio Files %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "audioFiles",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "Play audio",
  "helpUrl": "https://www.voip-info.org/wiki/view/Asterisk+cmd+Playback"
},
{
  "type": "extensiontimeout",
  "message0": "Timeout %1 %2 %3 Commands %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "extensionDescription",
      "text": "User Timed Out"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "commands"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 64,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "extensioninvalid",
  "message0": "Invalid %1 %2 %3 Commands %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "extensionDescription",
      "text": "User Entered Invalid Option"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "commands"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 64,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "extension",
  "message0": "Extension %1 %2 Description %3 %4 Commands %5",
  "args0": [
    {
      "type": "field_input",
      "name": "extensionName",
      "text": "Extension name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "extensionDescription",
      "text": "Extension Description"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "commands"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 64,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "goto",
  "message0": "Go To %1 Context %2 %3 Extension %4 %5 Priority %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "context",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "extension",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "priority",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Go To",
  "helpUrl": "https://www.voip-info.org/wiki/view/Asterisk+cmd+Goto"
},
{
  "type": "gotoif",
  "message0": "Go To If %1 Condition %2 %3 Context %4 %5 Extension %6 %7 Priority %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "condition",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "context",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "extension",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "priority",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Conditional Goto",
  "helpUrl": "https://www.voip-info.org/wiki/view/Asterisk+cmd+Goto"
},
{
  "type": "answer",
  "message0": "Answer",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 159,
  "tooltip": "Answer Ringing Line",
  "helpUrl": "https://www.voip-info.org/wiki/view/Asterisk+cmd+Answer"
},
{
  "type": "hangup",
  "message0": "Hangup",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 159,
  "tooltip": "Unconditional Hangup",
  "helpUrl": "https://www.voip-info.org/wiki/view/Asterisk+cmd+Hangup"
}]);  // END JSON EXTRACT (Do not delete this comment.)
