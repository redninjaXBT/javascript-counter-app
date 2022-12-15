let count = 0;
  let currentCount = document.getElementById("current-count");
  function increaseCount() {
    count++;
    currentCount.textContent = count;
  }
  function resetCount() {
    count = 0;
    currentCount.innerText = count;
  }
  function decreaseCount() {
    count--;
    currentCount.innerText = count;
  }
  
  let savedEnteries = document.getElementById("saved-enteries");
  function save() {
    let saveCurrentEntry = count + ", ";
    
    savedEnteries.textContent += saveCurrentEntry;
  }