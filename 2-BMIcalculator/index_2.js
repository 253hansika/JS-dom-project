const form =document.querySelector("form");

form.addEventListener('submit', function(e){
   e.preventDefault();


   //its in string so to change it into interger we will be using parseint
   const height= parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);

   const result = document.querySelector('#result');

   if(height===" " || height<0 || isNaN(height)){
    result.innerHTML= `please enter valid height `;
   }
   else if(weight===" " || weight<0 || isNaN(weight)){
    result.innerHTML =`please enter valid weight`;
   }
   else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //mould the result according to you 
   
    if(bmi <= 18.6){
        result.innerHTML = `${bmi} Under weight`;
    }
    else  if(bmi > 18.6 && bmi<24.9){
        result.innerHTML = `${bmi} normal weight`;
    }
    else  if(bmi >24.9 ){
        result.innerHTML = `${bmi} Overweight weight`;
    }
  } 

     
   
})

