function selectUser(id) {
    userID = id;
    toMenu();
}

function toMenu() {
    switch (userID) {
        case 1:
            displayUser.textContent = "ユーザー : るん";
            break;
        case 2:
            displayUser.textContent = "ユーザー : あち";
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