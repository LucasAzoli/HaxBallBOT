var room = HBInit({
	roomName: "Futsal FAZo7", // Define nome da sala
	maxPlayers: 10, // Define número máximo de players na sala
	noPlayer: true, // Tira o Host da sala
	public: true, //Server aparece na lista pública
	password: "777", // Define uma senha
	geo: { "code": 'br', "lat": -12.9704, "lon": -38.5124 } //Geolocalização da sala
});

/* STADIUMS */
var stadiumx3 = `{

	"name" : "Futsal x3 FAZo7",

	"width" : 620,

	"height" : 270,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },
		/* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] },
		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 52 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 53 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 54 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 55 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 56 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 57 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 58 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 59 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 60 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 61 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 62 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 63 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 64 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 65 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 66 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 67 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 69 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 70 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 71 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 72 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 73 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 74 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 75 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 76 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 77 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 78 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 79 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 80 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 81 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 82 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 83 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 84 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 85 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 86 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 87 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 88 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 89 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 90 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 91 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 92 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 93 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 94 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 95 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 96 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 97 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 98 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 101 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 102 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 103 */ { "x" : -240, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 104 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 105 */ { "x" : -120, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 106 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 107 */ { "x" : 240, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 108 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 109 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 110 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 111 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },
		/* 112 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 113 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 114 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 115 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 116 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 117 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 118 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 119 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 120 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 121 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 122 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 123 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },
		/* 124 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 125 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 126 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line" }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 590 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -550 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 550 },
		{ "v0" : 52, "v1" : 53, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 }

	],

	"goals" : [
		{ "p0" : [-556.25,-80 ], "p1" : [-556.25,80 ], "team" : "red" },
		{ "p0" : [556.25,80 ], "p1" : [556.25,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [-550,80 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [-550,-80 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 5, "pos" : [550,80 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [550,-80 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`

