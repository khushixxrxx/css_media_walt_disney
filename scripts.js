// JavaScript to toggle visibility of sections
function showAbout() {
    showSection('about-section');
}

function showNews() {
    showSection('news-section');
}

function showInvestors() {
    showSection('investors-section');
}

function showCareers() {
    showSection('careers-section');
}

function showContact() {
    showSection('contact-section');
}

function showSection(sectionId) {
    // Hide all content sections
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}
