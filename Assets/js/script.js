console.log(window);

//ensures that the code isn't run until the browser has finished rendering all the elements in the html
window.onload = function() {

$(function () {
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
 
  var output_div = document.querySelector(".col-8.col-md-10.description");
  var save_buttons = document.querySelectorAll("#saveButton");
  var textareas = document.querySelectorAll("textarea")
  var rightNow = new Date().getHours()

  // current time
  console.log(rightNow)

// event listener
  save_buttons.forEach(btn => {
    btn.addEventListener("click", updateOutput);
  })

  //recall local storage 
  textareas.forEach(textarea => {
    textarea.value = localStorage.getItem(textarea.id);
  })

  //input for local storage 
  function updateOutput(e) {
    var input_textarea = e.target.previousElementSibling;
    console.log("HERE", e.target.previousElementSibling)
    console.log(input_textarea.value)
    localStorage.setItem(e.currentTarget.dataset.hour, input_textarea.value);

    output_div.textContent = input_textarea.value;
  }

//current date and time 
  const d = new Date();
  document.getElementById("currentDay").innerHTML = d;

});
};