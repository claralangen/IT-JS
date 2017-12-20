//Filters;
var images = document.querySelector('.imgMovie');
var btnGenre = document.querySelectorAll('.btnGenre');
var all = document.querySelector('.btnAll')
for (i = 0; i < data.films.length; i++) {
  images.innerHTML += '<img class="lesImages" src="' + data.films[i].screenshot + '"></div>';
};


var images2 = document.querySelectorAll('.lesImages');
for (var i = 0; i < images2.length; i++) {
  console.log(images2[i]);
  //images2 = images2[i];
}
for (var i = 0; i < btnGenre.length; i++) {
  btnGenre[i].addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].category !== this.dataset.genre) {
        images2[i].style.display = 'none';
      } else {
        images2[i].style.display = '';
      }
    }
  })
}

all.addEventListener('click', function() {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films.category === this.dataset.gentre) {
      images2[i].style.display='block';
    }
  }
})
//FiltersEnd




var oneMovie = document.querySelector('.oneM');
var oTo = document.querySelector('.oneDescription');

oneMovie.addEventListener('mouseover', function() {
  oTo.style.display = 'block';
});

oTo.addEventListener('mouseout', function() {
  oTo.style.display = 'none';
});



var twoMovie = document.querySelector('.twoM');
var tTo = document.querySelector('.twoDescription');

twoMovie.addEventListener('mouseover', function() {
  tTo.style.display = 'block';
});

tTo.addEventListener('mouseout', function() {
  tTo.style.display = 'none';
});



var threeMovie = document.querySelector('.threeM');
var thTo = document.querySelector('.threeDescription');

threeMovie.addEventListener('mouseover', function() {
  thTo.style.display = 'block';
});

thTo.addEventListener('mouseout', function() {
  thTo.style.display = 'none';
});
