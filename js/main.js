// ***** JS EVENTS HOMEWORK *****

// - Create a page which should contain search field in the top
// OK

// - Once page is loaded it should have list of at least 12 movies
// OK

// - Each movie should have image and a name (should be contained in array of objects)
// OK

// - Once you type something in the search field, it should filter movies by name, and display only movies that match

// BONUS:

// Add remove icon to each movie. When icon is clicked, movie should be removed from the list

// starting input object
var movies = [
    {
        name: 'Boj na Kosovu',
        photoPath: './img/boj-na-kosovu.jpg'
    },
    {
        name: 'Bokseri idu u raj',
        photoPath: './img/bokseri-idu-u-raj.jpg'
    },
    {
        name: 'Braca po materi',
        photoPath: './img/braca-po-materi.jpg'
    },
    {
        name: 'Hajde da se volimo',
        photoPath: './img/hajde-da-se-volimo.jpg'
    },
    {
        name: 'Ko to tamo peva',
        photoPath: './img/Ko-to-tamo-peva-1.jpg'
    },
    {
        name: 'Mars na Drinu',
        photoPath: './img/Mars-na-Drinu.jpg'
    },
    {
        name: 'Noz',
        photoPath: './img/noz.jpg'
    },
    {
        name: 'Sedam i po',
        photoPath: './img/sedam-i-po.jpg'
    },
    {
        name: 'Sinovci',
        photoPath: './img/sinovci.jpg'
    },
    {
        name: 'Strsljen',
        photoPath: './img/strsljen.jpg'
    },
    {
        name: 'Varljivo leto 68',
        photoPath: './img/varljivo-let.jpg'
    },
    {
        name: 'Zavet',
        photoPath: './img/zavet.jpg'
    }
];

var moviesSection = document.querySelector('section');

// insert all movies into window
function insertMovieArticles(arr) {
    arr.forEach(function(item) {
        var article = createMovieArticle(item);
        moviesSection.appendChild(article);
    });
    filtration(movies);
}
insertMovieArticles(movies);

// create one movie article
function createMovieArticle(movie) {

    var article = document.createElement('article');
    var image = document.createElement('img');
    var name = document.createElement('p');
    var closeIcon = document.createElement('img');

    image.setAttribute('src', movie.photoPath);
    name.textContent = movie.name;
    closeIcon.setAttribute('src', './img/delete-sign.png');
    closeIcon.setAttribute('class', 'close');

    article.appendChild(image);
    article.appendChild(name);
    article.appendChild(closeIcon);

    closeArticle(closeIcon, movie, article);

    return article;
}

//close movie article on click
function closeArticle(el, item, article) {
    el.addEventListener('click', function() {
        movies.splice(movies.indexOf(item), 1);
        article.remove();
        // console.log(movies);
    });
}

//filtrate array
function filtration(arr) {

    var input = document.querySelector('input');
    input.addEventListener('keyup', function() {
        var inputValue = this.value.toLowerCase();
        filtered = arr.filter(function(item) {
            return item.name.toLowerCase().indexOf(inputValue) > -1;
        });
        moviesSection.innerHTML = "";
        insertMovieArticles(filtered);
        // console.log(filtered);
    })
}
