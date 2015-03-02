var fs = require('fs');
var page = require('webpage').create();

var baseUrl = 'http://www.metacritic.com/browse/albums/score/metascore/year?year_selected=';
var currentYear = (new Date().getFullYear());
var url = baseUrl + currentYear;

page.open(url, function(status) {
    if(status === "success") {
        var albums = page.evaluate(function() {
            var albumEls = [].slice.call(document.querySelectorAll('.product_row')).slice(0,50);
            var albumData = albumEls.map(function(album) {
                var score = album.querySelector('.product_score .release');
                var title = album.querySelector('.product_title a');
                var artist = album.querySelector('.product_artist a');
                var releaseDate = album.querySelector('.product_date');

                return {
                    score: score.textContent.trim(),
                    title: title.textContent.trim(),
                    artist: artist.textContent.trim(),
                    releaseDate: releaseDate.textContent.trim()
                }
            });
            return albumData;
        });
        fs.write('data/albums.json', JSON.stringify(albums), 'w');
    }
    phantom.exit();
});
