const roomName = "Futsal FAZo7";
const maxPlayers = 10;
const roomPublic = true;
const token = "thr1.AAAAAGAyg3xOHgKOpKjNaw.6XnL5uEsmhk"; // Insert token here

if (typeof token === "string" && token.length === 39) var room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, token: token, public: roomPublic, noPlayer: true });
else var room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, noPlayer: true });

const scoreLimit = 7;
const timeLimit = 7;

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);

var adminPassword = 1000 + getRandomInt(9000);

var stadiumFazo7 = `{

	"name" : "Futsal FAZo7",

	"width" : 755,

	"height" : 339,

	"spawnDistance" : 310,

	"bg" : { "type" : "hockey", "width" : 665, "height" : 290, "kickOffRadius" : 80, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -665, "y" : 290, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "vis" : true },
		/* 1 */ { "x" : -665, "y" : 80, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 2 */ { "x" : -665, "y" : -80, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 3 */ { "x" : -665, "y" : -290, "trait" : "ballArea", "bCoef" : 1, "cMask" : ["ball" ] },
		/* 4 */ { "x" : 665, "y" : 290, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 5 */ { "x" : 665, "y" : 80, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 6 */ { "x" : 665, "y" : -80, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 7 */ { "x" : 665, "y" : -290, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 8 */ { "x" : 0, "y" : 306, "trait" : "kickOffBarrier" },
		/* 9 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier" },
		
		/* 10 */ { "x" : 0, "y" : -80, "trait" : "line" },
		
		/* 11 */ { "x" : 0, "y" : -306, "trait" : "kickOffBarrier" },
		
		/* 12 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -693, "y" : -80 },
		/* 13 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 693, "y" : -80 },
		/* 14 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -693, "y" : 80 },
		/* 15 */ { "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 693, "y" : 80 },
		
		/* 16 */ { "trait" : "line", "x" : -665, "y" : -215 },
		/* 17 */ { "trait" : "line", "x" : -500, "y" : -50 },
		/* 18 */ { "trait" : "line", "x" : 665, "y" : -215 },
		/* 19 */ { "trait" : "line", "x" : 500, "y" : -50 },
		/* 20 */ { "trait" : "line", "x" : -665, "y" : 215 },
		/* 21 */ { "trait" : "line", "x" : -500, "y" : 50 },
		/* 22 */ { "trait" : "line", "x" : 665, "y" : 215 },
		/* 23 */ { "trait" : "line", "x" : 500, "y" : 50 },
		
		/* 24 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 665, "y" : 290, "vis" : true },
		/* 25 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 665, "y" : -290 },
		
		/* 26 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 290 },
		/* 27 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -290 },
		
		/* 28 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier" },
		/* 29 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier" },
		
		/* 30 */ { "x" : 674, "y" : -80, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 31 */ { "x" : 674, "y" : -290, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 32 */ { "x" : -674, "y" : -80, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 33 */ { "x" : -674, "y" : -290, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 34 */ { "x" : -674, "y" : 80, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 35 */ { "x" : -674, "y" : 290, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 36 */ { "x" : 674, "y" : 80, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 37 */ { "x" : 674, "y" : 290, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 38 */ { "x" : -226.5, "y" : 178.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 39 */ { "x" : -226.5, "y" : 260.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 40 */ { "x" : -175.5, "y" : 179.50390625, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		/* 41 */ { "x" : -225.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 42 */ { "x" : -192.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 43 */ { "x" : -163.5, "y" : 254.50390625, "bCoef" : 0, "trait" : "line" },
		/* 44 */ { "x" : -133.5, "y" : 178.50390625, "trait" : "line" },
		/* 45 */ { "x" : -100.5, "y" : 254.50390625, "trait" : "line" },
		/* 46 */ { "x" : -149.5, "y" : 218.50390625, "trait" : "line" },
		/* 47 */ { "x" : -117.5, "y" : 218.50390625, "trait" : "line" },
		/* 48 */ { "x" : -89.5, "y" : 178.50390625, "trait" : "line" },
		/* 49 */ { "x" : -32.5, "y" : 178.50390625, "trait" : "line" },
		/* 50 */ { "x" : -88.5, "y" : 251.50390625, "trait" : "line" },
		/* 51 */ { "x" : -37.5, "y" : 250.50390625, "trait" : "line" },
		/* 52 */ { "x" : 72.5, "y" : 174.50390625, "trait" : "line" },
		/* 53 */ { "x" : 72.5, "y" : 255.50390625, "trait" : "line" },
		/* 54 */ { "x" : 130.5, "y" : 157.50390625, "trait" : "line" },
		/* 55 */ { "x" : 215.5, "y" : 158.50390625, "trait" : "line" },
		/* 56 */ { "x" : 158.5, "y" : 256.50390625, "trait" : "line" },
		/* 57 */ { "x" : -232.5, "y" : 177.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 58 */ { "x" : -232.5, "y" : 259.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 59 */ { "x" : -181.5, "y" : 178.50390625, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		/* 60 */ { "x" : -231.5, "y" : 207.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 61 */ { "x" : -198.5, "y" : 207.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 62 */ { "x" : -169.5, "y" : 253.50390625, "bCoef" : 0, "trait" : "line" },
		/* 63 */ { "x" : -139.5, "y" : 177.50390625, "trait" : "line" },
		/* 64 */ { "x" : -106.5, "y" : 253.50390625, "trait" : "line" },
		/* 65 */ { "x" : -155.5, "y" : 217.50390625, "trait" : "line" },
		/* 66 */ { "x" : -123.5, "y" : 217.50390625, "trait" : "line" },
		/* 67 */ { "x" : -95.5, "y" : 177.50390625, "trait" : "line" },
		/* 68 */ { "x" : -38.5, "y" : 177.50390625, "trait" : "line" },
		/* 69 */ { "x" : -94.5, "y" : 250.50390625, "trait" : "line" },
		/* 70 */ { "x" : -43.5, "y" : 249.50390625, "trait" : "line" },
		/* 71 */ { "x" : 66.5, "y" : 173.50390625, "trait" : "line" },
		/* 72 */ { "x" : 66.5, "y" : 254.50390625, "trait" : "line" },
		/* 73 */ { "x" : 128.5, "y" : 162.50390625, "trait" : "line" },
		/* 74 */ { "x" : 203.5, "y" : 160.50390625, "trait" : "line" },
		/* 75 */ { "x" : 152.5, "y" : 255.50390625, "trait" : "line" },
		/* 76 */ { "x" : -229.5, "y" : 178.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 77 */ { "x" : -229.5, "y" : 260.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 78 */ { "x" : -178.5, "y" : 179.50390625, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		/* 79 */ { "x" : -228.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 80 */ { "x" : -195.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 81 */ { "x" : -166.5, "y" : 254.50390625, "bCoef" : 0, "trait" : "line" },
		/* 82 */ { "x" : -136.5, "y" : 178.50390625, "trait" : "line" },
		/* 83 */ { "x" : -103.5, "y" : 254.50390625, "trait" : "line" },
		/* 84 */ { "x" : -152.5, "y" : 218.50390625, "trait" : "line" },
		/* 85 */ { "x" : -120.5, "y" : 218.50390625, "trait" : "line" },
		/* 86 */ { "x" : -92.5, "y" : 178.50390625, "trait" : "line" },
		/* 87 */ { "x" : -35.5, "y" : 178.50390625, "trait" : "line" },
		/* 88 */ { "x" : -91.5, "y" : 251.50390625, "trait" : "line" },
		/* 89 */ { "x" : -40.5, "y" : 250.50390625, "trait" : "line" },
		/* 90 */ { "x" : 69.5, "y" : 174.50390625, "trait" : "line" },
		/* 91 */ { "x" : 69.5, "y" : 255.50390625, "trait" : "line" },
		/* 92 */ { "x" : 127.5, "y" : 157.50390625, "trait" : "line" },
		/* 93 */ { "x" : 212.5, "y" : 158.50390625, "trait" : "line" },
		/* 94 */ { "x" : 155.5, "y" : 256.50390625, "trait" : "line" },
		/* 95 */ { "x" : -222.5, "y" : 177.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 96 */ { "x" : -222.5, "y" : 259.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 97 */ { "x" : -171.5, "y" : 178.50390625, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		/* 98 */ { "x" : -221.5, "y" : 207.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 99 */ { "x" : -188.5, "y" : 207.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 100 */ { "x" : -159.5, "y" : 253.50390625, "bCoef" : 0, "trait" : "line" },
		/* 101 */ { "x" : -129.5, "y" : 177.50390625, "trait" : "line" },
		/* 102 */ { "x" : -96.5, "y" : 253.50390625, "trait" : "line" },
		/* 103 */ { "x" : -145.5, "y" : 217.50390625, "trait" : "line" },
		/* 104 */ { "x" : -113.5, "y" : 217.50390625, "trait" : "line" },
		/* 105 */ { "x" : -85.5, "y" : 177.50390625, "trait" : "line" },
		/* 106 */ { "x" : -28.5, "y" : 177.50390625, "trait" : "line" },
		/* 107 */ { "x" : -84.5, "y" : 250.50390625, "trait" : "line" },
		/* 108 */ { "x" : -33.5, "y" : 249.50390625, "trait" : "line" },
		/* 109 */ { "x" : 76.5, "y" : 173.50390625, "trait" : "line" },
		/* 110 */ { "x" : 76.5, "y" : 254.50390625, "trait" : "line" },
		/* 111 */ { "x" : 134.5, "y" : 156.50390625, "trait" : "line" },
		/* 112 */ { "x" : 219.5, "y" : 157.50390625, "trait" : "line" },
		/* 113 */ { "x" : 162.5, "y" : 255.50390625, "trait" : "line" },
		/* 114 */ { "x" : -226.5, "y" : 178.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 115 */ { "x" : -226.5, "y" : 260.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 116 */ { "x" : -175.5, "y" : 179.50390625, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		/* 117 */ { "x" : -225.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 118 */ { "x" : -192.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 119 */ { "x" : -163.5, "y" : 254.50390625, "bCoef" : 0, "trait" : "line" },
		/* 120 */ { "x" : -133.5, "y" : 178.50390625, "trait" : "line" },
		/* 121 */ { "x" : -100.5, "y" : 254.50390625, "trait" : "line" },
		/* 122 */ { "x" : -149.5, "y" : 218.50390625, "trait" : "line" },
		/* 123 */ { "x" : -117.5, "y" : 218.50390625, "trait" : "line" },
		/* 124 */ { "x" : -89.5, "y" : 178.50390625, "trait" : "line" },
		/* 125 */ { "x" : -32.5, "y" : 178.50390625, "trait" : "line" },
		/* 126 */ { "x" : -88.5, "y" : 251.50390625, "trait" : "line" },
		/* 127 */ { "x" : -37.5, "y" : 250.50390625, "trait" : "line" },
		/* 128 */ { "x" : 72.5, "y" : 174.50390625, "trait" : "line" },
		/* 129 */ { "x" : 72.5, "y" : 255.50390625, "trait" : "line" },
		/* 130 */ { "x" : 124.5, "y" : 160.50390625, "trait" : "line" },
		/* 131 */ { "x" : 204.5, "y" : 162.50390625, "trait" : "line" },
		/* 132 */ { "x" : 158.5, "y" : 256.50390625, "trait" : "line" },
		/* 133 */ { "x" : -225.5, "y" : 178.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 134 */ { "x" : -225.5, "y" : 260.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 135 */ { "x" : -174.5, "y" : 179.50390625, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		/* 136 */ { "x" : -224.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 137 */ { "x" : -191.5, "y" : 208.50390625, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		/* 138 */ { "x" : -162.5, "y" : 254.50390625, "bCoef" : 0, "trait" : "line" },
		/* 139 */ { "x" : -132.5, "y" : 178.50390625, "trait" : "line" },
		/* 140 */ { "x" : -99.5, "y" : 254.50390625, "trait" : "line" },
		/* 141 */ { "x" : -148.5, "y" : 218.50390625, "trait" : "line" },
		/* 142 */ { "x" : -116.5, "y" : 218.50390625, "trait" : "line" },
		/* 143 */ { "x" : -88.5, "y" : 178.50390625, "trait" : "line" },
		/* 144 */ { "x" : -31.5, "y" : 178.50390625, "trait" : "line" },
		/* 145 */ { "x" : -87.5, "y" : 251.50390625, "trait" : "line" },
		/* 146 */ { "x" : -36.5, "y" : 250.50390625, "trait" : "line" },
		/* 147 */ { "x" : 73.5, "y" : 174.50390625, "trait" : "line" },
		/* 148 */ { "x" : 73.5, "y" : 255.50390625, "trait" : "line" },
		/* 149 */ { "x" : 127.5, "y" : 162.50390625, "trait" : "line" },
		/* 150 */ { "x" : 207.5, "y" : 160.50390625, "trait" : "line" },
		/* 151 */ { "x" : 159.5, "y" : 256.50390625, "trait" : "line" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
		
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO" ] },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO" ] },
		{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" },
		
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 2, "v1" : 12, "color" : "FFFFFF", "curve" : -35 },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 6, "v1" : 13, "color" : "FFFFFF", "curve" : 35 },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 1, "v1" : 14, "color" : "FFFFFF", "curve" : 35 },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 5, "v1" : 15, "color" : "FFFFFF", "curve" : -35 },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 12, "v1" : 14, "x" : -585, "color" : "FFFFFF", "curve" : -35 },
		{ "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "v0" : 13, "v1" : 15, "x" : 585, "color" : "FFFFFF", "curve" : 35 },
		
		{ "color" : "FFFFFF", "trait" : "line", "v0" : 16, "v1" : 17, "curve" : 90 },
		{ "color" : "FFFFFF", "trait" : "line", "v0" : 18, "v1" : 19, "curve" : -90 },
		{ "color" : "FFFFFF", "trait" : "line", "v0" : 20, "v1" : 21, "curve" : -90 },
		{ "color" : "FFFFFF", "trait" : "line", "v0" : 22, "v1" : 23, "curve" : 90 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 17, "v1" : 21, "curve" : 0 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 19, "v1" : 23, "curve" : 0 },
		
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 1, "v1" : 0, "cMask" : ["ball" ], "x" : -665 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 5, "v1" : 4, "cMask" : ["ball" ], "x" : 665 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 2, "v1" : 3, "cMask" : ["ball" ], "x" : -665 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 6, "v1" : 7, "cMask" : ["ball" ], "x" : 665 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 0, "v1" : 24, "y" : 290, "curve" : 0.17356282096702902 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 3, "v1" : 25, "y" : -290 },
		
		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 26, "v1" : 27 },
		{ "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 10, "v1" : 9 },
		{ "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 29, "v1" : 28 },
		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 2, "v1" : 1 },
		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 6, "v1" : 5 },
		
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 30, "v1" : 31, "cMask" : ["ball" ], "x" : 614 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 32, "v1" : 33, "cMask" : ["ball" ], "x" : -614 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 34, "v1" : 35, "cMask" : ["ball" ], "x" : -614 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 36, "v1" : 37, "cMask" : ["ball" ], "x" : 614 },
		
		{ "v0" : 38, "v1" : 39, "color" : "878787", "vis" : true, "bCoef" : 0, "curve" : -4.194400374080901, "trait" : "line" },
		{ "v0" : 38, "v1" : 40, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 41, "v1" : 42, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		{ "v0" : 43, "v1" : 44, "color" : "878787", "trait" : "line" },
		{ "v0" : 44, "v1" : 45, "color" : "878787", "trait" : "line" },
		{ "v0" : 46, "v1" : 47, "color" : "878787", "trait" : "line" },
		{ "v0" : 48, "v1" : 49, "color" : "878787", "trait" : "line" },
		{ "v0" : 49, "v1" : 50, "color" : "878787", "curve" : -13.393327141438867, "trait" : "line" },
		{ "v0" : 50, "v1" : 51, "color" : "878787", "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "color" : "878787", "curve" : 175.6853590335522, "trait" : "line" },
		{ "v0" : 53, "v1" : 52, "color" : "878787", "curve" : 173.08778437935445, "trait" : "line" },
		{ "v0" : 54, "v1" : 55, "color" : "878787", "trait" : "line" },
		{ "v0" : 55, "v1" : 56, "color" : "878787", "curve" : -52.6919720075935, "trait" : "line" },
		{ "v0" : 57, "v1" : 58, "color" : "878787", "vis" : true, "bCoef" : 0, "curve" : -4.194400374080901, "trait" : "line" },
		{ "v0" : 57, "v1" : 59, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 60, "v1" : 61, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		{ "v0" : 62, "v1" : 63, "color" : "878787", "trait" : "line" },
		{ "v0" : 63, "v1" : 64, "color" : "878787", "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "color" : "878787", "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "color" : "878787", "trait" : "line" },
		{ "v0" : 68, "v1" : 69, "color" : "878787", "curve" : -13.393327141438867, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "color" : "878787", "trait" : "line" },
		{ "v0" : 71, "v1" : 72, "color" : "878787", "curve" : 188.60677702568674, "trait" : "line" },
		{ "v0" : 72, "v1" : 71, "color" : "878787", "curve" : 173.08778437935445, "trait" : "line" },
		{ "v0" : 73, "v1" : 74, "color" : "878787", "trait" : "line" },
		{ "v0" : 74, "v1" : 75, "color" : "878787", "curve" : -52.6919720075935, "trait" : "line" },
		{ "v0" : 76, "v1" : 77, "color" : "878787", "vis" : true, "bCoef" : 0, "curve" : -4.194400374080901, "trait" : "line" },
		{ "v0" : 76, "v1" : 78, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 79, "v1" : 80, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		{ "v0" : 81, "v1" : 82, "color" : "878787", "trait" : "line" },
		{ "v0" : 82, "v1" : 83, "color" : "878787", "trait" : "line" },
		{ "v0" : 84, "v1" : 85, "color" : "878787", "trait" : "line" },
		{ "v0" : 86, "v1" : 87, "color" : "878787", "trait" : "line" },
		{ "v0" : 87, "v1" : 88, "color" : "878787", "curve" : -6.231549251182232, "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "color" : "878787", "trait" : "line" },
		{ "v0" : 90, "v1" : 91, "color" : "878787", "curve" : 198.2357255075916, "trait" : "line" },
		{ "v0" : 91, "v1" : 90, "color" : "878787", "curve" : 173.08778437935445, "trait" : "line" },
		{ "v0" : 92, "v1" : 93, "color" : "878787", "trait" : "line" },
		{ "v0" : 93, "v1" : 94, "color" : "878787", "curve" : -52.6919720075935, "trait" : "line" },
		{ "v0" : 95, "v1" : 96, "color" : "878787", "vis" : true, "bCoef" : 0, "curve" : -4.194400374080901, "trait" : "line" },
		{ "v0" : 95, "v1" : 97, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 98, "v1" : 99, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		{ "v0" : 100, "v1" : 101, "color" : "878787", "trait" : "line" },
		{ "v0" : 101, "v1" : 102, "color" : "878787", "trait" : "line" },
		{ "v0" : 103, "v1" : 104, "color" : "878787", "trait" : "line", "curve" : 0 },
		{ "v0" : 105, "v1" : 106, "color" : "878787", "trait" : "line" },
		{ "v0" : 106, "v1" : 107, "color" : "878787", "curve" : -13.393327141438867, "trait" : "line" },
		{ "v0" : 107, "v1" : 108, "color" : "878787", "trait" : "line" },
		{ "v0" : 109, "v1" : 110, "color" : "878787", "curve" : 167.7079439738569, "trait" : "line" },
		{ "v0" : 110, "v1" : 109, "color" : "878787", "curve" : 173.08778437935445, "trait" : "line" },
		{ "v0" : 111, "v1" : 112, "color" : "878787", "trait" : "line" },
		{ "v0" : 112, "v1" : 113, "color" : "878787", "curve" : -52.6919720075935, "trait" : "line" },
		{ "v0" : 114, "v1" : 115, "color" : "878787", "vis" : true, "bCoef" : 0, "curve" : -4.194400374080901, "trait" : "line" },
		{ "v0" : 114, "v1" : 116, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 117, "v1" : 118, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		{ "v0" : 119, "v1" : 120, "color" : "878787", "trait" : "line" },
		{ "v0" : 120, "v1" : 121, "color" : "878787", "trait" : "line" },
		{ "v0" : 122, "v1" : 123, "color" : "878787", "trait" : "line" },
		{ "v0" : 124, "v1" : 125, "color" : "878787", "trait" : "line" },
		{ "v0" : 125, "v1" : 126, "color" : "878787", "curve" : -13.393327141438867, "trait" : "line" },
		{ "v0" : 126, "v1" : 127, "color" : "878787", "trait" : "line" },
		{ "v0" : 128, "v1" : 129, "color" : "878787", "curve" : 155.955446627633, "trait" : "line" },
		{ "v0" : 129, "v1" : 128, "color" : "878787", "curve" : 173.08778437935445, "trait" : "line" },
		{ "v0" : 130, "v1" : 131, "color" : "878787", "trait" : "line" },
		{ "v0" : 131, "v1" : 132, "color" : "878787", "curve" : -52.6919720075935, "trait" : "line" },
		{ "v0" : 133, "v1" : 134, "color" : "878787", "vis" : true, "bCoef" : 0, "curve" : -4.194400374080901, "trait" : "line" },
		{ "v0" : 133, "v1" : 135, "color" : "878787", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 136, "v1" : 137, "color" : "878787", "vis" : true, "bCoef" : 0, "trait" : "line" },
		{ "v0" : 138, "v1" : 139, "color" : "878787", "trait" : "line" },
		{ "v0" : 139, "v1" : 140, "color" : "878787", "trait" : "line" },
		{ "v0" : 141, "v1" : 142, "color" : "878787", "trait" : "line" },
		{ "v0" : 143, "v1" : 144, "color" : "878787", "trait" : "line" },
		{ "v0" : 144, "v1" : 145, "color" : "878787", "curve" : -13.393327141438867, "trait" : "line" },
		{ "v0" : 145, "v1" : 146, "color" : "878787", "trait" : "line", "curve" : -2.2915256763502168 },
		{ "v0" : 147, "v1" : 148, "color" : "878787", "curve" : 163.67150474016225, "trait" : "line" },
		{ "v0" : 148, "v1" : 147, "color" : "878787", "curve" : 173.08778437935445, "trait" : "line" },
		{ "v0" : 149, "v1" : 150, "color" : "878787", "trait" : "line" },
		{ "v0" : 150, "v1" : 151, "color" : "878787", "curve" : -56.906693243060936, "trait" : "line" }

	],

	"goals" : [
		{ "p0" : [-674,-80 ], "p1" : [-674,80 ], "team" : "red" },
		{ "p0" : [674,80 ], "p1" : [674,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "pos" : [-665,80 ], "trait" : "goalPost", "color" : "FFFFFF", "radius" : 5 },
		{ "pos" : [-665,-80 ], "trait" : "goalPost", "color" : "FFFFFF", "radius" : 5 },
		{ "pos" : [665,80 ], "trait" : "goalPost", "color" : "FFFFFF", "radius" : 5 },
		{ "pos" : [665,-80 ], "trait" : "goalPost", "color" : "FFFFFF", "radius" : 5 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -290, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -290, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -339, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -339, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [1,0 ], "dist" : -755, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -755, "bCoef" : 0.2, "cMask" : ["all" ] }

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
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.1,
		"kickStrength" : 7

	},

	"ballPhysics" : {
		"radius" : 6.4,
		"color" : "EAFF00"

	}
}`

room.setCustomStadium(stadiumFazo7);

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
	This command shows all the available commands. It also can show the description of a command in particular.
    Exemple: \'!help bb\' will show the description of the \'bb\' command.`,
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