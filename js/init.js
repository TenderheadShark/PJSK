const userSelectScreen = document.getElementById("userSelectScreen");
const menuScreen = document.getElementById("menuScreen");
const musicListScreen = document.getElementById("musicListScreen");
const playHistoryScreen = document.getElementById("playHistoryScreen");
const statsScreen = document.getElementById("statsScreen");

const displayUser = document.getElementById("displayUser");

const difficultySelector = document.getElementById("difficultySelector");
const levelSelector = document.getElementById("levelSelector");
const musicSelector = document.getElementById("musicSelector");
const unitSelector = document.getElementById("unitSelector");

let userID = 1; //1:るん 2:あち

let easyLevels = [5,6,7,8,9,10];
let normalLevels = [10,11,12,13,14,15,16];
let hardLevels = [15,16,17,18,19,20,21,22,23,24,25];
let expertLevels = [21,22,23,24,25,26,27,28,29,30,31,32];
let masterLevels = [25,26,27,28,29,30,31,32,33,34,35,36,37];
let appendLevels = [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];

let musicList = {};
loadJSON();
async function loadJSON() {
    let response = await fetch('../music_list.json');
    musicList = await response.json();
    console.log(musicList);
}

userSelectScreen.style.display = 'block';
menuScreen.style.display = 'none';
musicListScreen.style.display = 'none';
playHistoryScreen.style.display = 'none';
statsScreen.style.display = 'none';

