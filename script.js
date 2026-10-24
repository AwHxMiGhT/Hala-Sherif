// ================= MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}


// ================= SCROLL REVEAL =================

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s ease";

});


function revealSections() {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealSections);

// Reveal visible sections immediately
revealSections();


// ================= MUSIC PLAY BUTTON EFFECT =================

const playButtons = document.querySelectorAll(".album-info button");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "⏸ PLAYING";
        button.style.boxShadow = "0 0 25px #00ff88";

        setTimeout(() => {

            button.innerHTML = "▶ PLAY";
            button.style.boxShadow = "none";

        }, 3000);

    });

});


// ================= IMAGE GLOW EFFECT =================

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.boxShadow = "0 0 35px #00ff88";

    });

    img.addEventListener("mouseleave", () => {

        img.style.boxShadow = "none";

    });

});


// ================= DYNAMIC YEAR =================

const year = new Date().getFullYear();

console.log("RAP QUEEN WEBSITE © " + year);


// ================= SMOOTH BUTTON EFFECT =================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.letterSpacing = "2px";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.letterSpacing = "0";

    });

});


// ================= ALBUM MUSIC PLAYER =================

let currentAudio = null;
let currentSong = null;

document.querySelectorAll(".song").forEach(song => {

    song.addEventListener("click", () => {

        const audioPath = song.dataset.audio;

        // Same song
        if (currentSong === song) {

            if (currentAudio.paused) {

                currentAudio.play();

                song.querySelector("i").innerHTML = "⏸";

            } else {

                currentAudio.pause();

                song.querySelector("i").innerHTML = "▶";

            }

            return;
        }


        // Stop previous song
        if (currentAudio) {

            currentAudio.pause();

            if (currentSong) {
                currentSong.classList.remove("active");
            }

        }


        // Create new audio
        currentAudio = new Audio(audioPath);

        currentAudio.play().catch(error => {

            console.error("ALBUM AUDIO ERROR:", error);

        });


        currentSong = song;

        song.classList.add("active");


        // Reset all icons
        document.querySelectorAll(".song i").forEach(icon => {

            icon.innerHTML = "▶";

        });


        song.querySelector("i").innerHTML = "⏸";


        // When song ends
        currentAudio.addEventListener("ended", () => {

            song.querySelector("i").innerHTML = "▶";
            song.classList.remove("active");

            currentAudio = null;
            currentSong = null;

        });

    });

});


// ================= BAT3L2 PLAYER =================
// THIS EXISTS ONLY ONCE

const bat3l2Btn = document.getElementById("playBat3l2");
const bat3l2Audio = document.getElementById("bat3l2Audio");

if (bat3l2Btn && bat3l2Audio) {

    bat3l2Btn.addEventListener("click", () => {

        if (bat3l2Audio.paused) {

            bat3l2Audio.play()
                .then(() => {

                    bat3l2Btn.innerHTML = "⏸ PAUSE SONG";

                })
                .catch(error => {

                    console.error("BAT3L2 AUDIO ERROR:", error);

                });

        } else {

            bat3l2Audio.pause();

            bat3l2Btn.innerHTML = "▶ PLAY SONG";

        }

    });


    bat3l2Audio.addEventListener("ended", () => {

        bat3l2Btn.innerHTML = "▶ PLAY SONG";

    });

}


// ================= FLOOS PLAYER =================
// THIS EXISTS ONLY ONCE

const flossPlay = document.getElementById("flossPlay");
const flossAudio = document.getElementById("flossAudio");

if (flossPlay && flossAudio) {

    flossPlay.addEventListener("click", () => {

        if (flossAudio.paused) {

            flossAudio.play()
                .then(() => {

                    flossPlay.innerHTML = "⏸ PAUSE SONG";

                })
                .catch(error => {

                    console.error("FLOOS AUDIO ERROR:", error);

                });

        } else {

            flossAudio.pause();

            flossPlay.innerHTML = "▶ PLAY SONG";

        }

    });


    flossAudio.addEventListener("ended", () => {

        flossPlay.innerHTML = "▶ PLAY SONG";

    });

}

// ================= CALLEN PLAYER =================

const callenPlay = document.getElementById("callenPlay");
const callenAudio = document.getElementById("callenAudio");

if (callenPlay && callenAudio) {

    callenPlay.addEventListener("click", () => {

        if (callenAudio.paused) {

            callenAudio.play()
                .then(() => {
                    callenPlay.innerHTML = "⏸ PAUSE SONG";
                })
                .catch(error => {
                    console.error("CALLEN AUDIO ERROR:", error);
                });

        } else {

            callenAudio.pause();
            callenPlay.innerHTML = "▶ PLAY SONG";

        }

    });


    callenAudio.addEventListener("ended", () => {

        callenPlay.innerHTML = "▶ PLAY SONG";

    });

}


// ================= MSH BARTA7 MUSIC PLAYER =================

const mshButtons = document.querySelectorAll(".msh-play");
const mshAudios = document.querySelectorAll(".msh-audio");

mshButtons.forEach((button, index) => {

    const audio = mshAudios[index];

    if (!audio) return;

    button.addEventListener("click", () => {

        // لو الأغنية متوقفة
        if (audio.paused) {

            // وقف أي أغنية MSH تانية
            mshAudios.forEach((otherAudio, otherIndex) => {

                if (otherAudio !== audio) {

                    otherAudio.pause();
                    otherAudio.currentTime = 0;

                    mshButtons[otherIndex].innerHTML = "▶ PLAY NOW";

                }

            });

            audio.play();

            button.innerHTML = "⏸ PAUSE";

        } else {

            audio.pause();

            button.innerHTML = "▶ PLAY NOW";

        }

    });


    // لما الأغنية تخلص
    audio.addEventListener("ended", () => {

        button.innerHTML = "▶ PLAY NOW";

    });

});


