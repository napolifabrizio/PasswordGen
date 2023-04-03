function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  
  const charac = ["@", "#", "$", "%", "&", "*"];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letter = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "n",
  ];
  
  const all = []; 
  const password = [];
  
  let amount = 0;
  
  if (true) {
    all.push(...numbers);
    password.push(numbers[randomNumberInterval(0, numbers.length - 1)]);
    amount++;
  }
  
  if (true) {
    all.push(...letter);
    password.push(letter[randomNumberInterval(0, letter.length - 1)]);
    amount++;
  }
  
  if (false) {
    all.push(...charac);
    password.push(charac[randomNumberInterval(0, charac.length - 1)]);
    amount++;
  }
  
  function creatPassword() {
    for (let i = 0; i < 6 - amount; i++) {
      password.push(
        all[
          randomNumberInterval(0, all.length - 1)
        ]
      );
    }
  
    return password.join("");
  }

  console.log(creatPassword())
  

  