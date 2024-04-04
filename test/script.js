// const gameTimeSelector = (tempo) => tempo * 1000;

// var gameTime = gameTimeSelector(30);
// console.log(gameTime);

// fiften.addEventListener("click", function () {
//   gameTime = gameTimeSelector(15);
//   console.log(gameTime);
// });

// thirty.addEventListener("click", function () {
//   gameTime = gameTimeSelector(30);
//   console.log(gameTime);
// });

/// animation test

// const dotsBtn = document.querySelector(".dots-Btn");

// dotsBtn.addEventListener("click", function () {
//   dotsBtn.classList.add("active");
// });

// window.onclick = function (event) {
//   if (event.target !== dotsBtn && !event.target.classList.contains("dot")) {
//     dotsBtn.classList.remove("active");
//   }
// };

////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const userContainer = document.querySelector(".user-container");
//   const dropbtn = document.querySelector(".dropbtn");
//   const dropdownContent = document.querySelector(".dropdown-content");
//   const action = document.querySelector(".action");
//   const username = document.querySelector(".user-name");
//   const userProfilePic = document.querySelector(".fa-user-pen");

//   dropbtn.addEventListener("click", function () {
//     userContainer.classList.toggle("open");
//     if (userContainer.classList.contains("open")) {
//       dropdownContent.style.width = dropbtn.offsetWidth + "px";
//     } else {
//       dropdownContent.style.width = dropbtn.offsetWidth + "px";
//     }
//   });

//   username.addEventListener("mouseover", function () {
//     action.innerHTML = "View Profile";
//   });
//   userProfilePic.addEventListener("mouseover", function () {
//     action.innerHTML = "Change photo";
//   });
//   document.addEventListener("mouseover", function (event) {
//     if (event.target !== username && event.target !== userProfilePic) {
//       action.innerHTML = "...";
//     }
//   });

//   document.addEventListener("click", function (event) {
//     if (!userContainer.contains(event.target) && event.target !== dropbtn) {
//       userContainer.classList.remove("open");
//     }
//   });
// });
////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const userContainer = document.querySelector(".user-container");
//   const dropbtn = document.querySelector(".dropbtn");
//   const dropdownContent = document.querySelector(".dropdown-content");

//   dropbtn.addEventListener("click", function () {
//     userContainer.classList.toggle("open");
//     if (userContainer.classList.contains("open")) {
//       dropdownContent.style.height = dropbtn.offsetheight + "px";
//     } else {
//       dropdownContent.style.height = dropbtn.offsetheight + "px";
//     }
//   });
// });

////////////////////////
window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add("is-active");

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