var stadiumx2 = `{

	"name" : "Futsal x2 FAZo7",

	"width" : 420,

	"height" : 200,

	"spawnDistance" : 170,

	"bg" : { "type" : "hockey", "width" : 370, "height" : 170, "kickOffRadius" : 75, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -370, "y" : 170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : true },
		
		/* 1 */ { "x" : -370, "y" : 64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : true },
		/* 2 */ { "x" : -370, "y" : -64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : true },
		
		/* 3 */ { "x" : -370, "y" : -170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : true },
		/* 4 */ { "x" : 370, "y" : 170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : true },
		
		/* 5 */ { "x" : 370, "y" : 64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : true },
		/* 6 */ { "x" : 370, "y" : -64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : true },
		
		/* 7 */ { "x" : 370, "y" : -170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : true },
		
		/* 8 */ { "x" : 0, "y" : 170, "trait" : "kickOffBarrier", "vis" : false, "color" : "F8F8F8" },
		
		/* 9 */ { "x" : 0, "y" : 75, "trait" : "line", "vis" : true, "color" : "F8F8F8" },
		/* 10 */ { "x" : 0, "y" : -75, "trait" : "line", "vis" : true, "color" : "F8F8F8" },
		
		/* 11 */ { "x" : 0, "y" : -170, "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		
		/* 12 */ { "x" : -370, "y" : -64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 13 */ { "x" : -402.5, "y" : -64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 14 */ { "x" : -402.5, "y" : 64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 15 */ { "x" : -370, "y" : 64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 16 */ { "x" : 370, "y" : -64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "6666FF" },
		/* 17 */ { "x" : 402.5, "y" : -64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 18 */ { "x" : 402.5, "y" : 64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 19 */ { "x" : 370, "y" : 64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "6666FF" },
		
		/* 20 */ { "x" : 0, "y" : 200, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 21 */ { "x" : 0, "y" : -200, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		/* 22 */ { "x" : -370, "y" : 64, "trait" : "line", "vis" : true, "color" : "F8F8F8" },
		/* 23 */ { "x" : -370, "y" : -64, "trait" : "line", "vis" : true, "color" : "F8F8F8" },
		/* 24 */ { "x" : 370, "y" : 64, "trait" : "line", "vis" : true, "color" : "F8F8F8" },
		/* 25 */ { "x" : 370, "y" : -64, "trait" : "line", "vis" : true, "color" : "F8F8F8" },
		/* 26 */ { "x" : -377.5, "y" : 170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		
		/* 27 */ { "x" : -377.5, "y" : 64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 28 */ { "x" : -377.5, "y" : -64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		
		/* 29 */ { "x" : -377.5, "y" : -170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		/* 30 */ { "x" : -387.5, "y" : 170, "bCoef" : 0, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		
		/* 31 */ { "x" : -387.5, "y" : 64, "bCoef" : 0, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 32 */ { "x" : -387.5, "y" : -64, "bCoef" : 0, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		
		/* 33 */ { "x" : -387.5, "y" : -170, "bCoef" : 0, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		/* 34 */ { "x" : 377.5, "y" : 170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		
		/* 35 */ { "x" : 377.5, "y" : 64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 36 */ { "x" : 377.5, "y" : -64, "bCoef" : 1.25, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		
		/* 37 */ { "x" : 377.5, "y" : -170, "bCoef" : 1.25, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		/* 38 */ { "x" : 387.5, "y" : 170, "bCoef" : 0, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		
		/* 39 */ { "x" : 387.5, "y" : 64, "bCoef" : 0, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 40 */ { "x" : 387.5, "y" : -64, "bCoef" : 0, "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		
		/* 41 */ { "x" : 387.5, "y" : -170, "bCoef" : 0, "trait" : "line", "color" : "F8F8F8", "vis" : false },
		/* 42 */ { "x" : -370, "y" : 156, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 43 */ { "x" : -356, "y" : 170, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 44 */ { "x" : -370, "y" : -156, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 45 */ { "x" : -356, "y" : -170, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 46 */ { "x" : 370, "y" : -156, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 47 */ { "x" : 356, "y" : -170, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 48 */ { "x" : 370, "y" : 156, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 49 */ { "x" : 356, "y" : 170, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 50 */ { "x" : -370, "y" : 126, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8" },
		/* 51 */ { "x" : -370, "y" : -126, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8" },
		/* 52 */ { "x" : -280, "y" : -40, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 53 */ { "x" : -280, "y" : 40, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 54 */ { "x" : -396, "y" : 96, "trait" : "line" },
		/* 55 */ { "x" : -376, "y" : 96, "trait" : "line" },
		/* 56 */ { "x" : -396, "y" : -96, "trait" : "line" },
		/* 57 */ { "x" : -376, "y" : -96, "trait" : "line" },
		/* 58 */ { "x" : 370, "y" : -126, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8" },
		/* 59 */ { "x" : 370, "y" : 126, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8" },
		/* 60 */ { "x" : 280, "y" : 40, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 61 */ { "x" : 280, "y" : -40, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 62 */ { "x" : 396, "y" : -96, "trait" : "line" },
		/* 63 */ { "x" : 376, "y" : -96, "trait" : "line" },
		/* 64 */ { "x" : 396, "y" : 96, "trait" : "line" },
		/* 65 */ { "x" : 376, "y" : 96, "trait" : "line" },
		/* 66 */ { "x" : -247.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 67 */ { "x" : -247.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 68 */ { "x" : -247.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 69 */ { "x" : -247.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 70 */ { "x" : -247.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 71 */ { "x" : -247.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 72 */ { "x" : -247.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 73 */ { "x" : -247.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 74 */ { "x" : -187.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 75 */ { "x" : -187.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 76 */ { "x" : -187.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 77 */ { "x" : -187.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 78 */ { "x" : -187.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 79 */ { "x" : -187.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 80 */ { "x" : -187.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 81 */ { "x" : -187.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 82 */ { "x" : 187.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 83 */ { "x" : 187.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 84 */ { "x" : 187.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 85 */ { "x" : 187.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 86 */ { "x" : 187.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 87 */ { "x" : 187.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 88 */ { "x" : 187.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 89 */ { "x" : 187.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 90 */ { "x" : 247.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 91 */ { "x" : 247.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 92 */ { "x" : 247.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 93 */ { "x" : 247.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 94 */ { "x" : 247.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 95 */ { "x" : 247.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 96 */ { "x" : 247.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 97 */ { "x" : 247.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 98 */ { "x" : -245, "y" : 170, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 99 */ { "x" : -245, "y" : 184, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 100 */ { "x" : -245, "y" : -170, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 101 */ { "x" : -245, "y" : -184, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 102 */ { "x" : 245, "y" : 170, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 103 */ { "x" : 245, "y" : 184, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 104 */ { "x" : 245, "y" : -170, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 105 */ { "x" : 245, "y" : -184, "bCoef" : 0.5, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 7, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea" },
		
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "y" : -64 },
		{ "v0" : 13, "v1" : 14, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -402.5 },
		{ "v0" : 14, "v1" : 15, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "y" : 64 },
		{ "v0" : 16, "v1" : 17, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "y" : -64 },
		{ "v0" : 17, "v1" : 18, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 402.5 },
		{ "v0" : 18, "v1" : 19, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "y" : 64 },
		
		{ "v0" : 8, "v1" : 9, "vis" : true, "color" : "F8F8F8", "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "curve" : -180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 10, "v1" : 11, "vis" : true, "color" : "F8F8F8", "trait" : "kickOffBarrier" },
		
		{ "v0" : 4, "v1" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 3, "v1" : 7, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 10, "v1" : 9, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "line" },
		
		{ "v0" : 8, "v1" : 20, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 11, "v1" : 21, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 23, "v1" : 22, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "line", "x" : -370 },
		{ "v0" : 25, "v1" : 24, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "line", "x" : 370 },
		
		{ "v0" : 26, "v1" : 27, "vis" : false, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea", "x" : -377.5 },
		{ "v0" : 28, "v1" : 29, "vis" : false, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea", "x" : -377.5 },
		{ "v0" : 30, "v1" : 31, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "trait" : "ballArea", "x" : -387.5 },
		{ "v0" : 32, "v1" : 33, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "trait" : "ballArea", "x" : -387.5 },
		{ "v0" : 34, "v1" : 35, "vis" : false, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea", "x" : 377.5 },
		{ "v0" : 36, "v1" : 37, "vis" : false, "color" : "F8F8F8", "bCoef" : 1.25, "trait" : "ballArea", "x" : 377.5 },
		{ "v0" : 38, "v1" : 39, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "trait" : "ballArea", "x" : 387.5 },
		{ "v0" : 40, "v1" : 41, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "trait" : "ballArea", "x" : 387.5 },
		
		{ "v0" : 50, "v1" : 53, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 52, "v1" : 51, "curve" : -90, "vis" : true, "color" : "F8F8F8", "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "x" : -280 },
		{ "v0" : 54, "v1" : 55, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "y" : 96 },
		{ "v0" : 56, "v1" : 57, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "y" : -96 },
		{ "v0" : 58, "v1" : 61, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 60, "v1" : 59, "curve" : -90, "vis" : true, "color" : "F8F8F8", "trait" : "line" },
		{ "v0" : 60, "v1" : 61, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "x" : 280 },
		{ "v0" : 62, "v1" : 63, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "y" : 96 },
		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "y" : -96 },
		{ "v0" : 67, "v1" : 66, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 66, "v1" : 67, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 69, "v1" : 68, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 68, "v1" : 69, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 71, "v1" : 70, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 70, "v1" : 71, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 73, "v1" : 72, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 72, "v1" : 73, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -247.5 },
		{ "v0" : 75, "v1" : 74, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 74, "v1" : 75, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 77, "v1" : 76, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 76, "v1" : 77, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 79, "v1" : 78, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 78, "v1" : 79, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 81, "v1" : 80, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 80, "v1" : 81, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -187.5 },
		{ "v0" : 83, "v1" : 82, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 82, "v1" : 83, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 85, "v1" : 84, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 84, "v1" : 85, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 87, "v1" : 86, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 86, "v1" : 87, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 89, "v1" : 88, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 88, "v1" : 89, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 187.5 },
		{ "v0" : 91, "v1" : 90, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 90, "v1" : 91, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 93, "v1" : 92, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 92, "v1" : 93, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 95, "v1" : 94, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 94, "v1" : 95, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 97, "v1" : 96, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 96, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 247.5 },
		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "x" : -245 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "x" : -245 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "x" : 245 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "trait" : "line", "x" : 245 }

	],

	"goals" : [
		{ "p0" : [-370,64 ], "p1" : [-370,-64 ], "team" : "red", "x" : -370 },
		{ "p0" : [370,64 ], "p1" : [370,-64 ], "team" : "blue", "x" : 370, "color" : "6666FF" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [-370,64 ], "color" : "FF6666", "trait" : "goalPost", "x" : -370 },
		{ "radius" : 5, "pos" : [-370,-64 ], "color" : "FF6666", "trait" : "goalPost", "x" : -370 },
		{ "radius" : 5, "pos" : [370,64 ], "color" : "6666FF", "trait" : "goalPost", "x" : 370 },
		{ "radius" : 5, "pos" : [370,-64 ], "color" : "6666FF", "trait" : "goalPost", "x" : 370 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -170, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -170, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -432.5, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -432.5, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.1, "cMask" : ["ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"color" : "FFCC00",
		"invMass" : 1.5,
		"bCoef" : 0.4

	},

	"playerPhysics" : {
		"kickStrength" : 4.75,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"bCoef" : 0

	}
}`

