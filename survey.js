const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const user = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  user.userName = answer;

  rl.question('What\'s an activity you like doing? ', (answer) => {
    user.activity = answer;

    rl.question('What do you listen to while doing that? ', (answer) => {
      user.audio = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        user.favMeal = answer;
        
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          user.favFood = answer;

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            user.favSport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              user.superPower = answer; 

              console.log(`Thank you for your filling out the survey!`);

              console.log(`${user.userName} loves listening to ${user.audio} while ${user.activity}, devouring ${user.favFood} for ${user.favMeal}, prefers ${user.favSport} over any other sport, and is amazing at ${user.superPower}.`)

              rl.close();
            });
          });
        });
      });
    });
  });
});
