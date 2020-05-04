

//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var flyingfish, MainN, begula,starfish,crab,octopus,ray,fish;
var Bcount = 0;
var Scount = 0;
var Ocount = 0;
var Ccount = 0;
var Rcount = 0;
var Fcount = 0;
var FFcount =0;
var r = 65;
var g = 105;
var b = 255;
var alpha = 0;
var friend = 0;
var lonly = "i'm lonely";
 
//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

	flyingfish = createSprite(random(width),random(height), 150,150);
	flyingfish.addAnimation("flyingfish_normal","assets/flyingfish01.png","assets/flyingfish03.png");
	flyingfish.addAnimation("flyingfish_angry","assets/flyingfish-angry01.png","assets/flyingfish-angry03.png");
	flyingfish.velocity.x = 0;
	flyingfish.velocity.y = 0;

	MainN = createSprite(600, 200, 200, 200);
  	//ghost.addAnimation("name of the animation", "assets/ghost_standing0001.png", "assets/ghost_standing0003.png");
	MainN.addAnimation("main_normal", "assets/idle_1.png", "assets/idle_2.png");
	MainN.addAnimation("turning_to_starfish","assets/Mstarfish_1.png","assets/Mstarfish_2.png");
	MainN.addAnimation("being_starfish","assets/Mstarfish_3.png","assets/Mstarfish_4.png");
	MainN.addAnimation("turning_to_Mbegula", "assets/Mdolphin_1.png","assets/Mdolphin_2.png");
	MainN.addAnimation("M_tring_begula",  "assets/Mdolphin_3.png","assets/Mdolphin_4.png");
	MainN.addAnimation("turning_to_crab", "assets/crab_1.png","assets/crab_2.png");
	MainN.addAnimation("M_tring_crab",  "assets/crab_3.png","assets/crab_4.png");
	MainN.addAnimation("turning_to_octopus", "assets/octopus_1.png","assets/octopus_2.png");
	MainN.addAnimation("M_tring_octopus",  "assets/octopus_3.png","assets/octopus_4.png");
	MainN.addAnimation("turning_to_ray", "assets/ray_1.png","assets/ray_2.png");
	MainN.addAnimation("M_tring_ray",  "assets/ray_3.png","assets/ray_4.png");
	MainN.addAnimation("turning_to_fish", "assets/crying_fish_1.png","assets/crying_fish_2.png");
	MainN.addAnimation("M_tring_fish",  "assets/crying_fish_3.png","assets/crying_fish_4.png");
	MainN.addAnimation("turning_to_flying_fish", "assets/flying_fish_1.png","assets/flying_fish_2.png");
	MainN.addAnimation("M_tring_flying_fish",  "assets/flying_fish_3.png","assets/flying_fish_4.png");


	begula = createSprite(random(width),random(height),150,);
	begula.addAnimation("begula_normal","assets/begula01.png","assets/begula03.png");
	begula.addAnimation("begula_angry","assets/begula-angry01.png","assets/begula-angry03.png");
	begula.velocity.x = 0;
	begula.velocity.y = 0;


	starfish = createSprite(random(width),random(height),150,150);
	starfish.addAnimation("starfish_normal","assets/starfish01.png","assets/starfish03.png");
	starfish.addAnimation("starfish_angry","assets/starfish-angry01.png","assets/starfish-angry03.png");
	starfish.velocity.x = 0;
	starfish.velocity.y = 0;

	crab = createSprite(random(width),random(height), 150,150);
	crab.addAnimation("crab_normal","assets/crab01.png","assets/crab03.png");
	crab.addAnimation("crab_angry","assets/crab-angry01.png","assets/crab-angry03.png");
	crab.velocity.x = 0;
	crab.velocity.y = 0;

	octopus = createSprite(random(width),random(height), 150,150);
	octopus.addAnimation("octopus_normal","assets/octopus01.png","assets/octopus03.png");
	octopus.addAnimation("octopus_angry","assets/octopus-angry01.png","assets/octopus-angry03.png");
	octopus.velocity.x = 0;
	octopus.velocity.y = 0;

	ray = createSprite(random(width),random(height), 150,150);
	ray.addAnimation("ray_normal","assets/ray01.png","assets/ray03.png");
	ray.addAnimation("ray_angry","assets/ray-angry01.png","assets/ray-angry03.png");
	ray.velocity.x = 0;
	ray.velocity.y = 0;

	fish = createSprite(random(width),random(height), 150,150);
	fish.addAnimation("fish_normal","assets/fish01.png","assets/fish03.png");
	fish.addAnimation("fish_angry","assets/fish-angry01.png","assets/fish-angry03.png");
	fish.velocity.x = 0;
	fish.velocity.y = 0;

	
