// async function getDog(){
//     const resp = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data =  await resp.json();
//     // console.log(data);
//     showdata(data.message);
// }
// getDog();





const dogbtn = document.getElementById("dogbtn");
function getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            showdata(data.message);
        })
        .catch();
}
getDog();

function showdata(dogimage) {
    document.getElementById("dog").innerHTML = `<img src="${dogimage}" alt="">`
}
dogbtn.addEventListener("click", () => {
    getDog();
});

