const serviceGalleries = {

  oil: [
    "assets/images/oil1.png",
    "assets/images/oil2.png",
    "assets/images/oil3.png"
  ],

  ev: [
    "assets/images/ev1.png",
    "assets/images/ev2.png",
    "assets/images/ev3.png",
    "assets/images/ev4.png",
    "assets/images/ev5.png",
    "assets/images/ev6.png"
  ],

  cwie: [
    "assets/images/cwie-1.png",
    "assets/images/cwie-2.png"
  ],

  plc: [
    "assets/images/plc1.png",
    "assets/images/plc2.png",
    "assets/images/plc3.png",
    "assets/images/plc4.png",
    "assets/images/plc5.png"
  ]

};

let currentGallery = [];
let currentGalleryIndex = 0;

function openGallery(type, index = 0){
  currentGallery = serviceGalleries[type] || [];
  currentGalleryIndex = index;

  if(currentGallery.length === 0) return;

  document.getElementById("galleryModal").classList.add("active");
  updateGallery();
}

function closeGallery(){
  document.getElementById("galleryModal").classList.remove("active");
}

function updateGallery(){
  document.getElementById("galleryImage").src = currentGallery[currentGalleryIndex];
  document.getElementById("galleryCount").textContent =
    `${currentGalleryIndex + 1} / ${currentGallery.length}`;
}

function nextGallery(){
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
  updateGallery();
}

function prevGallery(){
  currentGalleryIndex =
    (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
  updateGallery();
}

window.openGallery = openGallery;
window.closeGallery = closeGallery;
window.nextGallery = nextGallery;
window.prevGallery = prevGallery;
