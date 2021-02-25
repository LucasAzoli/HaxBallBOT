var room = HBInit({
	roomName: "Futsal FAZo7",
	maxPlayers: 10,
	noPlayer: true,
	public: true,
	password: "777",
	geo: {"code": 'br', "lat": -12.9704, "lon": -38.5124}
});

const scoreLimit = 7;
const timeLimit = 7;

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

/* AUTH */

var playerAuth = [];
var authWhiteList = [];

/* COMMANDS */

var commands = {
	"help": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": `
	Esse comando mostra todos os outros comandos, e pode também explicar a função de cada comando.
    Exemple: \'!help bb\' mostrará a função do comando \'bb\'.`,
		"function": helpCommand,
	},
	"claim": {
		"aliases": [],
		"roles": Role.PLAYER,
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
		"roles": Role.PLAYER,
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
	"alemanha": {
    "aliases": [],
	"name": 'Alemanha',
    "type": Uniform.COUNTRY,
    "angle": 90,
    "textcolor": 0x000000,
    "color1": 0xFFFFFF,
    "color2": 0xFFFFFF,
    "color3": 0xFFFFFF,
	},
	"argentina": {
    "aliases": [],
	"name": 'Argentina',
    "type": Uniform.COUNTRY,
    "angle": 90,
    "textcolor": 0xFCBF49,
    "color1": 0x75AADB,
    "color2": 0xFFFFFF,
    "color3": 0x75AADB,
	},
	"brasil": {
    "aliases": [],
	"name": 'Brasil',
    "type": Uniform.COUNTRY,
    "angle": 360,
    "textcolor": 0x008B00,
    "color1": 0xEEC900,
    "color2": 0xEEC900,
    "color3": 0xEEC900,
	},
	"espanha": {
    "aliases": [],
	"name": 'Espanha',
    "type": Uniform.COUNTRY,
    "angle": 90,
    "textcolor": 0x000000,
    "color1": 0xFF0000,
    "color2": 0xFFFF00,
    "color3": 0xFF0000,
	},
	"holanda": {
    "aliases": [],
	"name": 'Holanda',
    "type": Uniform.COUNTRY,
    "angle": 0,
    "textcolor": 0x000000,
    "color1": 0xFF7F00,
    "color2": 0xFF7F00,
    "color3": 0xFF7F00,
	},
	"portugal": {
    "aliases": [],
	"name": 'Portugal',
    "type": Uniform.COUNTRY,
    "angle": 0,
    "textcolor": 0x289E1F,
    "color1": 0xFF0000,
    "color2": 0xFF0000,
    "color3": 0xFF0000,
	},

/* CLUBES LA */
    "bahia": {
        "aliases": [],
		"name": 'Bahia',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x000000,
        "color1": 0x12B0FF,
        "color2": 0xFFFFFF,
        "color3": 0xFF1C33,
    },
    "vitoria": {
        "aliases": [],
		"name": 'Vitória',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFFFFFF,
        "color1": 0xFF1D0D,
        "color2": 0x000000,
        "color3": 0x000000,
    },
    "palmeiras": {
        "aliases": [],
		"name": 'Palmeiras',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0x006000,
        "color2": 0x005000,
        "color3": 0x006000,
    },
    "corinthians": {
        "aliases": [],
		"name": 'Corinthians',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x000000,
        "color1": 0xFFFFFF,
        "color2": 0xFFFFFF,
        "color3": 0xFFFFFF,
    },
    "santos": {
        "aliases": [],
		"name": 'Santos',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFD700,
        "color1": 0xFFFFFF,
        "color2": 0x000000,
        "color3": 0xFFFFFF,
    },
    "saopaulo": {
        "aliases": [],
		"name": 'São Paulo',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0x000000,
        "color1": 0xFF0A0A,
        "color2": 0xFFFFFF,
        "color3": 0x000000,
    },
    "flamengo": {
        "aliases": [],
		"name": 'Flamengo',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFFFAFA,
        "color1": 0xFF0000,
        "color2": 0x000000,
        "color3": 0xFF0000,
    },
    "fluminense": {
        "aliases": [],
		"name": 'Fluminense',
        "type": Uniform.CLUBLA,
        "angle": 20,
        "textcolor": 0xB8860B,
        "color1": 0x215E21,
        "color2": 0xFFFAFA,
        "color3": 0xA62A2A,
    },
    "vasco": {
        "aliases": [],
		"name": 'Vasco',
        "type": Uniform.CLUBLA,
        "angle": 135,
        "textcolor": 0xFF0000,
        "color1": 0xFFFFFF,
        "color2": 0x000000,
        "color3": 0xFFFFFF,
    },
    "botafogo": {
        "aliases": [],
		"name": 'Botafogo',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0x000000,
        "color2": 0x000000,
        "color3": 0x000000,
    },
    "gremio": {
        "aliases": [],
		"name": 'Gremio',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFFFFFF,
        "color1": 0x75ACFF,
        "color2": 0x000000,
        "color3": 0x75ACFF,
    },
    "internacional": {
        "aliases": [],
		"name": 'Internacional',
        "type": Uniform.CLUBLA,
        "angle": 0,
        "textcolor": 0xFAFAFA,
        "color1": 0xC90000,
        "color2": 0xC90000,
        "color3": 0xC90000,
    },
    "river": {
        "aliases": [],
		"name": 'River Plate',
        "type": Uniform.CLUBLA,
        "angle": 45,
        "textcolor": 0x000000,
        "color1": 0xFFFAFA,
        "color2": 0xFF0000,
        "color3": 0xFFFAFA,
    },
    "boca": {
        "aliases": [],
		"name": 'Boca Juniors',
        "type": Uniform.CLUBLA,
        "angle": 90,
        "textcolor": 0xFFFFFF,
        "color1": 0x05009C,
        "color2": 0xE0B60D,
        "color3": 0x05009C,
    },
/* CLUBES EU */
    "chelsea": {
        "aliases": [],
		"name": 'Chelsea',
        "type": Uniform.CLUBEU,
        "angle": 90,
        "textcolor": 0xFFFFFF,
        "color1": 0x0000CD,
        "color2": 0x0000CD,
        "color3": 0x0000CD,
    },
    "real": {
        "aliases": [],
		"name": 'Real Madrid',
        "type": Uniform.CLUBEU,
        "angle": 0,
        "textcolor": 0xDAA520,
        "color1": 0xFFFAFA,
        "color2": 0xFFFAFA,
        "color3": 0xFFFAFA,
    },
    "juventus": {
        "aliases": [],
		"name": 'Juventus',
        "type": Uniform.CLUBEU,
        "angle": 180,
        "textcolor": 0xDAA520,
        "color1": 0x000000,
        "color2": 0xFFFFFF,
        "color3": 0x000000,
    },
    "bayern": {
        "aliases": [],
		"name": 'Bayern de Munique',
        "type": Uniform.CLUBEU,
        "angle": 30,
        "textcolor": 0xFFD700,
        "color1": 0xFF0000,
        "color2": 0xF20000,
        "color3": 0xFF0000,
    },
    "barcelona": {
        "aliases": [],
		"name": 'Barcelona',
        "type": Uniform.CLUBEU,
        "angle": 90,
        "textcolor": 0xFFD700,
        "color1": 0x00008B,
        "color2": 0x8B0000,
        "color3": 0x00008B,
    },
    "psg": {
        "aliases": [],
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
	for (const [key, value] of Object.entries(uniformStr)) {
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

function getRole(player) {
	return (authWhiteList.findIndex(auth => auth === playerAuth[player.id]) !== -1) * 1 + player.admin * 1;
}

/* COMMAND FUNCTIONS */

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
	room.kickPlayer(player.id, "Tchau !", false);
}

function helpCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (msgArray.length === 0) {
		var commandString = "[PV] Player commands :";
		for (const [key, value] of Object.entries(commands)) {
			if (value.desc && value.roles === Role.PLAYER) commandString += ` !${key},`;
		}
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (getRole(player) >= Role.ADMIN) {
			commandString += `\n        Admin commands :`;
			for (const [key, value] of Object.entries(commands)) {
				if (value.desc && value.roles === Role.ADMIN) commandString += ` !${key},`;
			}
		}
		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (getRole(player) >= Role.MASTER) {
			commandString += `\n        Master commands :`;
			for (const [key, value] of Object.entries(commands)) {
				if (value.desc && value.roles === Role.MASTER) commandString += ` !${key},`;
			}
		}
		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		commandString += "\n\n To get information on a specific command, type '\'!help <command name>\'.";
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
			if (value.type === Uniform.COUNTRY) uniformString += ` !${key},`;
		}
        uniformString += `\n\nClubes Sul-americanos :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBLA) uniformString += ` !${key},`;
		}
        uniformString += `\n\nClubes Europeus :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBEU) uniformString += ` !${key},`;
		}
	    if (uniformString.slice(uniformString.length - 1) === ":") uniformString += ` None,`;
		uniformString = uniformString.substring(0, uniformString.length - 1) + ".";
		uniformString += "\n\nPara escolher um uniforme para seu time digite '\'!uniforme <nome do time>\'.";
		room.sendAnnouncement(uniformString, player.id, statsColor, "bold", Notification.CHAT);
	}
	else if (msgArray.length >= 1) {
		var uniformName = getUniform(msgArray[0].toLowerCase());
		if (uniformName !== false) {
            room.setTeamColors(player.team, uniforms[uniformName].angle, uniforms[uniformName].textcolor,[uniforms[uniformName].color1, uniforms[uniformName].color2, uniforms[uniformName].color3]);
            room.sendAnnouncement(`[PV] O uniforme do \'${uniforms[uniformName].name}\' foi colocado em seu time.`, player.id, statsColor, "bold", Notification.CHAT);
			if (player.team == 1) {
				redColor = uniforms[uniformName].color1;
				teamnamered = uniforms[uniformName].name;
			} else if (player.team == 2) {
				blueColor = uniforms[uniformName].color1;
				teamnameblue = uniforms[uniformName].name;
			}
        } 
		else room.sendAnnouncement(`[PV] Esse uniforme não existe, digite \'!uniforme\' para ver todos os disponíveis`, player.id, statsColor, "bold", Notification.CHAT);
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

function choiceCommand() {
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
	if (winner === Team.RED) {
		room.sendAnnouncement(`${teamnamered} Venceu ! ${scores.red} - ${scores.blue} !`, null, redColor, "bold", Notification.CHAT);
	}
	else if (winner === Team.BLUE) {
		room.sendAnnouncement(`${teamnameblue} Venceu ! ${scores.blue} - ${scores.red} !`, null, blueColor, "bold", Notification.CHAT);
	}
	else {
		room.sendAnnouncement("💤 Empate !", null, announcementColor, "bold", Notification.CHAT);
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
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
	room.sendAnnouncement(`[PV] 👋 Bem-vindo ${player.name} !`, player.id, welcomeColor, "bold", Notification.CHAT);
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
		if (command !== false && commands[command].roles <= getRole(player)) commands[command].function(player, message);
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