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
    console.log(response.data.data[0].id)
    fetchPlayerStats(response.data.data[0].id)
    showPlayerStats(response.data.data[0].id)
    // return response
  }
  catch (error) {
    console.error(error)
  }
}

fetchPlayerID("kevin", "durant")

async function fetchPlayerStats(playerID) {
  const url = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}`
  try {
    const response = await axios.get(url)
    console.log(response.data.data[0])
    return response
  }
  catch (error) {
    console.error(error)
  }
}

// async function fetchPersonID(firstName, lastName) {
//   const url = `http://data.nba.net/data/10s/prod/v1/2020/players.json`
//   try {
//     const response = await axios.get(url)
//     console.log(response.data.league.standard.${firstName}.${lastName})
//     return response
//   }
//   catch (error) {
//     console.error(error)
//   }
// }

// fetchPersonID("russell", "westbrook")

// const playerForm = document.querySelector('form')
// console.log(playerForm)

// playerForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const playerSearch = document.querySelector('.p1-fname, .p1-lname').value
//   document.querySelector('.p1-fname, .p1-lname').value = ""
//   fetchPlayerStats(playerSearch)
// })

function showPlayerStats(data) {
  let playerData = `
  <h3>Player Stats:</h3>
  <div class="p1-points">Points: ${data.data[0].pts}</div>
  <div class="p1-rebounds">Rebounds: ${data.data[0].reb}</div>
  <div class="p1-assists">Assists: ${data.data[0].ast}</div>
  <div class="p1-steals">Steals: ${data.data[0].stl}</div>
  <div class="p1-turnovers">Turnovers: ${data.data[0].turnover}</div>
  `

  document.querySelector('.player-data').insertAdjacentHTML('beforeend', playerData)
  return playerData
}

// Set player ID as a variable, call API again to fetch player stats


// Call API to fetch player ID for second API


// Set player ID as a variable to call second API again and append picture


// remove previous player search