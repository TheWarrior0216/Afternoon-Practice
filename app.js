let HomePoints = 0
let AwayPoints = 0

function reset(){
  HomePoints =0
  AwayPoints =0
  UpdateAPoints()
  UpdateHPoints()
}

function addHPoints(){
HomePoints ++ ;
console.log(HomePoints)
UpdateHPoints()
}
function addHPoints3(){
HomePoints += 3
console.log(HomePoints)
UpdateHPoints()
}
function addAPoints(){
AwayPoints ++
console.log(AwayPoints)
UpdateAPoints()
}
function addAPoints3(){
AwayPoints += 3
console.log(AwayPoints)
UpdateAPoints()
}

function UpdateHPoints(){
  const HPoints = document.getElementById('HomeScore')
  console.log('here is the rsult box element', HPoints);
HPoints.innerText = HomePoints
}
function UpdateAPoints(){
  const APoints = document.getElementById('AwayScore')
  console.log('here is the rsult box element', APoints);
APoints.innerText = AwayPoints
}