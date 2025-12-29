function difficultyChanged() {
    difficulty = difficultySelector.value;
    level = 0;
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
    musicSelectorContent();
}

function unitChanged() {
    unit = unitSelector.value;
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
    musicID = parseInt(musicSelector.value);
}

playHistoryForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const musicName = musicList[musicID - 1].name;

    const liveFailed = failedCheck.checked;

    const formObject = {
        difficulty: difficulty,
        level: level,
        musicName: musicName,
        musicID: musicID,
        result: resultInput.value,
        liveFailed: liveFailed
    };

    postData(formObject);
    resetForm();
});

async function postData(data) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'text/plain',
        },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch(baseURL, options);
        const data = await response.json();

        if (data.result === 'OK') {
            alert("投稿が完了しました");
        } else if (data.result === 'ERROR') {
            alert("投稿に失敗しました");
        } else {
            alert("不明なエラーが発生しました");
        }
        loadHistoryList();
    } catch (error) {
        alert("エラーが発生しました");
    }
}

function resetForm() {
    difficulty = "";
    level = 0;
    unit = "";
    musicID = 0;

    difficultySelector.selectedIndex = 0;
    levelSelector.selectedIndex = 0;
    unitSelector.selectedIndex = 0;
    musicSelector.selectedIndex = 0;
    resultInput.value = "";
    failedCheck.checked = false;
}

async function loadHistoryList() {
    historyLoading.style.display = 'block';
    historyNotFound.style.display = 'none';
    historyTable.style.display = 'none';

    const result = await getData('history');

    if (result[0][1] == undefined) {
        historyLoading.style.display = 'none';
        historyNotFound.style.display = 'block';
    } else {
        while (historyTableBody.firstChild) {
            historyTableBody.removeChild(historyTableBody.firstChild);
        }

        for (let i = result.length - 1; i >= 0; i--) {
            const row = document.createElement('tr');

            const date = new Date(result[i][0]);
            const time = document.createElement('td');
            time.textContent = date.toLocaleString("ja-JP", {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            row.appendChild(time);

            const difficulty = document.createElement('td');
            difficulty.textContent = result[i][1];
            row.appendChild(difficulty);

            const level = document.createElement('td');
            level.textContent = result[i][2];
            row.appendChild(level);

            const name = document.createElement('td');
            name.textContent = result[i][3];
            row.appendChild(name);

            const great = document.createElement('td');
            great.textContent = result[i][4];
            row.appendChild(great);

            const good = document.createElement('td');
            good.textContent = result[i][5];
            row.appendChild(good);

            const bad = document.createElement('td');
            bad.textContent = result[i][6];
            row.appendChild(bad);

            const miss = document.createElement('td');
            miss.textContent = result[i][7];
            row.appendChild(miss);

            const losePoints = document.createElement('td');
            losePoints.textContent = result[i][8];
            row.appendChild(losePoints);

            historyTableBody.appendChild(row);
        }

        historyTable.style.display = 'block';
        historyLoading.style.display = 'none';
    }
}