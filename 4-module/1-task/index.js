function makeFriendsList(friends) {

  let ulList = document.createElement('ul');

  for (let i of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${i.firstName} ${i.lastName}`;
    ulList.appendChild(li);
  }
  return ulList;
}
