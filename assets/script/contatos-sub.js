//Script carousel
(function() {
    window.__insp = window.__insp || [];
    __insp.push(["wid", 1574028018]);
    var ldinsp = function() {
        if (typeof window.__inspld != "undefined") return;
        window.__inspld = 1;
        var insp = document.createElement("script");
        insp.type = "text/javascript";
        insp.async = true;
        insp.id = "inspsync";
        insp.src =
            ("https:" == document.location.protocol ? "https" : "http") +
            "://cdn.inspectlet.com/inspectlet.js?wid=1574028018&r=" +
            Math.floor(new Date().getTime() / 3600000);
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(insp, x);
    };
    setTimeout(ldinsp, 0);
})();






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






// Reverse carasouel    
arr.reverse();
for (date in arr) {
    console.log(arr[date]);
    for (cateryLayout in categoryDate_title) {
        var mypost = categoryDate_title[cateryLayout][arr[date]];
        if (mypost) {
            console.log(mypost);
            document.getElementById(
                "destaquesPortion"
            ).innerHTML += `<div class="CV-Video-Link-Post ${cateryLayout}">
                <a href="${mypost.route}">
                  <img src="${mypost.img}" alt="" class="thubmailVideo-Image" />
                  <p class="add-mt-15-CV-Video" style="font-size: 13px;">
                    ${mypost.title}
                  </p>
                  <p class="date date-text" style="font-size: 11px;font-family:Gotham-Book-italic">
                    <span class="cal-icon fa fa-calendar date-text"></span>
                    on ${mypost.date}
                  </p>
                </a>
              </div>
              <div class="hr3"></div>
              `;
        }
        $("." + cateryLayout)
            .not(":last")
            .remove();
    }
}
// Reverse carasouel End