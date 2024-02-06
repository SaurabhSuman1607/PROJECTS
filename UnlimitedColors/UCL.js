const colorGenerator = function(){
    let hexVal="0123456789ABCDEF";
    let col='#';
 
    for(let i=0 ; i<6 ; i++){
     col +=hexVal[Math.floor(Math.random() * 16)]
    }
    return col;
  }

  let stopChange;
  const startChangingColor= function(){
   if(!stopChange){
   stopChange=setInterval(startTheProcess,1000);
   }
   function startTheProcess(){
   document.body.style.backgroundColor=colorGenerator();
   }
  }
 
   const stopChangingColor= function(){
    clearInterval(stopChange)
    stopChange=null;
   }
 document.querySelector('#start').addEventListener('click' , startChangingColor)
 document.querySelector('#stop').addEventListener('click' , stopChangingColor);
 