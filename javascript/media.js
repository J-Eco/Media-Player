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
        video.setAttribute("slot", "media"); // sets needed slot='media' needed for media chrome
        previewDiv.appendChild(video);



        // code here reacts once a mp4/video file is added. This section adds media player controls.

        const mediaPlayer = 
            `<media-control-bar>

                <media-play-button></media-play-button>
                
                <media-seek-forward-button></media-seek-forward-button>
                
                <media-seek-backward-button></media-seek-backward-button>
                
                <media-mute-button></media-mute-button>
                
                <media-volume-range></media-volume-range>
                
                <media-time-range></media-time-range>
                
                <media-time-display></media-time-display>
                
                <media-captions-button></media-captions-button>
                
                <media-playback-rate-button></media-playback-rate-button>
                
                <media-fullscreen-button></media-fullscreen-button>
            
            </media-control-bar>`;
                            

        document.getElementById("videoPlayer").insertAdjacentHTML("afterbegin", mediaPlayer);
        
        
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


// not deleting the bottom. Its a reminder to myself on how not to do it. Originally i did  a repetitive appenchild. The media controls were vertical
// and messed up. the way above is a lot simpler.


        // const mediaCon = document.createElement("media-control-bar");
        // mediaCon.file = file;
        // previewDiv.appendChild(mediaCon);

        // const mediaPlay = document.createElement("media-play-button");
        // mediaPlay.file = file;
        // previewDiv.appendChild(mediaPlay);

        // const mediaMute = document.createElement("media-mute-button");
        // mediaMute.file = file;
        // previewDiv.appendChild(mediaMute);

        // const mediaVolControl = document.createElement("media-volume-range");
        // mediaVolControl.file = file;
        // previewDiv.appendChild(mediaVolControl);
        
        // const mediaRange = document.createElement("media-time-range");
        // mediaRange.file = file;
        // previewDiv.appendChild(mediaRange);

        // const mediaPip = document.createElement("media-pip-button");
        // mediaPip.file = file;
        // previewDiv.appendChild(mediaPip);

        // const mediaFull = document.createElement("media-fullscreen-button");
        // mediaFull.file = file;
        // previewDiv.appendChild(mediaFull);

        // end