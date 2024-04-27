const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionE1 = document. 
getElementById("question");

const inputE1 = document.getElementById
("input")

const fromE1 = document.getElementById
("form")

let score = 0;

questionE1.innerText = `what is ${num1} 
multiply by ${num2}?`;

const correctAns = num1 * num2 ;

formE1.addEventListener("submit", ()=>{
    const userAns = +inputE1 . value;
    if(userAns === correctAns) {
        score++;
        console.log(score);

    }else{
        score--;
        console.log(score);

    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.parsestringify(score))
    
}
 
