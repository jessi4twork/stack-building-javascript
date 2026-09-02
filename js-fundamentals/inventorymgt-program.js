const inventory = [];

function findProductIndex(name) {
  const lowerName = name.toLowerCase();

  for(let i = 0; i < inventory.length; i++) {
    if(inventory[i].name === lowerName) {
      return i;
    }
  }
  return -1;
}

function addProduct(obj) {
  const index = findProductIndex(obj.name);
  if(index !== -1) {
    inventory[index].quantity += obj.quantity;

      console.log (`${inventory[index].name} quantity updated`);
  } else {
    obj.name = obj.name.toLowerCase();

    inventory.push(obj);
    console.log (`${obj.name} added to inventory`);   
  }
}

function removeProduct(name, qty) {
    const index = findProductIndex(name);

    if(index === -1) {
      console.log (`${name.toLowerCase()} not found`); 
      return;  
    }

    if(inventory[index].quantity < qty) {
        console.log (`Not enough ${inventory[index].name.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`);
        return;
      } 

    inventory[index].quantity -= qty;

    if(inventory[index].quantity === 0) {
      inventory.splice(index, 1);
    } else {
      console.log (`Remaining ${inventory[index].name.toLowerCase()} pieces: ${inventory[index].quantity}`);
    }
}

addProduct({name: "FLOUR", quantity: 5});
removeProduct("FLOUR", 5);