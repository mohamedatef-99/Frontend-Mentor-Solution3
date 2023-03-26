const links = document.getElementsByClassName("links")
const items = links[0].querySelectorAll('li')
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active")
        current[0].classList.remove("active")
        this.classList.add("active")
    })
}

// const links = document.getElementsByClassName("links");
// const items = links[0].querySelectorAll('li');
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     current[0].classList.remove("active");
//     this.classList.add("active");
//   });
// }
