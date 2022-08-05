const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links-container');
    const navLinks = document.querySelectorAll('.links-container .principal-link');

    //Burger Animation
    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        for(var j = 0; j < ul.length; j++){
            ul[j].classList.remove('dropdown-active');
        }
    });

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
    });

    //Close the burger menu
    $(window).resize(function() {
        if($(window).width() > 768){
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach((link) => {
                link.style.animation = '';
            });
        }
    });

    //Menu bar link animation
    var link = document.getElementsByClassName("link");
    var bar = document.getElementsByClassName("line");
    var display = document.getElementsByClassName("dropdown-area");
    var ul = document.getElementsByClassName("dropdown");

    //Dropdown link animation
    var linkDropdown = document.getElementsByClassName("dropdown-link");
    
    //Link selected
    for(var i = 0; i < linkDropdown.length; i++){
        linkDropdown[i].addEventListener('click', function() {
            for(var j = 0; j < linkDropdown.length; j++){
                if(this == linkDropdown[j]){
                    ul[j].classList.toggle('dropdown-active');
                    display[j].classList.add('dropdown-display');
                }
            }
        });
    }

    for(var i = 0; i < link.length; i++){
        link[i].addEventListener('mouseover', function() {
            if($(window).width() > 768){
                for(var j = 0; j < link.length; j++){
                    if(this == link[j]){
                        bar[j].classList.add('toggleBar');

                        for(var k = 0; k < ul.length; k++){
                            ul[k].classList.remove('dropdown-active');
                        }
                    }
                }
            }
        });
        
        link[i].addEventListener('mouseleave', function() {
            for(var j = 0; j < link.length; j++){
                if(this == link[j]){
                    bar[j].classList.remove('toggleBar');
                }
            }
        });
    }

    for(var i = 0; i < linkDropdown.length; i++){
        linkDropdown[i].addEventListener('mouseover', function() {
            if($(window).width() > 768){
                for(var j = 0; j < linkDropdown.length; j++){
                    if(this == linkDropdown[j]){
                        ul[j].classList.add('dropdown-active');
                        display[j].classList.add('dropdown-display');
                    }
                }
            }
        });
        
        //ul selected
        for(var i = 0; i < ul.length; i++){
            ul[i].addEventListener('mouseover', function() {
                if($(window).width() > 768){
                    for(var j = 0; j < ul.length; j++){
                        if(this == ul[j]){
                            ul[j].classList.add('dropdown-active-ul');
                        }
                    }
                }
            });

            ul[i].addEventListener('mouseleave', function() {
                if($(window).width() > 768){
                    for(var j = 0; j < ul.length; j++){
                            ul[j].classList.remove('dropdown-active-ul');
                            ul[j].classList.remove('dropdown-active');
                            display[j].classList.remove('dropdown-display');
                    }
                }
            });
        }
    }

    //Evita bug do menu minimizado ao mudar do tamanho de tela maior para o menor
    $(window).resize(function() {
        if($(window).width() > 768){
            for(var j = 0; j < ul.length; j++){
                    ul[j].classList.remove('dropdown-active-ul');
                    ul[j].classList.remove('dropdown-active');
                    display[j].classList.remove('dropdown-display');
            }
        }
    });
}

navSlide();