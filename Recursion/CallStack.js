/* 
In almost all program languages, there is a built in data structure that manages what happens when funtions are invoked
It's called The CALL STACK
*/

/* 
CALL STACK
    It's a stack data structure
    Anytime a function is invoked it is placed(pushed) 
    on the top of the call stack
    When javaScript sees the return keyword or when the function ends,
    the compiler will remove(pop)
*/

function takeShower() {
  return 'Showering';
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Tofu', 'Chickpeas'];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('Ok ready to go to work');
}

wakeUp();
