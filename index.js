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
        console.log(item["Home Team Name"]); //a
        console.log(item["Away Team Name"]);  //b
        console.log(item["Home Team Goals"]); //c 
        console.log(item["Away Team Goals"]); //d
        console.log(item["Home Team Name"]); //e
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
    let year = [...yearFunc(getFinals, data)];
    let team = [...winFunc(getFinals, data)];

    //for each item in year array log the year and team @ index
    year.forEach(function(item, index) {
        console.log(`In ${year[index]} ${team[index]} won the worldcup!`);
    });
};
//getAllWinners(getWinners, getYears, fifaData);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, team) {
    let winners =[...getWinners(getFinals, data)]; //winners array
    let winners2 = []; //winners array abbreviated
    let sumArr = []; //array of total wins for your team

    winners.forEach((element) => {
        //Germany? Change to FRG and push!
        if (element === "Germany FR"){
            winners2.push("FRG");
        }
        //Spain? Change to ESP and push!
        else if (element === "Spain"){
            winners2.push("ESP")
        }
        else{
        //everything else? slice, caps, push!
        winners2.push(element.slice(0,3).toUpperCase());
        }
    });

    winners2.forEach((win) => {
        //your team won? Great! push to Sum Array
        if (win === team){
            sumArr.push(win);
        }
        else{}
    });
    

        console.log(`${team} has won the world cup ${sumArr.length} times.`);
}
//getCountryWins(fifaData, "BRA");

/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
   
  let cupTeams = [{name: `Uruguay`}, {name: `Spain`}, {name: `Italy`}, {name: `Germany FR`}, {name: `Brazil`}, {name: `England`}, {name: `Argentina`}, {name: `Spain`}, {name: `Germany`}];
  let finalsData = getFinals(data);

    //for each cupTeam itterate 
    cupTeams.forEach(function(team, index){
        //give each cupTeam .cupGoals property and a .cupGames property
        team.cupGoals = 0;
        team.cupGames = 0;
        //itterate through all finals games (we are doing this for every cup team)
        finalsData.forEach(function(item){
            // if home team name = team name add home goals to cupTeams.cupGoals & +1 .cupGames
            if (item["Home Team Name"] === team.name) {
                team.cupGoals += item["Home Team Goals"];
                team.cupGames++
                console.log(`${item["Home Team Goals"]} points for ${team.name}!`)
            } 
            // if away team name = team name add away goals to cupTeams.cupGoals & +1 .cupGames
            else if(item["Away Team Name"] === team.name) {
                team.cupGoals += item["Away Team Goals"];
                team.cupGames++
                console.log(`${item["Away Team Goals"]} points for ${team.name}!`)
            } else {}
            });
    });

    //itterate over all cupTeams and average = goals/games
    cupTeams.forEach(function(team){
        team.cupAvg = 0;
        team.cupAvg = team.cupGoals/team.cupGames
        console.log(`${team.name} avg = ${team.cupAvg}`)
    });

    //sort cupTeams by points (Greatest to Least)
    let sortedGreatest2least = cupTeams.sort(function(a, b){
        return b.cupAvg - a.cupAvg
    })

    console.log(`${cupTeams[0].name} has the highest average! Clocking in at a whopping ${cupTeams[0].cupAvg}`);

};

//getGoals(fifaData);


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
                
    let newList = []; // this is where match and goals are going
    let totalHomeGoals = 0; 
    let totalAwayGoals = 0;

    data.forEach(function(item, index){
        //fill each newlist with objects/properties
        newList.push({MatchID: 0, homeTeamGoals: 0, awayTeamGoals: 0});

        //copy properites from data to their new homes in newlist
        newList[index].MatchID = data[index].MatchID;
        newList[index].awayTeamGoals = item["Away Team Goals"];
        newList[index].homeTeamGoals = item["Home Team Goals"];

        //add goals to totals
        totalHomeGoals += item["Home Team Goals"];
        totalAwayGoals += item["Away Team Goals"];
    });


    console.log(`Average Away Team Goals Per Game: ${totalAwayGoals / newList.length} `);
    console.log(`Average Home Team Goals Per Game: ${totalHomeGoals / newList.length} `);
};

//getAverageGoals(fifaData);


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */