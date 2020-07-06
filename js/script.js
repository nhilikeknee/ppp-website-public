//CHANGES BACK AND FORTH FROM BIO PHOTO TO INDIVIDUAL BIO "TEXT"
let amandaPhoto = document.getElementById("amanda-photo");
amandaPhoto.onmouseenter = () => {
  amandaPhoto.src = "../images/mayushbio.png"; //TODO: Change from ghetto image to text
};

amandaPhoto.onmouseleave = () => {
  amandaPhoto.src = "../images/fufuplaceholder.png";
};

let mayaPhoto = document.getElementById("maya-photo");
mayaPhoto.onmouseenter = () => {
  mayaPhoto.src = "../images/mayushbio.png";
};

mayaPhoto.onmouseleave = () => {
  mayaPhoto.src = "../images/fufuplaceholder.png";
};

let nhiPhoto = document.getElementById("nhi-photo");
nhiPhoto.onmouseenter = () => {
  nhiPhoto.src = "../images/mayushbio.png";
};

nhiPhoto.onmouseleave = () => {
  nhiPhoto.src = "../images/fufuplaceholder.png";
};
