document.getElementById('gift-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const occasion = document.getElementById('occasion').value;
    const preferences = document.getElementById('preferences').value;

    fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-proj-BQD7sPW2xlBQkucEHWlcT3BlbkFJ5UfO1Uu0a6ht07zphL9D'
        },
        body: JSON.stringify({
            prompt: Empfehle ein Geschenk für den Anlass: ${occasion} mit den folgenden Präferenzen: ${preferences},
            max_tokens: 100
        })
    })
    .then(response => response.json())
.then(data => {
        const recommendations = data.choices[0].text.trim();
        document.getElementById('recommendations').innerHTML = recommendations.split('\n').map(item => <p>${item}</p>).join('');
    })
    .catch(error => console.error('Error:', error));
});
