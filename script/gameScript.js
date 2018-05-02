
var characterList = [];
// var defaultSettings = [["it", "Johnny", "Joe", "Leo", "Tommy", "Vito", 2000],
//                  ["mx", "Jesus", "Carlos", "Diego", "Ricardo", "Sergio", 2000],
//                  ["ng", "Benjamin", "Duke", "Francis", "Samuel", "Morgan", 2000],
//                  ["jp", "Yoshiro", "Kichiro", "Takashi", "Hideo", "Goro", 2000],
//                  ["rs", "Vladimir", "Yuri", "Ivan", "Boris", "Victor", 2000],
//                  ["pl", "Michael", "Harry", "Charlie", "George", "James", 2000]];

var defaultSettings = [["it", "Johnny", "Vito", 2000],
                       ["ng", "Benjamin", "Duke", 2000],
                       ["pl", "Michael", "James", 2000]];


class Character
{
    constructor(name, frac, cash)
    {
        this.name = name;
        this.frac = frac;
        this.playerFlag = 0;
        this.cahs = cash;
    }
}

function createCharacterList() 
{
    for (var i = 0; i < defaultSettings.length; i++) 
    {
        var len = defaultSettings[i].length;
        for (var j = 0; j < len - 2; j++) 
        {
            let newCharacter = new Character(defaultSettings[i][0], defaultSettings[i][j+1], defaultSettings[i][len-1]);
            characterList.push(newCharacter);
        }
    }
    return;
}

createCharacterList();
console.log(characterList);
