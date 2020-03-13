function clickHeader() {
    let theHeader = document.getElementById('clickMe');
    //console.log("click");
    theHeader.addEventListener('click', (event) => {

        console.log("click");
        let container = document.querySelector('.container');
        container.innerHTML +=
            `<p class="clickable">
            This p tag is clickable and will shoy a console log
            </p>
            <p class="nonClickable">
            This p tag has no effect on the console
            </p>
            `;


    });
}

function clickParagraph() {
    //let clickable = document.querySelector('container');
    let container = document.querySelector('.container');
    container.addEventListener('click', (event) => {
        //console.log("Clicked the p tag");
        //console.log(event.target);
        //console.log(event.currentTarget);
        if (event.target.matches('.clickable')) {
            console.log("You clicked the p tag");
        }

    })
}



function init() {
    clickHeader();
    clickParagraph();
}
init();