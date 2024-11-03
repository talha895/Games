function signIn() {
  const username = document.getElementById("username").valjue;
  if (username) {
    alert(`Welcome, ${username}!`);
    document.getElementById("signInSection").style.display = "none";
    document.getElementById("uploadSection").style.display = "block";
  } else {
    alert("Please enter a username to sign in.");
  }
}

function uploadVideo() {
  const videoFile = document.getElementById("videoFile").files[0];
  if (videoFile) {
    const videoUrl = URL.createObjectURL(videoFile);
    const videoList = document.getElementById("videoList");
    
    const videoElement = document.createElement("video");
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoList.appendChild(videoElement);

    alert("Video uploaded successfully!");
  } else {
    alert("Please select a video to upload.");
  }
}

