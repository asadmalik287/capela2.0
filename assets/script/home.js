var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}




// Audio Script start

function audioControl() {
    let mUte = document.getElementById('mute');
    let unmUte = document.getElementById('unmute');
    let ab = document.getElementById('audioForVideo');
    if (ab.muted == false) {
        mUte.style.display = 'none';
        unmUte.style.display = 'block';
        ab.muted = true;
    } else {
        mUte.style.display = 'block';
        unmUte.style.display = 'none';
        ab.muted = false;

    }
}

// Audio Script end



var http = new XMLHttpRequest();
var http2 = new XMLHttpRequest();

var leitura1 = document.getElementById("leitura1");
var leitura = document.getElementById("leitura");
// console.log(leitura);
let url2 = "./leitura-orante/december/-orante-" + currentDate + ".html";
http2.open("HEAD", url2, false);
http2.send();
// console.log(http2.status);

if (http2.status === 200) {
//   console.log("Lutera file exists");
  leitura.setAttribute(
    "href",
    "./leitura-orante/december/-orante" + currentDate + ".html"
  );
  leitura1.setAttribute(
    "href",
    "./leitura-orante/december/-orante" + currentDate + ".html"
  );
}
if (http2.status === 404) {
//   console.log("Lutera file does not exists");
  leitura.setAttribute("href", `${host}/leitura-orante/multiple.html`);
  leitura1.setAttribute("href", `${host}/leitura-orante/multiple.html`);
}

