let docTitle = document.title;
window.addEventListener("blur", () => { document.title ="（ つ Д ｀）Come back "; })
window.addEventListener("focus", () => { document.title = docTitle; })
 
const videos = document.querySelectorAll('.object-fit-fill');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});








//loging in google api
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


