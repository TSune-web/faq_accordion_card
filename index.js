const acc = document.querySelectorAll('.faq__block');
const arrow = document.querySelectorAll('.arrow');


// Only show one panel at a time
function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
        els[i].firstElementChild.classList[fnName](className);
    }
}


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        let setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');

        if (setClasses) {
            this.classList.toggle('active');
            this.firstElementChild.classList.toggle('active');
        }
    });
}