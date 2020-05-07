const button = document.querySelector(".button");
const form= document.querySelector("form");

button.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".text-field input")];

  fields.forEach(field => {
      if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "no") {
        formError.classList.remove("validate-error");
            }
        });
    }
   /*else{

   }*/
});