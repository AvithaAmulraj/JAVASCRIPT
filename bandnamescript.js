const adjectives = ["Gazelle","Manatee","Hummingbird","Turtle","Swan","Giraffe","Whale","Panda","Tiger","Chameleon"];
const nouns = ["Groove", "Melodies", "Harmony", "Tenderness", "Serenade", "Ensemble", "Whimsy", "Peace", "Tranquility", "Charm"];

document.getElementById('generate-button').addEventListener('click', generateBandName);

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateBandName() {
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
    const bandName = `${adjective} ${noun}`;
    document.getElementById('band-name').innerText = bandName;
}
