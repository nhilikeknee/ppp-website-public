//DISAPPEARING SITE-TITLE-AREA
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 1) { // SWEETETH: IT WAS WIGGIDY WACK SWITCH BWTN PAGES SO I ADDETH THIS
    $('#site-title-area').css({ "padding-bottom": "48px" });
  }
  if ($(window).scrollTop() > 50) {
    $('.navbar').css({ "position": "fixed", "top": "0px" });
  }
  else if ($(window).width() > 992) {
    $('.navbar').css({ "position": "fixed", "top": "100px" });
  }
});

// SWEETETH: TO MAKE THE NAV RENDER PROPERLY ON < 992PX SCREENS
$(window).resize(function () {
  if ($(window).width() < 992) {
    $('.navbar').css({ "position": "fixed", "top": "0px" });
  }
  else if ($(window).scrollTop() < 50) {
    $('.navbar').css({ "position": "fixed", "top": "100px" });
  }
});

//WHEN CLICKING ON DROPDOWN, SHOULD TAKE USER TO K-2 OR 3-5 PAGE
const goToPage = (page) => {
  window.location.replace('/' + page)
};


//CHANGES BACK AND FORTH FROM BIO PHOTO TO INDIVIDUAL BIO TEXT
let amandaPhoto = document.getElementById("amanda-photo");
let amandaBio = document.getElementById("amanda-bio");
amandaPhoto.onmouseenter = () => {
  amandaPhoto.style.display = "none";
  amandaBio.style.display = "block";
};
amandaBio.onmouseleave = () => {
  amandaPhoto.style.display = "block";
  amandaBio.style.display = "none";
};

let mayaPhoto = document.getElementById("maya-photo");
let mayaBio = document.getElementById("maya-bio");
mayaPhoto.onmouseenter = () => {
  mayaPhoto.style.display = "none";
  mayaBio.style.display = "block";
};
mayaBio.onmouseleave = () => {
  mayaPhoto.style.display = "block";
  mayaBio.style.display = "none";
};

let nhiPhoto = document.getElementById("nhi-photo");
let nhiBio = document.getElementById("nhi-bio");
nhiPhoto.onmouseenter = () => {
  nhiPhoto.style.display = "none";
  nhiBio.style.display = "block";
};
nhiBio.onmouseleave = () => {
  nhiPhoto.style.display = "block";
  nhiBio.style.display = "none";
};

/* let bioFlip = (initState, finalState) => {
  initState.style.display = "none";
  finalState.style.display = "block";
}
nhiPhoto.onmouseenter = bioFlip(nhiPhoto, nhiBio); */
// nhiPhoto.addEventListener("mouseout", bioFlip(nhiBio, nhiPhoto));

const newsletterPopup = () => {
  timeoutID = window.setTimeout(
    window.alert,
    2 * 1000,
    "THIS IS A BANNER POP UP THING"
  );
};

