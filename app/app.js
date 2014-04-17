$(document).ready(function(){
 console.log('start');
	//error:Uncaught TypeError: Cannot read property 'appendChild' of null
	//var Q = window.Q = Quintus().include("Sprites, Scenes, Input").setup("canvas").controls(true).touch();
	var Q = Quintus().include('Sprites, Scenes, Input');
	Q.setup("canvas");
	
	Q.Sprite.extend("Player", {
		init: function(p) {
			this._super(p, {asset: 'smurf_sprite.png'});
		}
	});
	
	/*Q.Scene('scene1', function(stage){
		alert('test');
		var player1= stage.insert(new Q.Player());
		console.log('x:',player1.p.x);
	});*/
	
	Q.load('smurf_sprite.png', function(){
		//not working
		//Q.stageScene('scene1');
		
		var ppl = new Q.Player();
		Q.gameLoop( function(dt){
			Q.clear();
			ppl.update(dt);
			ppl.render(Q.ctx);
		});
	});
});