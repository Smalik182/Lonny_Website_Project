const togglebtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName ('navbar-links')[0];

togglebtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})












//          Scroll Code
let arrowRight = document.getElementsByClassName("arrow-right");
let arrowLeft = document.getElementsByClassName('arrow-left');

arrowRight[0].onclick = function () {
    window.scrollBy(1910,0);
    
};

// arrowRight[1].onclick = function () {
//     window.scrollBy(1915,0);
// };

// arrowLeft[0].onclick = function () {
//     window.scrollBy(-1910,0);
// };

arrowLeft[1].onclick = function () {
    window.scrollBy(-1915,0);
};


//              Gallery code

const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.recap-photos img');
const original = document.querySelector('.full-img');

previews.forEach(previews => {
    previews.addEventListener('click', () =>{
        modal.classList.add("open");
        original.classList.add("open");

        //  Dynamic change text and image
        const originalSrc = previews.getAttribute("data-original");
        original.src = `./images/FFC VOL 1 TOP 20/${originalSrc}`;
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove("open");
    }
});