$(document).ready(function(){
 console.log('start');
	//error:Uncaught TypeError: Cannot read property 'appendChild' of null
	//var Q = window.Q = Quintus().include("Sprites, Scenes, Input").setup("canvas").controls(true).touch();
	var Q = Quintus().include('Sprites, Scenes, 2D, Input');
	Q.setup("canvas");
	
	Q.Sprite.extend("Player", {
		init: function(p) {
			//this._super(p, {asset: 'smurf_sprite.png'});
			this._super({asset: 'smurf_sprite.png',x:10});
			//this._super(p,{sheet:'player', frame:7});
			//this._super(p,{sheet:'player', frame:7});
		}
	});
	
	//Q.sheet('Player','smurf_sprite.png',{tilew:128, tileh:128});
	
	Q.scene('scene1', function(stage){
		console.log('scene1');
		var player1= stage.insert(new Q.Player());
		
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
	
	Q.load(['smurf_sprite.png','sprites.json'], function(){
		//not working
		Q.stageScene('scene1');
		Q.debug=true;
		//Q.compileSheets('smurf_sprite.png','sprites.json');
		
		
		//var ppl = new Q.Player();
		//Q.gameLoop( function(dt){
			//Q.clear();
			//ppl.update(dt);
			//ppl.render(Q.ctx);
		//});
		
		Q.input.keyboardControls();
	});
});