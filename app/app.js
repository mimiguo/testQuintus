$(document).ready(function(){
 console.log('start');
	var Q = Quintus().include('Sprites, Scenes, 2D, Input, Anim, Touch, UI, TMX, Audio');
	Q.enableSound();
	Q.setup("canvas");
	
	Q.animations('player', {
		step_left:{ frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], rate: 1/10},
		step_reverse: {frames:[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], next:'step_left', rate: 1/15}
	});
	
	Q.Sprite.extend("Player", {
		init: function(p) {
			this._super(p, {sprite: "player", sheet:'player',frame:'0'});
			this.add("animation");
			//this.add("platformerControls, 2d");
		}
	});
	
	Q.animations('greenman', {
		step_left:{ frames:[0,1,2,3,1], rate: 1/10}
	});
	
	Q.Sprite.extend("GreenMan", {
		init: function(p) {
			this._super(p, {sprite: "greenman", sheet:'greenman',x:Q.width/2, y:0});
			this.add("animation");
			this.add("2d, platformerControls");
			Q.input.on('up', this, 'jumpUp');
		},
		moveUp: function() {
			//this.p.y-=5;
			//not work very well
			this.animate({y:this.p.y-=50, easing:Q.Easing.Quadratic.InOut, duration:3});
		},
		jumpUp: function() {
			// -50 is to small value to jump
			this.p.vy = -500;
		}
	});
	
	Q.scene('scene1', function(stage){
		//console.log('scene1');
		console.log(Q.stage().scene.name);
		//Q.stageTMX('map.tmx', stage);
		
		var player1= stage.insert(new Q.Player({x:200,y:200}));
		
		for(var i=0;i<16;i++){
			stage.insert(new Q.Player({x:15+i*50,y:500, frame:i}));
		}
		
		player1.play('step_left');
		//player1.play('step_reverse');
		
		var gm = stage.insert(new Q.GreenMan());
		gm.play('step_left');
		
		Q.input.on('up',stage,function(e) { 
			player1.p.y-=5;
		});

		Q.input.on('down',stage,function(e) { 
			player1.p.y+=5;
		});

		Q.input.on('left',stage,function(e) {
		  player1.p.x-=5;
		});

		Q.input.on('right',stage,function(e) {
		  player1.p.x+=5;
		});
		
		Q.input.on('fire',stage,function(e) {
		  Q.audio.play('01-ace-combat-6-main-theme.mp3');
		});
		
		//stage.add("viewport").follow(player1,{x:true,y:false});
		stage.add("viewport").follow(gm);
	});
	
	Q.load(['smurf_sprite.png','sprites.json','player.png','greenman.json','spritesA.json','01-ace-combat-6-main-theme.mp3','map.tmx','tiles.png'], function(){
		
		Q.compileSheets('smurf_sprite.png','spritesA.json');
		Q.compileSheets('player.png','greenman.json');
		Q.sheet("tiles","tiles.png",{tilew:70, tileh:70});
		
		Q.stageScene('scene1');
		//Q.debug=true;
		
		Q.input.keyboardControls();
	},{
		progressCallback: function(loaded,total) {
		var element = document.getElementById("loading_progress");
		element.style.width = Math.floor(loaded/total*100) + "%";
			if (loaded == total) {
				document.getElementById("loading").remove();
			}
		}
	  }
	);
});