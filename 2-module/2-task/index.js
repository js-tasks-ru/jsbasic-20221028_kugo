function isEmpty(obj) { // если в объекте есть ключи начнеться выаолнение цикла
  for( let key in obj) {
    return false;
  }
  return true;
}
