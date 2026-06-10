const manifest = {
  containerId: 123,
  destination: "Japan",
  weight: 250,
  unit: "lb",
  hazmat: true
};

const normalizeUnits = (manifest) => {
  if (manifest.unit === "lb") {
  return {
    ...manifest,
    weight: manifest.weight * 0.45,
    unit: "kg"
    }
  }
  else if (manifest.unit === "kg") {
    return {
      ...manifest,
      weight: manifest.weight,
      unit: "kg"
    }
      }
};
console.log(normalizeUnits(manifest));

const validateManifest = (manifest) => {
  const errors = {};

  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }
  
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};
console.log(validateManifest(manifest));

const processManifest = (manifest) => {
  if (Object.keys(validateManifest(manifest)).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`)
    console.log(validateManifest(manifest));  }
};
