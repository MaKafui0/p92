function addUser() {
    player1_name = documment.getElementById(player1_login_input)
    player2_name = documment.getElementById(player2_login_input)
    localStorage.setItem("player1_name".player1_name);
    localStorage.setItem("player1_name".player1_name);
    window.location="index.html"
};
function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actual_answer = parseInt(number1) * parseInt(number2);
    quesion_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='imput_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</btton>";
    row = qusetion_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}