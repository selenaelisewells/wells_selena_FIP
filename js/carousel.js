(() => {


    let offset = getCarouselItemOffset();
    const carousel = document.querySelector('.carousel'),
        carouselItems = document.querySelectorAll('.card'),
        nextButton = document.querySelector('.arrowRight'),
        previousButton = document.querySelector('.arrowLeft'),
        lowestOffset = 0,
        highestOffset = -1504;

    let offsetTotal = -2 * offset;

    if (window.innerWidth > 1800) {
        offsetTotal = 0;
    }
    // let offsetTotal = ;
    function getCarouselItemOffset() {
        const carouselItemStyles = window.getComputedStyle(
            document.querySelector('.card')
        );

        return parseInt(carouselItemStyles.width) + 16
    }

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
    window.addEventListener('resize', (event) => {
        offset = getCarouselItemOffset();
        if (window.innerWidth > 1800) {
            offsetTotal = 0;
        } else {
            offsetTotal = -2 * offset;
        }
        update();
    })
    update();

})();