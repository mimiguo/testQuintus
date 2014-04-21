$(document).ready(function(){
 console.log('start');
	//error:Uncaught TypeError: Cannot read property 'appendChild' of null
	//var Q = window.Q = Quintus().include("Sprites, Scenes, Input").setup("canvas").controls(true).touch();
	var Q = Quintus().include('Sprites, Scenes, 2D, Input, Anim, Touch, UI, TMX, Audio');
	
	//Q.setup();
	Q.setup("canvas");
	
	Q.animations('player', {
		step_left:{ frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], rate: 1/10}
	});
	Q.Sprite.extend("Player", {
		init: function(p) {
			//this._super(p, {asset: 'smurf_sprite.png'});
			//this._super({asset: 'smurf_sprite.png',x:10});
			//this._super({sprite: "player", sheet:'player',x:'100',y:'100',frame:'3'});
			this._super(p, {sprite: "player", sheet:'player',frame:'0'});
			//this._super(p,{sheet:'player', frame:7});
			this.add("animation");
			//this.add("platformerControls, 2d");
			//this.add("2d");
		}
	});
	
	Q.animations('greenman', {
		step_left:{ frames:[0,1,2,3,1], rate: 1/10}
	});
	
	Q.Sprite.extend("GreenMan", {
		init: function(p) {
			//this._super(p, {asset: 'smurf_sprite.png'});
			//this._super({asset: 'smurf_sprite.png',x:10});
			this._super(p, {sprite: "greenman", sheet:'greenman',x:Q.width/2,y:Q.height/2});
			//this._super(p,{sheet:'player', frame:7});
			this.add("animation");
		}
	});
	
	
	Q.scene('scene1', function(stage){
		//console.log('scene1');
		console.log(Q.stage().scene.name);
		var player1= stage.insert(new Q.Player({x:200,y:200}));
		
		for(var i=0;i<16;i++){
			
			stage.insert(new Q.Player({x:0+i*50,y:400, frame:i}));
		}
		
		/*
		stage.insert(new Q.Player({x:250,y:250, frame:2}));
		stage.insert(new Q.Player({x:300,y:300, frame:3}));
		stage.insert(new Q.Player({x:350,y:350, frame:4}));
		stage.insert(new Q.Player({x:400,y:400, frame:5}));
		stage.insert(new Q.Player({x:450,y:450, frame:6}));
		*/
		//console.dir(player1);
		player1.play('step_left');
		//var player2= stage.insert(new Q.Player());
		//player2.x=250;
		//player2.y=250;
		////Q.sheet('player').draw(ctx, 0,0, 0);
		
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
		
	});
	
	Q.load(['smurf_sprite.png','sprites.json','player.png','greenman.json','spritesA.json'], function(){
		
		Q.compileSheets('smurf_sprite.png','spritesA.json');
		Q.compileSheets('player.png','greenman.json');
		Q.stageScene('scene1');
		//Q.debug=true;
		
		//var ppl = new Q.Player();
		//Q.gameLoop( function(dt){
			//Q.clear();
			//ppl.update(dt);
			//ppl.render(Q.ctx);
		//});
		
		Q.input.keyboardControls();
	});
	
});