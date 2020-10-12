const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;
var thunderbolt, thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4;

var thunderFrame = 0;

var drop = [];
var maxDrops = 100;

function preload(){ 
    thunderbolt1 = loadImage("thunderbolt/1.png");
    thunderbolt2 = loadImage("thunderbolt/2.png");
    thunderbolt3 = loadImage("thunderbolt/3.png");
    thunderbolt4 = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(width/2, height/2+220);

    for(var i = 0; i < maxDrops; i++){
        drop.push(new Drop(random(0, 400), random(0, 400)));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0; i < maxDrops; i++){
        drop[i].update();
        drop[i].display();
    }

    if(frameCount % 200 === 0){
        thunderbolt = createSprite(width/2, height/2-400, 10, 10);
        thunderFrame = frameCount;

        var rand = Math.round(random(1, 4));
        switch (rand) {
            case 1:
            thunderbolt.addImage(thunderbolt);
            break;
            case 2:
            thunderbolt.addImage(thunderbolt);
            break;
            case 3:
            thunderbolt.addImage(thunderbolt);
            break;
            case 4:
            thunderbolt.addImage(thunderbolt);
            break;
            default:
            break;
        }
    }

    if(thunderFrame + 10 === frameCount && thunderbolt){
        thunderbolt.destroy();
    }
    umbrella.display();
    drawSprites();
}   
