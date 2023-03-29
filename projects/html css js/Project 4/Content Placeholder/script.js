const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt= document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `
    <img src="../images/sv0cy64zpkf31.jpg" alt="">
    `;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quas`;
    profile_img.innerHTML = `<img src="../images/1affa8c3-f2a1-4ed7-9681-17ab68a6e591.jpg" alt="">`;
    name.innerHTML = `John Doe`;
    date.innerHTML = `Oct 08, 2020`;

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}