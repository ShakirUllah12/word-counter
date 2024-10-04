const userText = document.querySelector("#our-text");

userText.addEventListener("input", ()=> {
    // FOR WORDS 
    let words =  document.getElementById("wordS");
    let countText = userText.value;

    let totalWords = countText.length;
    words.innerText = totalWords;

    // NOW FOR CHART 
    // let chart = document.getElementById("Char");
    // let totalChar = countText.length;  // Get the total number of characters
    // chart.innerText = totalChar;  // Display the character count
});