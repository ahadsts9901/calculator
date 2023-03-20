function getnumber (num) {
    
    var result = document.getElementById("number");
    result.value += num

}

function Clear() {
    var result = document.getElementById("number")
    result.value = ""
}

function Result() {
    var result = document.getElementById("number")
    result.value = eval(result.value)
    
}