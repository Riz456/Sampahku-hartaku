 const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  const dropdown = document.getElementById('navDropdown');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  const slider = document.getElementById("slider");
  document.getElementById("nextBtn").onclick = () => slider.scrollBy({ left: 270, behavior: "smooth" });
  document.getElementById("prevBtn").onclick = () => slider.scrollBy({ left: -350, behavior: "smooth" });
  
  document.getElementById("waForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  const nomor = "6283844173959"; 

  const teks = `Halo, saya ${nama}%0AEmail: ${email}%0A%0APesan:%0A${pesan}`;

  const url = `https://wa.me/${nomor}?text=${teks}`;
  window.open(url, "_blank");
});