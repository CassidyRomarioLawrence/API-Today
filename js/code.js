// fetch('../data/data.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         let results = data.results;
//         let record = results.filter((item) => {
//         return item.id == 1
//     })
//     console.table(record);
// })

// .catch (err=> {
//     console.log("Please try again later.");
// })

// let data = [8, 9, 12, "Cassidy", 50, 6, 0];
// data.splice(2,0, "yellow");
// console.log(data);

// Just display numbers
// console.log(data.filter(item => typeof item == 'number'));

// sort from smallest to biggest
// let onlyNumbers = data.filter(Number);
// console.log(onlyNumbers);
// let sortedValues = onlyNumbers.sort((a, b) => {
//     if (a < b)
//         return -1;
//     return
// });
// console.log(sortedValues)

// Async approach
// (async function fetchData() {
//     let response = await fetch('../data/data.json');
//     let data = await response.json();
//     console.log(data.results);
// })();
// row
let wrapper = document.querySelector('.wrapper');


async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=11");
    let data = await res.json();
    return data.results;
};

(async function display() {
    let data = await fetchData();
    data.forEach((item) => {
        // console.log(item);
        wrapper.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${item.picture.large}" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h5 class="card-title">${item.name.first}</h5>
  </div>
</div>`
    })
})();