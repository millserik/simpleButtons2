function setup() {
  createCanvas(480, 272);
  grid = [
    [0,0,0,0],
    [0,0,0,0]
  ];
}

function draw() {
  background(0);
  
  noStroke()
  fill(3,190,252)
  rect(0,0,480,32)
  stroke(255)
  
  for(let j = 0; j < 4; j++){
    for(let i = 0; i < 2; i++){
      
      if(grid[i][j] == 1){
        fill(0,255,0)
      } else{
        fill(255,0,0)
      }
      
      rect(j*120,i*120+32,120,120)
    }
  }
}

function mousePressed(){
  if (mouseY < 272 && mouseY > 32){
    g = floor(mouseX/120);
    h = floor((mouseY-32)/120);
  
    grid[h][g] = 1
  }
}

function mouseReleased(){
  grid = [
    [0,0,0,0],
    [0,0,0,0]
  ];
}