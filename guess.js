const input=document.querySelector('.guessInput');
const submitButton=document.querySelector('.guessSubmit');
const Error=document.querySelector('.guessError');
const resultText=document.querySelector('.guessResult');
// console.log(input);
// console.log(submitButton);
// console.log(Error);
console.log(resultText);

const generateNumber= ()=>{
    // console.log(Math.floor(Math.random() * 6)+1);
    return Math.floor(Math.random() * 6)+1;
}

// setInterval(randomNumber,1000);

const handleClick=()=>{
    Error.style.display="none"
    resultText.innerText="";
    console.log("button is clicked");
    const randomNumber=generateNumber();
    // console.log(randomNumber);
    let inputNumber=input.value;
    if(!inputNumber || isNaN(inputNumber) ||(inputNumber>6)||(inputNumber<1)){
        Error.style.display="block"
    }
    else{
        let score=0;
        inputNumber=parseInt(inputNumber);
        let difference=Math.abs(randomNumber-inputNumber);
        if(difference===1){
            score=1;
        }
        else if(difference===0){
            score=2;
        }
        
        resultText.innerText=`Actual number: ${randomNumber} \n your guess: ${inputNumber}\n your score: ${score}`;
        input.value="";
        input.focus();
    }

}
submitButton.addEventListener('click',handleClick);

