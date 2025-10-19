document.addEventListener("DOMContentLoaded", () => {
  // 🎥 Modal de videos
  const videoItems = document.querySelectorAll(".video-item");
  videoItems.forEach(item => {
    item.addEventListener("click", () => {
      const videoId = item.getAttribute("data-video");
      showVideo(videoId);
    });
  });

  // 🍔 Menú responsive
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});

function showVideo(videoId) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="video-iframe">
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe>
      </div>
      <button class="close-btn" onclick="closeModal()">Cerrar</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.querySelector(".modal");
  if (modal) modal.remove();
}
