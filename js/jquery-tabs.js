$('.buttons button').click(e => {
    const tabNum = e.target.dataset.tab;
    $('.buttons button, .tabs div').each( (i, el) => {
            if (el.dataset.tab === tabNum) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
    });  
}); 
