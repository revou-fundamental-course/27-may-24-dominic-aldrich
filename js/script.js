function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

   
    if (sectionId === 'home') {
        document.getElementById('message').classList.remove('hidden');
    } else {
        document.getElementById('message').classList.add('hidden');
    }


    const hobbyBtn = document.querySelector('a[href="#hobby"]');
    const contactBtn = document.querySelector('a[href="#message"]');

    if (sectionId !== 'home') {
        hobbyBtn.classList.add('hidden'); 
        contactBtn.classList.add('hidden');
    } else {
        hobbyBtn.classList.remove('hidden'); 
        contactBtn.classList.remove('hidden'); 
    }

 
    if (sectionId !== 'home') {
        scrollToSection('home');
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 500);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const userName = prompt('Siapa Namamu?', 'Tulis Nama');
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

    // Banner Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % totalSlides;
        setTimeout(showSlides, 3000);
    }

    showSlides();
});
