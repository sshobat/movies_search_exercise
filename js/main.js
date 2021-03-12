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
var input = document.querySelector('input');

var filtered = movies;

// insert all movies into window
function insertMovieArticles(arr) {

    for(var i = 0; i < arr.length; i++) {
        var article = createMovieArticle(arr, i);
        moviesSection.appendChild(article);
    }
}
insertMovieArticles(movies);

// create one movie article
function createMovieArticle(arr, i) {

    var article = document.createElement('article');
    var image = document.createElement('img');
    var name = document.createElement('p');
    var closeIcon = document.createElement('img');

    image.setAttribute('src', arr[i].photoPath);
    name.textContent = arr[i].name;
    closeIcon.setAttribute('src', './img/delete-sign.png');
    closeIcon.setAttribute('class', 'close');

    article.appendChild(image);
    article.appendChild(name);
    article.appendChild(closeIcon);

    return article;
}

function filter(arr, input) {
    filtered = arr.filter(function(item) {
        return item.name.toLowerCase().indexOf(input) > -1;
    });
}

// filter movies based on search input
function searchMovies() {

    var inputValue = this.value.toLowerCase();

    filter(movies, inputValue);

    moviesSection.innerHTML = "";
    insertMovieArticles(filtered);
    
    removeMovie(filtered);

    console.log(filtered);

}
input.addEventListener("keyup", searchMovies);

// removes movies on click
function removeMovie(arr) {

    var close = document.querySelectorAll('.close');
   
    close.forEach(function(item) {

        item.addEventListener('click', function(event) {

            for (var i = 0; i < arr.length; i++) {

                if (event.currentTarget.previousElementSibling.textContent === arr[i].name) {
                        
                    arr.splice(i, 1);
                    console.log(filtered);

                    moviesSection.innerHTML = "";

                    insertMovieArticles(arr);

                    // removeMovie(arr);
                    
                }
            }
        });
    });
}
removeMovie(filtered);
