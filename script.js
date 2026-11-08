function triggerAlert(username, message, title = "Media Share Alert") {
    const alertBox = document.getElementById('alertBox');
    const titleEl = document.getElementById('alertTitle');
    const usernameEl = document.getElementById('alertUsername');
    const messageEl = document.getElementById('alertMessage');

    // Masukkan data teks ke elemen
    titleEl.textContent = title;
    usernameEl.textContent = username;
    messageEl.textContent = message;

    // Munculkan animasi alert
    alertBox.classList.add('show');

    // Sembunyikan otomatis setelah 6 detik
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 6000);
}

// Simulasi uji coba saat file dibuka di OBS
window.onload = () => {
    setTimeout(() => {
        triggerAlert("Azel Gaming", "Mantap banget stream-nya! Lanjutkan terus bang! 🔥", "Media Share Alert");
    }, 1000);
};