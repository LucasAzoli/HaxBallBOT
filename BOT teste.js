var room = HBInit({
	roomName: "Futsal FAZo7",
	maxPlayers: 10,
	noPlayer: true,
	public: true,
	password: "777",
	geo: {"code": 'br', "lat": -12.9704, "lon": -38.5124}
});

const scoreLimit = 3;
const timeLimit = 5;

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);

var adminPassword = 1000 + getRandomInt(9000);

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
var stadiumx4 = `{

	"name" : "Futsal x4 FAZo7",

	"width" : 800,

	"height" : 350,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 700, "height" : 320, "kickOffRadius" : 80, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -700, "y" : 320, "trait" : "ballArea" },
		/* 1 */ { "x" : -700, "y" : -320, "trait" : "ballArea" },
		/* 2 */ { "x" : 700, "y" : 320, "trait" : "ballArea" },
		/* 3 */ { "x" : 700, "y" : -320, "trait" : "ballArea" },
		
		/* 4 */ { "x" : 0, "y" : 350, "trait" : "kickOffBarrier" },
		/* 5 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 6 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 7 */ { "x" : 0, "y" : -350, "trait" : "kickOffBarrier" },
		
		/* 8 */ { "x" : -700, "y" : -85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 9 */ { "x" : -750, "y" : -85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 10 */ { "x" : -750, "y" : 85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 11 */ { "x" : -700, "y" : 85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 12 */ { "x" : 700, "y" : -85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 13 */ { "x" : 750, "y" : -85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 14 */ { "x" : 750, "y" : 85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 15 */ { "x" : 700, "y" : 85, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		
		/* 16 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700, "y" : 85, "color" : "F8F8F8" },
		/* 17 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700, "y" : 320, "color" : "F8F8F8" },
		/* 18 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700, "y" : -85, "color" : "F8F8F8" },
		/* 19 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700, "y" : -320, "color" : "F8F8F8" },
		/* 20 */ { "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700, "y" : 320, "_selected" : "segment" },
		/* 21 */ { "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : 320, "_selected" : "segment" },
		/* 22 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : 85 },
		/* 23 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : 320 },
		/* 24 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : -320, "color" : "F8F8F8" },
		/* 25 */ { "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : -85, "color" : "F8F8F8" },
		/* 26 */ { "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : -320 },
		/* 27 */ { "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : -320 },
		/* 28 */ { "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700, "y" : -320 },
		/* 29 */ { "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700, "y" : -320 },
		
		/* 30 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0, "y" : -320 },
		/* 31 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0, "y" : -80 },
		/* 32 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0, "y" : 80 },
		/* 33 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0, "y" : 320 },
		/* 34 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "x" : 0, "y" : -80, "vis" : true, "color" : "F8F8F8" },
		/* 35 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "x" : 0, "y" : 80, "vis" : true, "color" : "F8F8F8" },
		/* 36 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0, "y" : -150 },
		/* 37 */ { "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0, "y" : 90 },
		/* 38 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 39 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 40 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 41 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		
		/* 42 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -710, "y" : 95, "curve" : 0, "vis" : false },
		/* 43 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -710, "y" : 320, "curve" : 0, "vis" : false },
		/* 44 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -710, "y" : 95, "curve" : 0, "vis" : false },
		/* 45 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -710, "y" : 320, "curve" : 0, "vis" : false },
		/* 46 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -710, "y" : -316, "vis" : false, "curve" : 0 },
		/* 47 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -710, "y" : -89, "vis" : false, "curve" : 0 },
		/* 48 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 710, "y" : -89 },
		/* 49 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 710, "y" : -316, "vis" : false, "curve" : 0 },
		/* 50 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 710, "y" : -89, "vis" : false, "curve" : 0 },
		/* 51 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 710, "y" : 95, "curve" : 0, "vis" : false },
		/* 52 */ { "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 710, "y" : 320, "curve" : 0, "vis" : false }

	],

	"segments" : [
		{ "v0" : 8, "v1" : 9, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		{ "v0" : 9, "v1" : 10, "trait" : "goalNet", "color" : "F8F8F8" },
		{ "v0" : 10, "v1" : 11, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		{ "v0" : 12, "v1" : 13, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		{ "v0" : 13, "v1" : 14, "trait" : "goalNet", "color" : "F8F8F8" },
		{ "v0" : 14, "v1" : 15, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		{ "v0" : 5, "v1" : 6, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO" ], "color" : "F8F8F8", "vis" : true },
		{ "v0" : 5, "v1" : 6, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO" ], "vis" : true, "color" : "F8F8F8" },
		{ "v0" : 6, "v1" : 7, "trait" : "kickOffBarrier" },
		
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 16, "v1" : 17 },
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 18, "v1" : 19 },
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 20, "v1" : 21, "_selected" : true },
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 22, "v1" : 23 },
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 24, "v1" : 25 },
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 26, "v1" : 27 },
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 28, "v1" : 29 },
		
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "v0" : 30, "v1" : 31 },
		{ "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "v0" : 32, "v1" : 33 },
		
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 42, "v1" : 43 },
		{ "curve" : 2.50208708167, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 44, "v1" : 45 },
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 46, "v1" : 47 },
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 49, "v1" : 50, "x" : 710 },
		{ "curve" : 2.50208708167, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 51, "v1" : 52, "x" : 710 }

	],

	"goals" : [
		{ "p0" : [-710,-85 ], "p1" : [-710,85 ], "team" : "red" },
		{ "p0" : [710,85 ], "p1" : [710,-85 ], "team" : "blue" }

	],

	"discs" : [
		{ "pos" : [-700,85 ], "trait" : "goalPost", "color" : "FF0000", "radius" : 6 },
		{ "pos" : [-700,-85 ], "trait" : "goalPost", "color" : "FF0000", "radius" : 6 },
		{ "pos" : [700,85 ], "trait" : "goalPost", "color" : "0033FF", "radius" : 6 },
		{ "pos" : [700,-85 ], "trait" : "goalPost", "color" : "0033FF", "radius" : 6 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -320, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -320, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -800, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -800, "bCoef" : 0.1 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 4.5

	},

	"ballPhysics" : {
		"radius" : 6.5,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`
