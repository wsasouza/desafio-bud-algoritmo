function findNumberMaxValue(arr) {
  let max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });

  return max;
}

function findNumberMaxIndex(arr) {
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

function printMaxNumber() {  
  let data = document.getElementById("data").value;
  
  if (!data) {
    text.innerHTML = '';
    return
  } 

  let arr = data.split("");
  let size = arr.length;  

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }

  
  let index = findNumberMaxIndex(arr);
  let value = findNumberMaxValue(arr);
  let aux = (index + 1) - size; 

  text.innerHTML = '';

  if (size === 1)     
    return text.innerHTML = arr;
  

  else if (size === 2)     
    return text.innerHTML = value;  

  else if (size <= 6) { 
    if (aux === 0)      
      return text.innerHTML = value;
    else 
      result = arr.slice(index, index+2);

    return text.innerHTML = result.join('');
  }

  else { 
    if (aux === 0)      
      return text.innerHTML = value;
    else 
      result = arr.slice(index, index+5);

    return text.innerHTML = result.join('');
  }
}

/* todo: Function still doesn't handle when 
  larger numbers are at the end of the array */