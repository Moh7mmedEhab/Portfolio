let links = document.querySelectorAll("nav ul li button");

let startButton = document.querySelector("#about-btn");

let aboutSection = document.querySelector("#about-me");

let mail = document.querySelector(".mail");

let skillsSection = document.querySelector("#skills");

let progs = document.querySelectorAll(".progress");

links.forEach(link => {

    link.onclick = () => {

        window.scrollTo({

            top: document.querySelector(link.dataset.location).offsetTop,
    
            left: 0,
    
            behavior: 'smooth'
    
        })

    }

})

startButton.onclick = () => {

    let aboutScroll = aboutSection.offsetTop;

    window.scrollTo({

        top: aboutScroll,

        left: 0,

        behavior: 'smooth'

    });

}

mail.onclick = () => {

    window.location.href = "mailto:Mohammed.Ehab.23062@gmail.com";

}

window.onscroll = () => {

    if (window.scrollY >= skillsSection.offsetTop - 200) {

        progs.forEach(prog => {

            prog.style.width = prog.dataset.progress;
        
        })

    }

}