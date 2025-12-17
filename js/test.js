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