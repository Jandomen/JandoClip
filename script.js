document.addEventListener("DOMContentLoaded", function() {
    var videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var videoId = item.getAttribute('data-video');
            showVideo(videoId);
        });
    });
});

function showVideo(videoId) {
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="video-iframe">
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            </div>
            <button class="close-btn" onclick="closeModal()">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'none';
        modal.remove();
    }
}
