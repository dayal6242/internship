function changeColor(color) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.style.backgroundColor = color;
    });
  }