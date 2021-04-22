// Add basic structure to HTML and connect js and css to html and axios


// Add Player 1 and Player 2 fields to HTML


// Call API to fetch player ID using firstname and lastname
// https://www.balldontlie.io/api/v1/players/
// https://www.balldontlie.io/api/v1/players/?search=${firstname}%20${lastname}
// https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}

async function fetchPlayerID(firstname, lastname) {
  const url = `https://www.balldontlie.io/api/v1/players/?search=${firstname}%20${lastname}`
  try {
    const response = await axios.get(url)
    // console.log(response.data.data[0].id)
    // console.log(
    removePlayers()
    fetchPlayerStats(response.data.data[0].id)
    fetchPersonID(firstname, lastname)
    // )
    return response
  }
  catch (error) {
    console.error(error)
  }
}

// fetchPlayerID("kevin", "durant")

async function fetchPlayerStats(playerID) { //this is where i might have to separate into two functions for each player
  const url = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}`
  try {
    const response = await axios.get(url)
    console.log(response.data.data[0])
    showPlayer1Stats(response.data.data[0])
    showPlayer2Stats(response.data.data[0])
    // return response
  }
  catch (error) {
    console.error(error)
  }
}

async function fetchPersonID(firstName, lastName) {
  const url = `http://data.nba.net/data/10s/prod/v1/2020/players.json`
  try {
    const response = await axios.get(url)
    console.log(response.data)
    const foundPlayer = response.data.league.standard.find((player) => {
      return player.firstName.toLowerCase() === firstName.toLowerCase() && lastName.toLowerCase() === player.lastName.toLowerCase()
    })
    fetchPlayerPicture(foundPlayer.personId)
    
    console.log(foundPlayer)
    // console.log(response.data.league.standard[`${firstName}`][`${lastName}`])
    // return foundPlayer.personId
  }
  catch (error) {
    console.error(error)
  }
}
// fetchPersonID("russell","westbrook")

async function fetchPlayerPicture(personId) {
  const url = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${personId}.png`
  try {
    const response = await axios.get(url)
    console.log(response.config.url)
    // return response
    showPlayerPic(response.config.url)
  }
  catch (error) {
    console.error(error)
  }
}

// fetchPersonID("russell", "westbrook")

const playerForm = document.querySelector('form')
console.log(playerForm)

playerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const player1FirstName = document.querySelector('.p1-fname').value
  const player1LastName = document.querySelector('.p1-lname').value
  const player2FirstName = document.querySelector('.p2-fname').value
  const player2LastName = document.querySelector('.p2-lname').value
  fetchPlayerID(player1FirstName, player1LastName)
  fetchPlayerID(player2FirstName, player2LastName)
  document.querySelector('.p1-fname').value = ""
  document.querySelector('.p1-lname').value = ""
  document.querySelector('.p2-fname').value = ""
  document.querySelector('.p2-lname').value = ""
  // showPlayerStats(playerID)
})

function showPlayer1Stats(data) {
  console.log(data)
  let playerData = `
  <h4>Player 1 Stats:</h4>
  <div class="p1-points">Points: ${data.pts}</div>
  <div class="p1-rebounds">Rebounds: ${data.reb}</div>
  <div class="p1-assists">Assists: ${data.ast}</div>
  <div class="p1-steals">Steals: ${data.stl}</div>
  <div class="p1-turnovers">Turnovers: ${data.turnover}</div>
`
  document.querySelector('.player-data').insertAdjacentHTML('beforeend', playerData)
  return playerData
}

function showPlayer2Stats(data) { // data is the same in this function and showPlayer1stats
  let playerData = `
  <h5>Player 2 Stats:</h5>
  <div class="p2-points">Points: ${data.pts}</div>
  <div class="p2-rebounds">Rebounds: ${data.reb}</div>
  <div class="p2-assists">Assists: ${data.ast}</div>
  <div class="p2-steals">Steals: ${data.stl}</div>
  <div class="p2-turnovers">Turnovers: ${data.turnover}</div>
  `

  document.querySelector('.player-data').insertAdjacentHTML('beforeend', playerData)
  return playerData
}

function showPlayerPic(imageURL) { //???
  let playerPic = `
  <img src="${imageURL}" alt="player-picture" style="width: 250px; height:auto">
  `

  document.querySelector('.player-data').insertAdjacentHTML('afterbegin', playerPic)
  // return playerPic
}

function removePlayers() {
  const removePlayer = document.querySelector('.player-data')
  while (removePlayer.lastChild) {
    removePlayer.removeChild(removePlayer.lastChild)
  }
}
// Set player ID as a variable, call API again to fetch player stats


// Call API to fetch player ID for second API


// Set player ID as a variable to call second API again and append picture


// remove previous player search