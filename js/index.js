document.querySelectorAll('.buttons button')
 .forEach( el => el.addEventListener('click', tabClick));
    
function tabClick(e) {
    const tabNum = e.target.dataset.tab;
    document.querySelectorAll('.buttons button, .tabs div')
        .forEach( el => {
            if (el.dataset.tab === tabNum) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        } );
}