function changeColor(button) {
    var buttons = document.querySelectorAll('.button');
    var i = Array.from(buttons).indexOf(button);
    var colorArray = ['red', 'yellow', 'green'];
    
    if (i == 0) {
        buttons[0].style.backgroundColor = colorArray[2];
        button.innerText = "Green";
    } else if (i == 1) {
        buttons[1].style.backgroundColor = colorArray[0];
        button.innerText = "Red";
    } else if (i == 2) {
        buttons[2].style.backgroundColor = colorArray[1];
        button.innerText = "Yellow";
    }
    setTimeout(function() {
        location.reload();
    }, 30000); 
}