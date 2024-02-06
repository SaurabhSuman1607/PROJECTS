console.log("Saurabh");
const button= document.querySelectorAll('.button');
const bod=document.querySelector('body');

// console.log(button);
// console.log(bod);

button.forEach(function (btn){
   btn.addEventListener('click' , function(e){
      if(e.target.id === 'grey'){
        bod.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'white'){
        bod.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'blue'){
        bod.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'yellow'){
        bod.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'green'){
        bod.style.backgroundColor = e.target.id;
      }
   } 
   )
})