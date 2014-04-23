$(document).ready(function(){
	console.log('QA');
	var QA = Quintus().include('Sprites, Scenes, 2D,UI, TMX');
	QA.setup('canvasA');
	
	QA.scene('scene1_A', function(stage){
		QA.stageTMX('map.tmx', stage);
	});
	
	QA.load(['map.tmx','tiles.png'], function(){
		QA.sheet("tiles","tiles.png",{tilew:70, tileh:70});
		QA.stageScene('scene1_A');
	}
	);
});