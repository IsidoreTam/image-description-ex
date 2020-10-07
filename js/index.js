window.addEventListener('load', function(e){
    var featureLink = document.querySelector('citation');

    function featureLinkHandler(evt){
        evt.preventDefault();
        let featureImage = document.querySelector('img.feature');
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');
       };

    featureLink.addEventListener('click', featureLinkHandler);
})