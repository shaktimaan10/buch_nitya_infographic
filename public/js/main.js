(()=> {
    
    const seeMoreButtons = document.querySelectorAll(".graph"),
        popOver = document.querySelector(".popover");
      
    function buildPopover(herofile, el) {
        popOver.querySelector(".topic").textContent = `${herofile.topic}`;
        popOver.querySelector(".odds").textContent = `ODDS: ${herofile.odds}`;
        popOver.querySelector(".description").textContent = `${herofile.description}`;
        popOver.querySelector(".graph").src = `images/${herofile.graph}`;

        //Image.src = 'images/cap-info.svg';

        popOver.classList.toggle("show-popover");
        if(popOver.classList.contains("show-popover")){
            el.innerHTML = "";
        } else {
            el.innerHTML = "graph";
        }
        el.appendChild(popOver);
    }

    function fetchData() {
        let targetEl = this,
            url = `/svgdata/${this.dataset.target}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(targetEl);

                //populate the popover
                buildPopover(data, targetEl);
            })
            .catch((err) => console.log(err));
      }

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();