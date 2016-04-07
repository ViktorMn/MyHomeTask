
 function pow(x, y) {
  var result = x;

  for (var i = 1; i < y; i++) {
    result *= x;
  }

   return result;
}

var x = prompt("Введите число", '');
var y = prompt("Введите степень", '');

if (y <= 1) {
  alert('Степень ' + y + 'не поддерживается, введите целую степень, больше чем 1'
  );
} 
  else {
  alert( pow(x, y) );
}
  

