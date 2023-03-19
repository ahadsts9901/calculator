function getnumber (num) {
    
    let result = document.getElementById("number");

    result.value += num

}

function Clear() {
    let result = document.getElementById("number")

    result.value = ""
}

function Result() {
    let result = document.getElementById("number")
    
    result.value = eval(result.value)
    
}