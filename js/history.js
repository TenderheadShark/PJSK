let difficulty = "";
let level = 0;
let unit = "";
let music = "";

function difficultyChanged() {
    difficulty = difficultySelector.value;
    level = 0;
    console.log(difficulty);
    switch (difficulty) {
        case "Easy":
            levelSelectorContent(easyLevels);
            break;
        case "Normal":
            levelSelectorContent(normalLevels);
            break;
        case "Hard":
            levelSelectorContent(hardLevels);
            break;
        case "Expert":
            levelSelectorContent(expertLevels);
            break;
        case "Master":
            levelSelectorContent(masterLevels);
            break;
        case "Append":
            levelSelectorContent(appendLevels);
            break;
        default:
            console.error("Invalid difficulty");
            break;
    }
    musicSelectorContent();
}

function levelSelectorContent(levels) {
    while (levelSelector.firstChild) {
        levelSelector.removeChild(levelSelector.firstChild);
    }

    let de = document.createElement('option');
    de.setAttribute('value', "");
    de.setAttribute('selected', "");
    de.setAttribute('disabled', '');
    de.textContent = 'レベル';
    levelSelector.appendChild(de);

    for (let i = 0; i < levels.length; i++) {
        let op = document.createElement('option');
        op.setAttribute("value", levels[i]);
        op.textContent = levels[i];
        levelSelector.appendChild(op);
    }
}

function levelChanged() {
    level = parseInt(levelSelector.value);
    console.log(level);
    musicSelectorContent();
}

function unitChanged() {
    unit = unitSelector.value;
    console.log(unit);
    musicSelectorContent();
}

function musicSelectorContent() {
    while (musicSelector.firstChild) {
        musicSelector.removeChild(musicSelector.firstChild);
    }
    let de = document.createElement('option');
    de.setAttribute('value', "");
    de.setAttribute('selected', "");
    de.setAttribute('disabled', '');
    de.textContent = '曲名';
    musicSelector.appendChild(de);

    if ((difficulty != "") && (level != 0) && (unit != "")) {
        let filteredList = {};
        switch (difficulty) {
            case "Easy":
                filteredList = musicList.filter(music => music.easy === level && music.unit === unit);
                break;
            case "Normal":
                filteredList = musicList.filter(music => music.normal === level && music.unit === unit);
                break;
            case "Hard":
                filteredList = musicList.filter(music => music.hard === level && music.unit === unit);
                break;
            case "Expert":
                filteredList = musicList.filter(music => music.expert === level && music.unit === unit);
                break;
            case "Master":
                filteredList = musicList.filter(music => music.master === level && music.unit === unit);
                break;
            case "Append":
                filteredList = musicList.filter(music => music.append === level && music.unit === unit);
                break;
            default:
                console.error("Invalid difficulty");
                break;
        }

        for (let i = 0; i < filteredList.length; i++) {
            let op = document.createElement('option');
            op.setAttribute('value', filteredList[i].id);
            op.textContent = filteredList[i].name;
            musicSelector.appendChild(op);
        }
    }
}

function musicChanged() {
    music = musicSelector.value;
    console.log(music);
}

playHistoryForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const musicID = parseInt(musicSelector.value);
    const musicName = musicList[musicID-1].name;

    
    const liveFailed = failedCheck.checked;
    const formObject = {
        difficulty: difficultySelector.value,
        level: parseInt(levelSelector.value),
        musicName: musicName,
        musicID: musicID,
        result: resultInput.value,
        liveFailed: liveFailed
    };
    console.log(formObject);
    
    postData(formObject);
});

async function postData(data) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'text/plain',
        },
        body: JSON.stringify(data),
    };

    console.log(options);
    
    try{
        const response = await fetch(baseURL, options);
        const data = await response.json();
        console.log(data);
        if(data.result === 'OK'){
            alert("投稿が完了しました");
        } else if(data.result === 'ERROR'){
            alert("投稿に失敗しました");
        } else {
            alert("不明なエラー");
        }
        
    } catch (error) {
        // console.error("Error:", error);
    }
}