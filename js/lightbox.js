(() => {
    console.log('HEY BALLA');
    let playBox = document.querySelector(".videoBox"),
        lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('span'),
        lbVideo = lightBox.querySelector('video')


    function showHideLightBox() {
        lightBox.classList.toggle('show-lightbox');

        if (lbVideo.paused) {
            lbVideo.play();
        } else {
            lbVideo.currentTime = 0;
            lbVideo.pause();
        }

    }

    playBox.addEventListener('click', showHideLightBox);
    lbClose.addEventListener('click', showHideLightBox);

})();