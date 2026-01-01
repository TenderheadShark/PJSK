async function loadMusicList() {
    musicListLoading.style.display = 'block';
    musicListTable.style.display = 'none';
    searchBox.style.display = 'none';
    searchBox.value = '';

    const result = await getData('list');

    while (musicListTableBody.firstChild) {
        musicListTableBody.removeChild(musicListTableBody.firstChild);
    }

    for (let i = 0; i < musicListJSON.length; i++) {
        const row = document.createElement('tr');

        const id = document.createElement('td');
        id.textContent = musicListJSON[i].id;
        id.setAttribute("class", "id");
        row.appendChild(id);

        const defaultNo = document.createElement('td');
        defaultNo.textContent = musicListJSON[i].default;
        defaultNo.setAttribute("class", "default");
        row.appendChild(defaultNo);

        const type = document.createElement('td');
        type.textContent = musicListJSON[i].type;
        type.setAttribute("class", "type");
        row.appendChild(type);

        const name = document.createElement('td');
        const nameText = document.createElement('a');
        nameText.textContent = musicListJSON[i].name;
        nameText.setAttribute('href', musicListJSON[i].url);
        nameText.setAttribute('target', '_blank');
        nameText.setAttribute('rel', 'noopener noreferrer');

        name.appendChild(nameText);
        name.setAttribute("class", "name");
        row.appendChild(name);

        const unit = document.createElement('td');
        unit.textContent = musicListJSON[i].unit;
        unit.setAttribute("class", "unit");
        row.appendChild(unit);

        const levelEasy = document.createElement('td');
        levelEasy.textContent = musicListJSON[i].easy;
        levelEasy.setAttribute("class", "levelEasy");
        row.appendChild(levelEasy);

        const levelNormal = document.createElement('td');
        levelNormal.textContent = musicListJSON[i].normal;
        levelNormal.setAttribute("class", "levelNormal");
        row.appendChild(levelNormal);

        const levelHard = document.createElement('td');
        levelHard.textContent = musicListJSON[i].hard;
        levelHard.setAttribute("class", "levelHard");
        row.appendChild(levelHard);

        const levelExpert = document.createElement('td');
        levelExpert.textContent = musicListJSON[i].expert;
        levelExpert.setAttribute("class", "levelExpert");
        row.appendChild(levelExpert);

        const levelMaster = document.createElement('td');
        levelMaster.textContent = musicListJSON[i].master;
        levelMaster.setAttribute("class", "levelMaster");
        row.appendChild(levelMaster);

        const levelAppend = document.createElement('td');
        levelAppend.textContent = musicListJSON[i].append;
        levelAppend.setAttribute("class", "levelAppend");
        row.appendChild(levelAppend);

        const time = document.createElement('td');
        time.textContent = musicListJSON[i].time;
        time.setAttribute("class", "time");
        row.appendChild(time);

        const bpm = document.createElement('td');
        bpm.textContent = musicListJSON[i].bpm;
        bpm.setAttribute("class", "bpm");
        row.appendChild(bpm);

        const clearEasy = document.createElement('td');
        clearEasy.textContent = clearChecker(result[i][2]);
        clearEasy.setAttribute("class", !clearChecker(result[i][2]) ? "black" : clearChecker(result[i][2]));
        clearEasy.classList.add("clearEasy");
        row.appendChild(clearEasy);

        const clearNormal = document.createElement('td');
        clearNormal.textContent = clearChecker(result[i][3]);
        clearNormal.setAttribute("class", !clearChecker(result[i][3]) ? "black" : clearChecker(result[i][3]));
        clearNormal.classList.add("clearNormal");
        row.appendChild(clearNormal);

        const clearHard = document.createElement('td');
        clearHard.textContent = clearChecker(result[i][4]);
        clearHard.setAttribute("class", !clearChecker(result[i][4]) ? "black" : clearChecker(result[i][4]));
        clearHard.classList.add("clearHard");
        row.appendChild(clearHard);

        const clearExpert = document.createElement('td');
        clearExpert.textContent = clearChecker(result[i][5]);
        clearExpert.setAttribute("class", !clearChecker(result[i][5]) ? "black" : clearChecker(result[i][5]));
        clearExpert.classList.add("clearExpert");
        row.appendChild(clearExpert);

        const clearMaster = document.createElement('td');
        clearMaster.textContent = clearChecker(result[i][6]);
        clearMaster.setAttribute("class", !clearChecker(result[i][6]) ? "black" : clearChecker(result[i][6]));
        clearMaster.classList.add("clearMaster");
        row.appendChild(clearMaster);

        const clearAppend = document.createElement('td');
        clearAppend.textContent = clearChecker(result[i][7]);
        clearAppend.setAttribute("class", !clearChecker(result[i][7]) ? "black" : clearChecker(result[i][7]));
        clearAppend.classList.add("clearAppend");
        row.appendChild(clearAppend);

        const lyrics = document.createElement('td');
        lyrics.textContent = musicListJSON[i].lyrics;
        lyrics.setAttribute('class', 'lyrics');
        row.appendChild(lyrics);

        const composer = document.createElement('td');
        composer.textContent = musicListJSON[i].composer;
        composer.setAttribute('class', 'composer');
        row.appendChild(composer);

        const arrangement = document.createElement('td');
        arrangement.textContent = musicListJSON[i].arrangement;
        arrangement.setAttribute('class', 'arrangement');
        row.appendChild(arrangement);

        const ruby = document.createElement('td');
        ruby.textContent = musicListJSON[i].ruby;
        ruby.setAttribute("class", "ruby");
        row.appendChild(ruby);

        const rubyLyrics = document.createElement('td');
        rubyLyrics.textContent = musicListJSON[i].rubyLyrics;
        rubyLyrics.setAttribute('class', 'rubyLyrics');
        row.appendChild(rubyLyrics);

        const rubyComposer = document.createElement('td');
        rubyComposer.textContent = musicListJSON[i].rubyComposer;
        rubyComposer.setAttribute('class', 'rubyComposer');
        row.appendChild(rubyComposer);

        const rubyArrangement = document.createElement('td');
        rubyArrangement.textContent = musicListJSON[i].rubyArrangement;
        rubyArrangement.setAttribute('class', 'rubyArrangement');
        row.appendChild(rubyArrangement);

        musicListTableBody.appendChild(row);
    }

    musicListLoading.style.display = 'none';
    musicListTable.style.display = 'block';
    searchBox.style.display = 'block';

    musicList = new List('musicListScreen', {
        valueNames: ['id', 'default', 'type', 'name', 'lyrics', 'composer', 'arrangement', 'unit', 'levelEasy', 'levelNormal', 'levelHard', 'levelExpert', 'levelMaster', 'levelAppend', 'time', 'bpm', 'clearEasy', 'clearNormal', 'clearHard', 'clearExpert', 'clearMaster', 'clearAppend', 'ruby', 'rubyLyrics', 'rubyComposer', 'rubyArrangement'],
        sortFunction: customSort,
        searchDelay: 250
    });
    musicList.sort('default', { order: 'asc' });
}

function clearChecker(string) {
    if (string === "") return '';

    const num = parseInt(string);
    switch (num) {
        case 0:
            return "";
        case 1:
            return "LC";
        case 2:
            return "FC";
        case 3:
            return "AP";
    }
}

function customSort(itemA, itemB, options) {
    let sortColumn = options.valueName;
    let a = itemA.values()[sortColumn];
    let b = itemB.values()[sortColumn];

    return a.localeCompare(b, "ja-JP", {
        numeric: true,
        sensitivity: 'base',
    });
}