var stadiumx5 = `{

	"name" : "Futsal x5 GLH ; By Bazinga! from HaxMaps",

	"width" : 1080,

	"height" : 532,

	"spawnDistance" : 310,

	"bg" : { "type" : "hockey", "width" : 950, "height" : 460, "kickOffRadius" : 6, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -950, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 1 */ { "x" : -950, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 2 */ { "x" : -950, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 3 */ { "x" : -950, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 4 */ { "x" : 950, "y" : 456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 5 */ { "x" : 950, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 6 */ { "x" : 950, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 7 */ { "x" : 950, "y" : -456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 8 */ { "x" : 0, "y" : 508, "trait" : "kickOffBarrier" },
		/* 9 */ { "x" : 0, "y" : 150, "trait" : "kickOffBarrier" },
		
		/* 10 */ { "x" : 0, "y" : -150, "trait" : "line" },
		
		/* 11 */ { "x" : 0, "y" : -508, "trait" : "kickOffBarrier" },
		
		/* 12 */ { "x" : -995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		/* 13 */ { "x" : 995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		/* 14 */ { "x" : -995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		/* 15 */ { "x" : 995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0 },
		
		/* 16 */ { "x" : 951, "y" : 460, "bCoef" : 1, "trait" : "ballArea" },
		/* 17 */ { "x" : 951, "y" : -460, "bCoef" : 1, "trait" : "ballArea" },
		
		/* 18 */ { "x" : 0, "y" : 460, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		/* 19 */ { "x" : 0, "y" : -460, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		
		/* 20 */ { "x" : 0, "y" : 150, "trait" : "kickOffBarrier" },
		/* 21 */ { "x" : 0, "y" : -150, "trait" : "kickOffBarrier" },
		
		/* 22 */ { "x" : 958, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 23 */ { "x" : 958, "y" : -456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 24 */ { "x" : -958, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 25 */ { "x" : -958, "y" : -456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 26 */ { "x" : -958, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 27 */ { "x" : -958, "y" : 456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 28 */ { "x" : 958, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "curve" : 0 },
		
		/* 29 */ { "x" : 958, "y" : 456, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 30 */ { "x" : 0, "y" : -9, "trait" : "line", "curve" : -180 },
		/* 31 */ { "x" : 0, "y" : 9, "trait" : "line", "curve" : -180 },
		/* 32 */ { "x" : 0, "y" : -9, "trait" : "line", "curve" : 180 },
		/* 33 */ { "x" : 0, "y" : 9, "trait" : "line", "curve" : 180 },
		/* 34 */ { "x" : 634.21528583524, "y" : -109.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 35 */ { "x" : 634.21528583524, "y" : 114.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		/* 36 */ { "x" : 634.21528583524, "y" : 114.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 37 */ { "x" : 950, "y" : 324.62551819445, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 38 */ { "x" : 634.21528583524, "y" : -109.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90 },
		/* 39 */ { "x" : -423.82978278939, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 40 */ { "x" : -423.82978278939, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 41 */ { "x" : -222.35509186163, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 42 */ { "x" : -222.35509186163, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 43 */ { "x" : 386.06898092163, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 44 */ { "x" : 386.06898092163, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 45 */ { "x" : 184.59428999387, "y" : 449, "bCoef" : 0.1, "trait" : "line" },
		/* 46 */ { "x" : 184.59428999387, "y" : 471, "bCoef" : 0.1, "trait" : "line" },
		/* 47 */ { "x" : -657.56254462949, "y" : 460, "bCoef" : 0.1, "trait" : "line" },
		/* 48 */ { "x" : -657.56254462949, "y" : 473, "bCoef" : 0.1, "trait" : "line" },
		/* 49 */ { "x" : 975, "y" : 193.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 50 */ { "x" : 956, "y" : 193.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 51 */ { "x" : 975, "y" : -188.96236130943, "bCoef" : 0.1, "trait" : "line" },
		/* 52 */ { "x" : 956, "y" : -188.96236130943, "bCoef" : 0.1, "trait" : "line" },
		/* 53 */ { "x" : -667.82213435646, "y" : -460, "bCoef" : 0.1, "trait" : "line" },
		/* 54 */ { "x" : -667.82213435646, "y" : -473, "bCoef" : 0.1, "trait" : "line" },
		/* 55 */ { "x" : 621.80174276174, "y" : 460, "bCoef" : 0.1, "trait" : "line" },
		/* 56 */ { "x" : 621.80174276174, "y" : 473, "bCoef" : 0.1, "trait" : "line" },
		/* 57 */ { "x" : 644.74331148229, "y" : -460, "bCoef" : 0.1, "trait" : "line" },
		/* 58 */ { "x" : 644.74331148229, "y" : -473, "bCoef" : 0.1, "trait" : "line" },
		/* 59 */ { "x" : 634.35340467604, "y" : 4.2212921610516, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 60 */ { "x" : 634.35340467604, "y" : 1.7712285482462, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 61 */ { "x" : 634.35340467604, "y" : 6.6713557738571, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 62 */ { "x" : 634.35340467604, "y" : -0.67883506455928, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 63 */ { "x" : 634.35340467604, "y" : 0.54619674184346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 64 */ { "x" : 634.35340467604, "y" : 5.4463239674544, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 65 */ { "x" : 634.35340467604, "y" : -1.2913509677606, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 66 */ { "x" : 634.35340467604, "y" : 7.2838716770584, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 67 */ { "x" : 484.86942705432, "y" : 4.2212921610516, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 68 */ { "x" : 484.86942705432, "y" : 1.7712285482462, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 69 */ { "x" : 484.86942705432, "y" : 6.6713557738571, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 70 */ { "x" : 484.86942705432, "y" : -0.67883506455928, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 71 */ { "x" : 484.86942705432, "y" : 0.54619674184346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 72 */ { "x" : 484.86942705432, "y" : 5.4463239674544, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 73 */ { "x" : 484.86942705432, "y" : -1.2913509677606, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 74 */ { "x" : 484.86942705432, "y" : 7.2838716770584, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 75 */ { "x" : -975, "y" : -191.85660774843, "bCoef" : 0.1, "trait" : "line" },
		/* 76 */ { "x" : -956, "y" : -191.96236130943, "bCoef" : 0.1, "trait" : "line" },
		/* 77 */ { "x" : -975, "y" : 190.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 78 */ { "x" : -956, "y" : 190.91895440419, "bCoef" : 0.1, "trait" : "line" },
		/* 79 */ { "x" : -950, "y" : 432.90041943973, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 80 */ { "x" : -926.21802170761, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 81 */ { "x" : -950, "y" : -433.32499678239, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 82 */ { "x" : -925.43621788149, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 83 */ { "x" : 950, "y" : -433.36622514797, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 84 */ { "x" : 927.73220749769, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 85 */ { "x" : 950, "y" : 434.55334331787, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 86 */ { "x" : 925.51401132381, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 87 */ { "x" : 950, "y" : -319.66892509968, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 88 */ { "x" : -635.67083595539, "y" : 111.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 89 */ { "x" : -635.67083595539, "y" : -112.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		/* 90 */ { "x" : -950, "y" : -322.66892509968, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 91 */ { "x" : -635.82253673536, "y" : -2.314063297901, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 92 */ { "x" : -635.83851134042, "y" : 0.13595112921681, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 93 */ { "x" : -635.80656213031, "y" : -4.764077725019, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 94 */ { "x" : -635.85448594547, "y" : 2.5859655563347, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 95 */ { "x" : -635.84649864294, "y" : 1.3609583427757, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 96 */ { "x" : -635.81454943284, "y" : -3.53907051146, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 97 */ { "x" : -635.85847959673, "y" : 3.1984691631142, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 98 */ { "x" : -635.80256847905, "y" : -5.3765813317984, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : -486.3415600448, "y" : -1.3935524756233, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : -486.35753464985, "y" : 1.0564619514946, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 101 */ { "x" : -486.32558543975, "y" : -3.8435669027412, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 102 */ { "x" : -486.3735092549, "y" : 3.5064763786125, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 103 */ { "x" : -486.36552195238, "y" : 2.2814691650535, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 104 */ { "x" : -486.33357274227, "y" : -2.6185596891822, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 105 */ { "x" : -486.37750290617, "y" : 4.1189799853919, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 106 */ { "x" : -486.32159178848, "y" : -4.4560705095206, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 107 */ { "x" : -950, "y" : 321.62551819445, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 108 */ { "x" : 486.4717644406, "y" : -216.68073468914, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 109 */ { "x" : 486.26181026907, "y" : -213.90354363921, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 110 */ { "x" : 484.90815678836, "y" : 227.79125744183, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 111 */ { "x" : 484.69820261683, "y" : 230.56844849177, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 112 */ { "x" : -487.89251107699, "y" : -222.71985942166, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 113 */ { "x" : -488.10246524852, "y" : -219.94266837173, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 114 */ { "x" : -487.11070725087, "y" : 223.27169507557, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 115 */ { "x" : -487.3206614224, "y" : 226.04888612551, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 116 */ { "x" : -0.077614373673782, "y" : -2.4626457981722, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 117 */ { "x" : -0.10499941090626, "y" : 2.3835365851378, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 118 */ { "x" : -0.050229336441873, "y" : -7.3088281814824, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 119 */ { "x" : -0.13238444813857, "y" : 7.2297189684479, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 120 */ { "x" : -0.11869192952281, "y" : 4.8066277767929, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 121 */ { "x" : -0.063921855057799, "y" : -4.8857369898273, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 122 */ { "x" : -0.13923070744664, "y" : 8.4412645642754, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 123 */ { "x" : -0.043383077133171, "y" : -8.5203737773099, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 124 */ { "x" : 0.77952848346911, "y" : 1.5373542018278, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 125 */ { "x" : 2.7521434462366, "y" : 3.3835365851378, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 126 */ { "x" : 0.80691352070102, "y" : -3.3088281814824, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 127 */ { "x" : 1.7247584090043, "y" : 2.2297189684479, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 128 */ { "x" : 2.73845092762, "y" : 5.8066277767929, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 129 */ { "x" : 0.79322100208503, "y" : -0.88573698982727, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 130 */ { "x" : 1.7179121496962, "y" : 3.4412645642754, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 131 */ { "x" : 0.81375978000966, "y" : -4.5203737773099, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 132 */ { "x" : -950, "y" : -322.66892509968, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 133 */ { "x" : -950, "y" : 321.62551819445, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 134 */ { "x" : -635.67083595539, "y" : 111.16613046747, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90 },
		/* 135 */ { "x" : -950, "y" : 321.62551819445, "bCoef" : 0, "trait" : "line", "curve" : 90 },
		/* 136 */ { "x" : -635.67083595539, "y" : -112.20953737271, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 137 */ { "x" : -950, "y" : -322.66892509968, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : 0, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea", "x" : 951 },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea", "x" : 951 },
		
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 2, "v1" : 12, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : -95 },
		{ "v0" : 6, "v1" : 13, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : -95 },
		{ "v0" : 1, "v1" : 14, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : 95 },
		{ "v0" : 5, "v1" : 15, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "y" : 95 },
		{ "v0" : 12, "v1" : 14, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -821 },
		{ "v0" : 13, "v1" : 15, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 585 },
		
		{ "v0" : 1, "v1" : 0, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 5, "v1" : 4, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 2, "v1" : 3, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 6, "v1" : 7, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 0, "v1" : 16, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : 460 },
		{ "v0" : 3, "v1" : 17, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : -460 },
		
		{ "v0" : 18, "v1" : 19, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 10, "v1" : 9, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 21, "v1" : 20, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 2, "v1" : 1, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -950 },
		{ "v0" : 6, "v1" : 5, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 22, "v1" : 23, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 958 },
		{ "v0" : 24, "v1" : 25, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 28, "v1" : 29, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 958 },
		
		{ "v0" : 30, "v1" : 31, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "x" : 572 },
		{ "v0" : 32, "v1" : 33, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "x" : 0 },
		{ "v0" : 34, "v1" : 35, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 39, "v1" : 40, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 41, "v1" : 42, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 43, "v1" : 44, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 45, "v1" : 46, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 47, "v1" : 48, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 49, "v1" : 50, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.96814834 },
		{ "v0" : 51, "v1" : 52, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.96814834 },
		{ "v0" : 53, "v1" : 54, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 55, "v1" : 56, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 57, "v1" : 58, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 60, "v1" : 59, "curve" : 180.00000000015, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 59, "v1" : 60, "curve" : 180.00000000011, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 62, "v1" : 61, "curve" : 179.99999999999, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 61, "v1" : 62, "curve" : 180.00000000001, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 64, "v1" : 63, "curve" : 180.00000000006, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 63, "v1" : 64, "curve" : 180.00000000001, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 66, "v1" : 65, "curve" : 179.99999999999, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 65, "v1" : 66, "curve" : 179.99999999999, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 68, "v1" : 67, "curve" : 179.99999999994, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 67, "v1" : 68, "curve" : 180.00000000006, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 70, "v1" : 69, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 69, "v1" : 70, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 72, "v1" : 71, "curve" : 179.99999999998, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 71, "v1" : 72, "curve" : 179.99999999998, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 77, "v1" : 78, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.96814834 },
		{ "v0" : 80, "v1" : 79, "curve" : -91.636910923379, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 82, "v1" : 81, "curve" : 91.636910923384, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 84, "v1" : 83, "curve" : -91.636910923386, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 86, "v1" : 85, "curve" : 91.636910923367, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 38, "v1" : 87, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 92, "v1" : 91, "curve" : 180.04149903472, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 91, "v1" : 92, "curve" : 180.04149903448, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 94, "v1" : 93, "curve" : 180.04149903461, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 93, "v1" : 94, "curve" : 180.04149903457, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 96, "v1" : 95, "curve" : 180.0414990346, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 95, "v1" : 96, "curve" : 180.04149903458, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 98, "v1" : 97, "curve" : 180.04149903458, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 97, "v1" : 98, "curve" : 180.0414990346, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 100, "v1" : 99, "curve" : 180.04149903447, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180.04149903471, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180.0414990346, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 180.04149903457, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 104, "v1" : 103, "curve" : 180.04149903454, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 180.04149903457, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 106, "v1" : 105, "curve" : 180.04149903458, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 105, "v1" : 106, "curve" : 180.04149903459, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 108, "v1" : 109, "curve" : -196.43548932859, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 109, "v1" : 108, "curve" : -211.97212519444, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 110, "v1" : 111, "curve" : -196.43548932841, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 111, "v1" : 110, "curve" : -211.97212519486, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 112, "v1" : 113, "curve" : -196.43548932818, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 113, "v1" : 112, "curve" : -211.97212519503, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 114, "v1" : 115, "curve" : -196.4354893283, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 115, "v1" : 114, "curve" : -211.97212519445, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 117, "v1" : 116, "curve" : 179.83332296199, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 116, "v1" : 117, "curve" : 179.8333229623, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 119, "v1" : 118, "curve" : 179.83332296215, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 118, "v1" : 119, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 121, "v1" : 120, "curve" : 179.83332296204, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 120, "v1" : 121, "curve" : 179.83332296211, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 123, "v1" : 122, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 122, "v1" : 123, "curve" : 179.83332296208, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 125, "v1" : 124, "curve" : 179.83332296199, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 124, "v1" : 125, "curve" : 179.8333229623, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 127, "v1" : 126, "curve" : 179.83332296215, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 126, "v1" : 127, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 129, "v1" : 128, "curve" : 179.83332296204, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 128, "v1" : 129, "curve" : 179.83332296211, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 131, "v1" : 130, "curve" : 179.8333229621, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 130, "v1" : 131, "curve" : 179.83332296208, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 134, "v1" : 135, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 136, "v1" : 137, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" }

	],

	"goals" : [
		{ "p0" : [-957.4,-90 ], "p1" : [-957.4,90 ], "team" : "red" },
		{ "p0" : [957.4,90 ], "p1" : [957.4,-90 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [-950,90 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [-950,-90 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [950,90 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [950,-90 ], "color" : "6666CC", "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,-460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,-460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,460 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -456, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -456, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -508, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -508, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [1,0 ], "dist" : -1002, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -1002, "bCoef" : 0.2, "cMask" : ["all" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.4,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`

