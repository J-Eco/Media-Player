let files;
function exMed() {
    const inputEl = document.getElementById('myFile').click();      
    inputEl.click();

    files = inputEl.files;
}

function handleFiles(files) {
    const previewDiv = document.getElementById("videoPlayer");

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file.type.startsWith("video/mp4")) {
            continue;
        }

        const video = document.createElement("video");
        video.classList.add("obj");
        video.file = file;
        video.setAttribute("slot", "media"); // sets needed slot='media' needed for media control
        previewDiv.appendChild(video);



        // code here reacts once a mp4/video file is added. This section adds media player controls.

        const mediaCon = document.createElement("media-control-bar");
        mediaCon.file = file;
        previewDiv.appendChild(mediaCon);

        const mediaPlay = document.createElement("media-play-button");
        mediaPlay.file = file;
        previewDiv.appendChild(mediaPlay);

        const mediaMute = document.createElement("media-mute-button");
        mediaMute.file = file;
        previewDiv.appendChild(mediaMute);

        const mediaVolControl = document.createElement("media-volume-range");
        mediaVolControl.file = file;
        previewDiv.appendChild(mediaVolControl);
        

        // end

        const reader = new FileReader();
        reader.onload = (e) => {
            video.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

document.getElementById("myFile").addEventListener("change", function (e) {
    const files = e.target.files;
    if (files.length > 0) {
        document.getElementById("videoPlayer").innerHTML = ""; // Clear existing content
        handleFiles(files);
    }
});