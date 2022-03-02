function gameObject (){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players:{
                'Jason Terry': {
                    number: 31,
                    shoes: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
                'Alan Anderson': {
                    number: 0,
                    shoes: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoes: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoes: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoes: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
            },
        },
        
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players:{
                'Brendan Haywood': {
                    number: 33,
                    shoes: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
                'Jeff Adrien': {
                    number: 4,
                    shoes: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoes: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoes: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoes: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                }
            }
        }
    }
}


//Build a function, `numPointsScored` that takes in an argument of a player's
//name and returns the number of points scored for that player.
//- Think about where in the object you will find a player's `points`. How can
//  you iterate down into that level? Think about the return value of your
// function.

function numPointsScored(playerName){
    const game = gameObject()
    for (const gameKey in game){// iterates through game keys (home,away)
        const teamObj = game[gameKey]
//for (const teamKey in teamObj){// iterates through team keys (teamName, colors, players) you dont need to loop through team color and players but just players
        const playerObj = teamObj.players
        debugger
        for (const playerKey in playerObj){//iterates through players
            debugger
            if (playerKey === playerName){
                return playerObj[playerKey].points//return players points
            }
            }
        }
    }



debugger
//Build a function, `shoeSize`, that takes in an argument of a player's name and
 // returns the shoe size for that player.
  //- Think about how you will find the shoe size of the correct player. How can
    //you check and see if a player's name matches the name that has been passed
   // into the function as an argument?

function homeTeam(){
    return gameObject().home
}
function awayTeam(){
    return gameObject().away
}
function players(){
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    return Object.assign(homePlayers, awayPlayers)

}
   function shoeSize(playerInput){
       //const players = players() not necessary but more efficient to call an variable vs a function
       // const players = {...homePlayers, ...awayPlayers} you can use both ways ^ and this
       for (const playerName in players()){//iterates through player stats
        if (playerName === playerInput){
            return players()[playerName].shoes
            }
            }
        }

//Build a function, `teamColors`, that takes in an argument of the team name and
//returns an array of that teams colors.

function teamColors(teamInput){
    if (teamInput === homeTeam().teamName){
        return homeTeam().colors
    }
    else{
        return awayTeam().colors
    }   
}

//Build a function, `teamNames`, that operates on the game object to return an
//array of the team names.

function teamNames(){
    listOfNames = []
    listOfNames.push(homeTeam().teamName, awayTeam().teamName)
    return listOfNames
}

//Build a function, `playerNumbers`, that takes in an argument of a team name
//and returns an array of the jersey number's for that team.

function homePlayerStats(){
   return homeTeam().players
} 
function awayPlayerStats(){
    return awayTeam().players
}
function playerNumbers(teamNameInput){
    if (teamNameInput === homeTeam().teamName){
        const homeTeamJerseyNumbers = []
        for (const player in homePlayerStats()){
            homeTeamJerseyNumbers.push(homePlayerStats()[player].number)            
        }
        return homeTeamJerseyNumbers
    }
    else {
        const awayTeamJerseyNumbers = []
        for (const player in awayPlayerStats()){
            awayTeamJerseyNumbers.push(awayPlayerStats()[player].number)
        }
        return awayTeamJerseyNumbers
    }
}

//Build a function, `playerStats`, that takes in an argument of a player's name
//  and returns a object of that player's stats. Check out the following example
//  of the expected return value of the `playerStats` function:

function allTeamStats(){
    return Object.assign(homePlayerStats(), awayPlayerStats())
}

function playerStats(playerInput){
    return allTeamStats()[playerInput]

}

//Build a function, `bigShoeRebounds`, that will return the number of rebounds
//associated with the player that has the largest shoe size. Break this one
////down into steps:
//- First, find the player with the largest shoe size
//- Then, return that player's number of rebounds
//- Remember to think about return values here. Use `debugger` to drop into
//  your function and understand what it is returning and why.


function bigShoeRebounds(){
    let shoeSizes= []
    for (const player in allTeamStats()){
        shoeSizes.push(allTeamStats()[player].shoes)
    }
    return shoeSizes

}