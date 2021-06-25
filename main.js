let x; 
let date; 
let time ;
let options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } ;

setInterval (()=> {
  x = new Date() ;
  date = x.toLocaleDateString(undefined, options) ;
  time = x.getHours() + ':' + x.getMinutes() + ':' + x.getSeconds() ;

  document.getElementById('date').innerHTML = date ;
  document.getElementById('time').innerHTML = time ;
} , 1000) ;