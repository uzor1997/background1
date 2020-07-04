let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value +")";
    css.textContent = body.style.background + ";";
}
          
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// My Attempt
// function showStyle() {
//     if (css.value = "") {
//         let h3 = document.createElement("h3");
//         let h4= document.createTextNode("( to right, " + color1.value + ", " + color2.value + " )");
//         h3.appendChild(h4);
//         css.appendChild(h3);
//         css.value ="";
//     }
//



const febunacci = () => {
    let num = 0; 
    let storage = []; 
    for (let i=0; (num.toString().length) < 5 ; i++) {
        storage.push(num);
        if (num < 2) {
            num ++;
        } else {
            num += storage[i-1];
        }
    }
    console.log(storage);
    return storage;
}

febunacci();