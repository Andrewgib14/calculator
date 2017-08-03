let buttons = document.querySelectorAll(".key");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        var input = document.querySelector('.display');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
    }
}


