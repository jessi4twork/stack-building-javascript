const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const arrParseShip = [];
  for(let i = 0; i < rawData.length; i++) {
    const currentLine = rawData[i];

    const parts = currentLine.split("|");

    const sku = parts[0];
    const name = parts[1];
    const qty = +parts[2];
    const expires = parts[3];
    const zone = parts[4] || "general";

    const isDuplicate = arrParseShip.some(item => item.sku === sku);

    if (isDuplicate) {
      continue;
    }

    arrParseShip.push({sku, name, qty, expires, zone});

  }
  return arrParseShip;
}



function planRestock(pantry, shipment) {
  const arrInShipment = [];

  for(let i = 0; i < shipment.length; i++){
    const item = shipment[i];
    let type = "";

    if(item.qty <= 0) {
      type = "discard";
    } else if(pantry.some(p => p.sku === item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    arrInShipment.push({type, item});
  }

  return arrInShipment;
}



function groupByZone(actions) {
  const obj = {};

  for(let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zoneName = action.item.zone;

    if(!obj[zoneName]) {
      obj[zoneName] = [];
      } 
    
    obj[zoneName].push(action);
  }
  return obj;
}



function clonePantry(pantry) {
  const pantryClone = [];

  for(let i = 0; i < pantry.length; i++) {
    const itemClone = {...pantry[i]};
    pantryClone.push(itemClone);
  }
  return pantryClone;
}

const cleanShip = parseShipment(rawData);

const pantryCopy = clonePantry(pantry);

const actionList = planRestock(pantryCopy, cleanShip);

const groupResult = groupByZone(actionList);

console.log(groupResult);