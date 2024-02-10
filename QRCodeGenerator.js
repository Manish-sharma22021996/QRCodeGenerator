const inp = document.getElementById("input");
const btn =  document.getElementById("btn");
const img =  document.getElementById("img");


btn.addEventListener('click', () => {
    const inputValue = inp.value;
    if(!inputValue){
        alert("Please enter a value");
        return;
    }else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
        ${inputValue}`;
        img.alt = `QR code for ${inputValue}`;
    }
})