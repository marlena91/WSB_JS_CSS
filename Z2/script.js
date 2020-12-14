document.addEventListener("DOMContentLoaded", function (event) {

    const categories = document.getElementById("categories");

    axios.get("https://api.chucknorris.io/jokes/categories").then(response => {
        response.data.forEach(c => {
            const option = createOption(c);
            categories.append(option);
        })
    });
});

function createOption(val) {
    const option = document.createElement("option");
    option.value = val;
    option.innerText = val;
    return option;
}

function createImage(src) {
    const image = document.createElement("img");
    image.src = src;

    return image;
}

function createJokeDiv(joke) {
    const div = document.createElement("div");
    div.innerText = joke;
    return div;
}

function generateJoke() {

    const category = document.getElementById("categories").value;
    const jokeDiv = document.getElementById("joke-div");

    jokeDiv.innerHTML = "";

    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(response => {

        const image = createImage(response.data.icon_url);
        const joke = createJokeDiv(response.data.value);

        jokeDiv.append(image);
        jokeDiv.append(joke);
    })
}

