const form = document.querySelector('form');

 form.addEventListener('submit' , function(e){
   e.preventDefault();

   const height = parseInt(document.getElementById('height').value);
   const weight = parseInt(document.getElementById('weight').value);
   const results = document.querySelector('#results');
   const overAll = document.getElementById('overall');
   if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML=`Please give valid height ${height}`;
   } 
   else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML=`Please add the valid weight ${weight}`;
   }
   else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span> Your BMI is ${bmi}</span>`;
    if(bmi >0 && bmi<18.6){
    overAll.innerHTML=`<span>You are under weight my friend</span>`;
    }else if(bmi>24.9){
    overAll.innerHTML=`<span>You are an over weight my friend</span>`;
    }else{
        overAll.innerHTML=`<span>You are an healthy person  my friend</span>`;
    }
   }
 });