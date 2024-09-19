document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const close = document.getElementsByClassName('close')[0];

    let images = [];

    let halfHeight = window.innerHeight / 2;

    // Select the element to center
    let right = document.getElementById("right-arrow");
    right.style.top = (halfHeight - right.offsetHeight / 2) + "px";

    let left = document.getElementById("left-arrow");
    left.style.top = (halfHeight - left.offsetHeight / 2) + "px";

    // Show modal on image click
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'flex'; // Use flex to center the modal
            modalImg.src = this.src;
            // captionText.innerHTML = this.alt;
            // captionText.style.color = "white";
            // captionText.style.fontFamily =  "'Comic Sans MS', 'Comic Sans', cursive";
            // captionText.style.fontSize = "24px";
        });
        images.push(item.src);
    });

    right.onclick = function() {
        for (let i = 0; i < images.length; i++) {
            if (modalImg.src == images[i]) {
                if (i == images.length - 1) {
                    modalImg.src = images[0];
                } else {
                    modalImg.src = images[i + 1];
                }
                break;
            }
        }
    }

    left.onclick = function() {
        for (let i = 0; i < images.length; i++) {
            if (modalImg.src == images[i]) {
                if (i == 0) {
                    modalImg.src = images[images.length - 1];
                } else {
                    modalImg.src = images[i - 1];
                }
                break;
            }
        }
    }


    // Close modal when clicking on close button
    close.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Filter functionality
    document.querySelectorAll('#filter-buttons button').forEach(button => {
        button.addEventListener('click', function() {
            images = [];
            // Remove active class from all buttons
            document.querySelectorAll('#filter-buttons button').forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            document.querySelectorAll('.portfolio-item').forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    images.push(item.src);
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
