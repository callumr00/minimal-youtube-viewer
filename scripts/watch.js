const videoId = new URLSearchParams(window.location.search).get('v')

if (videoId) {
    const video_container = document.getElementById("videoContainer");
    const video_player = document.createElement("iframe");
    video_player.classList.add("video__player");
    video_player.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    video_player.setAttribute("frameborder", "0");
    video_player.setAttribute("allow", "encrypted-media");
    video_container.appendChild(video_player);
}