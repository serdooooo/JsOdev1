let name = prompt("Adınızı giriniz: ","");
let myName = document.querySelector("#myName");
myName.innerHTML = name;

function showTime(){
    const nowDate=new Date();
    let h=nowDate.getHours();
    let m= nowDate.getMinutes();
    let s=nowDate.getSeconds();
    let d= nowDate.getDay();
    m=checkTime(m);
    s=checkTime(s);
    switch(d){
        case 0:
            d="Pazar";
        break;
        case 1:
            d="Pazartesi";
        break;
        case 2:
            d="Salı";
        break;
        case 3:
            d="Çarşamba";
        break;
        case 4:
            d="Perşembe";
        break;
        case 5:
            d="Cuma";
        break;
        case 6:
            d="Cumartesi";
        break;
        default:
            break;
    }

      var time = h + ":" + m + ":" + s + " " + d ;
      document.getElementById("myClock").innerHTML=time;
    
    setTimeout(showTime, 1000);
}
showTime();
 function checkTime(i){
     if(i < 10 ){
         i="0" + i
     };
     return i;
 }