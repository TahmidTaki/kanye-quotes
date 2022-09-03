const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(r => r.json())
        .then(d => view(d))
}
loadQuotes();
function view(d) {
    console.log(d);
    const blckQt = document.getElementById('quotes');
    blckQt.innerText = d.quote;
}