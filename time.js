window.onload = () => {
   h = 22;   //
   m = 22;   // hora en que iniciara el cronometro
   s = 22;   //
   mls = 22; //
   timeStarted = 0;
   time1 = document.getElementById("time1");
   time2 = document.getElementById("time2");
   btnStart = document.getElementById("btn-start");
   btnStart.addEventListener("click", start);
   btnStop = document.getElementById("btn-stop");
   btnStop.addEventListener("click", stop);
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
   if (h > 24) h = 0;

   mlst = ('0' + mls).slice(-2);
   st = ('0' + s).slice(-2);
   mt = ('0' + m).slice(-2);
   ht = ('0' + h).slice(-2);

   time1.innerHTML = `${ht}:${mt}:`;
   time2.innerHTML = `${st}.${mlst}`;
}

function start() {
   write();
   timeStarted = setInterval(write, 10);
   btnStart.removeEventListener("click", start);
}

function stop() {
   clearInterval(timeStarted);
   btnStart.addEventListener("click", start);
}

/*
function reset() {
   clearInterval(timeStarted);
   time1.innerHTML = "22:22:"    // En caso de activar el reset, modificar esta hora
   time2.innerHTML = "22.22"
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   btnStart.addEventListener("click", start);
}
*/