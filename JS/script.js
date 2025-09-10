const diceBtn = document.getElementById('.dice-btn');
const adviceNumber = document.querySelector('h5');
const adviceText = document.querySelector('h2');



const functionadvice = () => {
    fetch('http://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        adviceNumber.textcontent = data.slip.advice;
        diceBtn.textcontent = data.slip.id;
    })
.catch(error => {
    console.error(error);
    adviceNumber.textcontent = "Error fetching advice.";
    console.error("Error:", error)
    })
}


async function getRandomAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice'); 

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    adviceNumber.textContent = data.slip.advice;

    diceBtn.textContent = data.slip.id;

    console.log("RandomAdvice:", data.slip.advice);
  } catch (error) {
    console.error("Error fetching advice:", error);
    adviceNumber.textContent = "Error fetching advice.";
    adviceText.textContent = "";
  }
};

// attach the function to the button
diceBtn.addEventListener("click", getRandomAdvice);