var goaltogoal = `{

	"name" : "Gol a Gol FAZo7",

	"width" : 425,

	"height" : 200,

	"spawnDistance" : 170,

	"bg" : { "type" : "hockey", "width" : 0, "height" : 0, "kickOffRadius" : 0, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -370, "y" : 170, "trait" : "ballArea" },
		/* 1 */ { "x" : -370, "y" : -170, "trait" : "ballArea" },
		/* 2 */ { "x" : 370, "y" : -170, "trait" : "ballArea" },
		
		/* 3 */ { "x" : 0, "y" : -170, "trait" : "kickOffBarrier", "cMask" : ["wall" ], "color" : "f708ff" },
		
		/* 4 */ { "x" : -371, "y" : -144, "trait" : "goalNet", "curve" : -190, "color" : "ff0000" },
		/* 5 */ { "x" : -375, "y" : -105, "trait" : "goalNet", "curve" : -190, "color" : "ff0000" },
		/* 6 */ { "x" : 370, "y" : -143, "trait" : "goalNet", "curve" : 190, "color" : "ff0000" },
		/* 7 */ { "x" : 370, "y" : -106, "trait" : "goalNet", "curve" : 190, "color" : "ff0000" },
		/* 8 */ { "x" : -370, "y" : -38, "trait" : "goalNet", "curve" : -190, "bCoef" : 1, "color" : "ffffff" },
		/* 9 */ { "x" : -374, "y" : 35, "trait" : "goalNet", "curve" : -190, "color" : "ffffff" },
		/* 10 */ { "x" : -375, "y" : 105, "trait" : "goalNet", "curve" : -190, "color" : "ff0000" },
		/* 11 */ { "x" : -371, "y" : 143, "trait" : "goalNet", "curve" : -190, "color" : "ff0000" },
		
		/* 12 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "trait" : "kickOffBarrier", "x" : 50, "y" : -200, "curve" : 0, "vis" : true, "color" : "000000", "cGroup" : ["redKO" ] },
		/* 13 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "trait" : "kickOffBarrier", "x" : 50, "y" : 200, "curve" : 0, "vis" : true, "color" : "000000", "cGroup" : ["redKO" ] },
		
		/* 14 */ { "x" : 370, "y" : 104, "trait" : "goalNet", "curve" : 190, "color" : "ff0000" },
		/* 15 */ { "x" : 370, "y" : 142, "trait" : "goalNet", "curve" : 190, "color" : "ff0000" },
		/* 16 */ { "x" : 370, "y" : -37, "trait" : "goalNet", "curve" : 190, "color" : "ffffff" },
		/* 17 */ { "x" : 370, "y" : 39, "trait" : "goalNet", "curve" : 190, "color" : "ffffff" },
		/* 18 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 370, "y" : 142, "curve" : 0, "vis" : false },
		/* 19 */ { "bCoef" : 1.4, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 370, "y" : 170, "curve" : 0, "vis" : false, "color" : "ffffff" },
		/* 20 */ { "bCoef" : 1.5, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : 146, "curve" : 0, "vis" : false },
		/* 21 */ { "bCoef" : 1.5, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : 170, "curve" : 0, "vis" : false },
		/* 22 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : 145, "curve" : 0, "vis" : false },
		/* 23 */ { "bCoef" : 1.4, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : 170, "curve" : 0, "vis" : false, "color" : "ffffff" },
		
		/* 24 */ { "bCoef" : 1, "trait" : "goalPost", "x" : -370, "y" : -103, "cMask" : ["ball" ], "curve" : 1 },
		/* 25 */ { "bCoef" : 1, "trait" : "goalPost", "x" : -371, "y" : -34, "cMask" : ["ball" ], "curve" : 1 },
		
		/* 26 */ { "bCoef" : 1.4, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : -170, "color" : "ffffff" },
		
		/* 27 */ { "bCoef" : 1.5, "cMask" : ["ball" ], "trait" : "goalPost", "x" : -371, "y" : -143 },
		
		/* 28 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : 37, "color" : "ffffff" },
		/* 29 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : 99, "color" : "ffffff" },
		/* 30 */ { "bCoef" : 1.4, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 370, "y" : -170, "color" : "ffffff" },
		
		/* 31 */ { "bCoef" : 1.52, "cMask" : ["ball" ], "trait" : "goalPost", "x" : 370, "y" : -145 },
		/* 32 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalPost", "x" : 370, "y" : -104 },
		/* 33 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalPost", "x" : 371, "y" : -37 },
		/* 34 */ { "bCoef" : 0.1, "cMask" : ["red" ], "trait" : "goalPost", "x" : -50, "y" : -200, "curve" : 0, "vis" : true, "color" : "000000", "cGroup" : ["blueKO" ] },
		/* 35 */ { "bCoef" : 0.1, "cMask" : ["red" ], "trait" : "goalPost", "x" : -50, "y" : 200, "curve" : 0, "vis" : true, "color" : "000000", "cGroup" : ["blueKO" ] },
		
		/* 36 */ { "bCoef" : 1, "trait" : "goalNet", "x" : 370, "y" : -152, "color" : "ffffff" },
		/* 37 */ { "cMask" : ["ball" ], "x" : -370, "y" : -152, "color" : "ffffff", "bCoef" : 1, "trait" : "goalNet" },
		/* 38 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -370, "y" : -95, "color" : "000000" },
		/* 39 */ { "cMask" : ["ball" ], "trait" : "goalNet", "x" : 370, "y" : 152, "bCoef" : 1, "color" : "ffffff" },
		/* 40 */ { "bCoef" : 1, "trait" : "goalNet", "x" : 370, "y" : -96, "color" : "ffffff" },
		/* 41 */ { "bCoef" : 1, "trait" : "goalNet", "x" : 370, "y" : -44, "color" : "ffffff" },
		/* 42 */ { "bCoef" : 1, "trait" : "goalNet", "x" : -370, "y" : 153, "color" : "ffffff" },
		/* 43 */ { "bCoef" : 1, "trait" : "goalNet", "x" : 370, "y" : 49, "color" : "ffffff" },
		/* 44 */ { "bCoef" : 1, "trait" : "goalNet", "x" : 370, "y" : 96, "color" : "ffffff" },
		
		/* 45 */ { "bCoef" : 0.1, "x" : 0, "y" : 170, "cMask" : ["wall" ], "color" : "f708ff" },
		
		/* 46 */ { "x" : -370, "y" : -144, "trait" : "goalNet", "curve" : 0, "vis" : false },
		/* 47 */ { "x" : -370, "y" : -105, "trait" : "goalNet", "curve" : 0, "vis" : false },
		/* 48 */ { "x" : -370, "y" : -38, "trait" : "goalNet", "curve" : 0, "bCoef" : 1, "color" : "000000", "vis" : false },
		/* 49 */ { "x" : -370, "y" : 35, "trait" : "goalNet", "curve" : 0, "vis" : false },
		/* 50 */ { "x" : -370, "y" : 105, "trait" : "goalNet", "curve" : 0, "vis" : false },
		/* 51 */ { "x" : -370, "y" : 143, "trait" : "goalNet", "curve" : 0, "vis" : false },
		
		/* 52 */ { "bCoef" : 0.1, "cMask" : ["red" ], "trait" : "goalPost", "x" : 50, "y" : -200, "curve" : 0, "vis" : true, "color" : "08FFD6", "cGroup" : ["red" ] },
		/* 53 */ { "bCoef" : 0.1, "cMask" : ["red" ], "trait" : "goalPost", "x" : 50, "y" : 200, "curve" : 0, "vis" : true, "color" : "08FFD6", "cGroup" : ["red" ] },
		/* 54 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "trait" : "goalPost", "x" : -50, "y" : -200, "curve" : 0, "vis" : true, "color" : "08FFD6", "cGroup" : ["blue" ] },
		/* 55 */ { "bCoef" : 0.1, "cMask" : ["blue" ], "trait" : "goalPost", "x" : -50, "y" : 200, "curve" : 0, "vis" : true, "color" : "08FFD6", "cGroup" : ["blue" ] }

	],

	"segments" : [
		{ "v0" : 4, "v1" : 5, "trait" : "goalNet", "curve" : -190, "color" : "ff0000" },
		{ "v0" : 6, "v1" : 7, "trait" : "goalNet", "curve" : 190, "x" : 370, "color" : "ff0000" },
		{ "v0" : 8, "v1" : 9, "trait" : "goalNet", "curve" : -190, "color" : "ffffff" },
		{ "v0" : 10, "v1" : 11, "trait" : "goalNet", "curve" : -190, "color" : "ff0000" },
		
		{ "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "cMask" : ["blue" ], "trait" : "kickOffBarrier", "v0" : 12, "v1" : 13, "cGroup" : ["redKO" ] },
		
		{ "v0" : 14, "v1" : 15, "trait" : "goalNet", "curve" : 190, "x" : 370, "color" : "ff0000" },
		{ "v0" : 16, "v1" : 17, "trait" : "goalNet", "curve" : 190, "x" : 370, "color" : "ffffff" },
		{ "curve" : 0, "vis" : false, "color" : "FFCCCC", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 18, "v1" : 19 },
		{ "curve" : 0, "vis" : false, "color" : "FFCCCC", "bCoef" : 1.5, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 20, "v1" : 21 },
		{ "curve" : 0, "vis" : false, "color" : "FFCCCC", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 22, "v1" : 23 },
		
		{ "curve" : 1, "vis" : false, "color" : "FFCCCC", "bCoef" : 1, "trait" : "goalPost", "v0" : 24, "v1" : 25, "cMask" : ["ball" ] },
		{ "curve" : 0, "vis" : false, "color" : "FFCCCC", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalPost", "v0" : 28, "v1" : 29 },
		{ "curve" : 0, "vis" : false, "color" : "FFCCCC", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalPost", "v0" : 32, "v1" : 33 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "cMask" : ["red" ], "trait" : "goalPost", "v0" : 34, "v1" : 35, "cGroup" : ["blueKO" ] },
		
		{ "vis" : true, "bCoef" : 1, "trait" : "goalNet", "v0" : 30, "v1" : 36, "color" : "ffffff", "x" : 370 },
		{ "vis" : true, "cMask" : ["ball" ], "v0" : 26, "v1" : 37, "color" : "ffffff", "bCoef" : 1, "trait" : "goalNet", "x" : -370 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 38, "v1" : 8, "x" : -370 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 39, "v1" : 19, "bCoef" : 1, "x" : 370 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "trait" : "goalNet", "v0" : 28, "v1" : 29, "cMask" : ["ball" ], "x" : -370 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "trait" : "goalNet", "v0" : 40, "v1" : 41, "x" : 370 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "trait" : "goalNet", "v0" : 42, "v1" : 23, "x" : -370 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "trait" : "goalNet", "v0" : 43, "v1" : 44, "x" : 370 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1.4, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 23, "v1" : 19 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1.4, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 26, "v1" : 30 },
		
		{ "vis" : true, "color" : "f708ff", "bCoef" : 0.1, "v0" : 3, "v1" : 45, "x" : 0, "cMask" : ["wall" ], "curve" : 1.50571568977 },
		
		{ "curve" : 0, "vis" : true, "color" : "08FFD6", "bCoef" : 0.1, "cMask" : ["red" ], "trait" : "goalPost", "v0" : 52, "v1" : 53, "cGroup" : ["red" ] },
		{ "curve" : 0, "vis" : true, "color" : "08FFD6", "bCoef" : 0.1, "cMask" : ["blue" ], "trait" : "goalPost", "v0" : 54, "v1" : 55, "cGroup" : ["blue" ] }

	],

	"goals" : [
		{ "p0" : [-369,-146 ], "p1" : [-369,-102 ], "team" : "red", "color" : "000000", "x" : -370 },
		{ "p0" : [370,-110 ], "p1" : [370,-150 ], "team" : "blue", "x" : 370, "color" : "000000" },
		{ "p0" : [-370,-35 ], "p1" : [-370,35 ], "team" : "red", "color" : "000000", "x" : -370 },
		{ "p0" : [-370,103 ], "p1" : [-370,143 ], "team" : "red", "color" : "000000", "x" : -370 },
		{ "p0" : [370,143 ], "p1" : [370,98 ], "team" : "blue", "x" : 370, "color" : "000000" },
		{ "p0" : [370,35 ], "p1" : [370,-35 ], "team" : "blue", "x" : 370, "color" : "000000" }

	],

	"discs" : [
		{ "pos" : [-370,-105 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [-370,-144 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [370,-105 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [370,-143 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [-370,35 ], "trait" : "goalPost", "color" : "ff0000", "bCoef" : 0.5 },
		{ "pos" : [-370,-35 ], "trait" : "goalPost", "color" : "ff0000", "bCoef" : 0.5 },
		{ "pos" : [-370,143 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [-370,105 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [370,143 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [370,104 ], "trait" : "goalPost", "color" : "ffffff", "bCoef" : 0.5 },
		{ "pos" : [370,41 ], "trait" : "goalPost", "color" : "ff0000", "bCoef" : 0.5 },
		{ "pos" : [370,-35 ], "trait" : "goalPost", "color" : "ff0000", "bCoef" : 0.5 }

	],

	"planes" : [
		{ "normal" : [0,-1 ], "dist" : -170, "trait" : "ballArea", "bCoef" : 1 },
		{ "normal" : [0,1 ], "dist" : -170, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		{ "normal" : [1,0 ], "dist" : -423.311779142, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -423.310955619, "bCoef" : 0.1 },
		{ "bCoef" : 0.1, "dist" : -200, "normal" : [0,-1 ] },
		{ "bCoef" : 0.1, "dist" : -200, "normal" : [0,1 ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.12,
		"kickingDamping" : 0.96,
		"kickStrength" : 13

	},

	"ballPhysics" : {
		"color" : "FFFF0D",
		"radius" : 10

	}
}`

