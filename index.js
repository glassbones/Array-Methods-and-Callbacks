import { fifaData } from './fifa.js';


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
fifaData.forEach(function(item){
    if(item.Year === 2014 && item.Stage ==="Final"){
        console.log(item["Home Team Name"]);
    }
});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let filteredArray = [];
    filteredArray = data.filter(item => item.Stage === 'Final')
    return filteredArray;
}

getFinals(fifaData);

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb,data){
    const finalsYears = cb(data).map(function(item){
        return item.Year;
      });
      return finalsYears;
};

// getYears(getFinals, fifaData);

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb, data) {
    const winners = [];                    
    cb(data).forEach(function(item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item["Home Team Name"]);
        } else if (item["Home Team Goals"] < item["Away Team Goals"]){
            winners.push(item["Away Team Name"]);
        } else {
            winners.push(item["Win conditions"].split(" ")[0]);
        }
    });
    return winners;
};

// getWinners(getFinals, (fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(winFunc, yearFunc, data) {
    let mixer = [...winFunc(getFinals, data), ...yearFunc(getFinals, data)];
    console.log(`${mixer}`);
    
};

getAllWinners(getWinners, getYears, fifaData);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */
/*
function getCountryWins(data) {
let winners2 = [];
let winners =[...getWinners(getFinals, data)];

winners.forEach((element) => {
    winners2.push(element.slice(1));
});

         
    
    console.log(`${winners2}`);
}

getCountryWins(fifaData);
*/
/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */