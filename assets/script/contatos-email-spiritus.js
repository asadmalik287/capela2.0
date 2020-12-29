form_Fields.onsubmit = async (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("whatsapp").value;
    let subject = document.getElementById("subject").value;
    let mainMsg = document.getElementById("mainMsg").value;
    let formHeading = document.getElementById("formHeading");
    // let sendTo = "galante@thunderbees.com";
    // let sendTo = "sebprovusul@gmail.com";
    let sendTo = "saadee7223@gmail.com";



    let obj = {
        html: ` <b> Name : </b> <span> ${name} </span> 
        <br> <b> Email : </b> <span> ${email} </span> 
        <br> <b> Telephone Number : </b> <span> ${telefone} </span> 
        <br> <b> Subject : </b> <span> ${subject} </span> 
        <br> <b> Message : </b> <p>${mainMsg}</p>`,
        sendTo: sendTo,
    };

    let data = JSON.stringify(obj);

    let response = await fetch(
        "https://capela-mail.herokuapp.com/send_mail",
        {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: data,
        }
    );

    let result = await response.json();

    if (result == "Mail Sent.") {
        form_Fields.style.display = "none";
        formHeading.style.display = "none";
        let element = document.createElement("h3");
        let textNode = document.createTextNode("O correio foi enviado.");
        element.appendChild(textNode);
        element.classList.add("mail_sent");
        form_outer.append(element);
    }
};