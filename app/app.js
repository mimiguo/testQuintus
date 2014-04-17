/**
 * ...
 * @author gabe
 */

(function() {
	
	console.log('start');
	//error:Uncaught TypeError: Cannot read property 'appendChild' of null
	var Q = Quintus().include('Sprites, Scenes, Input').setup("canvas").controls().touch();
	//var Q = Quintus().include('Sprites, Scenes, Input');
	
	Q.Sprite.extend("Player", {
		init: function(p) {
			this._super(p, {asset: 'smurf_sprite.png', x:5, y:1});
		}
	});
	
	Q.Scene('scene1', function(stage){
		var player1= stage.insert(new Q.Player());
		console.log('x:',player1.p.x);
		
		
	});
	
	
	Q.load('smurf_sprite.png', function(){
		Q.stageScene('scene1');
	});
	
})();