// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* global chrome */

console.log(chrome);
var ime_api = chrome.input.ime;
var context_id = -1;
var charmap = {
"1":"१",
"2":"२",
"3":"३",
"4":"४",
"5":"५",
"6":"६",
"7":"७",
"8":"८",
"9":"९",
"0":"०",
"-":"-",
"=":"ृ",
"q":"ौ",
"w":"ै",
"e":"ा",
"r":"ी",
"t":"ू",
"y":"ब",
"u":"ह",
"i":"ग",
"o":"द",
"p":"ज",
"[":"ड",
"]":"़",
"\\":"ॉ",
"a":"ो",
"s":"े",
"d":"्",
"f":"ि",
"g":"ु",
"h":"प",
"j":"र",
"k":"क",
"l":"त",
";":"च",
"'":"ट",
"z":"",
"x":"ं",
"c":"म",
"v":"न",
"b":"व",
"n":"ल",
"m":"स",
",":",",
".":".",
"/":"य",
"!":"ऍ",
"@":"ॅ",
"#":"्र",
"$":"र्",
"%":"ज्ञ",
"^":"त्र",
"&":"क्ष",
"*":"श्र",
"(":"(",
")":")",
"_":"ः",
"+":"ऋ",
"Q":"औ",
"W":"ऐ",
"E":"आ",
"R":"ई",
"T":"ऊ",
"Y":"भ",
"U":"ङ",
"I":"घ",
"O":"ध",
"P":"झ",
"{":"ढ",
"}":"ञ",
"A":"ओ",
"S":"ए",
"D":"अ",
"F":"इ",
"G":"उ",
"H":"फ",
"J":"ऱ",
"K":"ख",
"L":"थ",
":":"छ",
"\"":"ठ",
"Z":"",
"X":"ँ",
"C":"ण",
"V":"",
"B":"",
"N":"ळ",
"M":"श",
"<":"ष",
">":"।",
"?":"य़"
}

console.log("Initializing IME");

ime_api.onFocus.addListener(function(context) {
  console.log('onFocus:' + context.contextID);
  context_id = context.contextID;
});
ime_api.onBlur.addListener(function(contextID) {
  console.log('onBlur:' + contextID);
  context_id = -1;
});

ime_api.onActivate.addListener(function(engineID) {
  console.log('onActivate:' + engineID);
});
ime_api.onDeactivated.addListener(function(engineID) {
  console.log('onDeactivated:' + engineID);
});

ime_api.onKeyEvent.addListener(
function(engineID, keyData) {
  console.log('onKeyEvent:' + keyData.key + " context: " + context_id);
  if (keyData.type == "keydown" ) {
    if (charmap[keyData.key]){
      chrome.input.ime.commitText({"contextID": context_id,
                                 "text": charmap[keyData.key]});
    }
    return true;
  }

  return false
});