const memoriesSection = document.getElementById("memories");
const memoriesSong = document.getElementById("memoriesSong");

memoriesSection.addEventListener("mouseenter", () => {
    memoriesSong.currentTime = 0;
    memoriesSong.play();
});

memoriesSection.addEventListener("mouseleave", () => {
    memoriesSong.pause();
    memoriesSong.currentTime = 0;
});


const globalSection = document.getElementById("global");
const globalVideo = document.getElementById("globalVideo");

globalSection.addEventListener("mouseenter", () => {

    globalVideo.currentTime = 0;

    globalVideo.muted = false;

    globalVideo.play().catch(error => {
        console.log("Video autoplay was blocked:", error);
    });

});

globalSection.addEventListener("mouseleave", () => {

    globalVideo.pause();
    globalVideo.currentTime = 0;

});




/* ================= ENTA AUTO PLAY ON SCROLL ================= */

const entaSection = document.getElementById("enta");
const entaAudio = document.getElementById("entaAudio");
const entaStatus = document.getElementById("entaStatus");

if (entaSection && entaAudio) {

    let entaWasBlocked = false;

    function stopProjectMusic() {

        // Album player created with new Audio()
        if (typeof currentAudio !== "undefined" && currentAudio) {
            currentAudio.pause();
        }

        // Existing audio elements
        document.querySelectorAll("audio").forEach(audio => {
            if (audio !== entaAudio) {
                audio.pause();
            }
        });

        // MSH BARTA7 players
        if (typeof mshAudios !== "undefined") {
            mshAudios.forEach(audio => audio.pause());
        }
    }

    async function startEntaAudio() {

        if (!entaAudio.paused) return;

        stopProjectMusic();

        try {
            await entaAudio.play();
            entaWasBlocked = false;

            if (entaStatus) {
                entaStatus.innerHTML =
                    '<span class="enta-dot"></span> NOW PLAYING: ENTA';
            }

        } catch (error) {
            entaWasBlocked = true;

            if (entaStatus) {
                entaStatus.textContent =
                    "TAP LISTEN NOW TO PLAY";
            }

            console.log("ENTA autoplay blocked:", error);
        }
    }

    const entaObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                if (entaAudio.paused) {
                    startEntaAudio();
                }
            } else {
                entaAudio.pause();

                if (entaStatus) {
                    entaStatus.innerHTML =
                        '<span class="enta-dot"></span> ENTA — THE NEW ERA';
                }
            }

        });

    }, {
        threshold: 0.4
    });

    entaObserver.observe(entaSection);

    // Clicking LISTEN NOW opens YouTube; it does not play the local audio.
}





/* =========================================
   MAFISH HAD MERTAH AUDIO PLAYER
   ========================================= */

const mafishAudio = document.getElementById("mafish-audio");

const mafishPlayBtn = document.getElementById("mafish-play-btn");
const mafishPlayIcon = document.getElementById("mafish-play-icon");

const mafishProgress = document.getElementById("mafish-progress");
const mafishCurrentTime = document.getElementById("mafish-current-time");
const mafishDuration = document.getElementById("mafish-duration");

/* FORMAT TIME */

function formatMafishTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

/* PLAY / PAUSE */

mafishPlayBtn.addEventListener("click", async () => {

    if (mafishAudio.paused) {

        try {
            await mafishAudio.play();
        } catch (error) {
            console.error("Unable to play audio:", error);
        }

    } else {

        mafishAudio.pause();

    }

});

/* UPDATE BUTTON ICON */

mafishAudio.addEventListener("play", () => {

    mafishPlayIcon.textContent = "Ⅱ";

    mafishPlayBtn.setAttribute(
        "aria-label",
        "Pause music"
    );

});

mafishAudio.addEventListener("pause", () => {

    mafishPlayIcon.textContent = "▶";

    mafishPlayBtn.setAttribute(
        "aria-label",
        "Play music"
    );

});

/* LOAD TRACK DURATION */

mafishAudio.addEventListener("loadedmetadata", () => {

    mafishDuration.textContent =
        formatMafishTime(mafishAudio.duration);

});

/* UPDATE PROGRESS */

mafishAudio.addEventListener("timeupdate", () => {

    mafishCurrentTime.textContent =
        formatMafishTime(mafishAudio.currentTime);

    if (
        Number.isFinite(mafishAudio.duration) &&
        mafishAudio.duration > 0
    ) {

        mafishProgress.value =
            (mafishAudio.currentTime / mafishAudio.duration) * 100;

    }

});

/* SEEK THROUGH TRACK */

mafishProgress.addEventListener("input", () => {

    if (
        Number.isFinite(mafishAudio.duration) &&
        mafishAudio.duration > 0
    ) {

        mafishAudio.currentTime =
            (Number(mafishProgress.value) / 100) *
            mafishAudio.duration;

    }

});

/* RESET PROGRESS WHEN TRACK ENDS */

mafishAudio.addEventListener("ended", () => {

    mafishProgress.value = 0;
    mafishCurrentTime.textContent = "0:00";

});
