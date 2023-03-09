// alert('How are you?')
const showAlert =()=>{
    alert('Are you student?')
}

const giveAlert=()=>{
   const result = confirm('Are you happy?');
   console.log(result);
   if(result===true){
    alert('you are good')
   }
   else{
    console.log('you are bad')
   }
}


const getInfo=()=>{
    //alert
    //confirm
    const name= prompt('What?');
    console.log(name);
    if(name===null){
        alert('what is your name')
    }
    else{
        console.log('welcome to this world')
    }
}