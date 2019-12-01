module.exports = {
  randomNumber: function(num1, num2) {
    var n1 = num1;
    var n2 = num2;
    if(num1 > num2) {
      n1 = num2;
      n2 = num1;
    }
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
  },
  randomizeArray: function(arr) {
    var i = arr.length;
    var current;
    var random;
    while(i !== 0) {
      random = Math.floor(Math.random() * i);
      i--;
      current = arr[i];
      arr[i] = arr[random];
      arr[random] = current;
    }
    return arr;
  },
  rollDice: function() {
    return Math.floor(Math.random() * 6 + 1) + (Math.floor(Math.random() * 6 + 1));
  }
}