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
    console.log(response.data.id("lebron", "james"))
    // return response
  }
  catch (error) {
    console.error(error)
  }
}

fetchPlayerID()

// async function fetchPlayerStats(playerID) {
//   const url = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}`
//   try {
//     const response = await axios.get(url)
//     fetchPlayerID()
//     return response
//   }
//   catch (error) {
//     console.log(error)
//   }
// }

// const playerForm = document.querySelector('#form')

// playerForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const playerSearch = document.querySelector('#p1-fname, p1-lname').value
//   document.querySelector('#p1-fname, #p1-lname').value = ""
//   fetchPlayerID(playerSearch)
// })

// Set player ID as a variable, call API again to fetch player stats


// Call API to fetch player ID for second API


// Set player ID as a variable to call second API again and append picture


// remove previous player search