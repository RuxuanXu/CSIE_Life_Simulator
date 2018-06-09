//interface
class Encoder {

    constructor() {

        //Public Methods
        // 加密函数
        this.encode = function(code) {
            var str = String.fromCharCode(code.charCodeAt(0) + code.length);
            for (var i = 1; i < code.length; i++) {
                str += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
            }
            return escape(str); // js's encode 
        };

        // 解密函数
        this.decode = function(code) {
            code = unescape(code);
            var str = String.fromCharCode(code.charCodeAt(0) - code.length);
            for (var i = 1; i < code.length; i++) {
                str += String.fromCharCode(code.charCodeAt(i) - str.charCodeAt(i - 1));
            }
            return str;
        };
    }
}

const encoder = new Encoder();
Object.freeze(encoder);

export default encoder;