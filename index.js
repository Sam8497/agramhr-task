document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#activities').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});