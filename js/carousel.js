(() => {

    const offset = 376,
        carousel = document.querySelector('.carousel'),
        carouselItems = document.querySelectorAll('.card'),
        nextButton = document.querySelector('.arrowRight'),
        previousButton = document.querySelector('.arrowLeft'),
        lowestOffset = 0,
        highestOffset = -1504;

    let offsetTotal = -2 * offset;
    // let offsetTotal = ;

    function next() {
        if ((offsetTotal - offset) < highestOffset) {
            return;
        }
        console.log('next');
        offsetTotal -= offset;
        update();
    }

    function previous() {
        if ((offsetTotal + offset) > lowestOffset) {
            return;
        }
        console.log('previous')
        offsetTotal += offset;
        update();
    }

    function update() {
        console.log('update')
        console.log(offsetTotal)
        carouselItems.forEach(item => {
            item.style.transform = `translateX(${offsetTotal}px)`
        })
    }



    nextButton.addEventListener('click', next);
    previousButton.addEventListener('click', previous);
    update();

})();