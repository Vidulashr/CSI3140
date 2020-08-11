//For all elements in the document, have click event
[].forEach.call(document.getElementsByTagName('*'), item => item.onclick = event => {
    //Stops click from propagating, so it stays on selected element/tag
    event.stopPropagation();

    //If user holds control button while clicking
    if (event.ctrlKey) {
        alert(event.target.tagName) //alert with element/tag name
    }
    //If user holds shift button while clicking
    else if (event.shiftKey) {
        alert(event.type); //alert the type of event, should be click
    }
});