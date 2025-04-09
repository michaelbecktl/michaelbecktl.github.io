// Push Me Button //
const pushMe = document.getElementById('pushMe')

pushMe.addEventListener('click', function () {
  document.getElementById('pushedButton').innerHTML =
    "You couldn't resist, huh?"
  document.getElementById('pushedButton').classList.add('pushedIt')
})
