window.onload = () => {
   d = getDays("02/22/2022");
   h = 0;   //
   m = 0;   // hora en que iniciara el cronometro
   s = 0;   //
   mls = 0; //
   timeStarted = 0;
   days = document.getElementById("days");
   time1 = document.getElementById("time1");
   time2 = document.getElementById("time2");
   //btnStart = document.getElementById("btn-start");
   //btnStart.addEventListener("click", start);
   //btnStop = document.getElementById("btn-stop");
   //btnStop.addEventListener("click", stop);
   //btnReset = document.getElementById("btn-reset"); // descomentar si se desea activar el reset
   //btnReset.addEventListener("click", reset);

   start();
};

function write() {
   let ht, mt, st, mlst;
   mls++;

   if (mls > 99) {
      s++;
      mls = 0;
   }
   if (s > 59) {
      m++;
      s = 0;
   }
   if (m > 59) {
      h++;
      m = 0;
   }
   if (h > 24){
      d++;
      h = 0;
   }

   mlst = ('0' + mls).slice(-2);
   st = ('0' + s).slice(-2);
   mt = ('0' + m).slice(-2);
   ht = ('0' + h).slice(-2);

   days.innerHTML = `${d} days`;
   time1.innerHTML = `${ht}:${mt}:`;
   time2.innerHTML = `${st}.${mlst}`;
}

function start() {
   write();
   timeStarted = setInterval(write, 10);
   btnStart.removeEventListener("click", start);
}


function getDays(date){
   var firstDate = new Date(date);
   var dateNow = new Date();
   
   // To calculate the time difference of two dates
   var Difference_In_Time = dateNow.getTime() - firstDate.getTime();
   
   console.log(Difference_In_Time);
   // To calculate the no. of days between two dates
   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
   
   return Math.floor(Difference_In_Days);
}

/*
function stop() {
   clearInterval(timeStarted);
   btnStart.addEventListener("click", start);
}

/*
function reset() {
   clearInterval(timeStarted);
   time1.innerHTML = "00:00:"
   time2.innerHTML = "00.00"
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   btnStart.addEventListener("click", start);
}
*/