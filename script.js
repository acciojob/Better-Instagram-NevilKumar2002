//your code here
let draggedItem = null;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    draggedItem = event.target;
}

function drop(event) {
    event.preventDefault();
    if (draggedItem !== null) {
        const target = event.target;
        swapImages(draggedItem, target);
        draggedItem = null;
    }
}

function swapImages(div1, div2) {
    const backgroundImage1 = div1.style.backgroundImage;
    const backgroundImage2 = div2.style.backgroundImage;
	 const backgroundImage3 = div3.style.backgroundImage;
	 const backgroundImage4 = div4.style.backgroundImage;
	 const backgroundImage5 = div5.style.backgroundImage;
	 const backgroundImage6 = div6.style.backgroundImage;

    
    div1.style.backgroundImage = backgroundImage2;
    div2.style.backgroundImage = backgroundImage1;
}
