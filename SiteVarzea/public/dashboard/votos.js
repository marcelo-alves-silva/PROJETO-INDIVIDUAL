document.addEventListener('DOMContentLoaded', () => {
    const votes = JSON.parse(localStorage.getItem('votes')) || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    document.querySelectorAll('.team-logo').forEach(logo => {
        logo.addEventListener('click', (event) => {
            const teamId = event.target.getAttribute('data-team');
            votes[teamId]++;
            localStorage.setItem('votes', JSON.stringify(votes));
            showAlert(`parabéns, você votou no seu time favorito, acompanhe na aba "Favoritos da galera"`);
        });
    });
});

function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertBox.style.display = 'flex';
}

function closeAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';
}