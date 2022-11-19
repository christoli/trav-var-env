
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const favoriteSport = process.env.FAVORITE_SPORT;

async function main() {
  while(true) {
    console.log(`My favorite sport is ${favoriteSport}`);
    await sleep(5000);
  }
}

main();
