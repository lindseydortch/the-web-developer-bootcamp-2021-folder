// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//   console.log(img.src);
// }

// const squareImages = document.getElementsByClassName('square');
// for(let img of squareImages) {
//   img.src = 'https://images.unsplash.com/photo-1613638147323-36633209add9?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
// }

const links = document.querySelectorAll('p a');

for (let link of links) {
  console.log(link.href);
}