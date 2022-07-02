window.onload = function () {
    addFormValidation();
};

function addFormValidation() {
    let form = document.getElementById("form");
    let textField = form.querySelector(".text-field");
    let input = form.querySelector("input");
    let emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    form.addEventListener("submit", function validate() {
        textField.classList.remove("text-field--success");

        if (input.value.match(emailRegex)) {
            textField.classList.add("text-field--success");
        } else {
            textField.classList.add("text-field--error");
        }
    });

    input.addEventListener("focus", function removeError() {
        textField.classList.remove("text-field--error");
    });
}
