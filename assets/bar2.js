function bar2(mode, options) {
    switch (mode) {
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
case 345:
    try {
        var decoded = decodeURIComponent(
            atob(bar2(876, { 'token': options.token }).split('---')[0])
        );
        if (window.location.href.includes(decoded)) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
    break;
}
}

document.addEventListener('DOMContentLoaded', function () {
    if (bar2(345, {token: new URLSearchParams(location.search).get('key')})) {

    } else {
        document.body.innerHTML = 'Odmowa dostępu.'
    }
});