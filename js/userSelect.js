function selectUser(id) {
    userID = id;
    toMenu();
}

function toMenu() {
    switch (userID) {
        case 1:
            displayUser.textContent = "ユーザーID : 1";
            baseURL = baseURLforUser1;
            break;
        case 2:
            displayUser.textContent = "ユーザーID : 2";
            baseURL = baseURLforUser2;
            break;
        default:
            console.error("Invalid UserID");
            break;
    }
    userSelectScreen.style.display = 'none';
    menuScreen.style.display = 'block';
    musicListScreen.style.display = 'none';
    playHistoryScreen.style.display = 'none';
    statsScreen.style.display = 'none';
}