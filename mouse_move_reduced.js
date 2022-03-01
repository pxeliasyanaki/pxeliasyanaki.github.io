var btn = document.getElementById("run_button");
btn.addEventListener("click", getText);

var btn = document.getElementById("clear_button");
btn.addEventListener("click", clearText);

function clearText() {
    if (document.getElementById('used_canv')){
      document.getElementById('used_canv').remove();
    }
    
    var textarea = document.getElementById('text');
    textarea.value = "";
}

function getText() {
    var textarea = document.getElementById('text');
    var data = textarea.value;
    var array = JSON.parse(data);

    if (document.getElementById('used_canv')){
      document.getElementById('used_canv').remove();
    }

    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "used_canv");
    canvas.setAttribute("width", document.body.offsetWidth);
    canvas.setAttribute("height", document.body.offsetHeight);
    canvas.setAttribute("style", "position: absolute; x:0; y:0;");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    ctx.fillRect(10,10,1,1);
    mouse_move = array;
    mouse_move_length = mouse_move.length;
    for (var i = 0; i < mouse_move_length; i++) {
      var first_point = mouse_move[i].split(",");
      ctx.fillRect(first_point[0], first_point[1], 3, 3);
    }
}