document.addEventListener("DOMContentLoaded", () => {
    const diceBtn = document.getElementById("dice-btn");
    const adviceNumber = document.querySelector("h5");
    const adviceText = document.querySelector("h2");

    diceBtn.addEventListener("click", () => {
        // Add active class for animation
        diceBtn.classList.add("active");
        setTimeout(() => diceBtn.classList.remove("active"), 200);

        // Example: Random advice (you can replace with API call later)
        const advices = [
            "Stay hungry, stay foolish.",
            "The best way out is always through.",
            "Dream big, start small, act now.",
            "Action is the foundational key to success.",
            "Your limitation—it’s only your imagination."
        ];

        const randomIndex = Math.floor(Math.random() * advices.length);

        adviceNumber.textContent = `ADVICE # ${Math.floor(Math.random() * 200)}`;
        adviceText.textContent = advices[randomIndex];
    });
});