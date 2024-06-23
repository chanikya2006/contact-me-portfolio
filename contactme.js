// console.log(1);
//  const form=document.getElementById('form');
//  const email=document.getElementById('email');
//  console.log(1);
//  console.log(form);
//  console.log(email);

//  form.addEventListener('submit',(e)=>{
//     if(con===1){
//         alert('You can fill the form only once');
//     }
//     var con=0;
//      const text=email.value;
//      console.log(text);
//     const result= text.includes('@gmail.com');
//     const result1=text.includes('@iitg.ac.in');
//     const result2=text.includes('@yahoo.in');
//     // console.log(result);
//      if(result != true && result1 != true && result2!= true){

//         alert('Invalid email')
//      }
//      else if(!result!=true){
//          form.style.display='none';
//      }
//      console.log(con);

//  })

const name=document.getElementById('name');
const email=document.getElementById('email');
const form=document.getElementById('form');
const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
form.addEventListener('submit',(e)=>{
    if(name.value==='' || name.value== null){
        e.preventDefault();
        name_error.innerHTML='*Name is required';
    }
    email_value=email.value;
    const ret_val1=email_value.includes('@gmail.com');
    const ret_val2=email_value.includes('@iitg.ac.in');
    const ret_val3=email_value.includes('@yahoo.in');
    if(email_value==='' || email_value== null){
        e.preventDefault();
        email_error.innerHTML='*Email is required';
    }
    if(ret_val1 != true && ret_val2 != true && ret_val3!= true && email_value !=''&& email_value!=null){
        e.preventDefault();
        email_error.innerHTML='*Invalid email';
    }
    
    
})
