async function loadStats() {
    statsTable.style.display = 'none';
    statsButtons.style.display = 'none';
    statsLoading.style.display = 'block';

    easyStats = [];
    normalStats = [];
    hardStats = [];
    expertStats = [];
    masterStats = [];
    appendStats = [];

    const result = await getData('list');

    let easyHeader = [];
    easyHeader.push('Easy');
    easyHeader.push(musicListJSON.length);
    easyHeader.push(countChecker(result, 2, 1, 0));
    easyHeader.push(countChecker(result, 2, 2, 0));
    easyHeader.push(countChecker(result, 2, 3, 0));
    easyHeader.push(calcPercentage(easyHeader[1], easyHeader[2]));
    easyHeader.push(calcPercentage(easyHeader[1], easyHeader[3]));
    easyHeader.push(calcPercentage(easyHeader[1], easyHeader[4]));
    easyStats.push(easyHeader);

    for (let i = 0; i < easyLevels.length; i++) {
        let row = [];
        row.push(easyLevels[i]);
        row.push(countMusic('easy', easyLevels[i]));
        row.push(countChecker(result, 2, 1, easyLevels[i]));
        row.push(countChecker(result, 2, 2, easyLevels[i]));
        row.push(countChecker(result, 2, 3, easyLevels[i]));
        row.push(calcPercentage(row[1], row[2]));
        row.push(calcPercentage(row[1], row[3]));
        row.push(calcPercentage(row[1], row[4]));
        easyStats.push(row);
    }

    let normalHeader = [];
    normalHeader.push('Normal');
    normalHeader.push(musicListJSON.length);
    normalHeader.push(countChecker(result, 3, 1, 0));
    normalHeader.push(countChecker(result, 3, 2, 0));
    normalHeader.push(countChecker(result, 3, 3, 0));
    normalHeader.push(calcPercentage(normalHeader[1], normalHeader[2]));
    normalHeader.push(calcPercentage(normalHeader[1], normalHeader[3]));
    normalHeader.push(calcPercentage(normalHeader[1], normalHeader[4]));
    normalStats.push(normalHeader);

    for (let i = 0; i < normalLevels.length; i++) {
        let row = [];
        row.push(normalLevels[i]);
        row.push(countMusic('normal', normalLevels[i]));
        row.push(countChecker(result, 3, 1, normalLevels[i]));
        row.push(countChecker(result, 3, 2, normalLevels[i]));
        row.push(countChecker(result, 3, 3, normalLevels[i]));
        row.push(calcPercentage(row[1], row[2]));
        row.push(calcPercentage(row[1], row[3]));
        row.push(calcPercentage(row[1], row[4]));
        normalStats.push(row);
    }

    let hardHeader = [];
    hardHeader.push('Hard');
    hardHeader.push(musicListJSON.length);
    hardHeader.push(countChecker(result, 4, 1, 0));
    hardHeader.push(countChecker(result, 4, 2, 0));
    hardHeader.push(countChecker(result, 4, 3, 0));
    hardHeader.push(calcPercentage(hardHeader[1], hardHeader[2]));
    hardHeader.push(calcPercentage(hardHeader[1], hardHeader[3]));
    hardHeader.push(calcPercentage(hardHeader[1], hardHeader[4]));
    hardStats.push(hardHeader);

    for (let i = 0; i < hardLevels.length; i++) {
        let row = [];
        row.push(hardLevels[i]);
        row.push(countMusic('hard', hardLevels[i]));
        row.push(countChecker(result, 4, 1, hardLevels[i]));
        row.push(countChecker(result, 4, 2, hardLevels[i]));
        row.push(countChecker(result, 4, 3, hardLevels[i]));
        row.push(calcPercentage(row[1], row[2]));
        row.push(calcPercentage(row[1], row[3]));
        row.push(calcPercentage(row[1], row[4]));
        hardStats.push(row);
    }

    let expertHeader = [];
    expertHeader.push('Expert');
    expertHeader.push(musicListJSON.length);
    expertHeader.push(countChecker(result, 5, 1, 0));
    expertHeader.push(countChecker(result, 5, 2, 0));
    expertHeader.push(countChecker(result, 5, 3, 0));
    expertHeader.push(calcPercentage(expertHeader[1], expertHeader[2]));
    expertHeader.push(calcPercentage(expertHeader[1], expertHeader[3]));
    expertHeader.push(calcPercentage(expertHeader[1], expertHeader[4]));
    expertStats.push(expertHeader);

    for (let i = 0; i < expertLevels.length; i++) {
        let row = [];
        row.push(expertLevels[i]);
        row.push(countMusic('expert', expertLevels[i]));
        row.push(countChecker(result, 5, 1, expertLevels[i]));
        row.push(countChecker(result, 5, 2, expertLevels[i]));
        row.push(countChecker(result, 5, 3, expertLevels[i]));
        row.push(calcPercentage(row[1], row[2]));
        row.push(calcPercentage(row[1], row[3]));
        row.push(calcPercentage(row[1], row[4]));
        expertStats.push(row);
    }

    let masterHeader = [];
    masterHeader.push('Master');
    masterHeader.push(musicListJSON.length);
    masterHeader.push(countChecker(result, 6, 1, 0));
    masterHeader.push(countChecker(result, 6, 2, 0));
    masterHeader.push(countChecker(result, 6, 3, 0));
    masterHeader.push(calcPercentage(masterHeader[1], masterHeader[2]));
    masterHeader.push(calcPercentage(masterHeader[1], masterHeader[3]));
    masterHeader.push(calcPercentage(masterHeader[1], masterHeader[4]));
    masterStats.push(masterHeader);

    for (let i = 0; i < masterLevels.length; i++) {
        let row = [];
        row.push(masterLevels[i]);
        row.push(countMusic('master', masterLevels[i]));
        row.push(countChecker(result, 6, 1, masterLevels[i]));
        row.push(countChecker(result, 6, 2, masterLevels[i]));
        row.push(countChecker(result, 6, 3, masterLevels[i]));
        row.push(calcPercentage(row[1], row[2]));
        row.push(calcPercentage(row[1], row[3]));
        row.push(calcPercentage(row[1], row[4]));
        masterStats.push(row);
    }

    let appendHeader = [];
    appendHeader.push('Append');
    appendHeader.push(appendCount());
    appendHeader.push(countChecker(result, 7, 1, 0));
    appendHeader.push(countChecker(result, 7, 2, 0));
    appendHeader.push(countChecker(result, 7, 3, 0));
    appendHeader.push(calcPercentage(appendHeader[1], appendHeader[2]));
    appendHeader.push(calcPercentage(appendHeader[1], appendHeader[3]));
    appendHeader.push(calcPercentage(appendHeader[1], appendHeader[4]));
    appendStats.push(appendHeader);

    for (let i = 0; i < appendLevels.length; i++) {
        let row = [];
        row.push(appendLevels[i]);
        row.push(countMusic('append', appendLevels[i]));
        row.push(countChecker(result, 7, 1, appendLevels[i]));
        row.push(countChecker(result, 7, 2, appendLevels[i]));
        row.push(countChecker(result, 7, 3, appendLevels[i]));
        row.push(calcPercentage(row[1], row[2]));
        row.push(calcPercentage(row[1], row[3]));
        row.push(calcPercentage(row[1], row[4]));
        appendStats.push(row);
    }

    showStats(1);
    statsLoading.style.display = 'none';
    statsTable.style.display = 'block';
    statsButtons.style.display = 'block';
}

