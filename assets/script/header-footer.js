var header = document.getElementById("headerCode")
header.innerHTML = `<div class="main-header">
<div class="mini-header ">
    <div class="leftIcon">
        <img src="../assets/img/img6.png" class="img-fluid " alt="" />
    </div>
    <div class="centerIcon">
        <img src="../assets/img/capela.png" class="img-fluid " alt="" />
    </div>
    <div class="rightIcon">
        <img src="../assets/img/img7.png" class="img-fluid" alt="" />
    </div>
</div>
</div>


<div class="container mini-header1">
<nav class="navbar navbar-expand-lg navbar-light ">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto MPR">
            <div>
                <li class="nav-item active">
                    <a class="nav-link home-img" href="#">
                        <img src="../assets/img/home-icon.png" alt="Logo" style="width: 25px" /><span class="sr-only">(current)</span></a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="#">Quem Somos</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="#">Orações Missionárias</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="#">Dia de Santo</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="#">Vocações</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="#">Missão</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="#">Espiritualidade</a>
                </li>
            </div>

            <div>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contatos</a>
                </li>
            </div>
        </ul>
    </div>
</nav>
</div>`

var footer = document.getElementById("footerCode")
footer.innerHTML = `
<footer class="main-footer">
    <div class="container-fluid card-deck">
        <div class="col-md-6 col-sm-12 footer-div-left">
            <p class="footer-p">
                Província Stella Matutina<br /> Rua São Benedito, 2146 - Santo Amaro - São Paulo - SP | Tel. (11) 5547-7222
            </p>
            <div class="icons">
                <a href="#"><span><img src="../assets/img/Icone_Facebook.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Twitter.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Insta.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Blog.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Youtube.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Site.png" alt=""></span></a>
            </div>
        </div>
        <div class="col-md-6 col-sm-12 footer-div-right">
            <p class="footer-p">
                Província Stella Matutina<br /> Rua São Benedito, 2146 - Santo Amaro - São Paulo - SP | Tel. (11) 5547-7222
            </p>
            <div class="icons">
                <a href="#"><span><img src="../assets/img/Icone_Facebook.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Blog.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Youtube.png" alt=""></span></a>
                <a href="#"><span><img src="../assets/img/Icone_Site.png" alt=""></span></a>
            </div>
        </div>
    </div>
</footer>`