

window.onload = () => {
   h = 0;   //
   m = 0;   // hora en que iniciara el cronometro
   s = 0;   //
   mls = 0; //
   timeStarted = 0;
   d = getDays("02/22/2022 16:25:20");
   days = document.getElementById("days");
   time1 = document.getElementById("time1");
   time2 = document.getElementById("time2");

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

function getDays(date){
   var firstDate = new Date(date);
   var dateNow = new Date();

   // To calculate the time difference of two dates
   var Difference_In_Time = dateNow.getTime() - firstDate.getTime();

   // To calculate the no. of days between two dates
   var Difference_In_Days = Math.floor( Difference_In_Time / (1000 * 3600 * 24) );
   Difference_In_Time -= Difference_In_Days*1000*3600*24;

   var Difference_In_Hours = Math.floor( Difference_In_Time / (1000 * 3600) );
   Difference_In_Time -= Difference_In_Hours*1000*3600;

   var Difference_In_Minutes = Math.floor( Difference_In_Time / (1000 * 60) );
   Difference_In_Time -= Difference_In_Minutes*1000*60;

   var Difference_In_Seconds = Math.floor( Difference_In_Time / 1000);

   console.log("Days  : "+Difference_In_Days);
   console.log("Hours : "+Difference_In_Hours);
   console.log("Mins  : "+Difference_In_Minutes);
   console.log("Secs  : "+Difference_In_Seconds);
   h = Difference_In_Hours;
   m = Difference_In_Minutes;
   s = Difference_In_Seconds;

   return Difference_In_Days;
}



function start() {
   write();
   timeStarted = setInterval(write, 10);
}