room.setCustomStadium(stadiumx3);

/* OPTIONS */

var drawTimeLimit = Infinity;
var maxAdmins = 1;
var disableBans = true;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, ADMIN: 1, MASTER: 2 };
const Notification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Uniform = { COUNTRY: 0, CLUBLA: 1, CLUBEU: 2 };
var gameState = State.STOP;
var players;
var teamR;
var teamB;
var teamS;
var Rposs = 0;
var Bposs = 0;

/* AUTH */

var playerAuth = [];
var authWhiteList = [];

/* COMMANDS */

var commands = {
	"ajuda": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": `
	Esse comando mostra todos os outros comandos, e pode também explicar a função de cada comando.
    Exemple: \'!help bb\' mostrará a função do comando \'bb\'.`,
		"function": helpCommand,
	},
	"claim": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": false,
		"function": adminCommand,
	},
	"bb": {
		"aliases": ["bye", "gn", "cya"],
		"roles": Role.PLAYER,
		"desc": `
	Esse comando te desconecta rapidamente.`,
		"function": leaveCommand,
	},
	"uniforme": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": `
	Esse comando mostra os uniformes disponíveis para colocar no seu time.
    Exemplo: \'!uniforme bahia\' coloca o uniforme do bahia em seu time.`,
		"function": uniformCommand,
	},
	"start": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": `
    Esse comando inicia o jogo.`,
		"function": choiceCommand,
	},
	"rr": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": `
	Admin command.
    Esse comando reinicia o jogo.`,
		"function": restartCommand,
	}
}

/* UNIFORMS */
var uniforms = {
    
/* SELEÇÕES */
	"ale": {
	"name": 'Alemanha',
    "type": Uniform.COUNTRY,
    "angle": 90,
    "textcolor": 0x000000,
    "color1": 0xFFFFFF,
    "color2": 0xFFFFFF,
    "color3": 0xFFFFFF,
	},
	"ale2": {
		"name": 'Alemanha',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0xEC1E31,
		"color1": 0x232522,
		"color2": 0x232522,
		"color3": 0x232522,
	},
	"arg": {
	"name": 'Argentina',
    "type": Uniform.COUNTRY,
    "angle": 90,
    "textcolor": 0x1F374B,
    "color1": 0x75AADB,
    "color2": 0xFFFFFF,
    "color3": 0x75AADB,
	},
	"arg2": {
		"name": 'Argentina',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0x9F8334,
		"color1": 0x103A73,
		"color2": 0x103A73,
		"color3": 0x103A73,
	},
	"bra": {
	"name": 'Brasil',
    "type": Uniform.COUNTRY,
    "angle": 360,
    "textcolor": 0x27965A,
    "color1": 0xDBB71B,
    "color2": 0xDBB71B,
    "color3": 0xDBB71B,
	},
	"bra2": {
		"name": 'Brasil',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0xDBB71B,
		"color1": 0x1C56B4,
		"color2": 0x1C56B4,
		"color3": 0x1C56B4,
	},
	"esp": {
	"name": 'Espanha',
    "type": Uniform.COUNTRY,
    "angle": 90,
    "textcolor": 0xFFFF00,
    "color1": 0xFF0000,
    "color2": 0xFF0000,
    "color3": 0xFF0000,
	},
	"esp2": {
		"name": 'Espanha',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0xE4524A,
		"color1": 0xEFEFEF,
		"color2": 0xEFEFEF,
		"color3": 0xEFEFEF,
	},
	"por": {
	"name": 'Portugal',
    "type": Uniform.COUNTRY,
    "angle": 0,
    "textcolor": 0x289E1F,
    "color1": 0xFF0000,
    "color2": 0xFF0000,
    "color3": 0xFF0000,
	},
	"por2": {
		"name": 'Portugal',
		"type": Uniform.COUNTRY,
		"angle": 90,
		"textcolor": 0x0F303D,
		"color1": 0x48776F,
		"color2": 0x73CFB6,
		"color3": 0x73CFB6,
	},
	"ita": {
		"name": 'Italia',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x3646A9,
		"color2": 0x3646A9,
		"color3": 0x3646A9,
	},
	"ita2": {
		"name": 'Italia',
		"type": Uniform.COUNTRY,
		"angle": 90,
		"textcolor": 0xDFC396,
		"color1": 0x12282E,
		"color2": 0x17433B,
		"color3": 0x17433B,
	},
	"uru": {
		"name": 'Uruguai',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0x212124,
		"color1": 0x66A5D4,
		"color2": 0x66A5D4,
		"color3": 0x66A5D4,
	},
	"uru2": {
		"name": 'Uruguai',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0x6CA0CF,
		"color1": 0xE5E5E7,
		"color2": 0xE5E5E7,
		"color3": 0xE5E5E7,
	},
	"fra": {
		"name": 'França',
		"type": Uniform.COUNTRY,
		"angle": 90,
		"textcolor": 0xF5F9F6,
		"color1": 0x265ECF,
		"color2": 0x384355,
		"color3": 0x384355,
	},
	"fra2": {
		"name": 'França',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0x3243B4,
		"color1": 0xF5F9F6,
		"color2": 0xF5F9F6,
		"color3": 0xF5F9F6,
	},
	"ing": {
		"name": 'Inglaterra',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0x0549A0,
		"color1": 0xDEDFE4,
		"color2": 0xDEDFE4,
		"color3": 0xDEDFE4,
	},
	"ing2": {
		"name": 'Inglaterra',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0xE92715,
		"color2": 0x2858AB,
		"color1": 0x2858AB,
		"color3": 0x2858AB,
	},
	"bel": {
		"name": 'Bélgica',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0xCA9144,
		"color1": 0xC4212A,
		"color2": 0xC4212A,
		"color3": 0xC4212A,
	},
	"bel2": {
		"name": 'Bélgica',
		"type": Uniform.COUNTRY,
		"angle": 0,
		"textcolor": 0x37312B,
		"color1": 0xEFC02E,
		"color2": 0xEFC02E,
		"color3": 0xEFC02E,
	},

/* CLUBES LA */
    "bah": {
		"name": 'Bahia',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFED63F,
        "color1": 0xD10125,
        "color2": 0xE3DFE4,
        "color3": 0x1C3E94,
    },
	"bah2": {
		"name": 'Bahia',
        "type": Uniform.CLUBLA,
        "angle": 270,
        "textcolor": 0xD10125,
        "color1": 0xE3DFE4,
        "color2": 0xE3DFE4,
        "color3": 0x1C3E94,
    },
    "vit": {
		"name": 'Vitória',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFFFFFF,
        "color1": 0xFF1D0D,
        "color2": 0x000000,
        "color3": 0x000000,
    },
	"vit2": {
		"name": 'Vitória',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0x000000,
        "color1": 0xFF1D0D,
        "color2": 0xFFFFFF,
        "color3": 0xFFFFFF,
    },
    "pal": {
		"name": 'Palmeiras',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xE3E7EB,
        "color1": 0x224A40,
        "color2": 0x224A40,
        "color3": 0x224A40,
    },
	"pal2": {
		"name": 'Palmeiras',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x004738,
        "color1": 0xF4F6FA,
        "color2": 0xF4F6FA,
        "color3": 0xF4F6FA,
    },
    "cor": {
		"name": 'Corinthians',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x000000,
        "color1": 0xFFFFFF,
        "color2": 0xFFFFFF,
        "color3": 0xFFFFFF,
    },
	"cor2": {
		"name": 'Corinthians',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0x000000,
        "color2": 0x000000,
        "color3": 0x000000,
    },
    "san": {
		"name": 'Santos',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xB69754,
        "color1": 0xFFFFFF,
        "color2": 0xFFFFFF,
        "color3": 0xFFFFFF,
    },
	"san2": {
		"name": 'Santos',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xB69754,
        "color1": 0x000000,
        "color2": 0xFFFFFF,
        "color3": 0x000000,
    },
    "sao": {
		"name": 'São Paulo',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0x000000,
        "color1": 0xFF0A0A,
        "color2": 0xFFFFFF,
        "color3": 0x000000,
    },
	"sao2": {
		"name": 'São Paulo',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFFFFFF,
        "color1": 0xCE393B,
        "color2": 0xCE393B,
        "color3": 0xCE393B,
    },
    "fla": {
		"name": 'Flamengo',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFCF1ED,
        "color1": 0xBA1719,
        "color2": 0x1A1613,
        "color3": 0xBA1719,
    },
	"fla2": {
		"name": 'Flamengo',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xBA1719,
        "color1": 0x1A1613,
        "color2": 0x1A1613,
        "color3": 0x1A1613,
    },
    "flu": {
		"name": 'Fluminense',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFCFAFF,
        "color1": 0x005C38,
        "color2": 0x9B030C,
        "color3": 0x005C38,
    },
	"flu2": {
		"name": 'Fluminense',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x920F2E,
        "color1": 0xE4DADB,
        "color2": 0xE4DADB,
        "color3": 0xE4DADB,
    },
    "vas": {
		"name": 'Vasco',
        "type": Uniform.CLUBLA,
        "angle": 135,
        "textcolor": 0xFF0000,
        "color1": 0xFFFFFF,
        "color2": 0x000000,
        "color3": 0xFFFFFF,
    },
	"vas2": {
		"name": 'Vasco',
        "type": Uniform.CLUBLA,
        "angle": 135,
        "textcolor": 0xFF0000,
        "color1": 0x000000,
        "color2": 0xFFFFFF,
        "color3": 0x000000,
    },
    "bot": {
		"name": 'Botafogo',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0xFFFFFF,
        "color2": 0x000000,
        "color3": 0xFFFFFF,
    },
	"bot2": {
		"name": 'Botafogo',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0x000000,
        "color2": 0x3C3A3F,
        "color3": 0x000000,
    },
    "gre": {
		"name": 'Gremio',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0x75ACFF,
        "color2": 0x000000,
        "color3": 0x75ACFF,
    },
	"gre2": {
		"name": 'Gremio',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x4A87B7,
        "color1": 0xFFFFFF,
        "color2": 0xFFFFFF,
        "color3": 0xFFFFFF,
    },
    "int": {
		"name": 'Internacional',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xEBE5E0,
        "color1": 0xD3051F,
        "color2": 0xD3051F,
        "color3": 0xD3051F,
    },
	"int2": {
		"name": 'Internacional',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xE30222,
        "color1": 0xEBE5E0,
        "color2": 0xEBE5E0,
        "color3": 0xEBE5E0,
    },
	"cru": {
		"name": 'Cruzeiro',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0x023286,
        "color2": 0x023286,
        "color3": 0x023286,
    },
	"cru2": {
		"name": 'Cruzeiro',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x101B51,
        "color1": 0xFFFFFF,
        "color2": 0xFFFFFF,
        "color3": 0xFFFFFF,
    },
	"atl": {
		"name": 'Atlético-MG',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xC91926,
        "color1": 0x000000,
        "color2": 0xFFFFFF,
        "color3": 0x000000,
    },
	"atl2": {
		"name": 'Atlético-MG',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xC91926,
        "color1": 0x000000,
        "color2": 0xFFFFFF,
        "color3": 0xFFFFFF,
    },
	"spo": {
		"name": 'Sport',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xBCAE46,
        "color1": 0xBE2B2D,
        "color2": 0x020906,
        "color3": 0xBE2B2D,
    },
	"spo2": {
		"name": 'Sport',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xB6A043,
        "color1": 0x111317,
        "color2": 0xE5E0E2,
        "color3": 0xE5E0E2,
    },
    "riv": {
		"name": 'River Plate',
        "type": Uniform.CLUBLA,
        "angle": 45,
        "textcolor": 0x000000,
        "color1": 0xFFFAFA,
        "color2": 0xFF0000,
        "color3": 0xFFFAFA,
    },
	"riv2": {
		"name": 'River Plate',
        "type": Uniform.CLUBLA,
        "angle": 45,
        "textcolor": 0xFFFFFF,
        "color1": 0xAF1D27,
        "color2": 0xEA382C,
        "color3": 0xAF1D27,
    },
    "boc": {
		"name": 'Boca Juniors',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFFFFFF,
        "color1": 0x05009C,
        "color2": 0xE0B60D,
        "color3": 0x05009C,
    },
	"boc2": {
		"name": 'Boca Juniors',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFFFFFF,
        "color1": 0xE0B60D,
        "color2": 0x05009C,
        "color3": 0xE0B60D,
    },
/* CLUBES EU */
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
    },
}


/* GAME */

var lastPlayersTouched;
var lastTeamTouched;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed;
var goldenGoal = false;
var activePlay = false;
var playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

/* COLORS */

var welcomeColor = 0xC4FF65;
var announcementColor = 0xFFEFD6;
var redColor = 0xFF4C4C;
var blueColor = 0x62CBFF;
var statsColor = 0xBEBEBE;
var teamnamered = 'Red';
var teamnameblue = 'Blue';
var defaultColor = null;

/* AUXILIARY */

var checkTimeVariable = false;
var checkDrawWarning = false;
var checkStadiumVariables = true;
var unpauseTimeout;

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number between 0 and max-1
	return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // gives the time of the game formatted like in haxball but within brackets
	return `[${Math.floor(Math.floor(scores.time / 60) / 10)}${Math.floor(Math.floor(scores.time / 60) % 10)}:${Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10)}${Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10)}]`;
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
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

/* STADIUM FUNCTIONS */

function calculateStadiumVariables() {
	if (checkStadiumVariables && teamR.length + teamB.length !== 0) {
		checkStadiumVariables = false;
		setTimeout(() => {
			let ballDisc = room.getDiscProperties(0);
			let playerDisc = room.getPlayerDiscProperties(teamR.concat(teamB)[0].id);
			ballRadius = ballDisc.radius
			playerRadius = playerDisc.radius;
			speedCoefficient = 100 / (5 * ballDisc.invMass * (ballDisc.damping ** 60 + 1)); // To be improved
		}, 1);
	}
}

/* PLAYER FUNCTIONS */



/* COMMAND FUNCTIONS */

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
	room.kickPlayer(player.id, "Tchau !", false);
}

function helpCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (msgArray.length === 0) {
		var commandString = "[PV] Commands :";
		for (const [key, value] of Object.entries(commands)) {
			if (value.desc && value.roles === Role.PLAYER) commandString += ` !${key},`;
		}
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (player.admin) {
			commandString += `\n        Admin commands :`;
			for (const [key, value] of Object.entries(commands)) {
				if (value.desc && value.roles === Role.ADMIN) commandString += ` !${key},`;
			}
		}
		
		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		commandString += "\n\nTo get information on a specific command, type '\'!help <command name>\'.";
		room.sendAnnouncement(commandString, player.id, statsColor, "bold", Notification.CHAT);
	}
	else if (msgArray.length >= 1) {
		var commandName = getCommand(msgArray[0].toLowerCase());
		if (commandName !== false && commands[commandName].desc !== false) room.sendAnnouncement(`[PV] \'${commandName}\' Comando :\n${commands[commandName].desc}`, player.id, statsColor, "bold", Notification.CHAT);
		else room.sendAnnouncement(`[PV] The command you tried to get information on does not exist. To check all available commands, type \'!help\'`, player.id, statsColor, "bold", Notification.CHAT);
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
		room.sendAnnouncement(uniformString, player.id, statsColor, "bold", Notification.CHAT);
        uniformString2 = `[PV] Clubes Sul-americanos :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBLA) uniformString2 += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString2 += `\n`
		room.sendAnnouncement(uniformString2, player.id, statsColor, "bold", Notification.CHAT);
        uniformString3 = `[PV] Clubes Europeus :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBEU) uniformString3 += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString3 += `\n`
		room.sendAnnouncement(uniformString3, player.id, statsColor, "bold", Notification.CHAT);
		room.sendAnnouncement("Para escolher um uniforme para seu time digite '\'!uniforme <nome do time>\'.", player.id, statsColor, "bold", Notification.CHAT);
	}
	else if (msgArray.length >= 1) {
		var uniformName = getUniform(msgArray[0].toLowerCase());
		if (uniformName !== false && uniforms[uniformName].name !== false) {
            room.setTeamColors(player.team, uniforms[uniformName].angle, uniforms[uniformName].textcolor,[uniforms[uniformName].color1, uniforms[uniformName].color2, uniforms[uniformName].color3]);
            room.sendAnnouncement(`[PV] O uniforme do \'${uniforms[uniformName].name}\' foi colocado em seu time.`, player.id, statsColor, "bold", Notification.CHAT);
			if (player.team == 1) {
				redColor = uniforms[uniformName].color1;
				teamnamered = uniforms[uniformName].name;
			} else if (player.team == 2) {
				blueColor = uniforms[uniformName].color1;
				teamnameblue = uniforms[uniformName].name;
			}
        } else {
		room.sendAnnouncement(`[PV] Esse uniforme não existe, digite \'!uniforme\' para ver todos os disponíveis`, player.id, statsColor, "bold", Notification.CHAT);
		}
	}
}

function adminCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (parseInt(msgArray[0]) === adminPassword) {
		room.setPlayerAdmin(player.id, true);
		authWhiteList.push(playerAuth[player.id]);
		room.sendAnnouncement(`${player.name} agora é o mestre da sala !`, null, announcementColor, "bold", Notification.CHAT);
	}
}

function choiceCommand(player, message) {
	if (player.admin) {
		room.stopGame();
		var players = room.getPlayerList();
		if (players.length > 1) {
			room.setCustomStadium(stadiumx3);
			room.setPlayerTeam(players[0].id, 1);
			room.setPlayerTeam(players[1].id, 2);
			if (players.length > 3) {
				room.setPlayerTeam(players[2].id, 1);
				room.setPlayerTeam(players[3].id, 2);
				if (players.length > 5) {
					room.setPlayerTeam(players[4].id, 1);
					room.setPlayerTeam(players[5].id, 2);
					if (players.length > 7) {
						room.setPlayerTeam(players[6].id, 1);
						room.setPlayerTeam(players[7].id, 2);
						room.setCustomStadium(stadiumx4);
						if (players.length > 9) {
							room.setPlayerTeam(players[8].id, 1);
							room.setPlayerTeam(players[9].id, 2);
							room.setCustomStadium(stadiumx5);
						}
					}
				}
			}
			room.startGame();
			room.sendAnnouncement(`Partida Iniciando`, null, null, "bold", Notification.CHAT);
		} else {
			room.sendAnnouncement(`Número de jogadores insuficiente`, null, null, "bold", Notification.CHAT);
		}
	}
	
}

