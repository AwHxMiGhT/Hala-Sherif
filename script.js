
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

}






// SCROLL REVEAL ANIMATION


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }


    });


});







// INITIAL SECTION STYLE


sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition="1s ease";


});






// MUSIC PLAY BUTTON EFFECT


const playButtons = document.querySelectorAll(".album-info button");


playButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        button.innerHTML="⏸ PLAYING";

        button.style.boxShadow="0 0 25px #00ff88";



        setTimeout(()=>{

            button.innerHTML="▶ PLAY";

            button.style.boxShadow="none";


        },3000);



    });


});







// IMAGE GLOW EFFECT


const images = document.querySelectorAll("img");


images.forEach(img=>{


    img.addEventListener("mouseenter",()=>{

        img.style.boxShadow="0 0 35px #00ff88";

    });



    img.addEventListener("mouseleave",()=>{

        img.style.boxShadow="none";

    });



});







// DYNAMIC YEAR FOOTER


const year = new Date().getFullYear();


console.log("RAP QUEEN WEBSITE © " + year);





// SMOOTH BUTTON EFFECT


document.querySelectorAll(".btn").forEach(btn=>{


    btn.addEventListener("mouseenter",()=>{

        btn.style.letterSpacing="2px";

    });



    btn.addEventListener("mouseleave",()=>{

        btn.style.letterSpacing="0";

    });



});

// ALBUM MUSIC PLAYER


let currentAudio = null;
let currentSong = null;


document.querySelectorAll(".song").forEach(song=>{


    song.addEventListener("click",()=>{


        let audioPath = song.dataset.audio;



        if(currentSong === song){


            if(currentAudio.paused){

                currentAudio.play();

                song.querySelector("i").innerHTML="⏸";


            }else{

                currentAudio.pause();

                song.querySelector("i").innerHTML="▶";

            }


            return;

        }





        if(currentAudio){

            currentAudio.pause();

            currentSong.classList.remove("active");

        }





        currentAudio = new Audio(audioPath);

        currentAudio.play();



        currentSong = song;


        song.classList.add("active");


        document.querySelectorAll(".song i").forEach(icon=>{

            icon.innerHTML="▶";

        });


        song.querySelector("i").innerHTML="⏸";



    });


});

// BAT3L2 PLAYER


const bat3l2Btn = document.getElementById("playBat3l2");
const bat3l2Audio = document.getElementById("bat3l2Audio");


bat3l2Btn.addEventListener("click",()=>{


    if(bat3l2Audio.paused){


        bat3l2Audio.play();

        bat3l2Btn.innerHTML="⏸ PAUSE SONG";


    }else{


        bat3l2Audio.pause();

        bat3l2Btn.innerHTML="▶ PLAY SONG";


    }


});
