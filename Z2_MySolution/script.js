function createImage(src) {
    const image = document.createElement("img");
    image.src = src;

    return image;
}

function generatePicture() {

    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const blur = document.getElementById("add1").checked;
    const grayscale = document.getElementById("add2").checked;
    const pictureDiv = document.getElementById("picture-div");

    pictureDiv.innerHTML = "";
    let additionalOption = "";

    if(blur){
        additionalOption = "?blur";
    } else if(grayscale){
        additionalOption = "?grayscale"
    }

    axios.get(`https://picsum.photos/${width}/${height}${additionalOption}`).then(response => {

        const image = createImage(response.request.responseURL);

        pictureDiv.append(image);

    })
}