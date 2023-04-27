const startplayer = {
  rng: ExpantaNum(0),
  rps: ExpantaNum(1),
  sacrifice: {
    points: ExpantaNum(0),
    luck: ExpantaNum(1),
    spmult: ExpantaNum(1),
    times: 0
  },
  prestige: {
    points: ExpantaNum(0),
    lps: ExpantaNum(0),
    upgrades: [],
    times: 0,
    automation: {
      
    }
  },
  mining: {
    unlocked: false, 
    level: ExpantaNum(1),
    xp: ExpantaNum(0),
    coins: ExpantaNum(0),
    ores: {}
  },
  rpg: {
    unlocked: false,
    MaxHP: ExpantaNum(100),
    HP: ExpantaNum(100),
    lives: 1,
    luck: ExpantaNum(1),
    npc: {},
    turn: 1,
    round: 1,
    statuseffects: [],
    items: []
  }
}

const tabs = [
  "main",
  "sacrifice",
  "prestige"
]

const Rarities = [
  "<span style='color: grey'>Basic</span>",
  "<span style='color: white'>Common</span>",
  "<span style='color: green'>Uncommon</span>",
  "<span style='color: purple'>Rare</span>",
  "<span style='color: yellow'>Legendary</span>",
  "<span style='color: red'>Mythical</span>",
  "<span style='background-image: linear-gradient(90deg, white, black); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Ethereal</span>",
  "<span style='background-image: linear-gradient(90deg, red, blue); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Ultimate</span>",
  "<span style='background-image: linear-gradient(90deg, red, white); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Unique</span>",
  "<span style='background-image: linear-gradient(90deg, green, white); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Extoic</span>",
  "<span style='background-image: linear-gradient(90deg, purple, white); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Supreme</span>",
  "<span style='background-image: linear-gradient(90deg, #400080, purple); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Divine</span>",
  "<span style='color: cyan'>Godly</span>",
  "<span style='background-image: linear-gradient(90deg, red, green); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Unreal</span>",
  "<span style='background-image: linear-gradient(90deg, black, gray); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Absurd</span>",
  "<span style='background-image: linear-gradient(90deg, pink, magenta); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Insane</span>",
  "<span style='background-image: linear-gradient(90deg, orange, purple); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Ultra</span>",
  "<span style='color: black'>Hyper</span>",
  "<span style='background-image: linear-gradient(90deg, purple, black); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Lunar</span>",
  "<span style='background-image: linear-gradient(90deg, yellow, white); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Solar</span>",
  "<span style='background-image: linear-gradient(90deg, yellow, magenta); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Eclipse</span>",
  "<span style='background-image: linear-gradient(90deg, orange, black); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Eternal</span>",
  "<span style='background-image: linear-gradient(90deg, magenta, red); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Ruler</span>",
  "<span style='background-image: linear-gradient(90deg, yellow, magenta); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>King</span>",
  "<span style='background-image: linear-gradient(90deg, maroon, magenta); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Emperor</span>",
  "<span style='background-image: linear-gradient(90deg, yellow, red); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Champion</span>",
  "<span style='color: bronze'>Bronze</span>",
  "<span style='color: silver'>Iron</span>",
  "<span style='color' gold'>Gold</span>",
  "<span style='color: cyan'>Diamond</span>",
  "<span style='color: green'>Emerald</span>",
  "<span style='color: red'>Ruby</span>",
  "<span style='color: purple'>Janite</span>",
  "<span style='color: purple'>Master</span>",
  "<span style='color: light-purple'>Archmaster</span>",
  
  
  
  
  
]

