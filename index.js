function clearScreen(){
    document.getElementById("result").value = "";

}

function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var result = document.getElementById("result").value;
    var ans = eval(result);

    document.getElementById("result").value = ans;
}