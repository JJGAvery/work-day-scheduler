$(function (){ 
  const outputDiv = document.querySelector(".col-8.col-md-10.description");
  const saveButtons = document.querySelectorAll("#saveButton");
  const textareas = document.querySelectorAll("textarea");
  const timeBlocks = document.querySelectorAll(".time-block");
  const rightNow = new Date().getHours();

  // function to color code time blocks
  function setColor() {
    timeBlocks.forEach(timeBlock => {
      if (rightNow > parseInt(timeBlock.id)) {
        timeBlock.classList.add("past");
      } else if (rightNow < parseInt(timeBlock.id)) {
        timeBlock.classList.add("future");
      } else {
        timeBlock.classList.add("present");
      }
    })
  }
  // event listener
  saveButtons.forEach(btn => {
    btn.addEventListener("click", updateOutput);
  })
  //recall local storage 
  textareas.forEach(textarea => {
    textarea.value = localStorage.getItem(textarea.id);
  })
  //input for local storage 
  function updateOutput(e) {
    const input_textarea = e.target.previousElementSibling;

    localStorage.setItem(e.currentTarget.dataset.hour, input_textarea.value);
    output_div.textContent = input_textarea.value;
  }
  //current date and time 
  const d = new Date();
  document.getElementById("currentDay").innerHTML = d;

  // invoke function to set time block styling
  setColor();
});