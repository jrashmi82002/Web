setInterval(()=>
{
  d = new Date;
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  hrot = 30*h + m/2 + s/120;
  mrot = 6*m + s/10;
  srot = 6*s;

  hour.style.transform =`rotate(${hrot}deg)`;
  minute.style.transform =`rotate(${mrot}deg)`;
  second.style.transform =`rotate(${srot}deg)`;
}, 1000);