function setup() {
  createCanvas(480, 272);
  grid = [
    [0,0,0,0],
    [0,0,0,0]
  ];
  time = 0;
  mins = 0;

}

function draw() {
  background(0);
  
  noStroke()
  fill(3,190,252)
  rect(0,0,480,32)

  textSize(20)
  stroke(0)
  fill(0)
  text('Buttons',8,24)
  time = time + deltaTime;
  out_time = floor(time/1000)
  if(out_time == 60){
    mins = mins + 1
    time = 0
    out_time = 0
  }
  if(out_time < 10){
    print_time = '0'+ out_time
  } else{
    print_time = out_time
  }
  text(mins + ':' + print_time,240,24)

  
  stroke(255)
  
  for(let j = 0; j < 4; j++){
    for(let i = 0; i < 2; i++){
      
      if(grid[i][j] == 1){
        fill(5,176,48)
      } else{
        fill(184,36,26)
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