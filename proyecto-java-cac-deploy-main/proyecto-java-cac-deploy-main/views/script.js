function enableBtn (){
 email=document.querySelector("#email").value
password=document.querySelector("#password").value
if(email.length && password.length>0) {
    document.querySelector("#btnSubmit").className="boton"
} else {
    document.querySelector("#btnSubmit").className="boton disabled"
}
    
}