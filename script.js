document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const close = document.getElementsByClassName('close')[0];

    // Show modal on image click
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close modal when clicking on close button
    close.onclick = function() {
        modal.style.display = 'none';
    };

    // Filter functionality
    document.querySelectorAll('#filter-buttons button').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            document.querySelectorAll('.portfolio-item').forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
