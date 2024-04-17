// Implement copy functionality and dynamically load Terraform content
// If using syntax highlighting, integrate with highlight.js or similar library
// JavaScript to handle copy to clipboard and other interactive elements

function copyToClipboard() {
    var code = document.getElementById('editor').innerText;
    navigator.clipboard.writeText(code).then(function() {
        // Display a message or update the button text to show the code was copied
    }, function(err) {
        // Handle errors if the copy failed
    });
}

// Fetch and display the Terraform content from whoami.tf
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('whoami.tf')
        .then(response => response.text())
        .then(text => {
            document.querySelector('.editor code').textContent = text;
        })
        .catch(error => {
            document.querySelector('.editor code').textContent = 'Failed to load the Terraform file.';
        });
});
