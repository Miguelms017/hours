//design nodes
let bgdoc = document.getElementsByTagName("html")[0];
let header = document.getElementsByTagName("header")[0];
let darkBtn = document.getElementById("dark");
let lightBtn = document.getElementById("light");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset")
let lbtn = document.querySelectorAll(".Lbtn");

// light to dark
function dark(){
    bgdoc.style.backgroundColor = 'var(--clr-GScale-400)';
    header.style.backgroundColor = 'var(--clr-primary-200)';
    header.style.color = 'var(--clr-GScale-100)';
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
    left.style.backgroundColor = 'var(--clr-primary-100)';
    left.style.color = 'var(--clr-GScale-100)';
    right.style.backgroundColor = 'var(--clr-secondary-200)';
    right.style.color = 'var(--clr-GScale-100)';
    submit.style.backgroundColor = 'var(--clr-primary-200)';
    submit.style.color = 'var(--clr-GScale-100)'
    submit.style.border = '1px solid var(--clr-GScale-100)';
    lbtn.forEach(el => {
        el.style.backgroundColor = 'var(--clr-secondary-300)';
        el.style.color = 'var(--clr-GScale-500)';
        el.style.border = '1px solid var(--clr-GScale-500)';
    });
    if (reset !== null){
    reset.style.backgroundColor = 'var(--clr-primary-200)';
    reset.style.color = 'var(--clr-GScale-100)';
    reset.style.border = '1px solid var(--clr-GScale-100)';
    };
    localStorage.setItem('theme', 'dark');
}

// Dark to light
function light(){
    bgdoc.style.backgroundColor = '';
    header.style.backgroundColor = '';
    header.style.color = '';
    darkBtn.style.display = '';
    lightBtn.style.display = '';
    left.style.backgroundColor = '';
    left.style.color = '';
    right.style.backgroundColor = '';
    right.style.color = '';
    submit.style.backgroundColor = '';
    submit.style.color = ''
    submit.style.border = '';
    lbtn.forEach(el => {
        el.style.backgroundColor = '';
        el.style.color = '';
        el.style.border = '';
    });
    if (reset !== null){
    reset.style.backgroundColor = '';
    reset.style.color = '';
    reset.style.border = '';
    };
    localStorage.setItem('theme', 'light');

}



// event listeners
document.getElementById('dark').addEventListener('click', dark);
document.getElementById('light').addEventListener('click', light);

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        dark();
    } else {
        light();
    }
});