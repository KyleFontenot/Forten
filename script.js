var button = document.getElementById('button');
var background = document.getElementById('body');
var displayer = document.getElementById('displayer');
var possibleHexDigits = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
function changeBackground() {
  var hex = '#' + possibleHexDigits[Math.floor(Math.random() * 15)] + possibleHexDigits[Math.floor(Math.random() * 15)] + possibleHexDigits[Math.floor(Math.random() * 15)] + possibleHexDigits[Math.floor(Math.random() * 15)] + possibleHexDigits[Math.floor(Math.random() * 15)] + possibleHexDigits[Math.floor(Math.random() * 15)];
  background.style.backgroundColor = hex;
  displayer.innerHTML = hex;
}
