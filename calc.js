let calc = document.querySelector(".calc")
let quad = document.querySelector(".quad")
let main = document.querySelector(".main")
let btn = document.querySelectorAll(".btnn")
let quadInp = document.querySelector(".quad_inp")
quad.classList.add("none")
calc.classList.add("all")
quad.classList.add("default")
main.classList.add("default")
calc.classList.add("default")
// btn.classList.add("default")

// getting all buttons for styling
btn.forEach(btns => {
  btns.classList.add("default")
})

function Quad() {
  if (quad.classList.contains("none")) {
    quad.classList.remove("none")
    calc.classList.remove("all")
    calc.classList.add("none")
    quad.classList.add("all")
    document.getElementById("one").focus()
  }
  else {
    quad.classList.add("none")
    quad.classList.remove("all")
    calc.classList.remove("none")
  }
}
function Result() {
  let i = document.getElementById("one")
  let j = document.getElementById("two")
  let k = document.getElementById("three")
  let result = document.getElementById("res")
  if (result.value != "" || quad.classList.contains("all")) {
    if (quad.classList.contains("all")) {
      let a = Number(i.value);
      let b = Number(j.value);
      let c = Number(k.value);
      let d = b ** 2;
      let e = 4 * a * c;
      let f = (d - e) ** 0.5;
      let g = (-b + f) / 2 * a;
      let h = (-b - f) / 2 * a;
      quad.classList.remove("all");
      quad.classList.add("none");
      calc.classList.remove("none");
      calc.classList.add("all")
      result.value = `Result = ${g} or ${h}`
      i.value = `Result`
      j.value = `${g}`
      k.value = `${h}`


    }
    else {
      let num1 = document.getElementById("res").value;
      let num2 = eval(num1);
      document.getElementById("res").value = num2;
    }
  } else {
    result.value = ""
  }
}
function Clear() {
  var inp = document.getElementById("res");
  inp.value = "";
}
function Back() {
  let back = document.getElementById("res");
  back.value = back.value.slice(0, -1)
}

// Buttons function
let v = document.getElementById("res")
let num_eval = eval(v.value)
function Solve(val) {
  if(v.value != num_eval){
    v.value += val
  }else{
    v.value = " "
    v.value += val
  }
}


function change1() {
  let button = document.querySelectorAll(".btnn")
  button.forEach(btn => {
    if (btn.classList.contains("default")) {
      btn.classList.remove("default")
      btn.classList.add("green")
      quad.classList.remove("default")
      quad.classList.add("green")
      main.classList.remove("default")
      main.classList.add("green")
      calc.classList.remove("default")
      calc.classList.add("green")
    } else if (btn.classList.contains("blue")) {
      btn.classList.remove("blue")
      btn.classList.add("green")
      quad.classList.remove("blue")
      quad.classList.add("green")
      main.classList.remove("blue")
      main.classList.add("green")
      calc.classList.remove("blue")
      calc.classList.add("green")
    } else if (btn.classList.contains("blury")) {
      btn.classList.remove("blury")
      btn.classList.add("green")
      quad.classList.remove("blury")
      quad.classList.add("green")
      main.classList.remove("blury")
      main.classList.add("green")
      calc.classList.remove("blury")
      calc.classList.add("green")
    } else {
      btn.classList.remove("green")
      btn.classList.add("default")
      quad.classList.remove("green")
      quad.classList.add("default")
      main.classList.remove("green")
      main.classList.add("default")
      calc.classList.remove("green")
      calc.classList.add("default")
    }
  });
}

function change2() {
  let button = document.querySelectorAll(".btnn")
  button.forEach(btn => {
    if (btn.classList.contains("default")) {
      btn.classList.remove("default")
      btn.classList.add("blue")
      quad.classList.remove("default")
      quad.classList.add("blue")
      main.classList.remove("default")
      main.classList.add("blue")
      calc.classList.remove("default")
      calc.classList.add("blue")
    } else if (btn.classList.contains("green")) {
      btn.classList.remove("green")
      btn.classList.add("blue")
      quad.classList.remove("green")
      quad.classList.add("blue")
      main.classList.remove("green")
      main.classList.add("blue")
      calc.classList.remove("green")
      calc.classList.add("blue")
    } else if (btn.classList.contains("blury")) {
      btn.classList.remove("blury")
      btn.classList.add("blue")
      quad.classList.remove("blury")
      quad.classList.add("blue")
      main.classList.remove("blury")
      main.classList.add("blue")
      calc.classList.remove("blury")
      calc.classList.add("blue")
    } else {
      btn.classList.remove("blue")
      btn.classList.add("default")
      quad.classList.remove("blue")
      quad.classList.add("default")
      main.classList.remove("blue")
      main.classList.add("default")
      calc.classList.remove("blue")
      calc.classList.add("default")
    }
  });
}

function change3() {
  let button = document.querySelectorAll(".btnn")
  button.forEach(btn => {
    if (btn.classList.contains("default")) {
      btn.classList.remove("default")
      btn.classList.add("blury")
      quad.classList.remove("default")
      quad.classList.add("blury")
      main.classList.remove("default")
      main.classList.add("blury")
      calc.classList.remove("default")
      calc.classList.add("blury")
    } else if (btn.classList.contains("blue")) {
      btn.classList.remove("blue")
      btn.classList.add("blury")
      quad.classList.remove("blue")
      quad.classList.add("blury")
      main.classList.remove("blue")
      main.classList.add("blury")
      calc.classList.remove("blue")
      calc.classList.add("blury")
    } else if (btn.classList.contains("green")) {
      btn.classList.remove("green")
      btn.classList.add("blury")
      quad.classList.remove("green")
      quad.classList.add("blury")
      main.classList.remove("green")
      main.classList.add("blury")
      calc.classList.remove("green")
      calc.classList.add("blury")
    } else {
      btn.classList.remove("blury")
      btn.classList.add("default")
      quad.classList.remove("blury")
      quad.classList.add("default")
      main.classList.remove("blury")
      main.classList.add("default")
      calc.classList.remove("blury")
      calc.classList.add("default")
    }
  });
}