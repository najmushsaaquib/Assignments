
document.querySelector('#myForm').addEventListener("submit", formSubmit)

function createObj(name,num,city){

    this.name = name
    this.number = num
    this.city = city
}


let arrData = JSON.parse(localStorage.getItem("studentData")) || []

console.log(arrData)

function formSubmit(event){
    event.preventDefault()

    let name = document.querySelector("#name").value
    let number = document.querySelector("#number").value
    let city = document.querySelector("#city").value

    let myObj = new createObj(name,number,city)

    arrData.push(myObj)

    localStorage.setItem("studentData", JSON.stringify(arrData))

    window.location.href = "display.html"

    document.querySelector("#name").value = null
    document.querySelector("#number").value = null
    document.querySelector("#city").value = null

}
