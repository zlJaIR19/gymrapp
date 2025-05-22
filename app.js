import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Mostrar modal con animación y accesibilidad
const modal = document.getElementById("modal");
const openBtns = [
  document.getElementById("downloadBtn"),
  document.getElementById("downloadBtn2")
];
const closeBtn = document.querySelector(".close");

openBtns.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => {
      modal.classList.add("show");
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      modal.focus();
    });
  }
});

function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
}

closeBtn.addEventListener("click", closeModal);

// Cerrar modal al hacer click fuera del contenido
modal.addEventListener("mousedown", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Cerrar modal con ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});

// Navegación accesible a la sección MVP
const mvpNav = document.getElementById("mvpNav");
if (mvpNav) {
  mvpNav.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("mvp").scrollIntoView({ behavior: "smooth" });
  });
}

// Formulario Fake Door Test
const waitlistForm = document.getElementById("waitlistForm");
waitlistForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  try {
    await addDoc(collection(db, "waitlist"), { email, timestamp: serverTimestamp() });
    alert("¡Gracias! Te avisaremos cuando esté lista.");
    closeModal();
    window.location.href = "https://forms.gle/XYZ123"; // Link a encuesta
  } catch (error) {
    console.error("Error: ", error);
  }
});