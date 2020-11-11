import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

// (a) Home Team name for 2014 world cup final

let final14 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final";
});

console.log(final14[0][`Home Team Name`]);
// end console.log

// (b) Away Team name for 2014 world cup final

console.log(final14[0][`Away Team Name`]);

// (c) Home Team goals for 2014 world cup final

console.log(final14[0][`Home Team Goals`]);

// (d) Away Team goals for 2014 world cup final

console.log(final14[0][`Away Team Goals`]);

// (e) Winner of 2014 world cup final 

console.log(final14[0][`Win conditions`]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {

    const outputArray = array.filter(function(item){
        return item.Stage === "Final";
    });

    return outputArray;
};

console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(array, callback) {
    const returnArray = [];
    const yearsArrObj = callback(array);
    yearsArrObj.forEach(function(item){
        returnArray.push(item.Year);
    });
    return returnArray;
};

console.log(getYears(fifaData, getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

/* 
Initialize winners array 
Pass finals array in via callback function getFinals 
For each through finals 
Conditional to see who has more goals
Return name of winning country and add to winners array 


*/
function getWinners(array, callback) {
    const finalsArray = callback(array);
    const winners = [];
    finalsArray.forEach(function(item){
        if(item[`Home Team Goals`] > item['Away Team Goals']) {
            winners.push(item[`Home Team Name`]);
        } else {
            winners.push(item['Away Team Name']);
        }
    }); 
    return winners;
};

console.log(getWinners(fifaData, getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 /*

 */
function getWinnersByYear(cbWinners, cbYears) {
    const winByYears = [];
    const winners = cbWinners(fifaData, getFinals);
    const years = cbYears(fifaData, getFinals);
    for(let i = 0; i < winners.length; i++){
        winByYears.unshift(`In ${years[i]}, ${winners[i]} won the world cup!`);
    };
    return winByYears;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

/* 
use .reduce to tally up home and away goals 
divide by fifaData.length to get averages
return averages 

*/
function getAverageGoals(array) {
    let totalAway = array.reduce(function(accumulator, item){
        return accumulator + item['Away Team Goals'];
    }, 0);
    let totalHome = array.reduce(function(accumulator, item){
        return accumulator + item['Home Team Goals'];
    }, 0);
    return `Average Home Goals: ${totalHome/array.length}, Average Away Goals: ${totalAway/array.length}`;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(array, teamInitials) {
    const allTeamGames = array.filter(function(item){
        return item[`Home Team Initials`] === teamInitials || item[`Away Team Initials`] === teamInitials;
    });
    let teamWins = 0; 
    allTeamGames.forEach(function(item){
        if (item[`Home Team Initials`] === teamInitials && item['Home Team Goals'] > item['Away Team Goals']){
            teamWins += 1;
        } else if (item[`Away Team Initials`] === teamInitials && item['Away Team Goals'] > item['Home Team Goals']){
            teamWins += 1;
        }
    });
    return `Team ${teamInitials} have won ${teamWins} World Cup games!`;
};

console.log(getCountryWins(fifaData, "USA"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
