let count = 0;
  let currentCount = document.getElementById("current-count");
  function increaseCount() {
    count = count + 1;
    currentCount.innerText = count;
  }
  function resetCount() {
    count = 0;
    currentCount.innerText = count;
  }
  function decreaseCount() {
    count = count - 1;
    currentCount.innerText = count;
  }