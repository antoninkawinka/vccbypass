function bar2(mode, options) {
    switch (mode) {
        case 447:
            return btoa(encodeURIComponent(options.params))
            break;
        case 547:

var ALPH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_=";
var ALPH_LEN = ALPH.length;

// 1. Base64 encode the identifier directly
var base64 = btoa(options.identifier);

// 2. Shift characters by 4 within ALPH
var shift = 4;
var shifted = '';
for (var i = 0; i < base64.length; i++) {
    var ch = base64[i];
    var idx = ALPH.indexOf(ch);
    if (idx === -1) {
        shifted += ch;
    } else {
        shifted += ALPH[(idx + shift) % ALPH_LEN];
    }
}

// 3. Attach "Mn" prefix
var result = "Mn" + shifted;

return result;
            break;
        case 876:

var ALPH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_=";
var ALPH_LEN = ALPH.length;

// 1. Remove "Mn" prefix
var token = options.token;
if (token.startsWith("Mn")) {
    token = token.slice(2);
}

// 2. Unshift characters by 4 within ALPH
var shift = 4;
var unshifted = '';
for (var i = 0; i < token.length; i++) {
    var ch = token[i];
    var idx = ALPH.indexOf(ch);
    if (idx === -1) {
        unshifted += ch;
    } else {
        unshifted += ALPH[(idx - shift + ALPH_LEN) % ALPH_LEN];
    }
}

// 3. Base64 decode to get identifier
var identifier = atob(unshifted);

return identifier;
            break;
        case 987:
            return bar2(547, { "identifier": `${bar2(447, {'params': options.params})}---szmata` })
            break;
        case 345:
            if (window.location.href.includes(decodeURIComponent(atob(bar2(876, { 'token': options.token }).split('---')[0])))) {
                return true;
            } else {
                return false;
            }
            break;
    }
}