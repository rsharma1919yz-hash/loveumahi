/* ================= PASSWORD ================= */
function unlock() {
  const pass = document.getElementById("pass").value;
  if (pass === "2124") {
    document.getElementById("password").style.display = "none";
    document.getElementById("main").classList.remove("hidden");

    // 🎵 start background music (never stops)
    const music = document.getElementById("music");
    music.volume = 0.3;
    music.loop = true;
    music.play();
  } else {
    alert("Wrong password 🥺");
  }
}

/* ================= START EXPERIENCE ================= */
function start() {

  // 🐱 remove first cat
  document.getElementById("cat").style.display = "none";

  // ▶ hide play button & text
  document.querySelector("button").style.display = "none";

  // 📖 show story
  document.getElementById("story").classList.remove("hidden");

  // 📖 → 📸 story to photos
  setTimeout(() => {
    document.getElementById("story").style.display = "none";
    document.getElementById("photos").classList.remove("hidden");
  }, 15000);

  // 📸 → 🎬 photos to video
  setTimeout(() => {
    document.getElementById("photos").style.display = "none";
    document.getElementById("videoBox").classList.remove("hidden");

    const video = document.getElementById("vid");
    video.currentTime = 0;
    video.play();

    // ⏱️ FORCE final page after 14 sec (NO BUG)
    setTimeout(showFinalPage, 14000);

  }, 22000);
}

/* ================= FINAL PAGE ================= */
function showFinalPage() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:white;
      color:black;
      text-align:center;
      padding:40px;
      font-family:Arial,sans-serif;
    ">
      <div style="width:80%; font-size:20px; line-height:1.7;">
        <img src="cat_final.png" width="140"><br><br>

        <!-- ✍️ WRITE YOUR 100 WORD MESSAGE HERE -->
        <p>
        (Yahan apna final emotional message likho 💖  
        jo tum usse kehna chahte ho…)
        </p>
      </div>
    </div>
  `;
}
