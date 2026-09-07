function generatePassword(length) {
  const allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  
  for(let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * allowed.length);
    password += allowed[random];
  } 
  return password;
}

const password = generatePassword(16);
console.log(`Generated password: ${password}`);