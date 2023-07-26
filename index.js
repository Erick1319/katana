const symbols = document.querySelectorAll(".logos");

function handleSymbolClick(event) {
   
    symbols.forEach((symbol) => symbol.classList.remove("active"));

    event.target.classList.add("active");
}

symbols.forEach((symbol) => {
    symbol.addEventListener("click", handleSymbolClick);
});

