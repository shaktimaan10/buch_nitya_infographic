// planning for projects page

//ai section
// query selector for = hint event listener = click
// on click = hint image shows
//qury selector for = solution event listener = click
// on click = movie name shows
// add necessary display classes to main.css

const hintImg = document.querySelectorAll(".hint-image"),
      movieName = document.querySelectorAll(".movie-name"),
      hint = document.querySelectorAll(".hint"),
      forSolution = document.querySelectorAll(".solution");

      hint.forEach((hintEach, index) => {
          hintEach.addEventListener("click", function(){
            hintImg[index].classList.add("hint-image-show"); // should show
          })
      })

      forSolution.forEach((forSolutionEach, index) => {
        forSolutionEach.addEventListener("click", function(){
          movieName[index].classList.add("hint-image-show"); // should show
        })
    })

//     const playButton = document.querySelectorAll(".play"),
//         popOver = document.querySelector(".popover");
      
//     function buildPopover(information, el) {
//         // hint button
//         // popOver.querySelector(".poster-image").textContent = `${information.poster}`;
//         // popOver.querySelector(".hint-image").textContent = `ODDS: ${information.poster_hint}`;
//         popOver.querySelector(".movie-name").textContent = `${information.movie_name}`;
//         // popOver.querySelector(".play").src = `images/${information.play}`;
//         popOver.querySelector(".poster-image").src = `images/${information.poster}`;
//         popOver.querySelector(".hint-image").src = `images/${information.hint_image}`;

//         //Image.src = 'images/cap-info.svg';

//         popOver.classList.toggle("show-popover");
//         if(popOver.classList.contains("show-popover")){
//             el.innerHTML = "";
//         } else {
//             el.innerHTML = "play";
//         }
//         el.appendChild(popOver);
//     }

//     function fetchData() {
//         let targetEl = this,
//             url = `/svgdata/${this.dataset.target}`;

//             fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(targetEl);

//                 //populate the popover
//                 buildPopover(data, targetEl);
//             })
//             .catch((err) => console.log(err));
//       }

//     playButton.forEach(button => button.addEventListener("click", fetchData));
// //hint.addEventListener("click", function(){
    
// //});



// // planning for contact page
