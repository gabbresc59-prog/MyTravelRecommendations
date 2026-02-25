const contactBtn=document.getElementById("contact_btn");

function thankYou() {

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;

    if(name.length === 0) {
        alert("Please enter your name.");
    } else if (email.length === 0) {
        alert("Please enter your email.");
    } else if(message.length === 0) {
        alert("Please enter your message.");
    } else {
        alert("Thank you for contacting us!");
        const name=document.getElementById("name").value = "";
        const email=document.getElementById("email").value = "";
        const message=document.getElementById("message").value = "";
    }

}

contactBtn.addEventListener('click', thankYou);