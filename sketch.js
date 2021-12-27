function setup() {
  createCanvas(480, 240);
  grid = [
    [0,0,0,0],
    [0,0,0,0]
  ];
}

function draw() {
  background(0);
  stroke(255)
  
  for(let j = 0; j < 4; j++){
    for(let i = 0; i < 2; i++){
      
      if(grid[i][j] == 1){
        fill(0,255,0)
      } else{
        fill(255,0,0)
      }
      
      rect(j*120,i*120,120,120)
    }
  }
}

function mousePressed(){
  g = floor(mouseX/120);
  h = floor(mouseY/120);
  
  grid[h][g] = 1
}

function mouseReleased(){
  grid = [
    [0,0,0,0],
    [0,0,0,0]
  ];
}