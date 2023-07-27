function generateRandomPass(length) {
    const uppercase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase =   "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/{}~";
  
    const allChars = uppercase + lowercase + numbers + specialChars;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  const Length = 8; 
  const randomPass = generateRandomPass(Length);
  console.log("Random Password:", randomPass);
  