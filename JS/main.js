// randomBackground
let buttons = document.querySelectorAll(".buttons span");
let idIntarvale;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((r) => {
      r.classList.remove("active");
    });
    e.target.classList.add("active");
    window.localStorage.setItem("state", e.target.dataset.state);
    if (e.target.dataset.state === "yes") {
      rb();
    } else {
      clearInterval(idIntarvale);
    }
  });
});
if (window.localStorage.getItem("state") === "yes") {
  rb();
  buttons.forEach((b) => {
    if (b.dataset.state === "yes") {
      b.classList.add("active");
    }
  });
} else {
  clearInterval(idIntarvale);
  buttons.forEach((b) => {
    if (b.dataset.state === "no") {
      b.classList.add("active");
    }
  });
}
let landingPage = document.querySelector(".landing");
function rb() {
  idIntarvale = setInterval(() => {
    let randomNum = Math.round(Math.random() * 6);
    landingPage.style.backgroundImage = `url('../Imgs/${randomNum}.jpg')`;
  }, 10000);
}

// Open || Closs Setting Box

let i = document.querySelector(".h");
let setting = document.querySelector(".setting");
i.addEventListener("click", () => {
  setting.classList.toggle("open");
});

//Swich Colors

let chCo = document.querySelectorAll(".ch-co span");
chCo.forEach((span) => {
  span.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    window.localStorage.setItem("color", e.target.dataset.color);
    //remove active class from all
    e.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    // add active class for active color
    e.target.classList.add("active");
  });
});

//Colors
if (window.localStorage.getItem("color") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color")
  );
  // class list
  chCo.forEach((sp) => {
    sp.classList.remove("active");

    if (window.localStorage.getItem("color") === sp.dataset.color) {
      sp.classList.add("active");
    }
  });
}
//Reset Option
let resetButon = document.querySelector(".resetButon");
resetButon.addEventListener("click", () => {
  window.localStorage.removeItem("color");
  window.localStorage.removeItem("state");
  window.location.reload();
});
// Start Our Skills

let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  //[1] Skills Top Offset
  let skillsTopOffset = ourSkills.offsetTop;
  //[2] Height Of Skills Section
  let heighOfSkills = ourSkills.offsetHeight;
  //[3] Window Height
  let windowHight = this.innerHeight;
  //[4] Scroll Y
  let scrollY = window.scrollY + 100;
  //The Condition

  if (scrollY > skillsTopOffset + heighOfSkills - windowHight) {
    document
      .querySelectorAll(".skills .skill-box .brog span")
      .forEach((span) => {
        span.style.width = span.dataset.width;
      });
  }
};

// End Our Skills

// Start Gallery
let photos = document.querySelectorAll(".gallery img");
photos.forEach((photo) => {
  photo.addEventListener("click", (e) => {
    //[1] Create Ovelay Div
    let overLay = document.createElement("div");
    //[2] Add class
    overLay.classList.add("overlay");
    //[3] Append Overlay To The Body
    document.body.appendChild(overLay);
    //[4] Creat The Popup Scection
    let popup = document.createElement("div");
    //[5] Add Class
    popup.className = "popup";
    //[6] Creat The Title Off The Photo
    let title = document.createElement("h2");
    //[7] Add classANme For The
    title.className = "title";
    //[8] Create The Text For The Title
    let textTitle = document.createTextNode(photo.alt);
    //[9] Append The Text Of Title To The Title
    title.appendChild(textTitle);
    //[10] Apend The Title To The Popup
    popup.appendChild(title);
    //[11] Creat The Img
    let img = document.createElement("img");
    //[12] Add Class
    img.className = "img";
    //[13] Add SRC To The Img
    img.src = photo.src;
    //[14] Append THe Img To THe Popup
    popup.appendChild(img);
    //[15] Create Close Buttone
    let close = document.createElement("span");
    //[16] Text Of The Button
    let x = document.createTextNode("X");
    //[17] Append The Text To The Buttone
    close.appendChild(x);
    //[18] Create ClassName
    close.className = "close";
    //Add The Event
    close.addEventListener("click", () => {
      overLay.remove();
    });
    //[20] Append The Button To The Popup
    popup.appendChild(close);
    //[21] Apend The Popup To The Overlay
    overLay.appendChild(popup);
  });
});
// End Gallery

//Start Scroll Bevahavior Bullet

let bullets = document.querySelectorAll(".nav-bullets .bullet");

bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    console.log();
    document.querySelector(`${e.target.dataset.section}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
