
let Ered = 0
let Egreen = 0
let Eblue = 0
let Eredv = 2
let Egreenv = 3
let Ebluev = 4
let factor = 3
let FV = 0.0003

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(16);
  let points = 100
  translate(width/2,height/2)
  for (let i=0; i < points; i++){
    let angle = i * 2 * PI / points
    let x = 200 * cos(angle)
    let y = 200 * sin(angle)
    fill(Ered,Egreen,Eblue)
    circle(x,y,5)
    let x2 = 100 * cos(angle * factor)
    let y2 = 100 * sin(angle * factor)
    stroke(Ered,Egreen,Eblue)
    line(x,y,x2,y2)
    factor = factor + FV
    
    if (factor > 100){
      FV = -0.0003
    }
    if (factor < 3){
      FV = 0.0003
    }
  if (Ered > 255){
    Eredv = -4
  }
  if (Ered < 0){
    Eredv = 2
  }
  if (Eblue > 255){
    Ebluev = -2
  }
  if (Eblue < 0){
    Ebluev = 4
  }
  if (Egreen > 255){
    Egreenv = -3
  }
  if (Egreen < 0){
    Egreenv = 3
  }
     Ered = (Ered + Eredv)
  Eblue = (Eblue + Ebluev)
  Egreen = (Egreen + Egreenv)
  }
}