/* ADMIN COMMANDS */

function restartCommand(player, message) {
	if (player.admin) instantRestart();
}

/* MASTER COMMANDS */

/* GAME FUNCTIONS */

function checkTime() {
	const scores = room.getScores();
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit !== 0 && activePlay) {
		if (scores.red !== scores.blue) {
			if (checkTimeVariable === false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 3000);
				scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
				setTimeout(() => { room.stopGame(); }, 2000);
			}
			return;
		}
		goldenGoal = true;
		room.sendAnnouncement("⚽ Gol de ouro !", null, announcementColor, "bold", Notification.CHAT);
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable === false) {
			checkTimeVariable = true;
			checkDrawWarning = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			if (activePlay) room.sendAnnouncement("⌛ 60 segundos restantes !", null, announcementColor, "bold", Notification.CHAT);
		}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2 && checkDrawWarning) {
		if (checkTimeVariable === false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			endGame(Team.SPECTATORS);
			room.stopGame();
			goldenGoal = false;
		}
	}
}

function instantRestart() {
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 10);
}

function endGame(winner) { // no stopGame function in it
	const scores = room.getScores();
	Rposs = Rposs/(Rposs+Bposs);
	Bposs = 1 - Rposs;
	if (winner === Team.RED) {
		room.sendAnnouncement(`${teamnamered} Venceu ! ${scores.red} - ${scores.blue} !`, null, redColor, "bold", Notification.CHAT);
		room.sendAnnouncement(`⭐ Possession : ${teamnamered} `  + (Rposs*100).toPrecision(3).toString() + `% : ` + (Bposs*100).toPrecision(3).toString() + `% ${teamnameblue}`, null, announcementColor, "bold", Notification.CHAT);
	}
	else if (winner === Team.BLUE) {
		room.sendAnnouncement(`${teamnameblue} Venceu ! ${scores.blue} - ${scores.red} !`, null, blueColor, "bold", Notification.CHAT);
		room.sendAnnouncement(`⭐ Possession : ${teamnamered} `  + (Rposs*100).toPrecision(3).toString() + `% : ` + (Bposs*100).toPrecision(3).toString() + `% ${teamnameblue}`, null, announcementColor, "bold", Notification.CHAT);
	}
	else {
		room.sendAnnouncement("💤 Empate !", null, announcementColor, "bold", Notification.CHAT);
		room.sendAnnouncement(`⭐ Possession : ${teamnamered} `  + (Rposs*100).toPrecision(3).toString() + `% : ` + (Bposs*100).toPrecision(3).toString() + `% ${teamnameblue}`, null, announcementColor, "bold", Notification.CHAT);
	}
}

