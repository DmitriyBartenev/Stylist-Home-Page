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

    openModal.addEventListener('click',()=>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = "hidden";
    });
    
});