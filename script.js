// Beispiel Champion- und Item-Daten (vereinfachtes Format)
const champions = [
    {
      "id": 1,
      "name": "Annie",
      "alias": "Annie",
      "title": "the Dark Child",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap", 
        "support",
        "tank"
      ],
    },
    {
      "id": 2,
      "name": "Olaf",
      "alias": "Olaf",
      "title": "the Berserker",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 3,
      "name": "Galio",
      "alias": "Galio",
      "title": "the Colossus",
      "roles": [
        "tank",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 4,
      "name": "Twisted Fate",
      "alias": "TwistedFate",
      "title": "the Card Master",
      "roles": [
        "mage",
        "marksman"
      ],
      "style": [
        "assassinAP",
        "tank",
        "ap",
        "ad"
      ],
    },
    {
      "id": 5,
      "name": "Xin Zhao",
      "alias": "XinZhao",
      "title": "the Seneschal of Demacia",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "assassinAD"
      ],
    },
    {
      "id": 6,
      "name": "Urgot",
      "alias": "Urgot",
      "title": "the Dreadnought",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 7,
      "name": "LeBlanc",
      "alias": "Leblanc",
      "title": "the Deceiver",
      "roles": [
        "assassin",
        "mage"
      ],
      "style": [
        "ap",
        "tank",
        "assassinAP"
      ],
    },
    {
      "id": 8,
      "name": "Vladimir",
      "alias": "Vladimir",
      "title": "the Crimson Reaper",
      "roles": [
        "mage",
        "fighter"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 9,
      "name": "Fiddlesticks",
      "alias": "FiddleSticks",
      "title": "the Ancient Fear",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "support",
        "tank",
        "ap"
      ],
    },
    {
      "id": 10,
      "name": "Kayle",
      "alias": "Kayle",
      "title": "the Righteous",
      "roles": [
        "mage",
        "marksman"
      ],
      "style": [
        "ap",
        "tank",
        "assassinAP"
      ],
    },
    {
      "id": 11,
      "name": "Master Yi",
      "alias": "MasterYi",
      "title": "the Wuju Bladesman",
      "roles": [
        "assassin",
        "fighter"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 12,
      "name": "Alistar",
      "alias": "Alistar",
      "title": "the Minotaur",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 13,
      "name": "Ryze",
      "alias": "Ryze",
      "title": "the Rune Mage",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 14,
      "name": "Sion",
      "alias": "Sion",
      "title": "The Undead Juggernaut",
      "roles": [
        "tank",
        "fighter"
      ],
      "style": [
        "fighter",
        "assassinAD",
        "tank"
      ],
    },
    {
      "id": 15,
      "name": "Sivir",
      "alias": "Sivir",
      "title": "the Battle Mistress",
      "roles": [
        "marksman"
      ],
      "style": [
        "ad",
        "support"
      ],
    },
    {
      "id": 16,
      "name": "Soraka",
      "alias": "Soraka",
      "title": "the Starchild",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 17,
      "name": "Teemo",
      "alias": "Teemo",
      "title": "the Swift Scout",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 18,
      "name": "Tristana",
      "alias": "Tristana",
      "title": "the Yordle Gunner",
      "roles": [
        "marksman",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 19,
      "name": "Warwick",
      "alias": "Warwick",
      "title": "the Uncaged Wrath of Zaun",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 20,
      "name": "Nunu & Willump",
      "alias": "Nunu",
      "title": "the Boy and His Yeti",
      "roles": [
        "tank",
        "mage"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 21,
      "name": "Miss Fortune",
      "alias": "MissFortune",
      "title": "the Bounty Hunter",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "fighter",
        "ap"
      ],
    },
    {
      "id": 22,
      "name": "Ashe",
      "alias": "Ashe",
      "title": "the Frost Archer",
      "roles": [
        "marksman",
        "support"
      ],
      "style": [
        "fighter",
        "ad"
      ],
    },
    {
      "id": 23,
      "name": "Tryndamere",
      "alias": "Tryndamere",
      "title": "the Barbarian King",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "ap",
        "tank",
        "fighter",
        "assassinAD"
      ],
    },
    {
      "id": 24,
      "name": "Jax",
      "alias": "Jax",
      "title": "Grandmaster at Arms",
      "roles": [
        "fighter"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 25,
      "name": "Morgana",
      "alias": "Morgana",
      "title": "the Fallen",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "support",
        "tank",
        "ad",
        "ap"
      ],
    },
    {
      "id": 26,
      "name": "Zilean",
      "alias": "Zilean",
      "title": "the Chronokeeper",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 27,
      "name": "Singed",
      "alias": "Singed",
      "title": "the Mad Chemist",
      "roles": [
        "tank",
        "mage"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 28,
      "name": "Evelynn",
      "alias": "Evelynn",
      "title": "Agony's Embrace",
      "roles": [
        "assassin",
        "mage"
      ],
      "style": [
        "ap",
        "assassinAP",
        "tank"
      ],
    },
    {
      "id": 29,
      "name": "Twitch",
      "alias": "Twitch",
      "title": "the Plague Rat",
      "roles": [
        "marksman",
        "assassin"
      ],
      "style": [
        "ap",
        "tank",
        "ad"
      ],
    },
    {
      "id": 30,
      "name": "Karthus",
      "alias": "Karthus",
      "title": "the Deathsinger",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 31,
      "name": "Cho'Gath",
      "alias": "Chogath",
      "title": "the Terror of the Void",
      "roles": [
        "tank",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 32,
      "name": "Amumu",
      "alias": "Amumu",
      "title": "the Sad Mummy",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank",
      ],
    },
    {
      "id": 33,
      "name": "Rammus",
      "alias": "Rammus",
      "title": "the Armordillo",
      "roles": [
        "tank"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 34,
      "name": "Anivia",
      "alias": "Anivia",
      "title": "the Cryophoenix",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 35,
      "name": "Shaco",
      "alias": "Shaco",
      "title": "the Demon Jester",
      "roles": [
        "assassin"
      ],
      "style": [
        "ad",
        "ap",
        "tank"
      ],
    },
    {
      "id": 36,
      "name": "Dr. Mundo",
      "alias": "DrMundo",
      "title": "the Madman of Zaun",
      "roles": [
        "tank",
        "fighter"
      ],
      "style": [
        "fighter",
        "ad",
        "tank"
      ],
    },
    {
      "id": 37,
      "name": "Sona",
      "alias": "Sona",
      "title": "Maven of the Strings",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "support",
        "tank"
      ],
    },
    {
      "id": 38,
      "name": "Kassadin",
      "alias": "Kassadin",
      "title": "the Void Walker",
      "roles": [
        "assassin",
        "mage"
      ],
      "style": [
        "assassinAD",
        "ap",
        "assassinAP",
        "tank"
      ],
    },
    {
      "id": 39,
      "name": "Irelia",
      "alias": "Irelia",
      "title": "the Blade Dancer",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 40,
      "name": "Janna",
      "alias": "Janna",
      "title": "the Storm's Fury",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ad",
        "ap"
      ],
    },
    {
      "id": 41,
      "name": "Gangplank",
      "alias": "Gangplank",
      "title": "the Saltwater Scourge",
      "roles": [
        "fighter"
      ],
      "style": [
        "fighter",
        "assasinAD",
        "ad"
      ],
    },
    {
      "id": 42,
      "name": "Corki",
      "alias": "Corki",
      "title": "the Daring Bombardier",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "ad",
        "tank",
        "ap"
      ],
    },
    {
      "id": 43,
      "name": "Karma",
      "alias": "Karma",
      "title": "the Enlightened One",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 44,
      "name": "Taric",
      "alias": "Taric",
      "title": "the Shield of Valoran",
      "roles": [
        "support",
        "tank"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 45,
      "name": "Veigar",
      "alias": "Veigar",
      "title": "the Tiny Master of Evil",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 48,
      "name": "Trundle",
      "alias": "Trundle",
      "title": "the Troll King",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 50,
      "name": "Swain",
      "alias": "Swain",
      "title": "the Noxian Grand General",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 51,
      "name": "Caitlyn",
      "alias": "Caitlyn",
      "title": "the Sheriff of Piltover",
      "roles": [
        "marksman"
      ],
      "style": [
        "assassinAD",
        "tank",
        "ad"
      ],
    },
    {
      "id": 53,
      "name": "Blitzcrank",
      "alias": "Blitzcrank",
      "title": "the Great Steam Golem",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 54,
      "name": "Malphite",
      "alias": "Malphite",
      "title": "Shard of the Monolith",
      "roles": [
        "tank",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 55,
      "name": "Katarina",
      "alias": "Katarina",
      "title": "the Sinister Blade",
      "roles": [
        "assassin",
        "mage"
      ],
      "style": [
        "ad",
        "ap",
        "tank"
      ],
    },
    {
      "id": 56,
      "name": "Nocturne",
      "alias": "Nocturne",
      "title": "the Eternal Nightmare",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 57,
      "name": "Maokai",
      "alias": "Maokai",
      "title": "the Twisted Treant",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 58,
      "name": "Renekton",
      "alias": "Renekton",
      "title": "the Butcher of the Sands",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 59,
      "name": "Jarvan IV",
      "alias": "JarvanIV",
      "title": "the Exemplar of Demacia",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 60,
      "name": "Elise",
      "alias": "Elise",
      "title": "the Spider Queen",
      "roles": [
        "assassin",
        "mage"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 61,
      "name": "Orianna",
      "alias": "Orianna",
      "title": "the Lady of Clockwork",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 62,
      "name": "Wukong",
      "alias": "MonkeyKing",
      "title": "the Monkey King",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 63,
      "name": "Brand",
      "alias": "Brand",
      "title": "the Burning Vengeance",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 64,
      "name": "Lee Sin",
      "alias": "LeeSin",
      "title": "the Blind Monk",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 67,
      "name": "Vayne",
      "alias": "Vayne",
      "title": "the Night Hunter",
      "roles": [
        "marksman",
        "assassin"
      ],
      "style": [
        "ad",
        "assasinAD"
      ],
    },
    {
      "id": 68,
      "name": "Rumble",
      "alias": "Rumble",
      "title": "the Mechanized Menace",
      "roles": [
        "fighter",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 69,
      "name": "Cassiopeia",
      "alias": "Cassiopeia",
      "title": "the Serpent's Embrace",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 72,
      "name": "Skarner",
      "alias": "Skarner",
      "title": "the Primordial Sovereign",
      "roles": [
        "tank",
        "fighter"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 74,
      "name": "Heimerdinger",
      "alias": "Heimerdinger",
      "title": "the Revered Inventor",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 75,
      "name": "Nasus",
      "alias": "Nasus",
      "title": "the Curator of the Sands",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 76,
      "name": "Nidalee",
      "alias": "Nidalee",
      "title": "the Bestial Huntress",
      "roles": [
        "assassin",
        "mage"
      ],
      "style": [
        "ap",
        "fighter"
      ],
    },
    {
      "id": 77,
      "name": "Udyr",
      "alias": "Udyr",
      "title": "the Spirit Walker",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 78,
      "name": "Poppy",
      "alias": "Poppy",
      "title": "Keeper of the Hammer",
      "roles": [
        "tank",
        "fighter"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 79,
      "name": "Gragas",
      "alias": "Gragas",
      "title": "the Rabble Rouser",
      "roles": [
        "fighter",
        "mage"
      ],
      "style": [
        "ap",
        "tank",
        "fighter"
      ],
    },
    {
      "id": 80,
      "name": "Pantheon",
      "alias": "Pantheon",
      "title": "the Unbreakable Spear",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank",
        "assassinAD"
      ],
    },
    {
      "id": 81,
      "name": "Ezreal",
      "alias": "Ezreal",
      "title": "the Prodigal Explorer",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "fighter",
        "ad"
      ],
    },
    {
      "id": 82,
      "name": "Mordekaiser",
      "alias": "Mordekaiser",
      "title": "the Iron Revenant",
      "roles": [
        "fighter",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 83,
      "name": "Yorick",
      "alias": "Yorick",
      "title": "Shepherd of Souls",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "ap",
        "tank",
        "assassinAD",
        "ad"
      ],
    },
    {
      "id": 84,
      "name": "Akali",
      "alias": "Akali",
      "title": "the Rogue Assassin",
      "roles": [
        "assassin"
      ],
      "style": [
        "ap",
        "tank",
        "ad"
      ],
    },
    {
      "id": 85,
      "name": "Kennen",
      "alias": "Kennen",
      "title": "the Heart of the Tempest",
      "roles": [
        "mage"
      ],
      "style": [
        "ad",
        "tank",
        "ap"
      ],
    },
    {
      "id": 86,
      "name": "Garen",
      "alias": "Garen",
      "title": "The Might of Demacia",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "assassinAD",
        "tank",
        "ad"
      ],
    },
    {
      "id": 89,
      "name": "Leona",
      "alias": "Leona",
      "title": "the Radiant Dawn",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 90,
      "name": "Malzahar",
      "alias": "Malzahar",
      "title": "the Prophet of the Void",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank",
        "ad"
      ],
    },
    {
      "id": 91,
      "name": "Talon",
      "alias": "Talon",
      "title": "the Blade's Shadow",
      "roles": [
        "assassin"
      ],
      "style": [
        "assassinAD",
        "tank"
      ],
    },
    {
      "id": 92,
      "name": "Riven",
      "alias": "Riven",
      "title": "the Exile",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 96,
      "name": "Kog'Maw",
      "alias": "KogMaw",
      "title": "the Mouth of the Abyss",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "ad",
        "ap"
      ],
    },
    {
      "id": 98,
      "name": "Shen",
      "alias": "Shen",
      "title": "the Eye of Twilight",
      "roles": [
        "tank"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 99,
      "name": "Lux",
      "alias": "Lux",
      "title": "the Lady of Luminosity",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 101,
      "name": "Xerath",
      "alias": "Xerath",
      "title": "the Magus Ascendant",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap"
      ],
    },
    {
      "id": 102,
      "name": "Shyvana",
      "alias": "Shyvana",
      "title": "the Half-Dragon",
      "roles": [
        "fighter",
        "mage"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 103,
      "name": "Ahri",
      "alias": "Ahri",
      "title": "the Nine-Tailed Fox",
      "roles": [
        "mage",
        "assassin"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 104,
      "name": "Graves",
      "alias": "Graves",
      "title": "the Outlaw",
      "roles": [
        "marksman"
      ],
      "style": [
        "fighter",
        "tank",
        "ad"
      ],
    },
    {
      "id": 105,
      "name": "Fizz",
      "alias": "Fizz",
      "title": "the Tidal Trickster",
      "roles": [
        "assassin",
        "fighter"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 106,
      "name": "Volibear",
      "alias": "Volibear",
      "title": "the Relentless Storm",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 107,
      "name": "Rengar",
      "alias": "Rengar",
      "title": "the Pridestalker",
      "roles": [
        "assassin",
        "fighter"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 110,
      "name": "Varus",
      "alias": "Varus",
      "title": "the Arrow of Retribution",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 111,
      "name": "Nautilus",
      "alias": "Nautilus",
      "title": "the Titan of the Depths",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank",
        "assassinAD"
      ],
    },
    {
      "id": 112,
      "name": "Viktor",
      "alias": "Viktor",
      "title": "the Machine Herald",
      "roles": [
        "mage"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 113,
      "name": "Sejuani",
      "alias": "Sejuani",
      "title": "Fury of the North",
      "roles": [
        "tank"
      ],
      "style": [
        "fighter",
        "ap"
      ],
    },
    {
      "id": 114,
      "name": "Fiora",
      "alias": "Fiora",
      "title": "the Grand Duelist",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank"
      ],
    },
    {
      "id": 115,
      "name": "Ziggs",
      "alias": "Ziggs",
      "title": "the Hexplosives Expert",
      "roles": [
        "mage"
      ],
      "style": [
        "ad",
        "support",
        "ap"
      ],
    },
    {
      "id": 117,
      "name": "Lulu",
      "alias": "Lulu",
      "title": "the Fae Sorceress",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 119,
      "name": "Draven",
      "alias": "Draven",
      "title": "the Glorious Executioner",
      "roles": [
        "marksman"
      ],
      "style": [
        "ad",
        "assassinAD"
      ],
    },
    {
      "id": 120,
      "name": "Hecarim",
      "alias": "Hecarim",
      "title": "the Shadow of War",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 121,
      "name": "Kha'Zix",
      "alias": "Khazix",
      "title": "the Voidreaver",
      "roles": [
        "assassin"
      ],
      "style": [
        "fighter",
        "tank",
        "ap"
      ],
    },
    {
      "id": 122,
      "name": "Darius",
      "alias": "Darius",
      "title": "the Hand of Noxus",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "tank",
        "ad"
      ],
    },
    {
      "id": 126,
      "name": "Jayce",
      "alias": "Jayce",
      "title": "the Defender of Tomorrow",
      "roles": [
        "marksman",
        "fighter"
      ],
      "style": [
        "ad",
        "assassinAD"
      ],
    },
    {
      "id": 127,
      "name": "Lissandra",
      "alias": "Lissandra",
      "title": "the Ice Witch",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 131,
      "name": "Diana",
      "alias": "Diana",
      "title": "Scorn of the Moon",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank",
        "ad",
        "ap"
      ],
    },
    {
      "id": 133,
      "name": "Quinn",
      "alias": "Quinn",
      "title": "Demacia's Wings",
      "roles": [
        "marksman",
        "assassin"
      ],
      "style": [
        "assassinAD",
        "ad"
      ],
    },
    {
      "id": 134,
      "name": "Syndra",
      "alias": "Syndra",
      "title": "the Dark Sovereign",
      "roles": [
        "mage"
      ],
      "style": [
        "tank",
        "ap"
      ],
    },
    {
      "id": 136,
      "name": "Aurelion Sol",
      "alias": "AurelionSol",
      "title": "The Star Forger",
      "roles": [
        "mage"
      ],
      "style": [
        "tank",
        "ap"
      ],
    },
    {
      "id": 141,
      "name": "Kayn",
      "alias": "Kayn",
      "title": "the Shadow Reaper",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "tank",
        "ad"
      ],
    },
    {
      "id": 142,
      "name": "Zoe",
      "alias": "Zoe",
      "title": "the Aspect of Twilight",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 143,
      "name": "Zyra",
      "alias": "Zyra",
      "title": "Rise of the Thorns",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 145,
      "name": "Kai'Sa",
      "alias": "Kaisa",
      "title": "Daughter of the Void",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "ap",
        "support",
        "ad"
      ],
    },
    {
      "id": 147,
      "name": "Seraphine",
      "alias": "Seraphine",
      "title": "the Starry-Eyed Songstress",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 150,
      "name": "Gnar",
      "alias": "Gnar",
      "title": "the Missing Link",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "tank",
        "support"
      ],
    },
    {
      "id": 154,
      "name": "Zac",
      "alias": "Zac",
      "title": "the Secret Weapon",
      "roles": [
        "tank",
        "fighter"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 157,
      "name": "Yasuo",
      "alias": "Yasuo",
      "title": "the Unforgiven",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 161,
      "name": "Vel'Koz",
      "alias": "Velkoz",
      "title": "the Eye of the Void",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 163,
      "name": "Taliyah",
      "alias": "Taliyah",
      "title": "the Stoneweaver",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "support",
        "tank"
      ],
    },
    {
      "id": 164,
      "name": "Camille",
      "alias": "Camille",
      "title": "the Steel Shadow",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "ad",
        "support"
      ],
    },
    {
      "id": 166,
      "name": "Akshan",
      "alias": "Akshan",
      "title": "the Rogue Sentinel",
      "roles": [
        "marksman",
        "assassin"
      ],
      "style": [
        "ad",
        "tank",
        "assassinAD"
      ],
    },
    {
      "id": 200,
      "name": "Bel'Veth",
      "alias": "Belveth",
      "title": "the Empress of the Void",
      "roles": [
        "fighter"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 201,
      "name": "Braum",
      "alias": "Braum",
      "title": "the Heart of the Freljord",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "tank",
        "support",
        "ad"
      ],
    },
    {
      "id": 202,
      "name": "Jhin",
      "alias": "Jhin",
      "title": "the Virtuoso",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "ad",
        "support"
      ],
    },
    {
      "id": 203,
      "name": "Kindred",
      "alias": "Kindred",
      "title": "The Eternal Hunters",
      "roles": [
        "marksman"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 221,
      "name": "Zeri",
      "alias": "Zeri",
      "title": "The Spark of Zaun",
      "roles": [
        "marksman"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 222,
      "name": "Jinx",
      "alias": "Jinx",
      "title": "the Loose Cannon",
      "roles": [
        "marksman"
      ],
      "style": [
        "ad",
        "support"
      ],
    },
    {
      "id": 223,
      "name": "Tahm Kench",
      "alias": "TahmKench",
      "title": "The River King",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 233,
      "name": "Briar",
      "alias": "Briar",
      "title": "the Restrained Hunger",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "ap",
        "fighter",
        "assassinAD"
      ],
    },
    {
      "id": 234,
      "name": "Viego",
      "alias": "Viego",
      "title": "The Ruined King",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "fighter",
        "ad",
        "tank"
      ],
    },
    {
      "id": 235,
      "name": "Senna",
      "alias": "Senna",
      "title": "the Redeemer",
      "roles": [
        "support",
        "marksman"
      ],
      "style": [
        "ad",
        "ap"
      ],
    },
    {
      "id": 236,
      "name": "Lucian",
      "alias": "Lucian",
      "title": "the Purifier",
      "roles": [
        "marksman",
        "assassin"
      ],
      "style": [
        "ad",
        "support"
      ],
    },
    {
      "id": 238,
      "name": "Zed",
      "alias": "Zed",
      "title": "the Master of Shadows",
      "roles": [
        "assassin"
      ]
    },
    {
      "id": 240,
      "name": "Kled",
      "alias": "Kled",
      "title": "the Cantankerous Cavalier",
      "roles": [
        "fighter"
      ],
      "style": [
        "ad",
        "tank"
      ],
    },
    {
      "id": 245,
      "name": "Ekko",
      "alias": "Ekko",
      "title": "the Boy Who Shattered Time",
      "roles": [
        "assassin",
        "mage"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 246,
      "name": "Qiyana",
      "alias": "Qiyana",
      "title": "Empress of the Elements",
      "roles": [
        "assassin"
      ],
      "style": [
        "ad",
        "assassinAD"
      ],
    },
    {
      "id": 254,
      "name": "Vi",
      "alias": "Vi",
      "title": "the Piltover Enforcer",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "ad",
        "assassinAD",
        "tank"
      ],
    },
    {
      "id": 266,
      "name": "Aatrox",
      "alias": "Aatrox",
      "title": "the Darkin Blade",
      "roles": [
        "fighter"
      ],
      "style": [
        "tank",
        "ad"
      ],
    },
    {
      "id": 267,
      "name": "Nami",
      "alias": "Nami",
      "title": "the Tidecaller",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 268,
      "name": "Azir",
      "alias": "Azir",
      "title": "the Emperor of the Sands",
      "roles": [
        "mage",
        "marksman"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 350,
      "name": "Yuumi",
      "alias": "Yuumi",
      "title": "the Magical Cat",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 360,
      "name": "Samira",
      "alias": "Samira",
      "title": "the Desert Rose",
      "roles": [
        "marksman",
        "assassin"
      ],
      "style": [
        "tank",
        "ad"
      ],
    },
    {
      "id": 412,
      "name": "Thresh",
      "alias": "Thresh",
      "title": "the Chain Warden",
      "roles": [
        "support",
        "tank"
      ],
      "style": [
        "tank",
        "ad",
        "ap"
      ],
    },
    {
      "id": 420,
      "name": "Illaoi",
      "alias": "Illaoi",
      "title": "the Kraken Priestess",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "fighter",
        "ad"
      ],
    },
    {
      "id": 421,
      "name": "Rek'Sai",
      "alias": "RekSai",
      "title": "the Void Burrower",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 427,
      "name": "Ivern",
      "alias": "Ivern",
      "title": "the Green Father",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 429,
      "name": "Kalista",
      "alias": "Kalista",
      "title": "the Spear of Vengeance",
      "roles": [
        "marksman"
      ],
      "style": [
        "tank",
        "ad"
      ],
    },
    {
      "id": 432,
      "name": "Bard",
      "alias": "Bard",
      "title": "the Wandering Caretaker",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 497,
      "name": "Rakan",
      "alias": "Rakan",
      "title": "The Charmer",
      "roles": [
        "support"
      ],
      "style": [
        "tank",
        "ap"
      ],
    },
    {
      "id": 498,
      "name": "Xayah",
      "alias": "Xayah",
      "title": "the Rebel",
      "roles": [
        "marksman"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 516,
      "name": "Ornn",
      "alias": "Ornn",
      "title": "The Fire below the Mountain",
      "roles": [
        "tank"
      ],
      "style": [
        "tank",
        "fighter"
      ],
    },
    {
      "id": 517,
      "name": "Sylas",
      "alias": "Sylas",
      "title": "the Unshackled",
      "roles": [
        "mage",
        "assassin"
      ],
      "style": [
        "ap",
        "support"
      ],
    },
    {
      "id": 518,
      "name": "Neeko",
      "alias": "Neeko",
      "title": "the Curious Chameleon",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 523,
      "name": "Aphelios",
      "alias": "Aphelios",
      "title": "the Weapon of the Faithful",
      "roles": [
        "marksman"
      ],
      "style": [
        "tank",
        "ad",
        "ap"
      ],
    },
    {
      "id": 526,
      "name": "Rell",
      "alias": "Rell",
      "title": "the Iron Maiden",
      "roles": [
        "tank",
        "support"
      ],
      "style": [
        "ap",
        "tank",
        "support"
      ],
    },
    {
      "id": 555,
      "name": "Pyke",
      "alias": "Pyke",
      "title": "the Bloodharbor Ripper",
      "roles": [
        "support",
        "assassin"
      ],
      "style": [
        "assassinAD",
        "ad",
        "tank"
      ],
    },
    {
      "id": 711,
      "name": "Vex",
      "alias": "Vex",
      "title": "the Gloomist",
      "roles": [
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 777,
      "name": "Yone",
      "alias": "Yone",
      "title": "the Unforgotten",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "ap",
        "tank",
        "support",
        "fighter"
      ],
    },
    {
      "id": 875,
      "name": "Sett",
      "alias": "Sett",
      "title": "the Boss",
      "roles": [
        "fighter",
        "tank"
      ],
      "style": [
        "tank",
        "ad"
      ],
    },
    {
      "id": 876,
      "name": "Lillia",
      "alias": "Lillia",
      "title": "the Bashful Bloom",
      "roles": [
        "fighter",
        "mage"
      ],
      "style": [
        "ap"
      ],
    },
    {
      "id": 887,
      "name": "Gwen",
      "alias": "Gwen",
      "title": "The Hallowed Seamstress",
      "roles": [
        "fighter"
      ],
      "style": [
        "ap",
        "fighter"
      ],
    },
    {
      "id": 888,
      "name": "Renata Glasc",
      "alias": "Renata",
      "title": "the Chem-Baroness",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 893,
      "name": "Aurora",
      "alias": "Aurora",
      "title": "the Witch Between Worlds",
      "roles": [
        "mage",
        "assassin"
      ],
      "style": [
        "ap",
        "assassinAD"
      ],
    },
    {
      "id": 895,
      "name": "Nilah",
      "alias": "Nilah",
      "title": "the Joy Unbound",
      "roles": [
        "fighter",
        "assassin"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 897,
      "name": "K'Sante",
      "alias": "KSante",
      "title": "the Pride of Nazumah",
      "roles": [
        "tank",
        "fighter"
      ],
      "style": [
        "ap",
        "ad"
      ],
    },
    {
      "id": 901,
      "name": "Smolder",
      "alias": "Smolder",
      "title": "the Fiery Fledgling",
      "roles": [
        "marksman",
        "mage"
      ],
      "style": [
        "tank",
        "ad"
      ],
    },
    {
      "id": 902,
      "name": "Milio",
      "alias": "Milio",
      "title": "The Gentle Flame",
      "roles": [
        "support",
        "mage"
      ],
      "style": [
        "ap",
        "tank"
      ],
    },
    {
      "id": 910,
      "name": "Hwei",
      "alias": "Hwei",
      "title": "the Visionary",
      "roles": [
        "mage",
        "support"
      ],
      "style": [
        "ap",
        "assassinAD"
      ],
    },
    {
      "id": 950,
      "name": "Naafiri",
      "alias": "Naafiri",
      "title": "the Hound of a Hundred Bites",
      "roles": [
        "assassin",
        "fighter"
      ],
      "style": [
        "fighter",
        "ad"
      ],
    }
  ];

  const supportItems = [
    { name: "Zaz'Zak's Realmspike", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3871_zazzaksrealmspike.png", Enabled: true },
    { name: "Bloodsong", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3877_bloodsong.png", Enabled: true },
    { name: "Dream Maker", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3870_dreammaker.png", Enabled: true },
    { name: "Celestial Opposition", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3869_celestialopposition.png", Enabled: true },
    { name: "Bounty of Worlds", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3867_bountyofworlds.png", Enabled: true },
    { name: "Solstice Sleigh", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3876_solticesleigh.png", Enabled: true },
  ];

  const jungleItems = [
    { name: "Scorchclaw Pup", type: "jungle", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1101_jungle_t1_scorchclawpup.png", restriction: "jungleItem", Enabled: true},
    { name: "Gustwalker Hatchling", type: "jungle", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1102_jungle_t1_gustwalkerhatchling.png", restriction: "jungleItem", Enabled: true},
    { name: "Mosstomper Seedling", type: "jungle", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1103_jungle_t1_mosstomperseedling.png", restriction: "jungleItem", Enabled: true},
  ];

  const annulItems = [
    { name: "Edge of Night", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3814_assassin_t3_edgeofnight.png", Enabled: true},
    { name: "Banshee's Veil", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3102_mage_t3_bansheesveil.png", Enabled: true},
  ];

  const blightItems = [
    { name: "Abyssal Mask", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/8020_tank_t3_abyssalmask.png", Enabled: true},
    { name: "Cryptbloom", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3137_cryptbloom.png", Enabled: true},
    { name: "Terminus", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3302_terminus.png", Enabled: true},
    { name: "Void Staff", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3135_mage_t3_voidstaff.png", Enabled: true},
  ];

  const eternityItems = [
    { name: "Rod of Ages", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6657_mage_t4_rodofages.png", Enabled: true},
  ];

  const fatalityItems = [
    { name: "Black Cleaver", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3071_fighter_t3_blackcleaver.png", Enabled: true},
    { name: "Lord Dominik's Regards", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3036_marksman_t3_dominikregards.png", Enabled: true, restriction: "antiHealItem"},
    { name: "Mortal Reminder", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3033_marksman_t3_mortalreminder.png", Enabled: true, restriction: "antiHealItem"},
    { name: "Serylda's Grudge", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6694_assasin_t3_seryldasgrudge.png", Enabled: true},
    { name: "Terminus", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3302_terminus.png", Enabled: true},
  ];

  const hydraItems = [
    { name: "Profane Hydra", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6698_profanehydra.png", Enabled: true},
    { name: "Ravenous Hydra", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3074_fighter_t3_ravenoushydra.png", Enabled: true},
    { name: "Stridebreaker", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6631_fighter_t4_stridebreaker.png", Enabled: true},
    { name: "Titanic Hydra", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3748_fighter_t3_titanichydra.png", Enabled: true},
  ];

  const immolateItems = [
    { name: "Sunfire Aegis", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3068_tank_t4_sunfireaegis.png", Enabled: true},
    { name: "Hollow Radiance", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6664_hollowradiance.png", Enabled: true},
  ];

  const lifelineItems = [
    { name: "Archangel's Staff", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3003_mage_t3_archangelstaff.png", Enabled: true},
    { name: "Maw of Malmortius", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3156_fighter_t3_mawofmalmortius.png", Enabled: true},
    { name: "Immortal Shieldbow", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6673_marksman_t4_crimsonshieldbow.png", Enabled: true},
    { name: "Sterak's Gage", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3053_steraks_gage.png", Enabled: true},
  ];

  const manaflowItems = [
    { name: "Archangel's Staff", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3003_mage_t3_archangelstaff.png", Enabled: true},
    { name: "Winter's Approach", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3119_wintersapproach.png", Enabled: true},
    { name: "Manamune", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3004_marksman_t3_manamune.png", Enabled: true},
  ];

  const momentumItems = [
    { name: "Trailblazer", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3002_trailblazer.png", Enabled: true},
    { name: "Dead Man's Plate", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3742_tank_t3_deadmansplate.png", Enabled: true},
  ];

  const quicksilverItems = [
    { name: "Mercurial Scimitar", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3139_marksman_t3_mercurialscimitar.png", Enabled: true},
  ];

  const spellbladeItems = [
    { name: "Bloodsong", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3877_bloodsong.png", Enabled: true },
    { name: "Iceborn Gauntlet", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6662_tank_t3_iceborngauntlet.png", Enabled: true},
    { name: "Lich Bane", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3100_mage_t3_lichbane.png", Enabled: true},
    { name: "Trinity Force", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3078_fighter_t4_trinityforce.png", Enabled: true},
  ];

  const bootsItems = [
    { name: "Berserker's Greaves", type: "boots", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3006_class_t2_berserkersgreaves.png", restriction: "bootsItem", bootsType: "ad", Enabled: true },
    { name: "Boots of Swiftness", type: "boots", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3009_class_t2_bootsofswiftness.png", restriction: "bootsItem", bootsType: "speed", Enabled: true },
    { name: "Symbiotic Soles", type: "boots", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3010_voidboots.png", restriction: "bootsItem", bootsType: "fun", Enabled: true },
    { name: "Sorcerer's Shoes", type: "boots", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3020_class_t2_sorcerersshoes.png", restriction: "bootsItem", bootsType: "ap", Enabled: true }, 
    { name: "Mercury's Treads", type: "boots", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3111_class_t2_mercurystreads.png", restriction: "bootsItem", bootsType: "armor", Enabled: true },
    { name: "Plated Steelcaps", type: "boots", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3047_class_t2_ninjatabi.png", restriction: "bootsItem", bootsType: "armor", Enabled: true },
    { name: "Ionian Boots of Lucidity", type: "boots", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3158_class_t2_ionianbootsoflucidity.png", restriction: "bootsItem", bootsType: "armor", Enabled: true },
  ];

const items = [
    
    { name: "Zeke's Convergence", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3050_enchanter_t3_zekesconvergence.png", Enabled: true },
    { name: "Redemption", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3107_enchanter_t3_redemption.png", Enabled: true },
    { name: "Mikael's Blessing", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3222_enchanter_t3_mikaelsblessing.png", Enabled: true },
    { name: "Ardent Censer", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3504_enchanter_t3_ardentcenser.png", Enabled: true },
    { name: "Staff of Flowing Water", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3744_enchanter_t3_staffofflowingwater.png", Enabled: true },
    { name: "Imperial Mandate", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4005_enchanter_t4_imperialmandate.png", Enabled: true },
    { name: "Vigilant Wardstone", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4643_enchanter_t3_vigilantsightstone.png", Enabled: true },
    { name: "Moonstone Renewer", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6617_enchanter_t4_moonstonerenewer.png", Enabled: true },
    { name: "Echoes of Helia", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6620_echoes_of_helia.png", Enabled: true },
    { name: "Dawncore", type: "support", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6621_dawncore.png", Enabled: true },
    
    { name: "Shurelya's Battlesong", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2065_tank_t4_shurelyasbattlesong.png", restriction: "supportItem", Enabled: true },
    { name: "Unending Despair", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2502_unendingdespair.png", Enabled: true},
    { name: "Kaenic Rookern", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2504_kaenicrookern.png", Enabled: true},
    { name: "Spirit Visage", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3065_tank_t3_spiritvisage.png", Enabled: true},
    { name: "Thornmail", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3075_tank_t3_thornmail.png", Enabled: true},
    { name: "Warmog's Armor", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3083_tank_t3_warmogs.png", Enabled: true},
    { name: "Heartsteel", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3084_tank_t4_heartsteel.png", Enabled: true},
    { name: "Knight's Vow", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3109_tank_t3_knightsvow.png", Enabled: true},
    { name: "Frozen Heart", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3110_tank_t3_frozenheart.png", Enabled: true},
    { name: "Randuin's Omen", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3143_tank_t3_randuinsomen.png", Enabled: true},
    { name: "Locket of the Iron Solari", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3190_enchanter_t4_locketofironsolari.png", Enabled: true},
    { name: "Force of Nature", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4401_tank_t3_forceofnature.png", Enabled: true},
    { name: "Jak'Sho, The Protean", type: "tank", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6665_tank_t4_jakshotheprotean.png", Enabled: true},
    
    { name: "Blackfire Torch", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2503_blackfiretorch64.png", Enabled: true},
    { name: "Mejai's Soulstealer", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3041_mage_t2_mejaissoulstealer.png", Enabled: true},
    { name: "Rabadon's Deathcap", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3089_mage_t3_deathcap.png", Enabled: true},
    { name: "Nashor's Tooth", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3115_mage_t3_nashorstooth.png", Enabled: true},
    { name: "Rylai's Crystal Scepter", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3116_mage_t3_rylajscrystalscepter.png", Enabled: true},
    { name: "Malignance", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3118_malignance.png", Enabled: true},
    { name: "Hextech Rocketbelt", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3152_mage_t4_hextechrocketbelt.png", Enabled: true},
    { name: "Zhonya's Hourglass", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3157_mage_t3_zhonyashourglass.png", Enabled: true},
    { name: "Morellonomicon", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3165_mage_t3_morellonomicon.png", Enabled: true},
    { name: "Horizon Focus", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4628_mage_t3_horizonfocus.png", Enabled: true},
    { name: "Cosmic Drive", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4629_mage_t3_cosmicdrive.png", Enabled: true},
    { name: "Riftmaker", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4633_mage_t4_riftmaker.png", Enabled: true},
    { name: "Shadowflame", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4645_shadowflame.png", Enabled: true},
    { name: "Stormsurge", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4646_stormsurge.png", Enabled: true},
    { name: "Liandry's Torment", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6653_mage_t4_liandrysanguish.png", Enabled: true},
    { name: "Luden's Companion", type: "ap", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6655_casterscompanion.png", Enabled: true},
   
    { name: "Guardian Angel", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3026_fighter_t3_guardianangel.png", Enabled: true},
    { name: "Infinity Edge", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3031_marksman_t3_infinityedge.png", Enabled: true},
    { name: "Yun Tal Wildarrows", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3032_yuntalwildarrows.png", Enabled: true},
    { name: "Phantom Dancer", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3046_marksman_t3_phantomdancer.png", Enabled: true},
    { name: "Bloodthirster", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3072_fighter_t3_bloodthirster.png", Enabled: true},
    { name: "Runaan's Hurricane", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3085_marksman_t3_runaans.png", Enabled: true},
    { name: "Statikk Shiv", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3087_statikk_shiv.png", Enabled: true},
    { name: "Rapid Firecannon", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3094_marksman_t3_rapidfirehandcannon.png", Enabled: true},
    { name: "Guinsoo's Rageblade", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3124_marksman_t3_guinsoosrageblade.png", Enabled: true},
    { name: "Essence Reaver", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3508_marksman_t3_essencereaver.png", Enabled: true},
    { name: "Kraken Slayer", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6672_marksman_t4_behemothslayer.png", Enabled: true},
    { name: "Navori Flickerblade", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6675_navoriflickerblade.png", Enabled: true},
    { name: "The Collector", type: "ad", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6676_marksman_t3_thecollector.png", Enabled: true},
    
    { name: "Youmuu's Ghostblade", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3142_assassin_t3_youmuusghostblade.png", Enabled: true},
    { name: "Umbral Glaive", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3179_assassin_t3_umbralglaive.png", Enabled: true},
    { name: "Eclipse", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6692_assassin_t4_eclipse.png", Enabled: true},
    { name: "Serpent's Fang", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6695_assassin_t3_serpentsfang.png", Enabled: true},
    { name: "Axiom Arc", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6696_axiomarc.png", Enabled: true},
    { name: "Hubris", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6697_hubris.png", Enabled: true},
    { name: "Voltaic Cyclosword", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6699_voltaiccyclosword.png", Enabled: true},
    { name: "Opportunity", type: "assassin", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6701_opportunity.png", Enabled: true},
   
    { name: "Experimental Hexplate", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3073_hexaegis.png", Enabled: true},
    { name: "Wit's End", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3091_fighter_t3_witsend.png", Enabled: true},
    { name: "Blade of the Ruined King", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3153_fighter_t3_bladeoftheruinedking.png", Enabled: true},
    { name: "Spear of Shojin", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3161_fighter_t3_spearofshojin.png", Enabled: true},
    { name: "Hullbreaker", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3181_hullbreaker.png", Enabled: true},
    { name: "Death's Dance", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6333_fighter_t3_deathsdance.png", Enabled: true},
    { name: "Chempunk Chainsword", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6609_fighter_t3_chempunkchainsword.png", Enabled: true},
    { name: "Sundered Sky", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6610_sunderedsky.png", Enabled: true},
    { name: "Overlord's Bloodmail", type: "fighter", icon: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7111_overlordsbloodmail.png", Enabled: true},

   ];

function getChampionIcon(id) {
    return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;
}

document.addEventListener("DOMContentLoaded", function() {
    // Dein JavaScript-Code
    generateBuild();  // Beispiel-Aufruf der Funktion nach dem Laden
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateBuild() {
  const lane = document.getElementById("lane").value;

  // Rollen basierend auf der ausgewählten Lane definieren
  let roleCriteria = [];
  switch (lane) {
    case "top":
      roleCriteria = ["tank", "fighter"];
      break;
    case "mid":
      roleCriteria = ["mage", "assassin"];
      break;
    case "jungle":
      roleCriteria = ["fighter", "assassin"];
      break;
    case "adc":
      roleCriteria = ["marksman", "mage"];
      break;
    case "support":
      roleCriteria = ["support"];
      break;
    case "random":
      roleCriteria = ["tank", "fighter", "support", "mage", "marksman", "assassin"];
      break;
    default:
      console.error("Ungültige Lane gewählt.");
      return;
  }

  // Filter Champions nach den entsprechenden Rollen
  const filteredChampions = champions.filter(champ => 
    roleCriteria.some(role => champ.roles.includes(role))
  );

  if (filteredChampions.length === 0) {
    console.error("Keine Champions für die ausgewählte Lane gefunden.");
    return;
  }

  const champion = filteredChampions[Math.floor(Math.random() * filteredChampions.length)];

  // Zuordnung von Champion-Rollen zu passenden Item-Typen
  const roleItemMap = {
    support: ["support"],
    fighter: ["ad", "tank"],
    mage: ["ap"],
    assassin: ["ad", "assassin"],
    marksman: ["ad"],
    tank: ["tank"]
  };

  // Finde die passenden Item-Typen basierend auf den Champion-Rollen
  const championItemTypes = champion.roles
    .flatMap(roles => roleItemMap[roles] || [])
    .filter((value, index, self) => self.indexOf(value) === index); // Duplikate entfernen

  // Filter reguläre Items nach kompatiblen Typen
  const compatibleItems = items.filter(item => 
    championItemTypes.includes(item.type) && item.Enabled
  );

  const buildItems = [];
  const selectedItems = new Set();
 
  // Spezielle Item-Gruppen optional hinzufügen
  const specialItemGroups = [
    supportItems, jungleItems, annulItems, blightItems,
    eternityItems, fatalityItems, hydraItems, immolateItems,
    lifelineItems, manaflowItems, momentumItems, quicksilverItems, spellbladeItems
  ];

  if(champion.alias != "Cassiopeia")
  {
    const role = champion.roles[0];
    switch(role)
    {
      case "tank":
        if(getRandomInt(2) == 1)
        {
          selectedItems.add(bootsItems[4].name);
          buildItems.push(bootsItems[4]);
        }
        else
        {
          selectedItems.add(bootsItems[5].name);
          buildItems.push(bootsItems[5]);
        }
        break;

      case "fighter":
        if(getRandomInt(2) == 1)
        {
          selectedItems.add(bootsItems[4].name);
          buildItems.push(bootsItems[4]);
        }
        else
        {
          selectedItems.add(bootsItems[5].name);
          buildItems.push(bootsItems[5]);
        }
        break;

      case "marksman":
        selectedItems.add(bootsItems[0].name);
        buildItems.push(bootsItems[0]);
        break;

      case "mage":
        selectedItems.add(bootsItems[3].name);
        buildItems.push(bootsItems[3]);
        break;

      case "assassin":
        selectedItems.add(bootsItems[6].name);
        buildItems.push(bootsItems[6]);
        break;

      case "support":
        if(getRandomInt(3) == 0)
        {
          selectedItems.add(bootsItems[4].name);
          buildItems.push(bootsItems[4]);
        }
        else if(getRandomInt(3) == 1)
        {
          selectedItems.add(bootsItems[5].name);
          buildItems.push(bootsItems[5]);
        }
        else if(getRandomInt(3) == 2)
        {
          selectedItems.add(bootsItems[6].name);
          buildItems.push(bootsItems[6]);
        }
        break;
    }
   
  }
    
  specialItemGroups.forEach(group => {
    if (buildItems.length < 2) {
      const compatibleSpecialItems = group.filter(item => 
        championItemTypes.includes(item.type) && item.Enabled && !selectedItems.has(item.name)
      );

      if (compatibleSpecialItems.length > 0 ) {
        const randomSpecialItem = compatibleSpecialItems[Math.floor(Math.random() * compatibleSpecialItems.length)];
        buildItems.push(randomSpecialItem);
        selectedItems.add(randomSpecialItem.name); // Item zur Set-Liste hinzufügen, um Duplikate zu vermeiden
      }
    }
  });

if(lane == "jungle")
{
  const jungleItem = jungleItems[Math.floor(Math.random() * jungleItems.length)];
  selectedItems.add(jungleItem.name);
  buildItems.push(jungleItem);
}
else if(lane == "support")
{
  const supItem = supportItems[Math.floor(Math.random() * supportItems.length)];
  selectedItems.add(supItem.name);
  buildItems.push(supItem);
}
  

  // Auffüllen mit regulären Items, bis 6 Items erreicht sind
  while (buildItems.length < 6 && compatibleItems.length > 0) {
    const compatibleItem = compatibleItems.find(item => !selectedItems.has(item.name));
    if (compatibleItem) {
      buildItems.push(compatibleItem);
      selectedItems.add(compatibleItem.name); // Item zur Set-Liste hinzufügen
    } else {
      break;
    }
  }

  function capitalizeFirstLetter(title) {
    return title.charAt(0).toUpperCase() + title.slice(1);
}

// Bei der Anzeige des Champions:
document.getElementById("champion").innerHTML = `
    <div>
        <img src="${getChampionIcon(champion.id)}" alt="${champion.name}" width="100" />
        <h2>${champion.name}</h2>
        <p>${capitalizeFirstLetter(champion.title)}</p> <!-- Champion Titel -->
    </div>
`;

// Items anzeigen
document.getElementById("items").innerHTML = buildItems.map(item => `
    <div style="text-align: center;"> <!-- Center the text under the image -->
        <img src="${item.icon}" alt="${item.name}" title="${item.name}" />
        <p>${item.name}</p> <!-- Item Name -->
    </div>
`).join('');

const audio = new Audio();

audio.src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-choose-vo/${champion.id}.ogg`;
audio.volume = 0.5;
audio.play();
}
