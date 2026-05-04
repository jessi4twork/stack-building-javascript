const email = "jessi4twork@gmail.com";

function maskEmail(email) {
  const parts = email.split("@");
  const username = parts[0];

  const firstLetter = username[0];
  const lastLetter = username[username.length - 1];

  const dots = "*".repeat(username.length - 2);

  return firstLetter + dots + lastLetter + "@" + parts[1];
}

console.log(maskEmail(email));
