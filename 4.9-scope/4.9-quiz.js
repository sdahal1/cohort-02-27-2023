const favoriteColorCount = {
  blue: 8,
  green: 6,
  red: 3,
  yellow: 1,
};

let favoriteColor = "";
let maxCount = 0;
for (let color in favoriteColorCount) {
  const count = favoriteColorCount[color];
  if (maxCount < count) {
    maxCount = count;
    favoriteColor = color;
  }
}

console.log(favoriteColor);


/* 
favColor = "blue"
maxCount = 8
    color = "green"
    count = 6


*/