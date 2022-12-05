
function showSalary(users, age) {

  //##вот мое решение##
  // let resh = [];
  // users.map((item) => {
  //   if (item => item.age <= age) {
  //     resh.push(`${item.name} , ${item.balance}`);
  //   }
  // });
  // return resh.join(`\n`);
  
  return data
  .filter(item => item.age <= age)
  .map(item => `${item.name}, ${item.balance}`)
  .join('\n');
}