/* PLAYER FUNCTIONS */

function updateTeams() {
	players = room.getPlayerList();
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
	if (players.length !== 0 && players.filter((p) => p.admin).length < maxAdmins) {
		let playerArray = players.filter((p) => p.id !== excludedPlayerID && p.admin === false);
		let arrayID = playerArray.map((player) => player.id);
		room.setPlayerAdmin(Math.min(...arrayID), true);
	}
}


/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	let playerArray = [];
	for (var i = 0; i < players.length; i++) {
		if (players[i].position !== null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				if (!activePlay) activePlay = true;
				playerArray.push([players[i], distanceToBall]);
			}
		}
	}
	if (playerArray.length !== 0) {
		let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
		if (lastTeamTouched === playerTouch.team || lastTeamTouched === Team.SPECTATORS) {
			if (lastPlayersTouched[0] === null || (lastPlayersTouched[0] !== null && lastPlayersTouched[0].id !== playerTouch.id)) {
				lastPlayersTouched[1] = lastPlayersTouched[0];
				lastPlayersTouched[0] = playerTouch;
			}
			lastTeamTouched = playerTouch.team // A single touch is not enough to "deny" a goal
		}
	}
}

function getStats() { // gives the speed of the ball
	const ballPosition = room.getBallPosition();
	point[1] = point[0];
	point[0] = ballPosition;
	ballSpeed = pointDistance(point[0], point[1]) * speedCoefficient;
	lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
	room.sendAnnouncement(`[PV] 👋 Bem-vindo ${player.name} ! para ver os comando do servidor digite !ajuda`, player.id, welcomeColor, "bold", Notification.CHAT);
	updateTeams();
	updateAdmins();
	playerAuth[player.id] = player.auth;
	if (authWhiteList.findIndex(auth => auth === player.auth) !== -1) {
		room.sendAnnouncement(`Mestre ${player.name} se conectou !`, null, announcementColor, "bold", Notification.CHAT);
		room.setPlayerAdmin(player.id, true);
	}
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
	updateTeams();
}