var playerAuth = [];
var authWhiteList = [];

/* GENERAL VARIABLES */
const Role = { PLAYER: 0, ADMIN: 1, MASTER: 2 };
const Uniform = { COUNTRY: 0, CLUBLA: 1, CLUBEU: 2 };
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed;
var lastPlayerKick = { id: 0, team: 0 };
var penultPlayerKick;
var undefeatedScore = 0;
var players;
var numberEachTeam;
var announcementColor = 0xFFFAFA;

var commands = {
	"ajuda": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": `Esse comando mostra todos os outros comandos, e pode também explicar a função de cada comando. \nExemple: \'!help bb\' mostrará a função do comando \'bb\'.`,
		"function": helpCommand,
	},
	"rr": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": `Esse comando reinicia o jogo.`,
		"function": restartCommand,
	},
	"bb": {
		"aliases": ["bye", "gn", "cya"],
		"roles": Role.PLAYER,
		"desc": `Esse comando te desconecta rapidamente.`,
		"function": leaveCommand,
	},
	"claim": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": false,
		"function": adminCommand,
	},
	"pass": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": `Esse comando reinicia o jogo.`,
		"function": passwordCommand,
	},
	"uniforme": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": `Esse comando mostra os uniformes disponíveis para colocar no seu time.\nExemplo: \'!uniforme bah\' coloca o uniforme do bahia em seu time.`,
		"function": uniformCommand,
	},
	"reserva": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": `Esse comando muda o uniforme do time para reserva.\nExemplo: \'!reserva\' coloca o uniforme reserva do seu time.`,
		"function": reserveCommand,
	}
}

