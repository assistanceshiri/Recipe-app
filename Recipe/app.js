const searchBox = document.querySelector(".Searchbox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer  = document.querySelector(".recipe-container");
const recipedetailscontent =document.querySelector(".recipe-details-content");
const recipecloseBtn =document.querySelector(".recipe-close-Btn");
 

const fetchRecipes =  async(query) => {
    recipeContainer.innerHTML = " Fetching recipes......";
   const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
   const response = await data.json();
 

   recipeContainer.innerHTML ="";
   response.meals.forEach(meal =>{
       const recipeDiv = document.createElement('div');
       recipeDiv.classList.add('recipe');
       recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p> <span>${meal.strArea}Dish</span></P>
        <p> Belong to <span>${meal.strCategory}</span> Category</p>

       `
       const button = document.createElement('button');
       button.textContent ="view Recipe";
       recipeDiv.appendChild(button); 

     // adding event to 
     
       button.addEventListener('click',()=>{
             openRecipepopup(meal);
       });





       recipeContainer.appendChild(recipeDiv);
   });
    
}
 
const  openRecipepopup = (meal) => {
    recipedetailscontent.textContent = `
    <h2>${meal.strMeal} </h2>
    `
    recipedetailscontent.parentElement.style.display ="block";
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
   // console.log("butoon co");
});

