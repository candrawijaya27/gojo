// Fungsi untuk memunculkan alert
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

// Menangkap data otomatis dari URL (Sistem Jembatan/Bridge)
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramUser = urlParams.get('name');
    const paramMessage = urlParams.get('message');

    if (paramUser || paramMessage) {
        // Jika ada data yang masuk dari luar, gunakan data asli
        triggerAlert(
            paramUser || "Seseorang", 
            paramMessage || "Mengirim Media Share!", 
            "Media Share Alert"
        );
    } else {
        // Mode uji coba lokal (jika dibuka biasa)
        setTimeout(() => {
            triggerAlert("Azel Gaming", "Mantap banget stream-nya! Lanjutkan terus bang! 🔥", "Media Share Alert");
        }, 1000);
    }
};
