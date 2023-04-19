// write your code here 
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens => {
    ramens.forEach(ramen => {
        addRamenImageToMenu(ramen)
    })
    addRamenDetails(ramens[0])
})
const ramenMenu = document.getElementById("ramen-menu")
//Core Deliverable 1
function addRamenImageToMenu(ramen){
    const ramenImage = document.createElement("img")
    ramenImage.src = ramen.image
    ramenMenu.appendChild(ramenImage)
    
    //Core Deliverable 2
    ramenImage.addEventListener("click", () => {
        addRamenDetails(ramen)
    })
}

function addRamenDetails(ramen) {
    // console.log(ramen)
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

const newRamenForm = document.querySelector('#new-ramen')
newRamenForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const newImageValue = document.querySelector('#new-image').value
      const newNameValue = document.querySelector('#new-name').value
      const newRestaurantValue = document.querySelector('#new-restaurant').value
      const newRatingValue = document.querySelector('#new-rating').value
      const newCommentValue = document.querySelector('#new-comment').value
      
      const newRamen = {
        name : newNameValue,
        restaurant : newRestaurantValue,
        image : newImageValue,
        rating : Number(newRatingValue),
        comment : newCommentValue
      }
    addRamenImageToMenu(newRamen)
});

  