async function loadStats() {
    const result = await getData('list');

    let easyStats = [];
    let easyHeader = ['Easy', musicList.length, countChecker(result, 2, 1), countChecker(result, 2, 2), countChecker(result, 2, 3)];
    easyHeader.push(calcPercentage(easyHeader[1], easyHeader[2]));
    easyHeader.push(calcPercentage(easyHeader[1], easyHeader[3]));
    easyHeader.push(calcPercentage(easyHeader[1], easyHeader[4]));
    console.log(easyHeader);
    easyStats.push(easyHeader);

    for (let i = 0; i < easyLevels.length; i++) {
        let row = [easyLevels[i], countMusic('easy', easyLevels[i])];
        console.log(row);
    }

    let normalStats = [];
    let normalHeader = ['Normal', musicList.length, countChecker(result, 3, 1), countChecker(result, 3, 2), countChecker(result, 3, 3)];
    normalHeader.push(calcPercentage(normalHeader[1], normalHeader[2]));
    normalHeader.push(calcPercentage(normalHeader[1], normalHeader[3]));
    normalHeader.push(calcPercentage(normalHeader[1], normalHeader[4]));
    console.log(normalHeader);
    normalStats.push(normalHeader);

    let hardStats = [];
    let hardHeader = ['Hard', musicList.length, countChecker(result, 4, 1), countChecker(result, 4, 2), countChecker(result, 4, 3)];
    hardHeader.push(calcPercentage(hardHeader[1], hardHeader[2]));
    hardHeader.push(calcPercentage(hardHeader[1], hardHeader[3]));
    hardHeader.push(calcPercentage(hardHeader[1], hardHeader[4]));
    console.log(hardHeader);
    hardStats.push(hardHeader);

    let expertStats = [];
    let expertHeader = ['Expert', musicList.length, countChecker(result, 5, 1), countChecker(result, 5, 2), countChecker(result, 5, 3)];
    expertHeader.push(calcPercentage(expertHeader[1], expertHeader[2]));
    expertHeader.push(calcPercentage(expertHeader[1], expertHeader[3]));
    expertHeader.push(calcPercentage(expertHeader[1], expertHeader[4]));
    console.log(expertHeader);
    expertStats.push(expertHeader);

    let masterStats = [];
    let masterHeader = ['Master', musicList.length, countChecker(result, 6, 1), countChecker(result, 6, 2), countChecker(result, 6, 3)];
    masterHeader.push(calcPercentage(masterHeader[1], masterHeader[2]));
    masterHeader.push(calcPercentage(masterHeader[1], masterHeader[3]));
    masterHeader.push(calcPercentage(masterHeader[1], masterHeader[4]));
    console.log(masterHeader);
    masterStats.push(masterHeader);

    let appendStats = [];
    let appendHeader = ['Append', appendCount(), countChecker(result, 7, 1), countChecker(result, 7, 2), countChecker(result, 7, 3)];
    appendHeader.push(calcPercentage(appendHeader[1], appendHeader[2]));
    appendHeader.push(calcPercentage(appendHeader[1], appendHeader[3]));
    appendHeader.push(calcPercentage(appendHeader[1], appendHeader[4]));
    console.log(appendHeader);
    appendStats.push(appendHeader);

}

function countChecker(list, index, num) {
    let count = 0;
    list.forEach(element => {
        if (parseInt(element[index]) >= num) count++;
    });
    return count;
}

function appendCount() {
    let count = musicList.length;
    for (let i = 0; i < musicList.length; i++) {
        if (musicList[i].append === "") count--;
    }
    return count;
}

function calcPercentage(total, part) {
    return 0.0 + (part / total) * 100;
}

function countMusic(index, level) {
    let count = 0;
    musicList.forEach(element => {
        if (parseInt(element[index]) === level) count++;
    });
    return count;
}