

function checkSpam(str) {
  let lowercase = str.toLowerCase();
  if (lowercase.includes('1xbet') || lowercase.includes('xxx')) {
    return true;
  } else {
    return false;
  } 
}