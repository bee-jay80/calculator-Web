function toggleQuad(){
    document.querySelector(".quad").classList.toggle("none")
    document.querySelector(".calc").classList.toggle("none")
}

let numbers = document.querySelectorAll(".numbers")
const input = document.getElementById("inp")

numbers.forEach(btn => {
    btn.addEventListener("click",()=>{
        input.value += btn.value
    })
})


function Clear(){
    input.value = "";
}

function Delete(){
    input.value = input.value.slice(0, -1);
}

let signs = document.querySelectorAll(".signs")

signs.forEach(btn => {
    btn.addEventListener("click", ()=>{
        let sign = ["+","-","÷","×","%"]
        if(sign.includes(input.value.trim()[input.value.length - 1]) || input.value.trim() == ""){
            return;
        }else {
            input.value += btn.value
        }
    })
})


function Result(){
    if (document.querySelector(".quad").classList.contains("none")){
        solveEquation()
    }else {
        solveQuad()
    }
}

function solveQuad(){
    let a,b,c;

    a = document.getElementById("one")
    b = document.getElementById("two")
    c = document.getElementById("three")

    a = Number(a.value)
    b = Number(b.value)
    c = Number(c.value)

    let d = b**2 - 4*a*c;
    let root_d = d**0.5;

    let root1 = (-b + root_d) / (2*a)
    let root2 = (-b - root_d) / (2*a)

    if(root1.toString().includes(".") || root2.toString().includes(".")){
        root1 = root1.toFixed(2)
        root2 = root2.toFixed(2)
    }

    input.value = `Result = ${root1} or ${root2}`;
    console.log(input.value)

    document.querySelector(".quad").classList.toggle("none")
    document.querySelector(".calc").classList.toggle("none")
}


function solveEquation(){
    let value = input.value;
    
    let split_value = value.split("")
    let sign = ["+","-","÷","×","%"]

    let new_value_1 = split_value.map(x => x == "×"? "*":x)
    let new_value_2 = new_value_1.map(x => x == "÷"? "/":x)

    console.log(new_value_2)

    str_value = new_value_2.join("")

    input.value = eval(str_value)
}


let main = document.querySelector(".main")
let calc = document.querySelector(".calc")
let quad = document.querySelector(".quad")
let btns = document.querySelectorAll(".btnn")

main.classList.add("default")
calc.classList.add("default")
quad.classList.add("default")
btns.forEach(x => x.classList.add("default"))

function change1(){
    main.classList.toggle("green")
    calc.classList.toggle("green")
    quad.classList.toggle("green")
    btns.forEach(x => x.classList.toggle("green"))
    main.classList.remove("blue")
    calc.classList.remove("blue")
    quad.classList.remove("blue")
    btns.forEach(x => x.classList.remove("blue"))
    main.classList.remove("blury")
    calc.classList.remove("blury")
    quad.classList.remove("blury")
    btns.forEach(x => x.classList.remove("blury"))
}

function change2(){
    main.classList.toggle("blue")
    calc.classList.toggle("blue")
    quad.classList.toggle("blue")
    btns.forEach(x => x.classList.toggle("blue"))
    main.classList.remove("green")
    calc.classList.remove("green")
    quad.classList.remove("green")
    btns.forEach(x => x.classList.remove("green"))
    main.classList.remove("blury")
    calc.classList.remove("blury")
    quad.classList.remove("blury")
    btns.forEach(x => x.classList.remove("blury"))
}

function change3(){
    main.classList.toggle("blury")
    calc.classList.toggle("blury")
    quad.classList.toggle("blury")
    btns.forEach(x => x.classList.toggle("blury"))
    main.classList.remove("green")
    calc.classList.remove("green")
    quad.classList.remove("green")
    btns.forEach(x => x.classList.remove("green"))
    main.classList.remove("blue")
    calc.classList.remove("blue")
    quad.classList.remove("blue")
    btns.forEach(x => x.classList.remove("blue"))
}