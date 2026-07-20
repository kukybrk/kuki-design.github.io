/* =====================================================
   KUKUYET - SCRIPT.JS
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("open");

    });

}



/* Close menu when clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuToggle.classList.remove("open");

    });

});



/* ================= NAVBAR SCROLL EFFECT ================= */


const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background="rgba(255,255,255,0.98)";

        header.style.boxShadow=
        "0 10px 30px rgba(0,0,0,.12)";

    }

    else{

        header.style.background=
        "rgba(255,255,255,.95)";

        header.style.boxShadow=
        "0 8px 30px rgba(0,0,0,.08)";

    }


});



/* ================= BACK TO TOP ================= */


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }


});


if(topBtn){


    topBtn.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}



/* ================= SMOOTH SCROLL ================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target=document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});



/* ================= IMAGE LOADING EFFECT ================= */


const images=document.querySelectorAll("img");


images.forEach(img=>{


    img.addEventListener("load",()=>{

        img.style.opacity="1";

    });


});



/* ================= CURRENT YEAR ================= */


const year=document.querySelector(".copyright");


if(year){

    year.innerHTML =
    `© ${new Date().getFullYear()} KUKUYET — All Rights Reserved.`;

}
