(() => {
    const postalCodeInput = document.querySelector('#postalCode');
    console.log(postalCodeInput)
    postalCodeInput.addEventListener('input', (event) => {

        const postalCode = event.currentTarget.value;
        console.log(postalCode)
        const html = `<iframe width="600" height="450" frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/search?q=Alcohol%20stores%20near%20${postalCode}&key=AIzaSyBhBDbP6vFGtldCNKtX4wnA1GPuP8167OY" allowfullscreen></iframe>`

        const map = document.querySelector('.map');

        map.innerHTML = html;

    })
})();