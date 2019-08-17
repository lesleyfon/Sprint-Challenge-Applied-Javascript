/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let imgArr = [
  './assets/carousel/mountains.jpeg',
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]
let index = 0;
// funtion that return image array with an index
function nextImage(){
  return imgArr[index]
}

function carouselComponent(){
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
    //left Button
  const leftCarouselButton = document.createElement('div');
  leftCarouselButton.classList.add('left-button');
  carousel.appendChild(leftCarouselButton);
  const img =  document.createElement('img'); 
  img.src = nextImage()
  carousel.appendChild(img);
  // click event for the left button
  leftCarouselButton.addEventListener('click', e=>{
    e.preventDefault();
    // track if index is less equal to 0;
    if(index === 0){
      // if it is then we want to return
      return;
    } else{
      // else we want to reduce the index ny one 
      index--;
    } 
    //we just run the next image function which returns index array of a particular index
    img.src = nextImage();
  }) 
 
  //right button
  const rightCarouselButton = document.createElement('div');
  rightCarouselButton.classList.add('right-button');
  carousel.appendChild(rightCarouselButton);
  rightCarouselButton.addEventListener('click', e=>{
    e.preventDefault();
    if(index === 3){
      return 
    } else{
      index++
    } 
    img.src = nextImage()
    console.log(index)
  }) 
  return carousel
}
const carouselContainer = document.querySelector(".carousel-container");carouselContainer.appendChild(carouselComponent())