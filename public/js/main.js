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
//hint.addEventListener("click", function(){
    
//});



// planning for contact page
