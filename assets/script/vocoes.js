
let name = document.getElementById("name");
let email = document.getElementById("email");
let whatsapp = document.getElementById("whatsapp");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let dob = document.getElementById("dob");
let profession = document.getElementById("profession");
let mainMsg = document.getElementById("mainMsg");
console.log(state);
console.log('*****************');

if (window.innerWidth <= 768) {
    name.placeholder = 'Name'
    email.placeholder = 'Email'
    whatsapp.placeholder = 'Whatsapp'
    address.placeholder = 'Endereço'
    city.placeholder = 'Cidade'
    state.placeholder = 'Estado'
    zip.placeholder = 'CEP'
    profession.placeholder = 'Profissão'
}
function changePlaceholder() {

    if (window.innerWidth <= 768) {
        name.placeholder = 'Name'
        email.placeholder = 'Email'
        whatsapp.placeholder = 'Whatsapp'
        address.placeholder = 'Endereço'
        city.placeholder = 'Cidade'
        state.placeholder = 'Estado'
        zip.placeholder = 'CEP'
        profession.placeholder = 'Profissão'
        console.log(state);
console.log('*****************');
    }
    if (window.innerWidth > 768) {
        name.placeholder = ''
        email.placeholder = ''
        whatsapp.placeholder = ''
        address.placeholder = ''
        city.placeholder = ''
        state.placeholder = ''
        zip.placeholder = ''
        profession.placeholder = ''
    }
}

form_Fields.onsubmit = async (e) => {
    e.preventDefault();

   
    let sendTo;

    if (
        state.value.toUpperCase() == "SP" ||
        state.value.toUpperCase() == "MG" ||
        state.value.toUpperCase() == "RJ" ||
        state.value.toUpperCase() == "ES" ||
        state.value.toUpperCase() == "GO" ||
        state.value.toUpperCase() == "DF" ||
        state.value.toUpperCase() == "TO" ||
        state.value.toUpperCase() == "BA" ||
        state.value.toUpperCase() == "SE" ||
        state.value.toUpperCase() == "AL" ||
        state.value.toUpperCase() == "PE" ||
        state.value.toUpperCase() == "PB" ||
        state.value.toUpperCase() == "RN" ||
        state.value.toUpperCase() == "CE" ||
        state.value.toUpperCase() == "PI" ||
        state.value.toUpperCase() == "MA"
    ) {
        sendTo = "jussps@gmail.com";
    }
    else if (
        state.value.toUpperCase() == "RS" ||
        state.value.toUpperCase() == "SC" ||
        state.value.toUpperCase() == "PR" ||
        state.value.toUpperCase() == "MS" ||
        state.value.toUpperCase() == "MT" ||
        state.value.toUpperCase() == "RO" ||
        state.value.toUpperCase() == "AC" ||
        state.value.toUpperCase() == "AM" ||
        state.value.toUpperCase() == "PA" ||
        state.value.toUpperCase() == "RR" ||
        state.value.toUpperCase() == "AP"
    ) {
        // sendTo = "tauqeermalik855@gmail.com";
        sendTo = "adrissps@hotmail.com";
    } else {
        $(document).ready(function(){
            $("#form_Fields").on("submit", function(){
                // $("#pageloader").css('display', 'none');
                  $("#pageloader").fadeOut();
            });//submit
        });//document ready
        alert("Escolha o estado correto e reenvie.");
        return false;
    }

    let obj = {
        html: ` <b> Name : </b> <span> ${name.value} </span>
<br> <b> Email : </b> <span> ${email.value} </span>
<br> <b> Whatsapp Number : </b> <span> ${whatsapp.value} </span>
<br> <b> Address : </b> <span> ${address.value} </span>
<br> <b> City : </b> <span> ${city.value} </span>
<br> <b> State : </b> <span> ${state.value} </span>
<br> <b> Zip Code : </b> <span> ${zip.value} </span>
<br> <b> Date of Birth : </b> <span> ${dob.value} </span>
<br> <b> Profession : </b> <span> ${profession.value} </span>
<br> <b> Message : </b> <p>${mainMsg.value}</p>`,
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
        alert('mensagem enviada com sucesso')
        form_Fields.style.display = "none";
        formHeading.style.display = "none";
        line.style.display = "none";
        let element = document.createElement("h3");
        let textNode = document.createTextNode("mensagem enviada com sucesso");
        element.appendChild(textNode);
        element.classList.add("mail_sent");
        form_outer.append(element);
    }

};


