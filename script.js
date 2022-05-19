window.addEventListener('DOMContentLoaded', () => { 
    
    function onEntry(entry) {
        entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('element-show');
        }
        });
    }
    
    let options = {
        threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    
    for (let elm of elements) {
        observer.observe(elm);
    }

    const modal = document.querySelector('.modal-window');
    const openModal = document.querySelector('.burger-header');
    const closeModal = document.querySelector('.modal-close');

    closeModal.addEventListener('click', () =>{
        modal.classList.add('hide');
        modal.classList.remove('show');
    });

    openModal.addEventListener('click',()=>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = "hidden";
    });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });

    
});