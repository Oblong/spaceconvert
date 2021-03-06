#!/bin/sh

':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"


// (c) oblong industries

const protein = require('proteinslurp');
const space = require('spacedef');
const yamljs = require('yamljs');

// -----------------------------
// Parse command line args
// -----------------------------
const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');
var cmd_line_options;
const optionDefinitions = [{
    name: 'screen',
    type: String,
    multiple: false,
    description: 'A screen.protein file, normal or multi-machine style.\nExample: https://gist.github.com/sandover/247d9acb9e33769813b2ba55d592a53e'
}, {
    name: 'feld',
    type: String,
    multiple: false,
    description: 'A feld.protein file, normal or kombi-feld style.\nExample: https://gist.github.com/sandover/1f306bba2e70d1fbe6040f22920a7d39'
}, {
    name: 'room',
    type: String,
    multiple: false,
    description: 'A room.protein file (optional).\nExample: https://gist.github.com/sandover/b8a1ca0b039c8d882a9e3e98a2e6ea42'
}];


const usage_doc_sections = [{
    header: 'spaceconvert',
    content: 'Convert from room + feld + (optionally) room proteins ==> space definition'
}, {
    header: 'Options',
    optionList: optionDefinitions
}]
const usage_doc = getUsage(usage_doc_sections)


try {
    cmd_line_options = commandLineArgs(optionDefinitions)
} catch (err) {
    console.error("Invalid input");
    console.log(usage_doc);
    process.exit(1);
}

if (!cmd_line_options.feld || !cmd_line_options.screen) {
    console.log(usage_doc);
    process.exit(1);
}

let room_protein = space.default_room();
if (cmd_line_options.room) {
    room_protein = protein.slurp_protein(cmd_line_options.room);
}

let screen_protein = protein.slurp_protein(cmd_line_options.screen);
let feld_protein = protein.slurp_protein(cmd_line_options.feld);

let s = space.convert_roomfeldscreen_to_space(room_protein, feld_protein,
    screen_protein);

//  output goes to stdout
console.log(yamljs.stringify(s, 3, 2));