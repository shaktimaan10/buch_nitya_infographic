(()=> {
    
    const graphButton = document.querySelectorAll(".graph"),
        popOver = document.querySelector(".popover");
      
    function buildPopover(information, el) {
        popOver.querySelector(".topic").textContent = `${information.topic}`;
        popOver.querySelector(".odds").textContent = `ODDS: ${information.odds}`;
        popOver.querySelector(".description").textContent = `${information.description}`;
        popOver.querySelector(".graph").src = `images/${information.graph}`;

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

    graphButton.forEach(button => button.addEventListener("click", fetchData));
})();
