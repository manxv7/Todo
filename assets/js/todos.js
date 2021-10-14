//Checking off the completed todo
const p = document.querySelector("ul");
// hello
p.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("li")) {
        target.classList.toggle("grey");
    }
});


//removing todo

p.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("i")) {
        const parent = target.parentElement.parentElement;
        parent.classList.add("removed");
        e.stopPropagation();
        parent.addEventListener("transitionend", () => {
            parent.remove();
        })
    }

})

//adding todos


const ul = document.querySelector("ul");
const input = document.querySelector("input");
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let todoText = input.value;
        const newLi = document.createElement("li");
        newLi.innerHTML = `<span><i class="fa fa-trash"></i></span> ${todoText}`;
        input.value = "";
        ul.append(newLi);

    }
})


//toggling the input

const i = document.querySelector("i");

i.addEventListener("click", () => {
    // console.log(input.style.display);
    if (input.style.display === "block") {
        input.style.opacity = 0;
        window.setTimeout(() => {
            input.style.display = "none";
        }, 30)
    } else {
        input.style.opacity = 1;
        window.setTimeout(() => {
            input.style.display = "block";
        }, 30)
    }
})