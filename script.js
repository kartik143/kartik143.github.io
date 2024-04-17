function copyToClipboard(elementId) {
    var code = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(code).then(function() {
        alert('Terraform code copied to clipboard!');
    }, function(err) {
        alert('Failed to copy Terraform code.');
    });
}

document.getElementById('copyButton').addEventListener('click', function() {
    copyToClipboard('editor');
});

window.addEventListener('DOMContentLoaded', (event) => {
    fetch('whoami.tf')
        .then(response => response.text())
        .then(text => {
            document.getElementById('editor').textContent = text;
        })
        .catch(error => {
            document.getElementById('editor').textContent = 'Failed to load the Terraform file.';
        });
});
