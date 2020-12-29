form_Fields.onsubmit = async (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let dob = document.getElementById("dob").value;
    let profession = document.getElementById("profession").value;
    let mainMsg = document.getElementById("mainMsg").value;
    let sendTo;

    if (
        state.toUpperCase() == "SP" ||
        state.toUpperCase() == "MG" ||
        state.toUpperCase() == "RJ" ||
        state.toUpperCase() == "ES" ||
        state.toUpperCase() == "GO" ||
        state.toUpperCase() == "DF" ||
        state.toUpperCase() == "TO" ||
        state.toUpperCase() == "BA" ||
        state.toUpperCase() == "SE" ||
        state.toUpperCase() == "AL" ||
        state.toUpperCase() == "PE" ||
        state.toUpperCase() == "PB" ||
        state.toUpperCase() == "RN" ||
        state.toUpperCase() == "CE" ||
        state.toUpperCase() == "PI" ||
        state.toUpperCase() == "MA"
    ) {
        sendTo = "jussps@gmail.com";
    }
    else if (
        state.toUpperCase() == "RS" ||
        state.toUpperCase() == "SC" ||
        state.toUpperCase() == "PR" ||
        state.toUpperCase() == "MS" ||
        state.toUpperCase() == "MT" ||
        state.toUpperCase() == "RO" ||
        state.toUpperCase() == "AC" ||
        state.toUpperCase() == "AM" ||
        state.toUpperCase() == "PA" ||
        state.toUpperCase() == "RR" ||
        state.toUpperCase() == "AP"
    ) {
        sendTo = "adrissps@hotmail.com";
    } else {
        alert("Escolha o estado correto e reenvie.");
        return false;
    }

    let obj = {
        html: ` <b> Name : </b> <span> ${name} </span>
<br> <b> Email : </b> <span> ${email} </span>
<br> <b> Whatsapp Number : </b> <span> ${whatsapp} </span>
<br> <b> Address : </b> <span> ${address} </span>
<br> <b> City : </b> <span> ${city} </span>
<br> <b> State : </b> <span> ${state} </span>
<br> <b> Zip Code : </b> <span> ${zip} </span>
<br> <b> Date of Birth : </b> <span> ${dob} </span>
<br> <b> Profession : </b> <span> ${profession} </span>
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
        line.style.display = "none";
        let element = document.createElement("h3");
        let textNode = document.createTextNode("O correio foi enviado.");
        element.appendChild(textNode);
        element.classList.add("mail_sent");
        form_outer.append(element);
    }
};