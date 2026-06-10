const lunches = [];

function addLunchToEnd(lunches, lunchItem) {
  lunches.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunches;
}

addLunchToEnd(lunches, "Vegetable");



function addLunchToStart(lunches, lunchItem) {
  lunches.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunches;
}

addLunchToStart(lunches, "Pork");



function removeLastLunch(lunches) {
  let removedLastItem = lunches.pop();
  if(removedLastItem) {
    console.log(`${removedLastItem} removed from the end of the lunch menu.`)
  }
  else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

removeLastLunch(lunches);



function removeFirstLunch(lunches) {
  let removedFirstItem = lunches.shift();
  if(removedFirstItem) {
    console.log(`${removedFirstItem} removed from the start of the lunch menu.`)
  }
  else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

removeFirstLunch(lunches);



function getRandomLunch(lunches) {
  let randomItem = lunches[Math.floor(Math.random() * lunches.length)];
  if (lunches.length > 0) {
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
  else {
    console.log("No lunches available.");
  }
}

getRandomLunch(lunches);



function showLunchMenu(lunches) {
  if (lunches.length > 0) {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
  else {
    console.log("The menu is empty.");
  }
}

showLunchMenu(lunches);


