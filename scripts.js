document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('.nav-list');
    nav.classList.toggle('showing');
});

// Add event listeners for dropdowns to handle clicks
document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
    });
});
