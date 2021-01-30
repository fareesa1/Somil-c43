var engine,world;

function preload(){
  plr = loadImage("plr.png")
}
function setup(){
  createCanvas(600,500)
  engine = Matter.Engine.create()
  world = engine.world
    boundary1 = new Box(595,200,20,400)
  boundary2 = new Box(595,470,20,70)
  boundary3 = new Box(290,5,587,20)
  boundary4 = new Box(5,250,20,500)
  boundary5 = new Box(290,495,587,20)
  wall1 = new Box(547,390,75,20)
  wall2 = new Box(521,445,130,20)
  wall3 = new Box(455,370, 20,170)
  wall4 = new Box(520,295,20,170 )
  wall5 = new Box(380, 280, 170, 20)
  wall6 = new Box(380, 220, 170, 20)
  wall7 = new Box(520,140,20,150 )
  wall8 = new Box(455,140,20,140 )
  wall9 = new Box(307,360, 20,80)
  wall10 = new Box(53,110,75,20)
  wall11 = new Box(139,50,20,70)
  wall12 = new Box(140,220,20,170)
  wall13 = new Box(235,145,170,20)
  wall14 = new Box(310,97,20,75)
  wall15 = new Box(53, 400, 75,20)
  wall16 = new Box(53, 325,20,130)
  
   wall20 = new Box(242,360,110,20)
  wall19 = new Box(387,385, 20,140)
  wall18 = new Box(277,445,200,20)
  wall21 = new Box(380,80,20,130)
  wall22 = new Box(220,60,20,50)
  wall23 = new Box(220,95,50,20)
  plr1 = new Plr(200,200)
}

function draw(){
  background("Teal")
  Matter.Engine.update(engine)
  //display box1,box2
boundary1.display()
  boundary2.display()
  rectMode(CENTER)
  boundary3.display()
  boundary4.display()
  boundary5.display()
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display()
  wall15.display()
  wall16.display()
  wall23.display()
  wall20.display()
  wall19.display()
  wall18.display()
  wall21.display()
  wall22.display()
  plr1.display()
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:0.004,y:-0.007})
  }
  
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:0.001,y:-0.02})
  }
  
    if(keyCode == RIGHT_ARROW){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:0.009,y:-0.001})
  }
  
    if(keyCode == LEFT_ARROW){
    Matter.Body.applyForce(plr1.body,plr1.body.position,{x:-0.004,y:-0.001 })
  }
}


