async function loadMusicList() {
    musicListLoading.style.display = 'block';
    musicListTable.style.display = 'none';

    const fetchURL = baseURL + '?action=list';
    const response = await fetch(fetchURL);
    const result = await response.json();
    console.log(result);

    while(musicListTableBody.firstChild) {
        musicListTableBody.removeChild(musicListTableBody.firstChild);
    }

    for(let i = 0; i < musicList.length; i++) {
        const row = document.createElement('tr');

        const id = document.createElement('td');
        id.textContent = musicList[i].id;
        row.appendChild(id);

        const defaultNo = document.createElement('td');
        defaultNo.textContent = musicList[i].default;
        row.appendChild(defaultNo);

        const type = document.createElement('td');
        type.textContent = musicList[i].type;
        row.appendChild(type);

        const name = document.createElement('td');
        const nameText = document.createElement('a');
        nameText.textContent = musicList[i].name;
        nameText.setAttribute('href', musicList[i].url);
        name.appendChild(nameText);
        row.appendChild(name);

        const ruby = document.createElement('td');
        ruby.textContent = musicList[i].furigana;
        row.appendChild(ruby);

        const unit = document.createElement('td');
        unit.textContent = musicList[i].unit;
        row.appendChild(unit);

        const levelEasy = document.createElement('td');
        levelEasy.textContent = musicList[i].easy;
        row.appendChild(levelEasy);

        const levelNormal = document.createElement('td');
        levelNormal.textContent = musicList[i].normal;
        row.appendChild(levelNormal);

        const levelHard = document.createElement('td');
        levelHard.textContent = musicList[i].hard;
        row.appendChild(levelHard);

        const levelExpert = document.createElement('td');
        levelExpert.textContent = musicList[i].expert;
        row.appendChild(levelExpert);

        const levelMaster = document.createElement('td');
        levelMaster.textContent = musicList[i].master;
        row.appendChild(levelMaster);

        const levelAppend = document.createElement('td');
        levelAppend.textContent = musicList[i].append;
        row.appendChild(levelAppend);

        const time = document.createElement('td');
        time.textContent = musicList[i].time;
        row.appendChild(time);

        const bpm = document.createElement('td');
        bpm.textContent = musicList[i].bpm;
        row.appendChild(bpm);

        const clearEasy = document.createElement('td');
        clearEasy.textContent = clearChecker(result[i][2]);
        row.appendChild(clearEasy);

        const clearNormal = document.createElement('td');
        clearNormal.textContent = clearChecker(result[i][3]);
        row.appendChild(clearNormal);

        const clearHard = document.createElement('td');
        clearHard.textContent = clearChecker(result[i][4]);
        row.appendChild(clearHard);

        const clearExpert = document.createElement('td');
        clearExpert.textContent = clearChecker(result[i][5]);
        row.appendChild(clearExpert);

        const clearMaster = document.createElement('td');
        clearMaster.textContent = clearChecker(result[i][6]);
        row.appendChild(clearMaster);

        const clearAppend = document.createElement('td');
        clearAppend.textContent = clearChecker(result[i][7]);
        row.appendChild(clearAppend);

        musicListTableBody.appendChild(row);
    }

    musicListLoading.style.display = 'none';
    musicListTable.style.display = 'block';
}

function clearChecker(string) {
    if(string === "") return '';

    const num = parseInt(string);
    switch(num) {
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