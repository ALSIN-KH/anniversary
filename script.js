// Description text with 'ㅤ' (invisible Hangul filler character) instead of spaces
const descriptionText = "Celebratingㅤ9ㅤamazingㅤmonthsㅤtogetherㅤ💖ㅤ—ㅤeveryㅤmomentㅤwithㅤyouㅤhasㅤbeenㅤaㅤbeautifulㅤjourneyㅤfilledㅤwithㅤlove,ㅤlaughter,ㅤandㅤunforgettableㅤmemories.ㅤFromㅤourㅤfirstㅤsmileㅤtoㅤtheㅤcountlessㅤadventuresㅤwe'veㅤshared,ㅤyou’veㅤmadeㅤmyㅤlifeㅤbrighterㅤandㅤmoreㅤmeaningful.ㅤThroughㅤeveryㅤchallengeㅤandㅤjoy,ㅤourㅤbondㅤhasㅤonlyㅤgrownㅤstronger.ㅤHere’sㅤtoㅤcherishingㅤtheㅤpastㅤmonthsㅤandㅤlookingㅤforwardㅤtoㅤaㅤfutureㅤfullㅤofㅤhappiness,ㅤdreams,ㅤandㅤendlessㅤlove.ㅤThankㅤyouㅤforㅤbeingㅤmyㅤpartner,ㅤmyㅤbestㅤfriend,ㅤandㅤmyㅤgreatestㅤblessing.ㅤHappyㅤanniversary,ㅤandㅤmayㅤourㅤloveㅤcontinueㅤtoㅤflourishㅤforever.";

function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  const validUsername = "Chanbormey";
  const validPassword = "Chanbormey";

  if (user === validUsername && pass === validPassword) {
    // Hide login screen, show main screen
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'flex';

    // Update profile info dynamically
    document.getElementById('info-name').innerText = validUsername;

    // Start typing animation for description
    typeAnimation("animated-description", descriptionText);
  } else {
    alert('Invalid username or password!');
  }
}

function toggleProfile() {
  const popup = document.getElementById("profile-popup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function logout() {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';

  // Clear inputs
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  // Hide profile popup if open
  document.getElementById("profile-popup").style.display = "none";

  // Clear description box
  document.getElementById("animated-description").innerText = '';
}

// Typing animation function
function typeAnimation(elementId, text, index = 0) {
  if (index < text.length) {
    document.getElementById(elementId).innerText += text.charAt(index);
    setTimeout(() => typeAnimation(elementId, text, index + 1), 25);
  }
}

// Photo preview swapping function
function selectPhoto(clickedImg) {
  const mainPhoto = document.getElementById("main-photo");

  if (clickedImg === mainPhoto) return; // Already main, no action

  // Swap src
  const tempSrc = mainPhoto.src;
  mainPhoto.src = clickedImg.src;
  clickedImg.src = tempSrc;

  // Swap classes
  mainPhoto.classList.remove("main");
  mainPhoto.classList.add("small");

  clickedImg.classList.remove("small");
  clickedImg.classList.add("main");

  // Swap IDs
  mainPhoto.id = "";
  clickedImg.id = "main-photo";
}

// Optional: Close profile popup when clicking outside
window.onclick = function(event) {
  const popup = document.getElementById("profile-popup");
  const profileIcon = document.querySelector(".profile-icon");

  if (!popup.contains(event.target) && !profileIcon.contains(event.target)) {
    popup.style.display = "none";
  }
};
