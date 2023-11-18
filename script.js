const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ["banner2.jpg", "banner.jpg", "banner1.jpg"];

let i = 0;

 next.addEventListener('click', () => {
    i++;
    if (i > photos.length -1) {
      i=0;}
    document.querySelector('#pictures').src = photos[i];
 } )

 back.addEventListener('click', () => {
    i--;
    if (i < 0) {
      i = photos.length - 1;
    }
    document.querySelector('#pictures').src = photos[i];
 } )


 const searchInput = document.querySelector("#search");
 const divs = document.querySelectorAll (".one");
 
 searchInput.addEventListener ("keyup",function(event){
     const word = event.target.value.toLowerCase ();
     divs.forEach(item => {
         item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
     })
 })