const ExtendedRarities = ["<span style='background-image: linear-gradient(90deg, white, grey); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Null</span>",
"<span style='background-image: linear-gradient(90deg, black, grey); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Undefined</span>",
"<span style='background-image: linear-gradient(90deg, red, grey); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Unknown</span>",
"<span style='background-image: linear-gradient(90deg, aqua, blue); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Windows</span>",
"<span style='background-image: linear-gradient(90deg, red, darkred); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Error</span>",
"<span style='background-image: linear-gradient(90deg, red, aqua); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>NaN</span>",
"<span style='background-image: linear-gradient(90deg, darkcyan, blue); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>BFDI</span>",
"<span style='background-image: linear-gradient(90deg, grey, lightgrey); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Alpha</span>",
"<span style='background-image: linear-gradient(90deg, red, lime); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Greek</span>",
"<span style='background-image: linear-gradient(90deg, pink, yellow); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Wiki</span>",
"<span style='background-image: linear-gradient(90deg, cyan, darkcyan); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Crystal</span>",
"<span style='background-image: linear-gradient(90deg, yellow, brown); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Supercrystal</span>",
"<span style='background-image: linear-gradient(90deg, purple, rebeccapurple); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Hypercrystal</span>", "<span style='background-image: linear-gradient(90deg, purple, white); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Epoc</span>",
"<span style='background-image: linear-gradient(90deg, red, pink); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Love</span>",
"<span style='background-image: linear-gradient(90deg, green, lime); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Click Yes</span>",
"<span style='background-image: linear-gradient(90deg, red, darkred); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Click No</span>",
"<span style='background-image: linear-gradient(90deg, slategrey, grey); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Click Nothing</span>",
"<span style='background-image: linear-gradient(90deg, blue, darkcyan); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Fourtle</span>",
"<span style='background-image: linear-gradient(90deg, white, slategrey); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Last</span>",]

const ExtraRarities = ["<span style='background-image: linear-gradient(90deg, red, yellow); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Distorted</span>",
"<span style='background-image: linear-gradient(90deg, green, black); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Glitched</span>",
"<span style='background-image: linear-gradient(90deg, green, lime); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Great</span>",
"<span style='background-image: linear-gradient(90deg, red, black); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>Scary</span>",]

const get_rarity = n => n < 100000 ? (n < 20000 ? (n < 4000 ? (+n <= 2000 ? (Rarities[+n] ? Rarities[+n] : (get_rarity(n - Rarities.length) + "+").replace("++", "*").replace("**", "^").replace("^^", "→").replace("→→", "{}").replace("{}{}", "{}/++").replace("{}/{}", "[]").replace("[][]", "[]/++").replace("[]/[]", "[]\\++").replace("[]\\[]", "°").replace("°°", "✓").replace("✓✓", "✓/++").replace("✓/✓", "✓\\++").replace("✓\\✓", "✓|++").replace("✓|✓", "✓=+++").replace("✓=✓", "✓≠+").replace("✓≠✓", "✓≈+").replace("✓≈✓", "()")) : ExtendedRarities[(Math.floor((n-2000)/100) ).toString()] + " " + (n % 100)) : get_rarity(n % 4000) + ` (${Math.floor(n / 4000) + 1})`) : `${ExtraRarities[Math.floor(n / 20000) - 1]} ${get_rarity(n % 20000)}`) : get_rarity(n % 100000) + `<sup>${get_rarity(Math.floor(x / 100000) - 1)}</sup>`

function init() {
  player = startplayer
}
function save() {
  player.timestamp = Date()
  localStorage.setItem("save", JSON.stringify(player))
}
function load() {
  if (localStorage.getItem("save")) {
    player = JSON.parse(localStorage.getItem("save"))
  }
}

function click(x) {
  player.rng = ExpantaNum.add(player.rng, x)
}

function setText(id, text) {
  document.getElementById(id).innerHTML = text
}

function buy1() {
  if (ExpantaNum.gt(player.rng, ExpantaNum.pow(2, player.rps))) {
    player.rng = ExpantaNum.sub(player.rng, ExpantaNum.pow(2, player.rps))
    player.rps = ExpantaNum.add(player.rps, 1)
  }
}

