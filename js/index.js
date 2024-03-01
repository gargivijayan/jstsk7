
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
var fighter1 =  fighters[Math. floor(Math. random() *  fighters. length)];
var fighter2 =  fighters[Math. floor(Math. random() *  fighters. length)];




fightButton.addEventListener("click",function(){
   var fighter1 =  fighters[Math. floor(Math. random() *  fighters. length)];
   var fighter2 =  fighters[Math. floor(Math. random() *  fighters. length)];

   console.log(fighter1)
   console.log(fighter2)

  document.getElementById("one") .innerHTML=fighter1
  document.getElementById("two") .innerHTML=fighter2



})