room.onPlayerLeave = function (player) {
	updateTeams();
	updateAdmins();
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
	if (ban && (byPlayer.id === kickedPlayer.id) || disableBans) room.clearBan(kickedPlayer.id);
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
	let msgArray = message.split(/ +/);
	if (msgArray[0][0] === '!') {
		let command = getCommand(msgArray[0].slice(1).toLowerCase());
		if (command !== false) commands[command].function(player, message);
		return false;
	}
}

room.onPlayerActivity = function (player) {
}

room.onPlayerBallKick = function (player) {
	if (lastPlayersTouched[0] === null || player.id !== lastPlayersTouched[0].id) {
		if (!activePlay) activePlay = true;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
}

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
	gameState = State.PLAY;
	goldenGoal = false;
	activePlay = false;
	lastPlayersTouched = [null, null];
	checkDrawWarning = false;
	calculateStadiumVariables();
	Rposs = 0;
	Bposs = 0;
}

room.onGameStop = function (byPlayer) {
	clearTimeout(unpauseTimeout);
	gameState = State.STOP;
}

room.onGamePause = function (byPlayer) {
	clearTimeout(unpauseTimeout);
	gameState = State.PAUSE;
}

room.onGameUnpause = function (byPlayer) {
	unpauseTimeout = setTimeout(() => { gameState = State.PLAY; }, 1000);
}