function buy2() {
  if (ExpantaNum.gte(player.sacrifice.points, ExpantaNum.pow(6, player.sacrifice.luck))) {
    player.sacrifice.points = ExpantaNum.sub(player.sacrifice.points, ExpantaNum.pow(6, player.sacrifice.luck))
    player.sacrifice.luck = ExpantaNum.add(player.sacrifice.luck, 1)
  }
}

function buy3() {
  if (ExpantaNum.gte(player.sacrifice.points, ExpantaNum.pow(4, player.sacrifice.spmult))) {
    player.sacrifice.points = ExpantaNum.sub(player.sacrifice.points, ExpantaNum.pow(4, player.sacrifice.spmult))
    player.sacrifice.spmult = ExpantaNum.add(player.sacrifice.spmult, 1)
  }
}

function buy4() {
  if (ExpantaNum.gte(player.prestige.points, ExpantaNum.pow(3, player.prestige.lps))) {
    player.prestige.points = ExpantaNum.sub(player.prestige.points, ExpantaNum.pow(3, player.prestige.lps))
    player.prestige.lps = ExpantaNum.add(player.prestige.lps, 1)
  }
}

function sacrifice() {
  if (ExpantaNum.gte(ExpantaNum.mul(player.rng, ExpantaNum.mul(ExpantaNum.logBase(player.rng, 5), player.sacrifice.luck).toString()), 5**23)) {
    player.sacrifice.points = ExpantaNum.add(player.sacrifice.points, ExpantaNum.mul(player.rng, ExpantaNum.mul(ExpantaNum.logBase(player.rng, 5), player.sacrifice.luck).toString()))
    player.rng = ExpantaNum(0)
    player.rps = ExpantaNum(1)
    player.sacrifice.times++
  }
}

function prestige() {
  if (ExpantaNum.gte(player.rng, 1e100)) {
    player.prestige.points = ExpantaNum.add(player.prestige.points, ExpantaNum.sub(ExpantaNum.log10(player.rng), 100))
    temp = player.sacrifice.times
    sacrifice()
    player.sacrifice = startplayer.sacrifice
    player.prestige.times++
    player.sacrifice.times = temp
  }
}

function tab(arg) {
  for (let i = 0; i <= 1; i++) {
        document.getElementById(tabs[i]).style.display="none"
    }
    document.getElementById(tabs[arg]).style.display="block"
}

init()
load()
save()
tab(0)

saveloop = setInterval(function() {
  save()
}, 15000)

gameloop = setInterval(function() {
  click(ExpantaNum.div(ExpantaNum.pow(2, player.rps), 60))
  player.sacrifice.luck = ExpantaNum.add(player.sacrifice.luck, ExpantaNum.div(player.prestige.lps, 60))
  setText("rng", ExpantaNum.floor(player.rng).toString())
  
  setText("rarity", get_rarity(ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.logBase(player.rng, 5), player.sacrifice.luck).toString())))
  
  setText("rpscost", ExpantaNum.pow(2, player.rps))
  setText("num", ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.logBase(player.rng, 5), player.sacrifice.luck).toString()))
  document.getElementById("sacrificebtn").style.display = player.sacrifice.times ? "block" : "none"
  document.getElementById("prestigebtn").style.display = player.prestige.times ? "block" : "none"
  setText("spgain", ExpantaNum.floor(ExpantaNum.mul(player.rng, ExpantaNum.mul(ExpantaNum.logBase(player.rng, 5), player.sacrifice.luck).toString())))
  setText("sp", ExpantaNum.floor(player.sacrifice.points))
  setText("luckcost", ExpantaNum.pow(6, player.sacrifice.luck))
  setText("spmultcost", ExpantaNum.pow(4, player.sacrifice.spmult))
  setText("ppgain", ExpantaNum.floor(ExpantaNum.sub(ExpantaNum.log10(player.rng), 100)).toString())
  setText("pp", ExpantaNum.floor(player.prestige.points))
  setText("lpscost", ExpantaNum.pow(3, player.prestige.lps))
}, 1000/60)
