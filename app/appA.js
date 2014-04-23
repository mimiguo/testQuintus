$(document).ready(function(){
	console.log('QA');
	var QA = Quintus().include('Sprites, Scenes, 2D,UI, TMX');
	QA.setup('canvasA');
	
	QA.scene('scene1_A', function(stage){
		QA.stageTMX('map.tmx', stage);
	});
	
	QA.load(['map.tmx','tiles.png','bg.png'], function(){
		QA.sheet("tiles","tiles.png",{tilew:70, tileh:70});
		QA.sheet("bg","bg.png",{tilew:256, tileh:256});
		QA.stageScene('scene1_A');
	}
	);
});