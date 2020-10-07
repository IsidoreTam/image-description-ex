window.addEventListener('load', function(e){
    var featureLink = document.querySelector("#feature-link");

    function featureLinkHandler(evt) {
        let featureImage = document.querySelector('img.feature');
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');
        evt.preventDefault();
       }

    featureLink.addEventListener('click', featureLinkHandler);
})