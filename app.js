// https://www.balldontlie.io/api/v1/players/
// https://www.balldontlie.io/api/v1/players/?search=${firstname}%20${lastname}
// https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}


// 
// Main function that calls two different APIs, when this function is called it will provide a player's stats and picture
//
async function fetchPlayerID(firstname, lastname, num) {
  const url = `https://www.balldontlie.io/api/v1/players/?search=${firstname}%20${lastname}`
  try {
    const response = await axios.get(url)
    removePlayers()
    fetchPlayerStats(response.data.data[0].id, num)
    fetchPersonID(firstname, lastname, num)
    return response
  }
  catch (error) {
    console.error(error)
  }
}

async function fetchPersonID(firstName, lastName, num) {
  const url = `http://data.nba.net/data/10s/prod/v1/2020/players.json`
  try {
    const response = await axios.get(url)
    const foundPlayer = response.data.league.standard.find((player) => {
      return player.firstName.toLowerCase() === firstName.toLowerCase() && lastName.toLowerCase() === player.lastName.toLowerCase()
    })
    fetchPlayerPicture(foundPlayer.personId, num)
    
    console.log(foundPlayer)
  }
  catch (error) {
    console.error(error)
  }
}

async function fetchPlayerStats(playerID, num) { 
  const url = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}`
  try {
    const response = await axios.get(url)
    showPlayerStats(response.data.data[0], num)
  }
  catch (error) {
    console.error(error)
  }
}


async function fetchPlayerPicture(personId, num) {
  const url = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${personId}.png`
  try {
    const response = await axios.get(url)
    showPlayerPic(response.config.url, num)
  }
  catch (error) {
    console.error(error)
  }
}

//
// Eventhandler
//
const playerForm = document.querySelector('form')
console.log(playerForm)

playerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const player1FirstName = document.querySelector('.p1-fname').value
  const player1LastName = document.querySelector('.p1-lname').value
  const player2FirstName = document.querySelector('.p2-fname').value
  const player2LastName = document.querySelector('.p2-lname').value
  fetchPlayerID(player1FirstName, player1LastName, 1)
  fetchPlayerID(player2FirstName, player2LastName, 2)
  document.querySelector('.p1-fname').value = ""
  document.querySelector('.p1-lname').value = ""
  document.querySelector('.p2-fname').value = ""
  document.querySelector('.p2-lname').value = ""
})

function showPlayerStats(data, num) {
  console.log(data)
  let playerData = `
  <h4>Player ${num} Stats:</h4>
  <div class="p1-points">Points: ${data.pts}</div>
  <div class="p1-rebounds">Rebounds: ${data.reb}</div>
  <div class="p1-assists">Assists: ${data.ast}</div>
  <div class="p1-steals">Steals: ${data.stl}</div>
  <div class="p1-turnovers">Turnovers: ${data.turnover}</div>
`
  document.querySelector(`.player-data-${num}`).insertAdjacentHTML('beforeend', playerData)
  return playerData
}

function showPlayerPic(imageURL, num) { 
  let playerPic = `
  <img src="${imageURL}" alt="player-picture" style="width: 250px; height:auto">
  `

  document.querySelector(`.player-data-${num}`).insertAdjacentHTML('afterbegin', playerPic)
}


function removePlayers() {
  const removePlayer1 = document.querySelector('.player-data-1')
  const removePlayer2 = document.querySelector('.player-data-2')
  while (removePlayer1.lastChild) {
    removePlayer1.removeChild(removePlayer1.lastChild)
  }
  while (removePlayer2.lastChild) {
    removePlayer2.removeChild(removePlayer2.lastChild)
  }
}