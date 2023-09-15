const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("moon" , "png");
  pScope.load_image("bunny" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 51, 73, 145);// navy blue
  
  let outerRing = new PLayer(outsideRing);
  outerRing.mode(RING);
  outerRing.set_boundary(800,1000);

  let internal_movement = new PLayer(bunny);
  internal_movement.mode(SWIRL(3));
  internal_movement.set_boundary( 0, 500 );
  
  let external_movement = new PLayer(fairy);
  external_movement.mode(RING);
  external_movement.set_boundary( 800, 1000 );

  let CenterImage = new PLayer(moon);
  CenterImage.mode(RING);
  CenterImage.set_boundary(0,30);
  }


  
function outsideRing (x,y,animation,pScope){
  pScope.fill_background(247, 91, 59);// red
  }

function bunny(x, y, animation, pScope){
  scale(0.02);
  noStroke()
  pScope.draw_image("bunny",x,y);
  }
  
function fairy(x, y, animation, pScope){

let roundness_radius = 70

//hair
  push()
  noStroke()
  fill(10, 9, 9)//black
  rotate(90 * animation.frame)
  rect(90, 550, 320, 220, roundness_radius+20)
  pop()

//face shape
  push()
  noStroke()
  fill(2245, 223, 211)// skin colour
  rotate(90 * animation.frame)
  //let rectJump = 750 + (animation.wave(1) * 50)
  rect(135, 500, 230,200,roundness_radius) // the smaller y, the smaller to the center
  pop()

//hair bun
  push()
  noStroke()
  fill(10, 9, 9)//black
  translate (-70, 60)
  rotate (90 *animation.frame)
  ellipse(259, 780, 100, 200)
  pop()

//bangs
  push()
  noStroke()
  fill(10, 9, 9)//black
  rotate (90 *animation.frame)
  ellipse(250, 680, 80, 100)
  pop()


// ear right
  push()
  noStroke()
  fill(2245, 223, 211)// skin colour
  rotate(90 * animation.frame)
  rect(85, 560, 60,90,roundness_radius) // the smaller y, the smaller to the center
  pop()

//ear left
  push()
  noStroke()
  fill(2245, 223, 211)// skin colour
  rotate(90 * animation.frame)
  rect(360, 560, 60,90,roundness_radius) // the smaller y, the smaller to the center
  pop()

//blush left
  push()
  noStroke()
  fill(255, 166, 184)// pink
  rotate(90 * animation.frame)
  rect(270, 520, 70,60,roundness_radius +30) // the smaller y, the smaller to the center
  pop()

//blush right
  push()
  noStroke()
  fill(255, 166,184)// pink 
  rotate(90 * animation.frame)
  rect(150, 520, 70,60,roundness_radius +30) //the smaller y, the smaller to the center
  pop()

//eyes right
  push()
  noStroke()
  fill(10, 9, 9)// black
  rotate(90 * animation.frame)
  rect(200, 590, 25,25,roundness_radius +30) // the smaller y, the smaller to the center
  pop()

//eyes left
  push()
  noStroke()
  fill(10, 9, 9)// black
  rotate(90 * animation.frame)
  rect(260, 590, 25,25,roundness_radius +30) // the smaller y, the smaller to the center
  pop()

//hair tie
  push()
  noStroke()
  fill(250, 208, 82)//mustard yellow
  rotate(90 * animation.frame)
  rect(170, 772, 150, 40, roundness_radius -30)
  pop()
} 

function moon(x,y,animation,pScope){
  scale(0.12);
  noStroke()
  pScope.draw_image("moon",x,y);
  }
  


