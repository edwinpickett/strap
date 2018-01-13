App = {

    preloadImages: [
        // '/assets/contact.png',
        // '/assets/music.png',
        // '/assets/home.png'
    ],

    init: function () {
        $(document).ready(function () {
            App.preload(App.preloadImages).then(function (value) {
                $('.loading').remove();
            });
        });
    },

    preload: function (urls) {
        return new Promise(function (resolve, reject) {

            if(!urls.length) {
                resolve();
            }

            var loadedCounter = 0;
            var toBeLoadedNumber = urls.length;
            urls.forEach(function (url) {
                preloadImage(url, function () {
                    loadedCounter++;
                    if (loadedCounter === toBeLoadedNumber) {
                        resolve();
                    }
                });
            });

            function preloadImage(url, anImageLoadedCallback) {
                var img = new Image();
                img.src = url;
                img.onload = anImageLoadedCallback;
            }
        });
    }

};

App.init();