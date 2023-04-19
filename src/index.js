// write your code here
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens => {
    ramens.forEach(ramen => {
        addRamenImageToMenu(ramen)
    })
    addRamenDetails(ramens[0])
})

function addRamenImageToMenu(ramen){
    const ramenMenu = document.getElementById("ramen-menu")
    const ramenImage = document.createElement("img")
    ramenImage.src = ramen.image
    document.addEventListener("click", () => {
        addRamenDetails(ramen)
    })
    ramenMenu.appendChild(ramenImage)
}

function addRamenDetails(ramen) {
    console.log(ramen)
    const ramenDetailImage = document.querySelector(".detail-image")
    const ramenName = document.querySelector(".name")
    const ramenRestaurant = document.querySelector(".restaurant")
    const ramenRating = document.getElementById('rating-display')
    const ramenComment = document.getElementById('comment-display')
    ramenDetailImage.src = ramen.image
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    ramenRating.textContent = ramen.rating
    ramenComment.textContent = ramen.comment
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener("submit", (event) => {
      event.preventDefault();
      addRamenImageToMenu(event)
    })
  });

  