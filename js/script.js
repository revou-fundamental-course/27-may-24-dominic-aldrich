/* Script.JS */ 
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const userName = prompt('Please enter your name:', 'Tulis Namamu Disini');
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }

    const form = document.getElementById('messageForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('messageInput').value;

        document.getElementById('currentTime').textContent = new Date().toString();
        document.getElementById('resultName').textContent = name;
        document.getElementById('resultDob').textContent = dob;
        document.getElementById('resultGender').textContent = gender;
        document.getElementById('resultMessage').textContent = message;

        document.getElementById('formResult').classList.remove('hidden');
    });

    const scrollToMessageLink = document.getElementById('scrollToMessage');
    scrollToMessageLink.addEventListener('click', function(event) {
        event.preventDefault();
        const messageSection = document.getElementById('messageInput');
        messageSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
});
