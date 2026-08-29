document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.textContent = "☰";
    }));
  }

  const dateInput = document.querySelector("#date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  const params = new URLSearchParams(window.location.search);
  const packageInput = document.querySelector("#package");
  if (packageInput && params.get("package")) packageInput.value = params.get("package");

  const form = document.querySelector("#bookingForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const message = [
        "Hello Ajmer Caterers, I would like to request a catering quote.",
        "",
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Event Date: ${data.get("date")}`,
        `Guests: ${data.get("guests")}`,
        `Event Type: ${data.get("eventType")}`,
        `Food Type: ${data.get("foodType")}`,
        `Location: ${data.get("location")}`,
        `Package: ${data.get("package") || "Not selected"}`,
        `Requirements: ${data.get("message") || "Not specified"}`
      ].join("\n");
      window.open("https://wa.me/919887254148?text=" + encodeURIComponent(message), "_blank", "noopener");
    });
  }
});
