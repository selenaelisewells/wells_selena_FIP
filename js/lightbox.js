(() => {
    console.log('HEY BALLA');
    let playBox = document.querySelector(".videoBox"),
        lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('.close-lb'),
        lbVideo = lightBox.querySelector('video'),
        adItems = document.querySelectorAll('.adItem'),
        imageBox = document.querySelector('.imageBox'),
        ibClose = imageBox.querySelector('.close-ib'),
        adImage = document.querySelector('.ad-image'),
        adInfo = document.querySelector('.ad-info');

    const adContent = [
        ["./images/sharing-ad.jpg", `Sharing is caring. Thats why we only sell our beer in sets of 6. Always enough to share.`],
        ["./images/beerTime-ad.jpg", `Yes, it is always time for a beer. Remember it is always 5 o'clock somewhere.`],
        ["./images/distance-ad.jpg", `Kick back and have a social distanced get together with our beer! Responsible and enojoyable.`],
        ["./images/pride-ad.jpg", `Celebrating pride all year long with Balla. Beer for everyone.`],
        ["./images/women-ad.jpg", `Women love beer, men love beer, humans love beer. Want one?`]
    ]



    function showHideImageBox() {
        console.log(adContent[this.dataset.offset])
        adImage.src = adContent[this.dataset.offset][0];
        adInfo.textContent = adContent[this.dataset.offset][1];
        imageBox.classList.toggle('show-imagebox');
    }

    function showHideLightBox() {
        if (window.innerWidth < 768) {
            open(lbVideo.src, '__blank');
            return;
        }
        lightBox.classList.toggle('show-lightbox');

        if (lbVideo.paused) {
            lbVideo.play();
        } else {
            lbVideo.currentTime = 0;
            lbVideo.pause();
        }
    }



    adItems.forEach(item => item.addEventListener('click', showHideImageBox));
    playBox.addEventListener('click', showHideLightBox);
    lbClose.addEventListener('click', event => {
        lbVideo.pause();
        lbVideo.currentTime = 0;
        lightBox.classList.toggle('show-lightbox');
    });
    ibClose.addEventListener('click', event => imageBox.classList.toggle('show-imagebox'));

})();