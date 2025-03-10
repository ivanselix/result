// // Массив с ссылками на ваши фотографии
// const imageUrls = [
//     'https://i.ibb.co/Y7F0pHJB/photo.jpg',
//     'https://i.ibb.co/b5FX85VS/photo.jpg',
//     'https://i.ibb.co/wFWCpxFk/photo.jpg',
//     'https://i.ibb.co/zWsjxR6V/photo.jpg',
//     'https://i.ibb.co/DfR3F57V/photo.jpg',
//     'https://i.ibb.co/VYWvBBnk/photo.jpg',
//     'https://i.ibb.co/hRQsJR98/photo.jpg',
//     'https://i.ibb.co/Mybr708D/photo.jpg',
//     'https://i.ibb.co/HT6CDYkW/photo.jpg',
//     'https://i.ibb.co/PzTHN15h/photo.jpg',
//     'https://i.ibb.co/S7sPvftt/photo.jpg',
//     'https://i.ibb.co/SwxrhL4v/photo.jpg',
//     'https://i.ibb.co/chbtfgmL/photo.jpg',
//     'https://i.ibb.co/SDddZKJ8/photo.jpg',
//     'https://i.ibb.co/k6yg23bB/photo.jpg',
//     'https://i.ibb.co/0pVM4Lgq/photo.jpg',
//     'https://i.ibb.co/FL6tdbxs/photo.jpg',
//     'https://i.ibb.co/gbnk5sWW/photo.jpg',
//     'https://i.ibb.co/dJpJfQLj/photo.jpg',
//     'https://i.ibb.co/yBxZ3xgq/photo.jpg',
//     'https://i.ibb.co/ks871jyK/photo.jpg',
//     'https://i.ibb.co/RGysSwJM/photo.jpg',
//     'https://i.ibb.co/SDNXnb3m/photo.jpg',
//     'https://i.ibb.co/bRRVFysk/photo.jpg',
//     'https://i.ibb.co/9kdcq1bT/photo.jpg',
//     'https://i.ibb.co/R4Tq0yxC/photo.jpg',
//     'https://i.ibb.co/RTJVm5J6/photo.jpg',
//     'https://i.ibb.co/kgWYPzTJ/photo.jpg',
//     'https://i.ibb.co/9Mhnfc0/photo.jpg',
//     'https://i.ibb.co/Nd5KjJ8M/photo.jpg',
//     'https://i.ibb.co/MDCgjtTr/photo.jpg',
//     'https://i.ibb.co/zTd1TJgK/photo.jpg',
//     'https://i.ibb.co/qLPM5FLt/photo.jpg',
//     'https://i.ibb.co/21NhPbFM/photo.jpg',
//     'https://i.ibb.co/Q346WLLM/photo.jpg',
//     'https://i.ibb.co/x8fsdKBD/photo.jpg',
//     'https://i.ibb.co/dsSQSmfQ/photo.jpg',
//     'https://i.ibb.co/bj2rw5DS/photo.jpg',
//     'https://i.ibb.co/YsGGxwc/photo.jpg',
//     'https://i.ibb.co/qMp6Nb28/photo.jpg',
//     'https://i.ibb.co/j9n8rN49/photo.jpg',
//     'https://i.ibb.co/FLkMKmgn/photo.jpg',
//     'https://i.ibb.co/qF1Cp7Bn/photo.jpg',
//     'https://i.ibb.co/TMnwVwbR/photo.jpg',
//     'https://i.ibb.co/Hftj0pTf/photo.jpg',
//     'https://i.ibb.co/6RKcby1G/photo.jpg',
//     'https://i.ibb.co/Kj6vSVH6/photo.jpg',
//     'https://i.ibb.co/dJsKkmWL/photo.jpg',
//     'https://i.ibb.co/n8LC20wQ/photo.jpg',
//     'https://i.ibb.co/9m1Js395/photo.jpg',
//     'https://i.ibb.co/q31FNv1v/photo.jpg',
//     'https://i.ibb.co/0VmbQJPB/photo.jpg',
//     'https://i.ibb.co/9mt44gmh/photo.jpg',
//     'https://i.ibb.co/ycqtNr3c/photo.jpg',
//     'https://i.ibb.co/WW1xLzQ4/photo.jpg',
//     'https://i.ibb.co/8LVrv57S/photo.jpg',
//     'https://i.ibb.co/ZzdGjqMm/photo.jpg',
//     'https://i.ibb.co/sprVc3zJ/photo.jpg',
//     'https://i.ibb.co/G440LbZf/photo.jpg',
//     'https://i.ibb.co/TxyFcnyj/photo.jpg',
//     'https://i.ibb.co/Pz6fcRDd/photo.jpg',
//     'https://i.ibb.co/TBQrgwpR/photo.jpg',
// ];

// function loadGallery() {
//     const gallery = document.getElementById('gallery');
    
//     imageUrls.forEach(url => {
//         const img = document.createElement('img');
//         img.src = url;
//         img.alt = 'Gallery Image';
//         img.loading = 'lazy';
//         img.addEventListener('click', () => createLightbox(url));
//         gallery.appendChild(img);
//         console.log('Added image:', url);
//     });
// }

// function createLightbox(imageUrl) {
//     const lightbox = document.createElement('div');
//     lightbox.style.position = 'fixed';
//     lightbox.style.top = '0';
//     lightbox.style.left = '0';
//     lightbox.style.width = '100%';
//     lightbox.style.height = '100%';
//     lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
//     lightbox.style.display = 'flex';
//     lightbox.style.justifyContent = 'center';
//     lightbox.style.alignItems = 'center';
//     lightbox.style.zIndex = '1000';

//     const img = document.createElement('img');
//     img.src = imageUrl;
//     img.style.maxWidth = '90%';
//     img.style.maxHeight = '90%';
//     img.style.objectFit = 'contain';

//     lightbox.appendChild(img);
//     document.body.appendChild(lightbox);

//     lightbox.addEventListener('click', () => {
//         document.body.removeChild(lightbox);
//     });
// }

// window.addEventListener('load', loadGallery);
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");
var modalImg = document.getElementById("img01");

// Go through all of the images
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the image, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}