room.onTeamGoal = function (team) {
	const scores = room.getScores();
	activePlay = false;
	if (lastPlayersTouched[0] !== null) {
		if (lastPlayersTouched[0].team === team) {
			if (lastPlayersTouched[1] !== null && lastPlayersTouched[1].team === team) {
				room.sendAnnouncement(`⚽ ${getTime(scores)} GOOOOOOOOOOL de ${lastPlayersTouched[0].name} ! É do ${(team === Team.RED ? teamnamered : teamnameblue)}, Com assistência de ${lastPlayersTouched[1].name}. Velocidade do Chute : ${ballSpeed.toFixed(2)}km/h.`, null, (team === Team.RED ? redColor : blueColor),"bold", Notification.CHAT);
			}
			else {
				room.sendAnnouncement(`⚽ ${getTime(scores)} GOOOOOOOOOOL de ${lastPlayersTouched[0].name} ! É do ${(team === Team.RED ? teamnamered : teamnameblue)}, Velocidade do Chute : ${ballSpeed.toFixed(2)}km/h.`, null, (team === Team.RED ? redColor : blueColor), "bold", Notification.CHAT);
			}
		}
		else {
			room.sendAnnouncement(`😂 ${getTime(scores)} GOOOOL Contra de ${lastPlayersTouched[0].name} ! É do ${(team === Team.RED ? teamnamered : teamnameblue)}, Velocidade do Chute : ${ballSpeed.toFixed(2)}km/h.`, null, (team === Team.RED ? redColor : blueColor), "bold", Notification.CHAT);
		}
	}
	if (scores.scoreLimit !== 0 && (scores.red === scores.scoreLimit || scores.blue === scores.scoreLimit || goldenGoal === true)) {
		endGame(team);
		goldenGoal = false;
		setTimeout(() => { room.stopGame(); }, 1000);
	}
}

room.onPositionsReset = function () {
	lastPlayersTouched = [null, null];
	lastTeamTouched = Team.SPECTATORS;
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
	console.log(`${url}\nadminPassword : ${adminPassword}`);
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	updateTeams();
	if (changedPlayer.admin === false && getRole(changedPlayer) === Role.MASTER) room.setPlayerAdmin(changedPlayer.id, true);
	updateAdmins(changedPlayer.admin === false && changedPlayer.id === byPlayer.id ? changedPlayer.id : 0);
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
	checkStadiumVariables = true;
}

room.onGameTick = function () {
	checkTime();
	getStats();
	getLastTouchOfTheBall();
}