//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between

  
//create an animation listing all the images files
//asterisk = loadAnimation("assets/asterisk.png", "assets/triangle.png", "assets/square.png", "assets/cloud.png", "assets/star.png", "assets/mess.png", "assets/monster.png");
}

function setup() {
	frameRate(30);
  createCanvas(windowWidth,windowHeight);
  noCursor();
  	//main character upload
  begula.position.x=random(200,width-200);
  begula.position.y=random(200,height-200);
  starfish.position.x=random(200,width-200);
  starfish.position.y=random(200,height-200);
  crab.position.x=random(200,width-200);
  crab.position.y=random(200,height-200);
  ray.position.x=random(200,width-200);
  ray.position.y=random(200,height-200);
  octopus.position.x=random(200,width-200);
  octopus.position.y=random(200,height-200);
  fish.position.x=random(200,width-200);
  fish.position.y=random(200,height-200);
  flyingfish.position.x=random(200,width-200);
  flyingfish.position.y=random(200,height-200);
}

function draw() {
  background(r,g,b);
  noFill();
  stroke('rgb(15%,212%,203%)'); 
  rect(0,0,width, height);

  rect(0+20,0+20,40,height-50);
  line(20,map(0,-3000,1000,height-50),40,map(0,-3000,1000,height-50));
  var a = map(friend,-3000,1000, height-50,20);
  fill('rgb(15%,212%,203%)');
  ellipse(40,a,20,20);
  noStroke();
  fill(0);
  //
  textSize(32);

  //text("friend", 20, 30);
  //text(friend,20, 50);
  //textAlign(CENTER);
  //text(lonly, width/2, 30); 
  
	if(MainN.overlap(begula)){
		begula.velocity.x = 0;
		begula.velocity.y = 0;
	  	Bcount++;
	  	friend++;
	  	if(Bcount<20){
	  		MainN.changeAnimation("turning_to_Mbegula");
	  		//console.log("getting to begula");
	  	}else{
	  		//console.log("being begula");
	  		MainN.changeAnimation("M_tring_begula");
	  		lonly = "i'm not lonely";
	  	}
		if(Bcount > 50){
			//b+=2;
			lonly = "i'm lonely";
			friend -= 2;
			alpha++;    
			begula.changeAnimation("begula_angry");
			begula.velocity.x += random(1,2);;
  			begula.velocity.y += random(1,2);;

			//.attractionPoint(0.5, width*2, height);

		}
	 }
	else{
	    begula.changeAnimation("begula_normal");
	    begula.velocity.x += random(-0.2,0.2);;
  		begula.velocity.y += random(-0.2,0.2);;
	}
	if(MainN.overlap(starfish)){
		starfish.velocity.x = 0;
		starfish.velocity.y = 0;
	  	Scount++;
	  	friend++;
	  	lonly = "i'm not lonely";
	  	MainN.changeAnimation("turning_to_starfish");
	  	//console.log("being starfish");
		if(Scount > 50){ 
			//b+=2;
			MainN.changeAnimation("being_starfish");
			lonly = "i'm lonely"; 
			friend -= 2;
			alpha++;  
			starfish.changeAnimation("starfish_angry");
			starfish.attractionPoint(0.5, width*2, -height);
			//starfish.velocity.y += random(-2,2);
		}
	}
	else{
	    starfish.changeAnimation("starfish_normal");
	    starfish.velocity.x+= random(-0.2,0.2);;
 		starfish.velocity.y+= random(-0.2,0.2);;
	}
	if (!MainN.overlap(begula)&& !MainN.overlap(starfish)){
		//.log("going back to normal");
		MainN.changeAnimation("main_normal");
	}
	if(MainN.overlap(crab)){
		crab.velocity.x = 0;
		crab.velocity.y = 0;
	  	Ccount++;
	  	friend++;
	  	if(Ccount<20){
	  		MainN.changeAnimation("turning_to_crab");
	  		//console.log("getting to begula");
	  	}else{
	  		//console.log("being begula");
	  		MainN.changeAnimation("M_tring_crab");
	  		lonly = "i'm not lonely";
	  	}
		if(Ccount > 50){
			//b+=2;
			lonly = "i'm lonely";
			friend = friend - 2;   
			alpha++; 
			crab.changeAnimation("crab_angry");
			crab.attractionPoint(0.5, (width*2)*-1, -height);

		}
	 }
	else{
	    crab.changeAnimation("crab_normal");
	  	crab.velocity.x+= random(-0.2,0.2);;
	  	crab.velocity.y+= random(-0.2,0.2);;
	}


	if(MainN.overlap(ray)){
		ray.velocity.x = 0;
		ray.velocity.y = 0;
	  	Rcount++;
	  	friend++;
	  	if(Rcount<20){
	  		MainN.changeAnimation("turning_to_ray");
	  		//console.log("getting to begula");
	  	}else{
	  		//console.log("being begula");
	  		MainN.changeAnimation("M_tring_ray");
	  		lonly = "i'm not lonely";
	  	}
		if(Rcount > 50){
			//b+=2;
			lonly = "i'm lonely";
			friend = friend - 2;   
			alpha++; 
			ray.changeAnimation("ray_angry");
			ray.attractionPoint(0.5, (width*2)*-1, -height);

		}
	 }
	else{
	    ray.changeAnimation("ray_normal");
	  	ray.velocity.x+= random(-0.2,0.2);;
	  	ray.velocity.y+= random(-0.2,0.2);;
	}


	if(MainN.overlap(octopus)){
		octopus.velocity.x = 0;
		octopus.velocity.y = 0;
	  	Ocount++;
	  	friend++;
	  	if(Ocount<20){
	  		MainN.changeAnimation("turning_to_octopus");
	  		//console.log("getting to begula");
	  	}else{
	  		//console.log("being begula");
	  		MainN.changeAnimation("M_tring_octopus");
	  		lonly = "i'm not lonely";
	  	}
		if(Ocount > 50){
			//b+=2;
			lonly = "i'm lonely";
			friend = friend - 2;   
			alpha++; 
			octopus.changeAnimation("octopus_angry");
			octopus.attractionPoint(0.5, (width*2)*-1, -height);

		}
	 }
	else{
	    octopus.changeAnimation("octopus_normal");
	  	octopus.velocity.x+= random(-0.2,0.2);;
	  	octopus.velocity.y+= random(-0.2,0.2);;
	}

	if(MainN.overlap(fish)){
		fish.velocity.x = 0;
		fish.velocity.y = 0;
	  	Fcount++;
	  	friend++;
	  	if(Fcount<20){
	  		MainN.changeAnimation("turning_to_fish");
	  		//console.log("getting to begula");
	  	}else{
	  		//console.log("being begula");
	  		MainN.changeAnimation("M_tring_fish");
	  		lonly = "i'm not lonely";
	  	}
		if(Fcount > 50){
			//b+=2;
			lonly = "i'm lonely";
			friend = friend - 2;   
			alpha++; 
			fish.changeAnimation("fish_angry");
			fish.attractionPoint(0.5, (width*2)*-1, -height);

		}
	 }
	else{
	    fish.changeAnimation("fish_normal");
	  	fish.velocity.x+= random(-0.2,0.2);;
	  	fish.velocity.y+= random(-0.2,0.2);;
	}

	if(MainN.overlap(flyingfish)){
		flyingfish.velocity.x = 0;
		flyingfish.velocity.y = 0;
	  	FFcount++;
	  	friend++;
	  	if(FFcount<20){
	  		MainN.changeAnimation("turning_to_flying_fish");
	  		//console.log("getting to begula");
	  	}else{
	  		//console.log("being begula");
	  		MainN.changeAnimation("M_tring_flying_fish");
	  		lonly = "i'm not lonely";
	  	}
		if(FFcount > 50){
			//b+=2;
			lonly = "i'm lonely";
			friend = friend - 2;   
			alpha++; 
			flyingfish.changeAnimation("flyingfish_angry");
			flyingfish.attractionPoint(0.5, (width*2)*-1, -height);

		}
	 }
	else{
	    flyingfish.changeAnimation("flyingfish_normal");
	  	flyingfish.velocity.x+= random(-0.2,0.2);;
	  	flyingfish.velocity.y+= random(-0.2,0.2);;
	}
  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  //direction += 2;
  //speed, angle
  //circle.setSpeed(3, direction);
  
  //you can rotate the sprite according the directio it is moving
  //uncomment this
  //circle.rotateToDirection = true;
  
  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  if(MainN.position.x>=0 && MainN.position.x<width){
  	if (MainN.position.y>=0 && MainN.position.y<height) {
  		MainN.position.x=mouseX;
  		MainN.position.y=mouseY;
  	}else{
  		MainN.attractionPoint(1, width/2,height/2);
  	}
  }else{
  		MainN.attractionPoint(1, width/2,height/2);
  	}

  if(begula.position.x<-150 ){
  		begula.position.x = width+150;
  }else if(begula.position.x>width+150){
  		begula.position.x = -150 ;
  } 
  if(begula.position.y<-150 ){
  		begula.position.y = height+150;
  }else if(begula.position.y>height+150){
  		begula.position.y = -150;
  } 

  if(starfish.position.x<-150 ){
  		starfish.position.x = width+150;
  }else if(starfish.position.x>width+150){
  		starfish.position.x = -150 ;
  } 
  if(starfish.position.y<-150 ){
  		starfish.position.y = height+150;
  }else if(starfish.position.y>height+150){
  		starfish.position.y = -150;
  }

  if(crab.position.x<-150){
  		crab.position.x = width+150;
  }else if(crab.position.x>width+150){
  		crab.position.x = -150 ;
  } 
  if(crab.position.y<-150){
  		crab.position.y = height+150;
  }else if(crab.position.y>height+150){
  		crab.position.y =-150;
  } 

  if(octopus.position.x<-150){
  		octopus.position.x = width+150;
  }else if(octopus.position.x>width+150){
  		octopus.position.x = -150 ;
  } 
  if(octopus.position.y<-150){
  		octopus.position.y = height+150;
  }else if(octopus.position.y>height+150){
  		octopus.position.y =-150;
  } 

  if(ray.position.x<-150){
  		ray.position.x = width+150;
  }else if(ray.position.x>width+150){
  		ray.position.x = -150 ;
  } 
  if(ray.position.y<-150){
  		ray.position.y = height+150;
  }else if(ray.position.y>height+150){
  		ray.position.y =-150;
  } 


  if(fish.position.x<-150){
  		fish.position.x = width+150;
  }else if(fish.position.x>width+150){
  		fish.position.x = -150 ;
  } 
  if(fish.position.y<-150){
  		fish.position.y = height+150;
  }else if(fish.position.y>height+150){
  		fish.position.y =-150;
  } 
    //since the force keeps incrementing the speed you can 
  //set a limit to it with maxSpeed
  MainN.maxSpeed = 20;

  starfish.collide(begula);
  starfish.collide(crab);
  crab.collide(begula);
  octopus.collide(begula);
  octopus.collide(starfish);
  octopus.collide(crab);
  ray.collide(begula);
  ray.collide(starfish);
  ray.collide(crab);
  ray.collide(octopus);
  fish.collide(begula);
  fish.collide(starfish);
  fish.collide(crab);
  fish.collide(octopus);
  fish.collide(ray);
  //specify the animation instance and its x,y position
  // animation(ghost, , ) //will update the animation frame as well
  drawSprites();
  //animation(asterisk, 500, 150);
  //camera.zoom = 0.5;
}

function mousePressed() {
	if(camera.zoom == 0.5){
		camera.zoom = 1;
	}else{
		camera.zoom = 0.5;
	}
	
}
// server.listen(port, function(){
// 	console.log('Server listening on ' + port);
// });
// app.get('/', function(req,res){
// 	console.log('serving index.html');
// 	//res.sendFile(__dirname + '/digitalWrite.html');

// });