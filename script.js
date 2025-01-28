document.getElementById('chatButton').addEventListener('click', () => {
    const question = document.getElementById('chatInput').value;
    const responses = {
        "What is open source?": "Open source refers to software with source code that anyone can inspect, modify, and enhance.",
        "What are your skills?": "I specialize in AWS, Terraform, Python, and DevOps automation.",
        "Tell me about your projects": "I have led cloud migrations, built scalable systems, and implemented data governance frameworks."
    };
    document.getElementById('chatOutput').innerText = responses[question] || "Sorry, I don't have an answer for that!";
});