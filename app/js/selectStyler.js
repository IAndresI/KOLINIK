function selectStyler({
  select,
  placeholder = ""
}) {
  let selectContainer = document.createElement("div"),
    inputContainer = document.createElement("div"),
    inputArray = document.querySelectorAll(`#${select.getAttribute("id").replace(/ /g, ".")} option`),
    button = document.createElement("button");
  select.style.display = "none";
  selectContainer.append(button);
  selectContainer.append(inputContainer);
  selectContainer.classList.add("select");
  button.classList.add("select__button");
  button.type = "button";
  button.textContent = placeholder;
  inputContainer.classList.add("select__option-container");
  inputContainer.style.transition = "all .5s";
  inputArray.forEach((e) => {
    let input = document.createElement("input"),
      label = document.createElement("label");
    input.classList.add("select__option");
    input.type = "radio";
    input.name = "1";
    label.classList.add("select__label");
    label.textContent = e.innerHTML;
    input.addEventListener("click", () => {
      document.querySelectorAll(".select__label").forEach(e => {
        e.classList.remove("select__label--active");
      });
      label.classList.add("select__label--active");
      inputContainer.classList.remove("select__option-container--active");
      button.textContent = label.textContent;
    });
    label.append(input);
    inputContainer.append(label);
  });
  button.addEventListener("click", () => {
    inputContainer.classList.toggle("select__option-container--active");
  });
  select.insertAdjacentElement("afterend", selectContainer);
}

export default selectStyler;