var uniforms = {

	/* SELEÇÕES */
	"ale": {
		"name": 'Alemanha',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🔴🟡',
		"angle": 90,
		"textcolor": 0x000000,
		"color1": 0xFFFFFF,
		"color2": 0xFFFFFF,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xEC1E31,
		"color21": 0x232522,
		"color22": 0x232522,
		"color23": 0x232522,
	},
	"arg": {
		"name": 'Argentina',
		"type": Uniform.COUNTRY,
		"emoji": '🔵⚪🔵',
		"angle": 90,
		"textcolor": 0x1F374B,
		"color1": 0x75AADB,
		"color2": 0xFFFFFF,
		"color3": 0x75AADB,
		"angle2": 0,
		"textcolor2": 0x9F8334,
		"color21": 0x103A73,
		"color22": 0x103A73,
		"color23": 0x103A73,
	},
	"bra": {
		"name": 'Brasil',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🔴🟡',
		"angle": 360,
		"textcolor": 0x27965A,
		"color1": 0xDBB71B,
		"color2": 0xDBB71B,
		"color3": 0xDBB71B,
		"angle2": 0,
		"textcolor2": 0xDBB71B,
		"color21": 0x1C56B4,
		"color22": 0x1C56B4,
		"color23": 0x1C56B4,
	},
	"esp": {
		"name": 'Espanha',
		"type": Uniform.COUNTRY,
		"emoji": '🟢🟡🔵',
		"angle": 90,
		"textcolor": 0xFFFF00,
		"color1": 0xFF0000,
		"color2": 0xFF0000,
		"color3": 0xFF0000,
		"angle2": 0,
		"textcolor2": 0xE4524A,
		"color21": 0xEFEFEF,
		"color22": 0xEFEFEF,
		"color23": 0xEFEFEF,
	},
	"por": {
		"name": 'Portugal',
		"type": Uniform.COUNTRY,
		"emoji": '🟢🔴🔴',
		"angle": 0,
		"textcolor": 0x289E1F,
		"color1": 0xFF0000,
		"color2": 0xFF0000,
		"color3": 0xFF0000,
		"angle2": 90,
		"textcolor2": 0x0F303D,
		"color21": 0x48776F,
		"color22": 0x73CFB6,
		"color23": 0x73CFB6,
	},
	"ita": {
		"name": 'Italia',
		"type": Uniform.COUNTRY,
		"emoji": '🟢⚪🔴',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x3646A9,
		"color2": 0x3646A9,
		"color3": 0x3646A9,
		"angle2": 90,
		"textcolor2": 0xDFC396,
		"color21": 0x12282E,
		"color22": 0x17433B,
		"color23": 0x17433B,
	},
	"uru": {
		"name": 'Uruguai',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🔵⚪',
		"angle": 0,
		"textcolor": 0x212124,
		"color1": 0x66A5D4,
		"color2": 0x66A5D4,
		"color3": 0x66A5D4,
		"angle2": 0,
		"textcolor2": 0x6CA0CF,
		"color21": 0xE5E5E7,
		"color22": 0xE5E5E7,
		"color23": 0xE5E5E7,
	},
	"fra": {
		"name": 'França',
		"type": Uniform.COUNTRY,
		"emoji": '🔵⚪🔴',
		"angle": 90,
		"textcolor": 0xF5F9F6,
		"color1": 0x265ECF,
		"color2": 0x384355,
		"color3": 0x384355,
		"angle2": 0,
		"textcolor2": 0x3243B4,
		"color21": 0xF5F9F6,
		"color22": 0xF5F9F6,
		"color23": 0xF5F9F6,
	},
	"ing": {
		"name": 'Inglaterra',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🔴⚪',
		"angle": 0,
		"textcolor": 0x0549A0,
		"color1": 0xDEDFE4,
		"color2": 0xDEDFE4,
		"color3": 0xDEDFE4,
		"angle2": 0,
		"textcolor2": 0xE92715,
		"color21": 0x2858AB,
		"color22": 0x2858AB,
		"color23": 0x2858AB,
	},
	"bel": {
		"name": 'Bélgica',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🔴🟡',
		"angle": 0,
		"textcolor": 0xCA9144,
		"color1": 0xC4212A,
		"color2": 0xC4212A,
		"color3": 0xC4212A,
		"angle2": 0,
		"textcolor2": 0x37312B,
		"color21": 0xEFC02E,
		"color22": 0xEFC02E,
		"color23": 0xEFC02E,
	},

	/* CLUBES LA */
	"bah": {
		"name": 'Bahia',
		"type": Uniform.CLUBLA,
		"emoji": '🔵⚪🔴',
		"angle": 0,
		"textcolor": 0xFFDD00,
		"color1": 0xD10125,
		"color2": 0xE3DFE4,
		"color3": 0x1C3E94,
		"angle2": 270,
		"textcolor2": 0xD10125,
		"color21": 0xE3DFE4,
		"color22": 0xE3DFE4,
		"color23": 0x1C3E94,
	},
	"vit": {
		"name": 'Vitória',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚫🔴',
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0xFF1D0D,
		"color2": 0x000000,
		"color3": 0x000000,
		"angle2": 90,
		"textcolor2": 0x000000,
		"color21": 0xFF1D0D,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"pal": {
		"name": 'Palmeiras',
		"type": Uniform.CLUBLA,
		"emoji": '🟢⚪🟢',
		"angle": 0,
		"textcolor": 0xE3E7EB,
		"color1": 0x224A40,
		"color2": 0x224A40,
		"color3": 0x224A40,
		"angle2": 0,
		"textcolor2": 0x004738,
		"color21": 0xF4F6FA,
		"color22": 0xF4F6FA,
		"color23": 0xF4F6FA,
	},
	"cor": {
		"name": 'Corinthians',
		"type": Uniform.CLUBLA,
		"emoji": '⚪⚫⚪',
		"angle": 0,
		"textcolor": 0x000000,
		"color1": 0xFFFFFF,
		"color2": 0xFFFFFF,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xFFFFFF,
		"color21": 0x000000,
		"color22": 0x000000,
		"color23": 0x000000,
	},
	"san": {
		"name": 'Santos',
		"type": Uniform.CLUBLA,
		"emoji": '⚪⚫⚪',
		"angle": 0,
		"textcolor": 0xB69754,
		"color1": 0xFFFFFF,
		"color2": 0xFFFFFF,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xB69754,
		"color21": 0x000000,
		"color22": 0xFFFFFF,
		"color23": 0x000000,
	},
	"sao": {
		"name": 'São Paulo',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪⚫',
		"angle": 90,
		"textcolor": 0x000000,
		"color1": 0xFF0A0A,
		"color2": 0xFFFFFF,
		"color3": 0x000000,
		"angle2": 90,
		"textcolor2": 0xFFFFFF,
		"color21": 0xCE393B,
		"color22": 0xCE393B,
		"color23": 0xCE393B,
	},
	"fla": {
		"name": 'Flamengo',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚫🔴',
		"angle": 90,
		"textcolor": 0xFCF1ED,
		"color1": 0xBA1719,
		"color2": 0x1A1613,
		"color3": 0xBA1719,
		"angle2": 90,
		"textcolor2": 0xBA1719,
		"color21": 0x1A1613,
		"color22": 0x1A1613,
		"color23": 0x1A1613,
	},
	"flu": {
		"name": 'Fluminense',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪🟢',
		"angle": 0,
		"textcolor": 0xFCFAFF,
		"color1": 0x005C38,
		"color2": 0x9B030C,
		"color3": 0x005C38,
		"angle2": 0,
		"textcolor2": 0x920F2E,
		"color21": 0xE4DADB,
		"color22": 0xE4DADB,
		"color23": 0xE4DADB,
	},
	"vas": {
		"name": 'Vasco',
		"type": Uniform.CLUBLA,
		"emoji": '⚫⚪⚫',
		"angle": 135,
		"textcolor": 0xFF0000,
		"color1": 0xFFFFFF,
		"color2": 0x000000,
		"color3": 0xFFFFFF,
		"angle2": 135,
		"textcolor2": 0xFF0000,
		"color21": 0x000000,
		"color22": 0xFFFFFF,
		"color23": 0x000000,
	},
	"bot": {
		"name": 'Botafogo',
		"type": Uniform.CLUBLA,
		"emoji": '⚫⚪⚫',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0xFFFFFF,
		"color2": 0x000000,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xFFFFFF,
		"color21": 0x000000,
		"color22": 0x3C3A3F,
		"color23": 0x000000,
	},
	"gre": {
		"name": 'Gremio',
		"type": Uniform.CLUBLA,
		"emoji": '🔵⚪⚫',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x75ACFF,
		"color2": 0x000000,
		"color3": 0x75ACFF,
		"angle2": 0,
		"textcolor2": 0x4A87B7,
		"color21": 0xFFFFFF,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"int": {
		"name": 'Internacional',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪🔴',
		"angle": 0,
		"textcolor": 0xEBE5E0,
		"color1": 0xD3051F,
		"color2": 0xD3051F,
		"color3": 0xD3051F,
		"angle2": 0,
		"textcolor2": 0xE30222,
		"color21": 0xEBE5E0,
		"color22": 0xEBE5E0,
		"color23": 0xEBE5E0,
	},
	"cru": {
		"name": 'Cruzeiro',
		"type": Uniform.CLUBLA,
		"emoji": '🔵⚪🔵',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x023286,
		"color2": 0x023286,
		"color3": 0x023286,
		"angle2": 0,
		"textcolor2": 0x101B51,
		"color21": 0xFFFFFF,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"atl": {
		"name": 'Atlético-MG',
		"type": Uniform.CLUBLA,
		"emoji": '⚫⚪⚫',
		"angle": 0,
		"textcolor": 0xC91926,
		"color1": 0x000000,
		"color2": 0xFFFFFF,
		"color3": 0x000000,
		"angle2": 90,
		"textcolor2": 0xC91926,
		"color21": 0x000000,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"spo": {
		"name": 'Sport',
		"type": Uniform.CLUBLA,
		"emoji": '⚫🔴⚫',
		"angle": 90,
		"textcolor": 0xBCAE46,
		"color1": 0xBE2B2D,
		"color2": 0x020906,
		"color3": 0xBE2B2D,
		"angle2": 90,
		"textcolor2": 0xB6A043,
		"color21": 0x111317,
		"color22": 0xE5E0E2,
		"color23": 0xE5E0E2,
	},
	"riv": {
		"name": 'River Plate',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪🔴',
		"angle": 45,
		"textcolor": 0x000000,
		"color1": 0xFFFAFA,
		"color2": 0xFF0000,
		"color3": 0xFFFAFA,
		"angle2": 45,
		"textcolor2": 0xFFFFFF,
		"color21": 0xAF1D27,
		"color22": 0xEA382C,
		"color23": 0xAF1D27,
	},
	"boc": {
		"name": 'Boca Juniors',
		"type": Uniform.CLUBLA,
		"emoji": '🔵🟡🔵',
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0x05009C,
		"color2": 0xE0B60D,
		"color3": 0x05009C,
		"angle2": 90,
		"textcolor2": 0xFFFFFF,
		"color21": 0xE0B60D,
		"color22": 0x05009C,
		"color23": 0xE0B60D,
	},
	/* CLUBES EU */
	/*
	"che": {
		"name": 'Chelsea',
		"type": Uniform.CLUBEU,
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0x0000CD,
		"color2": 0x0000CD,
		"color3": 0x0000CD,
	},
	"rea": {
		"name": 'Real Madrid',
		"type": Uniform.CLUBEU,
		"angle": 0,
		"textcolor": 0xDAA520,
		"color1": 0xFFFAFA,
		"color2": 0xFFFAFA,
		"color3": 0xFFFAFA,
	},
	"juv": {
		"name": 'Juventus',
		"type": Uniform.CLUBEU,
		"angle": 180,
		"textcolor": 0xDAA520,
		"color1": 0x000000,
		"color2": 0xFFFFFF,
		"color3": 0x000000,
	},
	"bay": {
		"name": 'Bayern de Munique',
		"type": Uniform.CLUBEU,
		"angle": 30,
		"textcolor": 0xFFD700,
		"color1": 0xFF0000,
		"color2": 0xF20000,
		"color3": 0xFF0000,
	},
	"bar": {
		"name": 'Barcelona',
		"type": Uniform.CLUBEU,
		"angle": 0,
		"textcolor": 0xFFD700,
		"color1": 0x00008B,
		"color2": 0x8B0000,
		"color3": 0x00008B,
	},
	"psg": {
		"name": 'Paris Sant-Germain',
		"type": Uniform.CLUBEU,
		"angle": 180,
		"textcolor": 0xFFFFFF,
		"color1": 0x000080,
		"color2": 0xB22222,
		"color3": 0x000080,
	},*/
}

/* TEAM VARIABLES */
var nameHome = 'Bahia';
var acronymHome = "bah";
var nameGuest = 'Vitória';
var acronymGuest = "vit";
var emojiHome = '🔵⚪🔴';
var emojiGuest = '🔴⚫🔴';
var playersTeamHome;
var playersTeamGuest;
var playersTeamEspec;
var goalsHome = [];
var goalsGuest = [];
var Hposs;
var Gposs;


room.setCustomStadium(goaltogoal);
room.setScoreLimit(3);
room.setTimeLimit(3);

room.setTeamColors(1, uniforms[acronymHome].angle, uniforms[acronymHome].textcolor, [uniforms[acronymHome].color1, uniforms[acronymHome].color2, uniforms[acronymHome].color3]);

room.setTeamColors(2, uniforms[acronymGuest].angle, uniforms[acronymGuest].textcolor, [uniforms[acronymGuest].color1, uniforms[acronymGuest].color2, uniforms[acronymGuest].color3]);

/* PRIMARY FUNCTIONS */

room.onGameStart = function () {
	room.sendAnnouncement(centerText(`🥅🥅 PARTIDA INICIANDO 🥅🥅`), null, announcementColor, "bold", Notification.CHAT);
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} X ${nameGuest} ${emojiGuest}`), null, announcementColor, "bold", 0);

	if (undefeatedScore !== 0) {
		room.sendAnnouncement(centerText(`     📢 ${nameHome} está invicto 📢`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`     📢 Sequência de ${undefeatedScore} jogo(s) 📢`), null, announcementColor, "bold", 0);
	}

	Hposs = 0;
	Gposs = 0;
}

room.onPlayerJoin = function (player) {
	room.sendAnnouncement(centerText(`[PV] Bem-Vindo ${player.name}! digite "!ajuda" para ver os comandos do server.`), player.id, announcementColor, "bold", Notification.CHAT);
	updateAdmins();
	var players = room.getPlayerList();
	if (players.length < 7) {
		numberEachTeam = parseInt(players.length / 2);
	} else {
		numberEachTeam = 3;
	}
}

room.onPlayerLeave = function (player) {
	updateAdmins();
	var players = room.getPlayerList();
	if (players.length < 7) {
		numberEachTeam = parseInt(players.length / 2);
	} else {
		numberEachTeam = 3;
	}
}

room.onPlayerChat = function (player, message) {
	let msgArray = message.split(/ +/);
	if (msgArray[0][0] === '!') {
		let command = getCommand(msgArray[0].slice(1).toLowerCase());
		if (command !== false) commands[command].function(player, message);
		return false;
	}
}

room.onPlayerBallKick = function (player) {
	if (player.id !== lastPlayerKick.id || player.team !== lastPlayerKick.team) {
		penultPlayerKick = lastPlayerKick;
		lastPlayerKick = player;
	}
}

room.onTeamGoal = function (team) {
	const goalTime = getTime();
	const scores = room.getScores();
	if (lastPlayerKick.team === team) {
		room.sendAnnouncement(``, null, announcementColor, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`TOCA A MÚÚSICAAA, É GOOOOOL!!!`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`⚽ Autor: ${lastPlayerKick.name} ⚽`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, announcementColor, "bold", 0);

		if (penultPlayerKick.team === team) {
			room.sendAnnouncement(centerText(`👟 Assistência: ${penultPlayerKick.name}👟`), null, announcementColor, "bold", 0);
			room.setPlayerAvatar(penultPlayerKick.id, '👟');
			setTimeout(function () { room.setPlayerAvatar(penultPlayerKick.id,); }, 2400);
		}
		room.setPlayerAvatar(lastPlayerKick.id, '⚽');
		setTimeout(function () { room.setPlayerAvatar(lastPlayerKick.id,); }, 2400);

		if (team === 1) {
			goalsHome.push(`${lastPlayerKick.name}  ${goalTime}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayerKick.name}  ${goalTime}`);
		}

	} else {
		room.sendAnnouncement(``, null, announcementColor, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`🤡 Autor: ${lastPlayerKick.name} 🤡`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, announcementColor, "bold", 0);
		room.setPlayerAvatar(lastPlayerKick.id, '🤡');
		setTimeout(function () { room.setPlayerAvatar(lastPlayerKick.id,); }, 2400);

		if (team === 1) {
			goalsHome.push(`${lastPlayerKick.name} (C)  ${goalTime}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayerKick.name} (C)  ${goalTime}`);
		}
	}
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, announcementColor, "bold", 0);
}

room.onPlayerTeamChange = function () {
	updateTeams();
}

room.onTeamVictory = function () {
	const scores = room.getScores();

	Hposs = Hposs / (Hposs + Gposs);
	Gposs = 1 - Hposs;

	room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, announcementColor, "bold", Notification.CHAT);
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, 0x0000FF, "bold", 0);
	room.sendAnnouncement(centerText(`${emojiHome} ` + (Hposs * 100).toPrecision(2).toString() + `%` + `  Posse de bola  ` + (Gposs * 100).toPrecision(2).toString() + `% ${emojiGuest}`), null, announcementColor, "bold", 0);

	for (var i = 0; i < 3; i++) {
		room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, announcementColor, "bold", 0);
	}

	if (scores.red > scores.blue) {
		setTimeout(function () {
			for (var i = 0; i < playersTeamGuest.length; i++) {
				room.setPlayerTeam(playersTeamGuest[i].id, 0);
			}
		}, 6000);

		setTimeout(function () {
			for (var i = 0; i < numberEachTeam; i++) {
				room.setPlayerTeam(playersTeamEspec[i].id, 2);
			}
		}, 7000);

		undefeatedScore++;
		setTimeout(function () { room.startGame(); }, 9000);


	} else {
		setTimeout(function () {
			for (var i = 0; i < playersTeamHome.length; i++) {
				room.setPlayerTeam(playersTeamHome[i].id, 0);
			}
		}, 6000);

		setTimeout(function () {
			for (var i = 0; i < playersTeamGuest.length; i++) {
				room.setPlayerTeam(playersTeamGuest[i].id, 1);
			}
		}, 7000);

		setTimeout(function () {
			for (var i = 0; i < numberEachTeam; i++) {
				room.setPlayerTeam(playersTeamEspec[i].id, 2);
			}
		}, 8000);

		undefeatedScore = 0;
		undefeatedScore++;

		setTimeout(function () { changeUniforme(); }, 8000);

		setTimeout(function () { room.startGame(); }, 9000);
	}

	setTimeout(function () { 
		lastPlayerKick = { id: 0, team: 0 };
		penultPlayerKick = undefined;
		goalsHome = [];
		goalsGuest = [];
	}, 8000);
	
}

room.onGameTick = function () {
	getStats();
}

/* AUXILIARY FUNCTIONS */

function getCommand(commandStr) {
	if (commands.hasOwnProperty(commandStr)) return commandStr;
	for (const [key, value] of Object.entries(commands)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === commandStr) return key;
		}
	}
	return false;
}


function updateAdmins() { // Se não tem nenhum Admin online, é dado admin para o primeiro jogador
	var players = room.getPlayerList();
	if (players.length == 0) return;
	if (players.find((player) => player.admin) != null) return;
	room.setPlayerAdmin(players[0].id, true);
}


function centerText(string) { // Centraliza um texto no chat
	var space;
	space = parseInt((80 - string.length) * 0.8, 10);
	return ' '.repeat(space) + string + ' '.repeat(space)
}


function docketFormat(string1, string2) { // Formata a súmula
	if (string1 !== undefined && string2 === undefined) {
		var space = 53 - (string1.length) * 0.8;
		return ' '.repeat(space) + string1
	} else if (string2 !== undefined && string1 === undefined) {
		return ' '.repeat(77) + string2
	} else if (string2 !== undefined && string1 !== undefined) {
		var space = 16 - (string1.length + 10 + string2.length)
		return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
	}
}


function updateTeams() { // Reorganiza a lista de players de cada time
	var players = room.getPlayerList();
	playersTeamHome = players.filter(player => player.team === 1);
	playersTeamGuest = players.filter(player => player.team === 2);
	playersTeamEspec = players.filter(player => player.team === 0);
}


function getTime() { // Calcula e formata o tempo da partida
	const scores = room.getScores();
	var min = parseInt(scores.time / 60);
	var sec = parseInt(scores.time) - min * 60;
	return `[${min}' ${sec}"]`
}


function getStats() { // Calcula a velocidade da bola e posse de bola
	const ballPosition = room.getBallPosition();
	point[1] = point[0];
	point[0] = ballPosition;
	ballSpeed = pointDistance(point[0], point[1]) * speedCoefficient;
	lastPlayerKick.team == 1 ? Hposs++ : Gposs++;
}


function pointDistance(p1, p2) { // Calcula distância entre dois pontos
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function instantRestart() {
	room.stopGame();
	setTimeout(() => { 
		room.startGame();
		lastPlayerKick = { id: 0, team: 0 };
		penultPlayerKick = undefined;
		goalsHome = [];
		goalsGuest = []; 
	}, 10);

}

function getCommand(commandStr) {
	if (commands.hasOwnProperty(commandStr)) return commandStr;
	for (const [key, value] of Object.entries(commands)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === commandStr) return key;
		}
	}
	return false;
}

function getUniform(uniformStr) {
	if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
	for (const [key, value] of Object.entries(uniforms)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === uniformStr) return key;
		}
	}
	return false;
}

