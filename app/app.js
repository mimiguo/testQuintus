$(document).ready(function(){
 console.log('start');
	//error:Uncaught TypeError: Cannot read property 'appendChild' of null
	//var Q = window.Q = Quintus().include("Sprites, Scenes, Input").setup("canvas").controls(true).touch();
	var Q = Quintus().include('Sprites, Scenes, 2D, Input, Anim, Touch, UI, TMX, Audio');
	
	//Q.setup();
	Q.setup("canvas");
	
	Q.animations('player', {
		step_left:{ frames:[0,1,2,3,1], rate: 1/10}
	});
	Q.Sprite.extend("Player", {
		init: function(p) {
			//this._super(p, {asset: 'smurf_sprite.png'});
			//this._super({asset: 'smurf_sprite.png',x:10});
			this._super({sprite: "player", sheet:'player',x:'400',y:'300'});
			//this._super(p,{sheet:'player', frame:7});
			this.add("animation");
		}
	});
	
	
	
	
	
	Q.animations('greenman', {
		step_left:{ frames:[0,1,2,3,1], rate: 1/10}
	});
	
	Q.Sprite.extend("GreenMan", {
		init: function(p) {
			//this._super(p, {asset: 'smurf_sprite.png'});
			//this._super({asset: 'smurf_sprite.png',x:10});
			this._super({sprite: "greenman", sheet:'greenman',x:'400',y:'300'});
			//this._super(p,{sheet:'player', frame:7});
			this.add("animation");
		}
	});
	
	
	Q.scene('scene1', function(stage){
		//console.log('scene1');
		console.log(Q.stage().scene.name);
		var player1= stage.insert(new Q.Player());
		//player1.play('step_left');
		//var player2= stage.insert(new Q.Player());
		//player2.x=250;
		//player2.y=250;
		////Q.sheet('player').draw(ctx, 0,0, 0);
		
		var gm = stage.insert(new Q.GreenMan());
		gm.play('step_left');
		
		Q.input.on('up',stage,function(e) { 
			console.log('up');
		});

		Q.input.on('down',stage,function(e) { 
			console.log('down');
		});

		Q.input.on('left',stage,function(e) {
		  console.log('left');
		});

		Q.input.on('right',stage,function(e) {
		  console.log('right');
		});
		
	});
	
	Q.load(['smurf_sprite.png','sprites.json','player.png','greenman.json'], function(){
		
		Q.compileSheets('smurf_sprite.png','sprites.json');
		Q.compileSheets('player.png','greenman.json');
		Q.stageScene('scene1');
		Q.debug=true;
		
		
		
		//var ppl = new Q.Player();
		//Q.gameLoop( function(dt){
			//Q.clear();
			//ppl.update(dt);
			//ppl.render(Q.ctx);
		//});
		
		Q.input.keyboardControls();
	});
	
});