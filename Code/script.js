function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon")

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function downloadCV() {
  const link = document.createElement('a');
  link.href = '../assets/vaibhav posture latest resume.pdf';  // Correct file path
  link.download = 'Vaibhav_Posture_DevOps_Resume.pdf';        // Custom filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}