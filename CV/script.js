import './style.css';


// Use DOM to insert text in an element
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>CV Details</h1>`;
const form = document.getElementById("addForm");
// write a function to connect to the listner
function onSubmit(event) {
   event.preventDefault(); 
   const first= form.elements["f_name"].value;
   localStorage.setItem("first",f_name.value);
   const middle= form.elements["m_name"].value
   localStorage.setItem("first",m_name.value);
   const last = form.elements["l_name"].value;
   localStorage.setItem("first",l_name.value);
   const email = form.elements["email"].value;
   localStorage.setItem("first",email.value);
   const address=form.elements["address"].value;
   localStorage.setItem("first",address.value);
   const phone=form.elements["phone"].value;
   localStorage.setItem("first",phone.value);
   const gender = form.elements["gender"].value;
   const genderChoices = document.getElementsByName("gender");
   localStorage.setItem("first",gender.value);
   const toChange = document.getElementById("form-errors");
   let checkGender = false;
   const name_format = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
   const number_format = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
   const email_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //validating gender checkbox
   for(let i = 0; i < genderChoices.length; i++){
    if(genderChoices[i].checked){
       gender = genderChoices[i].value;
       checkGender = true;
       break;
     }
   }

 
  /*if(!checkGender && toChange.querySelector("#gender-para") == null){
    const para = document.createElement("p");
    para.id = "gender-para";
    const text = document.createTextNode("Check gender box");
    para.appendChild(text);
    toChange.appendChild(para);
  }
  else if (toChange.querySelector("#gender-para") != null){

    document.getElementById("gender-para").remove();
         //store
    localStorage.setItem("gender",gender.value);
     //retrieve
    //document.getElementById("").innerHTML=localStorage.getItem("gender")
  }*/
 
    
 

  if(!name_format.test(f_name.value)){
        alert("Enter first name");
    }

  if(!name_format.test(l_name.value)){
        alert("Enter last name");
    }

  if(!email_format.test(email.value)){
        alert("Enter a valid email address.");
    } 

  if(!number_format.test(phoneNumber.value)){
        alert("Enter a valid Phone Number");
    }
    
  else{
        location.href = "cv.html";
    }
}

// attach function to the form "submit" event.
form.addEventListener('submit',onSubmit)