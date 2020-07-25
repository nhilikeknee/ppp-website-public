//DISAPPEARING SITE-TITLE-AREA
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 50 && $(window).width() > 992) {
    $('.navbar').css({ "position": "fixed", "top": "0" });
  }
  else if ($(window).scrollTop() > 30 && $(window).width() > 992) {
    $('#site-title-area').css({ "padding-bottom": "50px" });
  }
  else if ($(window).width() > 992) {
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

