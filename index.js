/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  
  const time = parseInt(timeString)
  if (time < 12) return "Good Morning"
  if (time > 17) return "Good Evening";
  return "Good Afternoon";
}

function displayMessage(string) {
  document.querySelector('#greeting').innerText = string
}