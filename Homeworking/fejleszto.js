'use strict';

// function isTriangle(a,b,c)
// {
//   if (a -b >= c && b-a >= c){
//    return false;
//  }
// }
// var a = 5;
//
// function isPrime(value) {
//    for(var i = 2; i < value; i++) {
//        if(value % i === 0) {
//            return false;
//        }
//    }
//    return value > 1;
// }
// console.log( isPrime(a));
// var str = 'This is a test'
//
// function toWeirdCase(string){
//   var c = '';
//   for (var i = 0; i < string.length; i++) {
//   if (str[i] === ' '){
//   }
//   else if (i% 2 === 0){
//   c+=((string[i].toUpperCase()));
//   } else{ c+=(string[i]);
//     }
//   }
//   return c
// }
// console.log(toWeirdCase(str));
// var arr = [1,2,3,4,5,6,7]
// function findEvenIndex(arr){
//   var str = '';
//   arr.forEach(e=>{str += e.toString()+','})
//   str = str.substring(0, str.length - 1);
//   var theReal = "The array was: [" + str + "] \n";
//   return theReal
// }
// console.log(findEvenIndex(arr));
var Base64 = {
    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var xchr1, xchr2, xchr3, xenc1, xenc2, xenc3, xenc4;
        var xchr4, xchr5, xchr6, xenc5, xenc6, xenc7, xenc8;
        var xchr7, xchr8, xchr8, xenc9, xenc10, xenc11, xenc12;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
    // public method for decoding
    decode : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }
}

/**
 * Megmondja, hogy az adott url-nek van-e valid protokollja
 * @param {string} url
 * @returns {Boolean}
 */
function getProtocol(url) {
    url = url.split("://");
    var pattern = new RegExp("^[a-z0-9]+$", "i");
    if (pattern.test(url[0]) && url[0].length <= 10)
        return true;
    else
        return false;
}

/**
 * ajax kérések HELPER
 */
var ajaxRequest = {
    /**
     * POST küldése
     * @param {string} funct Az elérendő funkció neve
     * @param {string} action A funkción belüli akció
     * @param {array} data A küldendő adat
     * @returns {undefined}
     */
    post: function(funct, action, data) {
        var url = config['path_ajaxRequest'] + funct + '/' + action;
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data: data
        }).done(function(msg) {
            if (msg.result === 'error') {
                ajaxRequest.error(msg);
            }
            if (msg.result === 'success') {
                ajaxRequest.success(msg);
            }
        });
    },
    success: function(msg) {
        if (msg.type === 'script') {
            if (msg.data.callback !== undefined){
                var fn = window[msg.data.callback];
                if (typeof(fn) === 'function'){
                    fn(msg.data.params);
                }
                return;
            }
            // TODO msg.data.target
        }
        if (msg.type === 'redirect') {
            if (msg.data === 'refresh')
                location.reload();
            else
                location.href = msg.data;
        }

        if (msg.type === 'sysmsg') {
            showAlertLayer({title:msg.data.title, content:msg.data.content});
        }
    },
    error: function(msg) {
        if (msg.type === 'sysmsg') {
            showAlertLayer({title:msg.data.title, content:msg.data.content});
        }
    }
};
console.log(Base64._utf8_de("lTCkyH+GMRgORuO2wUTU/G98td9/FDNZf/49JzqJU1IlJvFfGkWUcnDqDCRKWDpRrP4V6TI+0QfDgXWGUFGGkA"));
