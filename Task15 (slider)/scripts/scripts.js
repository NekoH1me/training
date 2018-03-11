var imageUrls = [
  'https://pp.userapi.com/c543104/v543104924/36606/2oxgxIkDCgQ.jpg',
  'https://pp.userapi.com/c543104/v543104912/5196c/7Dx1TpvgUTM.jpg',
  'https://pp.userapi.com/c840730/v840730481/5a3b6/5udi0jfeGAg.jpg'
];
var slides = [];
var thumbnails = [];
var currentSlide = 0;
var isInitial = true;

function addImages() {
  var container = document.getElementById('slides');
  
  imageUrls.forEach(function (imageUrl) {
    var newImage = document.createElement('img');
    newImage.src = imageUrl;
    newImage.classList.add('slide');
    newImage.addEventListener('click', onSlideClick);
    container.appendChild(newImage);
    slides.push(newImage);
  });
}

function addThumbnails() {
  var container = document.getElementById('thumbnail');
  imageUrls.forEach(function (imageUrl, index) {
    var newImage = document.createElement('img');
    newImage.src = imageUrl;
    newImage.classList.add('thumbnails');
    newImage.addEventListener('click', function() {
      onThumbnailClick(index);
    });
    container.appendChild(newImage);
    thumbnails.push(newImage);
  });
}

function onSlideClick() {
  nextSlide();
}

function onThumbnailClick(index) {
  goToSlide(index);
}

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
  if (currentSlide === n && !isInitial) {
    return;
  }
  
  isInitial = false;
  
  var showingClass = 'showing';
  slides.forEach(function (slide) {
    slide.classList.remove(showingClass);
  });
  thumbnails.forEach(function (thumbnail) {
    thumbnail.classList.remove(showingClass);
  });
  
  if (n === slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }
  
  slides[currentSlide].classList.add(showingClass);
  thumbnails[currentSlide].classList.add(showingClass);
}

window.addEventListener('load', function () {
  addImages();
  addThumbnails();
  goToSlide(currentSlide);

  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  next.onclick = function(){
    nextSlide();
  };
  previous.onclick = function(){
    previousSlide();
  };                  
});