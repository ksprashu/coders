module.exports = test = function() {
    String.prototype.DoSelectHack = function(n) {
        if (n % 2 == 0) {
            return this.toUpperCase();
        } else {
            return this.toLowerCase();
        }
    }
}

test();
console.log('DoSelect'.DoSelectHack(5));
console.log('DoSelect'.DoSelectHack(4));