function showStats(level) {
    while (statsTableBody.firstChild) {
        statsTableBody.removeChild(statsTableBody.firstChild);
    }

    let stats;

    switch (level) {
        case 1:
            stats = easyStats;
            break;
        case 2:
            stats = normalStats;
            break;
        case 3:
            stats = hardStats;
            break;
        case 4:
            stats = expertStats;
            break;
        case 5:
            stats = masterStats;
            break;
        case 6:
            stats = appendStats;
            break;
    }

    for (let i = 0; i < stats.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < stats[i].length; j++) {
            const data = document.createElement('td');
            if (j > 4) {
                data.textContent = stats[i][j].toFixed(2) + ' %';
            } else {
                data.textContent = stats[i][j];
            }
            row.appendChild(data);
        }
        statsTableBody.appendChild(row);
    }
}

function countChecker(list, index, num, level) {
    let count = 0;
    let indexString;

    switch (index) {
        case 2:
            indexString = 'easy';
            break;
        case 3:
            indexString = 'normal';
            break;
        case 4:
            indexString = 'hard';
            break;
        case 5:
            indexString = 'expert';
            break;
        case 6:
            indexString = 'master';
            break;
        case 7:
            indexString = 'append';
    }
    for (let i = 0; i < list.length; i++) {
        if ((parseInt(list[i][index]) >= num) && (level === 0 || parseInt(musicListJSON[i][indexString]) === level)) count++;
    }
    // list.forEach(element => {
    //     if (parseInt(element[index]) >= num) count++;
    // });
    return count;
}

function appendCount() {
    let count = musicListJSON.length;
    for (let i = 0; i < musicListJSON.length; i++) {
        if (musicListJSON[i].append === "") count--;
    }
    return count;
}

function calcPercentage(total, part) {
    return 0.0 + (part / total) * 100;
}

function countMusic(index, level) {
    let count = 0;
    musicListJSON.forEach(element => {
        if (parseInt(element[index]) === level) count++;
    });
    return count;
}