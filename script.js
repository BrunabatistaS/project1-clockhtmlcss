function updateTime() {
   var now = new Date();
   
   var hours = String(now.getHours()).padStart(2, "0");
   var minutes = String(now.getMinutes()).padStart(2, '0');
   var seconds = String(now.getSeconds()).padStart(2, '0');

   document.getElementById('hours').textContent = hours;
   document.getElementById('minutes').textContent = minutes;
   document.getElementById('seconds').textContent = seconds
}
setInterval(updateTime, 1000);