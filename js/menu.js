function toList() {
    menuScreen.style.display = 'none';
    musicListScreen.style.display = 'block';
    loadMusicList();
}

function toHistory() {
    menuScreen.style.display = 'none';
    playHistoryScreen.style.display = 'block';
    loadHistoryList();
}

function toStats() {
    menuScreen.style.display = 'none';
    statsScreen.style.display = 'block';
    loadStats();
}

function toUserSelect() {
    menuScreen.style.display = 'none';
    userSelectScreen.style.display = 'block';
}