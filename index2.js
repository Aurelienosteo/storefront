function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imageSrc;
    modal.classList.add('active');
    
    // Fermer la modal en cliquant n'importe où
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

// Fermer avec la touche Echap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});