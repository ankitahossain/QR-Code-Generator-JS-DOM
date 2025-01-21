
 
 document.addEventListener("DOMContentLoaded",()=>{
    let inputfield = document.querySelector(".inputfield");
    let img_qrcode = document.querySelector(".img_qrcode");
    let qrcode_btn = document.querySelector(".qrcode_btn");
    let qrcode_heading = document.querySelector(".qrcode_heading");

    qrcode_btn.addEventListener("click",()=>{
        if(inputfield.value === ""){
         qrcode_heading.innerHTML="please enter a name!"
         qrcode_heading.style.color = "red"

        }
        else{
        img_qrcode.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputfield.value}`
        img_qrcode.style.transform = "scale(1)";
        }
        
        
       })
 })

 