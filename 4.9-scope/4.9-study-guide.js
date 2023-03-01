const DISCOUNT_PERCENTAGE = 0.15;
const product = {
    name: "Black Longline T-Shirt",
    priceInCents: 1500,
    availableSizes: ["XS", "S", "XL", "XXL"],
};

if (DISCOUNT_PERCENTAGE > 0) {
    const multiplier = 1 - DISCOUNT_PERCENTAGE;
    const price = product.priceInCents * multiplier;
    console.log(price);
} else {
    const price = product.priceInCents;
    console.log(price);
}

//functions create a scope

//top team code

const topTeam = {
    lakers: 50,
    celtics: 60,
    mavs: 30,
    clippers: 15,
};

let bestTeam = "";
let mostWins = 0;
for (let team in topTeam) {
    const wins = topTeam[team];
    if (wins > mostWins) {
        mostWins = wins;
        bestTeam = team;
    }
}

console.log(bestTeam);

