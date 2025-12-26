const userSelectScreen = document.getElementById("userSelectScreen");
const menuScreen = document.getElementById("menuScreen");
const musicListScreen = document.getElementById("musicListScreen");
const playHistoryScreen = document.getElementById("playHistoryScreen");
const statsScreen = document.getElementById("statsScreen");

const displayUser = document.getElementById("displayUser");

const playHistoryForm = document.getElementById("playHistoryForm");

const difficultySelector = document.getElementById("difficultySelector");
const levelSelector = document.getElementById("levelSelector");
const musicSelector = document.getElementById("musicSelector");
const unitSelector = document.getElementById("unitSelector");
const resultInput = document.getElementById("resultInput");
const failedCheck = document.getElementById("failedCheck");

const musicListTable = document.getElementById("musicListTable");
const musicListLoading = document.getElementById("musicListLoading");
const musicListTableBody = document.getElementById("musicListTableBody");

const historyLoading = document.getElementById("historyLoading");
const historyNotFound = document.getElementById("historyNotFound");
const historyTable = document.getElementById("historyTable");
const historyTableBody = document.getElementById("historyTableBody");

const statsTable = document.getElementById("statsTable");
const statsTableBody = document.getElementById("statsTableBody");
const statsLoading = document.getElementById("statsLoading");

let userID = 1; //1:るん 2:あち

const baseURLforUser1 = 'https://script.google.com/macros/s/AKfycbwwuLHMVhXmxtpZQemgeZLRmNxG7aF2bNaN_bo2h4ywYUTH0fu-8w-26l0GVove3QHk/exec';
const baseURLforUser2 = 'https://script.google.com/macros/s/AKfycbxMYaY3olK6cz8PY518yjXIu7gR8HVNNSHoAktOZDDlC2QB9wPKwuGUGvM2gdGhTI_WrQ/exec';
let baseURL = '';

let difficulty = "";
let level = 0;
let unit = "";
let musicID = 0;

let easyLevels = [5, 6, 7, 8, 9, 10];
let normalLevels = [10, 11, 12, 13, 14, 15, 16];
let hardLevels = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let expertLevels = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
let masterLevels = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
let appendLevels = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];

let musicList = {};
loadJSON();
async function loadJSON() {
    let response = await fetch('https://tenderheadshark.github.io/PJSK/music_list.json');
    musicList = await response.json();
}

userSelectScreen.style.display = 'block';
menuScreen.style.display = 'none';
musicListScreen.style.display = 'none';
playHistoryScreen.style.display = 'none';
statsScreen.style.display = 'none';

musicListTable.style.display = 'none';

historyNotFound.style.display = 'none';
historyTable.style.display = 'none';

// statsTable.style.display = 'none';

async function getData(action) {
    const fetchURL = baseURL + '?action=' + action;
    const response = await fetch(fetchURL);
    const result = await response.json();
    return result;
}