const titles = [
    "https://i.imgur.com/pE8zRxM.gif",
    "https://media.discordapp.net/attachments/1251639179658526825/1410792216007278764/IMG_2251.png?ex=68b2f6e3&is=68b1a563&hm=ce46d03dfa841885de87ebf377ee50cdd59803140422d215ae17b9ef6da9ae32&=&width=1037&height=1008"
]

function randomimage() {
    const randomimagegen = Math.floor(Math.random * titles.length)
    const element = document.getElementById('yourid')
    element.src = randomimagegen
};
function playbatsound() {
 document.getElementById('sound1').play()
    
}