function changeUniforme() {
	var a = nameHome;
	nameHome = nameGuest;
	nameGuest = a;

	var b = acronymHome;
	acronymHome = acronymGuest;
	acronymGuest = b;

	var c = emojiHome;
	emojiHome = emojiGuest;
	emojiGuest = c;

	room.setTeamColors(1, uniforms[acronymHome].angle, uniforms[acronymHome].textcolor, [uniforms[acronymHome].color1, uniforms[acronymHome].color2, uniforms[acronymHome].color3]);
	
	room.setTeamColors(2, uniforms[acronymGuest].angle, uniforms[acronymGuest].textcolor, [uniforms[acronymGuest].color1, uniforms[acronymGuest].color2, uniforms[acronymGuest].color3]);
}

/* COMMANDS FUNCTIONS */

function restartCommand(player, message) {
	if (player.admin) instantRestart();
}

function passwordCommand(player, message) {
	if (player.admin) {
		msgArray = message.split(/ +/).slice(1);
		if (msgArray.length === 0) {
			room.setPassword(null);
		}
		if (msgArray.length >= 1) {
			room.setPassword(`${msgArray[0]}`);
		}
	}
}

function leaveCommand(player, message) {
	room.kickPlayer(player.id, "Tchau !", false);
}

function adminCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (parseInt(msgArray[0]) === adminPassword) {
		room.setPlayerAdmin(player.id, true);
		authWhiteList.push(playerAuth[player.id]);
		room.sendAnnouncement(`${player.name} agora é o mestre da sala !`, null, announcementColor, "bold", Notification.CHAT);
	}
}

function helpCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (msgArray.length === 0) {
		var commandString = "[PV] LISTA DE COMANDOS DO SERVER"
		commandString += "\nComandos de Players:";
		for (const [key, value] of Object.entries(commands)) {
			if (value.desc && value.roles === Role.PLAYER) commandString += ` !${key},`;
		}
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (player.admin) {
			commandString += `\nComandos de Administradores :`;
			for (const [key, value] of Object.entries(commands)) {
				if (value.desc && value.roles === Role.ADMIN) commandString += ` !${key},`;
			}
		}

		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		commandString += "\n\nPara obter informações sobre um comando em específico, digite '\'!ajuda <nome do comando>\'.";
		room.sendAnnouncement(commandString, player.id, announcementColor, "bold", Notification.CHAT);
	}
	else if (msgArray.length >= 1) {
		var commandName = getCommand(msgArray[0].toLowerCase());
		if (commandName !== false && commands[commandName].desc !== false) room.sendAnnouncement(`[PV] Comando \'${commandName}\' :\n${commands[commandName].desc}`, player.id, statsColor, "bold", Notification.CHAT);
		else room.sendAnnouncement(`[PV] Esse comando não existe. Para olhar a lista de comandos digite \'!ajuda\'`, player.id, announcementColor, "bold", Notification.CHAT);
	}
}

function uniformCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (msgArray.length === 0) {
		var uniformString = "[PV] Seleções :";
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.COUNTRY) uniformString += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString += `\n`
		room.sendAnnouncement(uniformString, player.id, announcementColor, "bold", Notification.CHAT);
		uniformString2 = `[PV] Clubes Sul-americanos :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBLA) uniformString2 += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString2 += `\n`
		room.sendAnnouncement(uniformString2, player.id, announcementColor, "bold", Notification.CHAT);
		uniformString3 = `[PV] Clubes Europeus :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBEU) uniformString3 += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString3 += `\n`
		room.sendAnnouncement(uniformString3, player.id, announcementColor, "bold", Notification.CHAT);
		room.sendAnnouncement("Para escolher um uniforme para seu time digite '\'!uniforme <nome do time>\'.", player.id, announcementColor, "bold", Notification.CHAT);
	}
	else if (msgArray.length >= 1) {
		var uniformName = getUniform(msgArray[0].toLowerCase());
		if (uniformName !== false && uniforms[uniformName].name !== false) {
			room.sendAnnouncement(`[PV] O uniforme do \'${uniforms[uniformName].name}\' foi colocado em seu time.`, player.id, announcementColor, "bold", Notification.CHAT);

			room.setTeamColors(player.team, uniforms[uniformName].angle, uniforms[uniformName].textcolor, [uniforms[uniformName].color1, uniforms[uniformName].color2, uniforms[uniformName].color3]);

			if (player.team == 1) {
				nameHome = uniforms[uniformName].name;
				acronymHome = uniformName;
				emojiHome = uniforms[uniformName].emoji;
			} else if (player.team == 2) {
				nameGuest = uniforms[uniformName].name;
				acronymGuest = uniformName;
				emojiGuest = uniforms[uniformName].emoji;
			}
		} else {
			room.sendAnnouncement(`[PV] Esse uniforme não existe, digite \'!uniforme\' para ver todos os disponíveis`, player.id, announcementColor, "bold", Notification.CHAT);
		}
	}
}

function reserveCommand(player) {

	if (player.team === 1 && nameHome !== 'Mandante') {
		room.setTeamColors(player.team, uniforms[acronymHome].angle2, uniforms[acronymHome].textcolor2, [uniforms[acronymHome].color21, uniforms[acronymHome].color22, uniforms[acronymHome].color23]);
	} else if (player.team === 1 && nameHome === 'Mandante') {
		room.sendAnnouncement(`[PV] Seu time ainda não tem um uniforme, digite !uniforme e veja as possibilidades.`, player.id, announcementColor, "bold", Notification.CHAT);
	}

	if (player.team === 2 && nameGuest !== 'Visitante') {
		room.setTeamColors(player.team, uniforms[acronymGuest].angle2, uniforms[acronymGuest].textcolor2, [uniforms[acronymGuest].color21, uniforms[acronymGuest].color22, uniforms[acronymGuest].color23]);
	} else if (player.team === 2 && nameGuest === 'Visitante') {
		room.sendAnnouncement(`[PV] Seu time ainda não tem um uniforme, digite !uniforme e veja as possibilidades.`, player.id, announcementColor, "bold", Notification.CHAT);
	}
}
