const getcolor= ()=>{
//hex code color ke no hote hai hexa keform me
const randomnumber= Math.floor(Math.random()*16777215);
const randomcode="#"+ randomnumber.toString(16);
// console.log(randomnumber,randomcode);
document.body.style.background=randomcode;
document.getElementById('code').innerHTML=randomcode;

navigator.clipboard.writeText(randomcode);  /// apne ap copy ho gya hoga code bs paste kr do notepad me
}

// event call   .....click kre color show hoga
// document.getElementById("btn").addEventListener("click",getcolors) orr we can use onclick so i used


// init call
getcolor();
// on kre ge toh color show hoga 