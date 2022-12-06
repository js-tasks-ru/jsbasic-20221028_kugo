
function getMinMax(str) {
  let arr = str.split(/[ ,]+/);

  let minNum = +arr[0];
  let maxNum = minNum;

  for (let i = 0; i < arr.length; i++) {
    let ArrNumbers = +arr[i];
    if(ArrNumbers < minNum) minNum = ArrNumbers;
    if(ArrNumbers > maxNum) maxNum = ArrNumbers;
  }

  return {min: minNum, max: maxNum};
}
