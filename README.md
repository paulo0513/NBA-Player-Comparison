# Project Overview

## NBA Player Comparison Tool

## Project Description

Have you ever needed to have an opinion on an NBA player? Maybe you're at the bar just watching NBA games with your friends or maybe you're in a fantasy league and need to keep up to date on how players are performing throughout the season. Whatever the scenario, this website will allow you to quickly and easily compare two NBA players. Just type in their names and press the compare button. We show you stats of each player and highlight the one that's better in each statistical category.

## API and Data Sample

I will be using two different API's with a few endpoints. One API will allow me to access NBA player stats for this season and the other will pull a picture of each player. 

Player stat API: https://www.balldontlie.io/api/v1/players/
Player profile example endpoint (needed to pull player ID): https://www.balldontlie.io/api/v1/players/132
Player stat example endpoint (season stats): https://www.balldontlie.io/api/v1/season_averages?player_ids[]=132

    "data": [
        {
            "id": 14,
            "first_name": "Ike",
            "height_feet": null,
            "height_inches": null,
            "last_name": "Anigbogu",
            "position": "C",
            "team": {
                "id": 12,
                "abbreviation": "IND",
                "city": "Indiana",
                "conference": "East",
                "division": "Central",
                "full_name": "Indiana Pacers",
                "name": "Pacers"
            },
            "weight_pounds": null

Player picture API (needed to pull player ID): http://data.nba.net/data/10s/prod/v1/2020/players.json
Picture example endpoint: https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630197.png

            {
                "firstName": "Steven",
                "lastName": "Adams",
                "temporaryDisplayName": "Adams, Steven",
                "personId": "203500",
                "teamId": "1610612740",
                "jersey": "12",
                "isActive": true,
                "pos": "C",
                "heightFeet": "6",
                "heightInches": "11",
                "heightMeters": "2.11",
                "weightPounds": "265",
                "weightKilograms": "120.2",
                "dateOfBirthUTC": "1993-07-20",
                "teamSitesOnly": {
                    "playerCode": "steven_adams",
                    "posFull": "Center",
                    "displayAffiliation": "Pittsburgh/New Zealand",
                    "freeAgentCode": ""
                },

## Wireframes

https://i.imgur.com/vSM3TfU.png

### MVP/PostMVP

#### MVP

- Adding fields for player 1 and player 2 names, actionable "compare button"
- Use APIs to append player images and stats
- Stats are highlighted to indicate which player is better in that stat
- Players are cleared when another search is submitted

#### PostMVP  

- Turn it into a guessing game and ask user to see which player is better
- Add third player to compare
- More CSS/design

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|April 19| Project Approval | Incomplete
|April 19| Create necessary HTML, CSS, and JS files w/ basic formatting | Incomplete
|April 19| Pseudocode | Incomplete
|April 20| Create layout and add form to HTML | Incomplete
|April 20| Call Axios and connect API | Incomplete
|April 20| Add Eventhandler and append pictures/stats | Incomplete
|April 20| CSS Styling| Incomplete
|April 21| MVP | Incomplete
|April 22| PostMVP | Incomplete
|April 23| Presentations | Incomplete

## Priority Matrix

https://i.imgur.com/39ZvtyD.png

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML and CSS structure, connect files | H | 1hrs| 0hrs | 0hrs |
| Psuedocode | M | 2hrs| 0hrs | 0hrs |
| Adding Form and text to HTML | H | 1hrs| 0hrs | 0hrs |
| Add eventhandlers | H | 1hrs| 0hrs | 0hrs |
| Add API Call/test | H | 2hrs| 0hrs | 0hrs |
| Append Player stats | H | 2hrs| 0hrs | 0hrs |
| Add 2nd API Call/test | H | 2hrs| 0hrs | 0hrs |
| Append Player Picture | M | 2hrs| 0hrs | 0hrs |
| Remove previous search | H | 2hrs| 0hrs | 0hrs |
| Add CSS styling | M | 3hrs| 0hrs | 0hrs |
| Add Responsive styling | M | 1hrs| 0hrs | 0hrs |
| Highlight stats | M | 2hrs| 0hrs | 0hrs |
| Total | H | 22hrs| 0hrs | 0hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
