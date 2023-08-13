const names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];

function randomNumber(length) {
  return Math.floor(Math.random() * length);
} 

function selectedName(index) {
  return names[index];
}

const index = randomNumber(names.length);

console.log(selectedName(index));