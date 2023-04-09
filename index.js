
const link = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const content = document.querySelector(".content")

const getData = async (auto) => {
    const res = await fetch(auto)
    const { drinks } = await res.json()
    console.log(drinks);
    content.innerHTML = ``
    drinks.forEach((drink,i) => {
        content.innerHTML +=
            `
        <div class="item">
        <div class="item__img">
            <img src=${drink.strDrinkThumb} alt="">
        </div>
        <div class="item__name">
            ${drink.strDrink}
        </div>
        <div class="item__id">
            ${drink.idDrink}
        </div>
        <button data-myshyk="${i}" class="item__btn">Click</button>
    </div>
    `
    });
    const openModel = document.querySelectorAll(".item__btn");
    const popup = document.querySelector(".popup");
    const model = document.querySelector(".model")
    const closeModel = document.querySelector(".model__close");
    const buy = document.querySelector(".model__buy");

    openModel.forEach((btn) => {
        btn.addEventListener("click", async () => {
            popup.classList.add("active")
            // const result = await fetch("www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + btn.dataset.myshyk)
            // const dataId = await result.json()
            // model.querySelector(".model__name").innerText = dataId.drinks[0].strDrink
             
            console.log(btn.dataset.myshyk);

            model.querySelector(".model__name").innerText = drinks[btn.dataset.myshyk].strDrink
            model.querySelector(".model__id").innerText = drinks[btn.dataset.myshyk].idDrink
            model.querySelector(".model__text").innerText = drinks[btn.dataset.myshyk].strInstructions
            model.querySelector(".model__img img").src = drinks[btn.dataset.myshyk].strDrinkThumb
            model.querySelector(".model__description ul").innerHTML = `<li> ${drinks[btn.dataset.myshyk].strIngredient1} </li>`
            model.querySelector(".model__description ul").innerHTML += `<li> ${drinks[btn.dataset.myshyk].strIngredient2} </li>`
            model.querySelector(".model__description ul").innerHTML += `<li> ${drinks[btn.dataset.myshyk].strIngredient3} </li>`
        })

    })
    closeModel.addEventListener("click", () => {
        popup.classList.remove("active")
    })
    buy.addEventListener("click", () => {
        popup.classList.remove("active")
    })
};


getData(link)