 var time = 0;
 var running = 0;

 function startPause() {

     if (running == 0){
       running = 1;
       increment();
       document.getElementById("startPause").innerHTML = "Pause";
    } else {
      running = 0;
       document.getElementById("startPause").innerHTML = "Resume";
    }
 }

 function reset() {
  running = 0;
  time = 0;
  document.getElementById("startPause").innerHTML = "Start";
  document.getElementById("output").innerHTML = "00:00:00";
 }

 function increment() {
    if ( running == 1) {
      setTimeout(function() {
        time++;
       
        var mins = Math.floor(time/10/60);
        var secs = Math.floor(time/10 % 60);
        var hours = Math.floor(time/10/60/60);
        var tenths = time % 10;

        if ( mins < 10){
          mins = "0" + mins;
        }
        if (secs < 10) {
          secs = "0" + secs;
        }
        document.getElementById('output').innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
        increment();
      },100)
    }
 }
// ------------------------------------------------------


//Объявим переменную
var stopTimer;

// При нажатии "onclick" кнопки "Start" начинает работать  функция  testTimer
// время начинает обратный отсчет.
function testTimer(startTime) {

//для повторного запуска очистим rezult
document.getElementById("rezult").innerHTML = '';
// при включении кнопки запуска "Start" цвет кнопки меняет свой цвет.
var bot = document.getElementById("bots");
bot.setAttribute("disabled","");
//сколько будет длится обратный отчет
var time = startTime;
//определим сколько минут
var min = Math.floor(time / 60);
if ( min < 1 ) min = 0;
  time = Math.floor(time - min * 60);
if ( min < 10 ) min = '0'+min;
//определим сколько секунд
var seconds = time;
if ( seconds < 10 ) seconds = '0'+seconds;
//отрисовываем время
document.getElementById("time").innerHTML='<span>00:'+min+':'+seconds+'</span>';
//уменьшаем общее время на одну секунду
startTime--;
//смотрим время не закончилось
if ( startTime  >= 0 ) {
    //если нет то повторяем процедуру заново
       stopTimer  =  setTimeout(function(){testTimer(startTime); }, 1000);
     //если закончилось, то выводим сообщение на экран, и делаем кнопку запуска активной
  } else {
     document.getElementById("time").innerHTML='<span>Время вышло</span>';
     var rezult = document.getElementById("rezult");
     rezult.innerHTML ="";
     clearTimeout(stopTimer);
     var bot = document.getElementById("bots");
     bot.removeAttribute("disabled","disabled");
     bot.removeChild(bot.childNodes[0]);
     var text = document.createTextNode("Start");
     bot.appendChild(text);
   }
}
//Функция для остановки обратного отчета
function stop(){
  //очистим переменную с таймером
  clearTimeout(stopTimer);
  //и включим кнопку запуска
  var bot = document.getElementById("bots");
  bot.removeAttribute("disabled","disabled");
}


