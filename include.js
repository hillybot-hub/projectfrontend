// Function to load HTML content from a file
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // After loading header, highlight current page
            if (elementId === 'header-placeholder') {
                highlightCurrentPage();
            }
        })
        .catch(error => console.error('Error loading ' + url + ':', error));
}

// Function to highlight the current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#nav-list a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.style.color = '#db8e6b';
        }
    });
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header.html', 'header-placeholder');
    loadHTML('footer.html', 'footer-placeholder');
});
