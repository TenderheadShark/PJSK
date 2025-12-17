console.log("test");
loadJSON();
async function loadJSON(){
let response = await fetch('../music_list.json');
let result = await response.json();
console.log(result);
let musicMaster30 = result.filter(music => music.master === 30);
musicMaster30.sort((a,b) => {
    return (a.default < b.default) ? -1 : 1;
});
let musicNameMaster30 = musicMaster30.map(item => item.name);
console.log(musicNameMaster30[5]);

}
let userIsRunn = false;
let userIsAchi = false;
const h1User = document.getElementById("userIs");
function selectUser(user) {
    if(user==='a') {
        userIsAchi = true;
        console.log('achi');
    } else if(user==='r') {
        userIsRunn = true;
        console.log('runn');
    } else {
        console.log('error');
    }
}

