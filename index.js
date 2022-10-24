var xhr = new XMLHttpRequest();

function promise(value) {
    return new Promise(function (resolve, reject) {
        if(value) {
            resolve("Value true");
        } else {
            reject("Value false");
        }
    });
}

// promise(false).then(
//     function(response) {
//         console.log(response);
//     },
//     function(error) {
//         console.log(error);
//     }
// );

// promise(true)
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     }
// );

function randomImages() {    
    xhr.open("GET", "data.json", true);
    xhr.send();    
    for (let i = 0; i <= images.length; i++) {
        let image = images[Math.floor(Math.random() * 15)];
        var result = document.getElementById("result");
        var img = document.createElement("img");
        img.src = image;
        result.appendChild(img);
    }
}

document.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        randomImages();
    } 
});