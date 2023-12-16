function findDuplicates(arr) {
    const duplicates = [];
    const occurrences = {};
  
    for (const num of arr) {
      if (occurrences[num]) {
        if (occurrences[num] === 1) {
          duplicates.push(num);
        }
        occurrences[num]++;
      } else {
        occurrences[num] = 1;
      }
    }
    return duplicates;
  }
  function findDuplicatesHandler() {
    const inputArray = document.getElementById('inputArray').value;
    const resultElement = document.getElementById('result');
  
    const numbersArray = inputArray.split(',').map(Number);
    const duplicatesArray = findDuplicates(numbersArray);
    if (duplicatesArray.length > 0) {
      resultElement.textContent = `Duplicates: ${duplicatesArray.join(', ')}`;
    } else {
      resultElement.textContent = 'No duplicates found';
    }
  }
  document.getElementById('findDuplicates').addEventListener('click', findDuplicatesHandler);
  