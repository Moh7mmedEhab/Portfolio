let header = document.querySelector("header");

let links = document.querySelectorAll("nav ul li button");

let startButton = document.querySelector("#about-btn");

let aboutSection = document.querySelector("#about-me");

let mail = document.querySelector(".mail");

let whatsapp = document.querySelector(".whatsapp");

let skillsSection = document.querySelector("#skills");

let progs = document.querySelectorAll(".progress");

let listContainer = document.querySelector("#list-container");

let slideContainer = document.querySelector("#links");

let spanOne = document.querySelector(".one");

let spanTwo = document.querySelector(".two");

let spanThree = document.querySelector(".three");

let listOpen = false;

let projects = document.querySelectorAll(".project");

links.forEach(link => {

    link.onclick = () => {

        if (window.innerWidth <= 700) {

            listContainer.click();

        }

        window.scrollTo({

            top: document.querySelector(link.dataset.location).offsetTop,
    
            left: 0,
    
            behavior: 'smooth'
    
        })

    }

});

listContainer.onclick = () => {

    if (!listOpen) {

        spanOne.style.position = "absolute";

        spanOne.style.backgroundColor = "red";

        spanOne.style.transform = "rotate(45deg)";

        spanTwo.style.opacity = "0";

        spanThree.style.position = "absolute";

        spanThree.style.backgroundColor = "red";

        spanThree.style.transform = "rotate(-45deg)";

        slideContainer.style.top = "0";

        listOpen = true;

    } else {

        spanOne.style.position = "static";

        spanOne.style.backgroundColor = "white";

        spanOne.style.transform = "rotate(0deg)";

        spanTwo.style.opacity = "1";

        spanThree.style.position = "static";

        spanThree.style.backgroundColor = "white";

        spanThree.style.transform = "rotate(0deg)";

        slideContainer.style.top = "-100vh";

        listOpen = false;

    }

};

startButton.onclick = () => {

    let aboutScroll = aboutSection.offsetTop;

    window.scrollTo({

        top: aboutScroll,

        left: 0,

        behavior: 'smooth'

    });

};

whatsapp.onclick = () => {

    window.location.href = "https://wa.me/+201062089220?text=hello+developer.";

};

mail.onclick = () => {

    window.location.href = "mailto:Mohammed.Ehab.23062@gmail.com";

};

window.onscroll = () => {

    if (window.scrollY >= skillsSection.offsetTop - 200) {

        progs.forEach(prog => {

            prog.style.width = prog.dataset.progress;
        
        });

    };

};

projects.forEach(project => {

    project.onclick = () => {

        window.location.href = project.dataset.location;

    };

});