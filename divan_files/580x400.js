(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.choco = function() {
	this.initialize(img.choco);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.pack = function() {
	this.initialize(img.pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.plash = function() {
	this.initialize(img.plash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,400);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.txt2();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,580,400);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,580,400);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.button();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,580,400);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.txt();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,580,400);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.pack();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,580,400);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.choco();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,580,400);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.logo();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,580,400);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._580x400 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Blind
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(290.25,200.85,1.9338,0.6681,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},39).to({startPosition:0},400).to({alpha:1},40).wait(1));

	// Logo
	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(263.6,301.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:140,regY:-100,x:403.55,y:201.1},0).wait(1).to({x:403.45},0).wait(1).to({x:403.35},0).wait(1).to({x:403.15},0).wait(1).to({x:402.9},0).wait(1).to({x:402.6},0).wait(1).to({x:402.2},0).wait(1).to({x:401.75},0).wait(1).to({x:401.25},0).wait(1).to({x:400.6},0).wait(1).to({x:399.9},0).wait(1).to({x:399.1},0).wait(1).to({x:398.2},0).wait(1).to({x:397.2},0).wait(1).to({x:396.05},0).wait(1).to({x:394.8},0).wait(1).to({x:393.4},0).wait(1).to({x:391.85},0).wait(1).to({x:390.15},0).wait(1).to({x:388.25},0).wait(1).to({x:386.2},0).wait(1).to({x:383.95},0).wait(1).to({x:381.5},0).wait(1).to({x:378.85},0).wait(1).to({x:375.95},0).wait(1).to({x:372.85},0).wait(1).to({x:369.55},0).wait(1).to({x:366},0).wait(1).to({x:362.35},0).wait(1).to({x:358.55},0).wait(1).to({x:354.65},0).wait(1).to({x:350.7},0).wait(1).to({x:346.8},0).wait(1).to({x:342.9},0).wait(1).to({x:339.2},0).wait(1).to({x:335.55},0).wait(1).to({x:332.1},0).wait(1).to({x:328.85},0).wait(1).to({x:325.8},0).wait(1).to({x:322.9},0).wait(1).to({x:320.2},0).wait(1).to({x:317.65},0).wait(1).to({x:315.3},0).wait(1).to({x:313.1},0).wait(1).to({x:311.1},0).wait(1).to({x:309.2},0).wait(1).to({x:307.45},0).wait(1).to({x:305.8},0).wait(1).to({x:304.3},0).wait(1).to({x:302.9},0).wait(1).to({x:301.6},0).wait(1).to({x:300.35},0).wait(1).to({x:299.25},0).wait(1).to({x:298.25},0).wait(1).to({x:297.3},0).wait(1).to({x:296.4},0).wait(1).to({x:295.6},0).wait(1).to({x:294.9},0).wait(1).to({x:294.2},0).wait(1).to({x:293.6},0).wait(1).to({x:293.05},0).wait(1).to({x:292.55},0).wait(1).to({x:292.1},0).wait(1).to({x:291.7},0).wait(1).to({x:291.35},0).wait(1).to({x:291.05},0).wait(1).to({x:290.8},0).wait(1).to({x:290.55},0).wait(1).to({x:290.4},0).wait(1).to({x:290.25},0).wait(1).to({x:290.1},0).wait(1).to({x:290.05},0).wait(1).to({x:290},0).wait(1).to({regX:0,regY:0,x:150,y:301.1},0).wait(406));

	// Choco
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(71,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:140,regY:-100,x:211,y:200},0).wait(1).to({x:211.05},0).wait(1).to({x:211.15},0).wait(1).to({x:211.25},0).wait(1).to({x:211.45},0).wait(1).to({x:211.65},0).wait(1).to({x:211.9},0).wait(1).to({x:212.2},0).wait(1).to({x:212.55},0).wait(1).to({x:213},0).wait(1).to({x:213.45},0).wait(1).to({x:214},0).wait(1).to({x:214.6},0).wait(1).to({x:215.3},0).wait(1).to({x:216.05},0).wait(1).to({x:216.9},0).wait(1).to({x:217.85},0).wait(1).to({x:218.85},0).wait(1).to({x:220},0).wait(1).to({x:221.25},0).wait(1).to({x:222.65},0).wait(1).to({x:224.15},0).wait(1).to({x:225.8},0).wait(1).to({x:227.55},0).wait(1).to({x:229.5},0).wait(1).to({x:231.6},0).wait(1).to({x:233.8},0).wait(1).to({x:236.15},0).wait(1).to({x:238.65},0).wait(1).to({x:241.25},0).wait(1).to({x:243.9},0).wait(1).to({x:246.6},0).wait(1).to({x:249.3},0).wait(1).to({x:251.95},0).wait(1).to({x:254.55},0).wait(1).to({x:257.1},0).wait(1).to({x:259.5},0).wait(1).to({x:261.8},0).wait(1).to({x:264},0).wait(1).to({x:266.05},0).wait(1).to({x:267.95},0).wait(1).to({x:269.75},0).wait(1).to({x:271.45},0).wait(1).to({x:273},0).wait(1).to({x:274.45},0).wait(1).to({x:275.8},0).wait(1).to({x:277.1},0).wait(1).to({x:278.25},0).wait(1).to({x:279.35},0).wait(1).to({x:280.35},0).wait(1).to({x:281.3},0).wait(1).to({x:282.15},0).wait(1).to({x:283},0).wait(1).to({x:283.7},0).wait(1).to({x:284.4},0).wait(1).to({x:285.05},0).wait(1).to({x:285.65},0).wait(1).to({x:286.15},0).wait(1).to({x:286.65},0).wait(1).to({x:287.1},0).wait(1).to({x:287.55},0).wait(1).to({x:287.9},0).wait(1).to({x:288.25},0).wait(1).to({x:288.55},0).wait(1).to({x:288.8},0).wait(1).to({x:289.05},0).wait(1).to({x:289.25},0).wait(1).to({x:289.45},0).wait(1).to({x:289.6},0).wait(1).to({x:289.7},0).wait(1).to({x:289.8},0).wait(1).to({x:289.9},0).wait(1).to({x:289.95},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:150,y:300},0).wait(391));

	// Pack
	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.setTransform(235.6,293.75,0.6837,0.6837);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:140,regY:-100,x:331.25,y:225.4,alpha:0.0001},0).wait(1).to({scaleX:0.6839,scaleY:0.6839,y:225.35,alpha:0.0006},0).wait(1).to({scaleX:0.6841,scaleY:0.6841,x:331.2,alpha:0.0014},0).wait(1).to({scaleX:0.6845,scaleY:0.6845,x:331.15,y:225.3,alpha:0.0025},0).wait(1).to({scaleX:0.6849,scaleY:0.6849,y:225.25,alpha:0.004},0).wait(1).to({scaleX:0.6855,scaleY:0.6855,x:331,y:225.2,alpha:0.0058},0).wait(1).to({scaleX:0.6862,scaleY:0.6862,x:330.95,alpha:0.0081},0).wait(1).to({scaleX:0.6871,scaleY:0.6871,x:330.85,y:225.1,alpha:0.0107},0).wait(1).to({scaleX:0.688,scaleY:0.688,x:330.7,y:225,alpha:0.0138},0).wait(1).to({scaleX:0.6892,scaleY:0.6892,x:330.6,y:224.95,alpha:0.0174},0).wait(1).to({scaleX:0.6904,scaleY:0.6904,x:330.4,y:224.8,alpha:0.0214},0).wait(1).to({scaleX:0.6919,scaleY:0.6919,x:330.2,y:224.7,alpha:0.026},0).wait(1).to({scaleX:0.6935,scaleY:0.6935,x:330,y:224.55,alpha:0.0311},0).wait(1).to({scaleX:0.6953,scaleY:0.6953,x:329.8,y:224.4,alpha:0.0367},0).wait(1).to({scaleX:0.6973,scaleY:0.6973,x:329.5,y:224.25,alpha:0.043},0).wait(1).to({scaleX:0.6995,scaleY:0.6995,x:329.2,y:224.1,alpha:0.0499},0).wait(1).to({scaleX:0.7019,scaleY:0.7019,x:328.9,y:223.9,alpha:0.0576},0).wait(1).to({scaleX:0.7045,scaleY:0.7045,x:328.6,y:223.7,alpha:0.0659},0).wait(1).to({scaleX:0.7074,scaleY:0.7074,x:328.2,y:223.45,alpha:0.075},0).wait(1).to({scaleX:0.7105,scaleY:0.7105,x:327.8,y:223.2,alpha:0.0849},0).wait(1).to({scaleX:0.714,scaleY:0.714,x:327.35,y:222.9,alpha:0.0958},0).wait(1).to({scaleX:0.7177,scaleY:0.7177,x:326.8,y:222.65,alpha:0.1075},0).wait(1).to({scaleX:0.7217,scaleY:0.7217,x:326.35,y:222.35,alpha:0.1202},0).wait(1).to({scaleX:0.7261,scaleY:0.7261,x:325.75,y:221.95,alpha:0.134},0).wait(1).to({scaleX:0.7308,scaleY:0.7308,x:325.15,y:221.55,alpha:0.1489},0).wait(1).to({scaleX:0.7358,scaleY:0.7358,x:324.45,y:221.15,alpha:0.165},0).wait(1).to({scaleX:0.7413,scaleY:0.7413,x:323.8,y:220.7,alpha:0.1822},0).wait(1).to({scaleX:0.7472,scaleY:0.7472,x:323,y:220.3,alpha:0.2008},0).wait(1).to({scaleX:0.7534,scaleY:0.7534,x:322.2,y:219.75,alpha:0.2206},0).wait(1).to({scaleX:0.7601,scaleY:0.7601,x:321.3,y:219.25,alpha:0.2418},0).wait(1).to({scaleX:0.7673,scaleY:0.7673,x:320.35,y:218.7,alpha:0.2642},0).wait(1).to({scaleX:0.7748,scaleY:0.7748,x:319.35,y:218.05,alpha:0.288},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,x:318.4,y:217.45,alpha:0.313},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:317.3,y:216.75,alpha:0.3392},0).wait(1).to({scaleX:0.7995,scaleY:0.7995,x:316.15,y:216.05,alpha:0.3663},0).wait(1).to({scaleX:0.8084,scaleY:0.8084,x:315,y:215.35,alpha:0.3942},0).wait(1).to({scaleX:0.8174,scaleY:0.8174,x:313.85,y:214.6,alpha:0.4227},0).wait(1).to({scaleX:0.8265,scaleY:0.8265,x:312.65,y:213.9,alpha:0.4514},0).wait(1).to({scaleX:0.8356,scaleY:0.8356,x:311.45,y:213.2,alpha:0.4802},0).wait(1).to({scaleX:0.8446,scaleY:0.8446,x:310.25,y:212.45,alpha:0.5088},0).wait(1).to({scaleX:0.8535,scaleY:0.8535,x:309.1,y:211.75,alpha:0.5369},0).wait(1).to({scaleX:0.8622,scaleY:0.8622,x:307.95,y:211.05,alpha:0.5643},0).wait(1).to({scaleX:0.8706,scaleY:0.8706,x:306.9,y:210.35,alpha:0.5909},0).wait(1).to({scaleX:0.8787,scaleY:0.8787,x:305.8,y:209.75,alpha:0.6166},0).wait(1).to({scaleX:0.8865,scaleY:0.8865,x:304.8,y:209.1,alpha:0.6411},0).wait(1).to({scaleX:0.8939,scaleY:0.8939,x:303.85,y:208.5,alpha:0.6645},0).wait(1).to({scaleX:0.9009,scaleY:0.9009,x:302.95,y:207.9,alpha:0.6868},0).wait(1).to({scaleX:0.9076,scaleY:0.9076,x:302,y:207.4,alpha:0.708},0).wait(1).to({scaleX:0.914,scaleY:0.914,x:301.2,y:206.9,alpha:0.728},0).wait(1).to({scaleX:0.9199,scaleY:0.9199,x:300.45,y:206.4,alpha:0.7469},0).wait(1).to({scaleX:0.9256,scaleY:0.9256,x:299.7,y:205.95,alpha:0.7648},0).wait(1).to({scaleX:0.9309,scaleY:0.9309,x:299,y:205.5,alpha:0.7816},0).wait(1).to({scaleX:0.9359,scaleY:0.9359,x:298.35,y:205.1,alpha:0.7975},0).wait(1).to({scaleX:0.9407,scaleY:0.9407,x:297.75,y:204.75,alpha:0.8124},0).wait(1).to({scaleX:0.9451,scaleY:0.9451,x:297.15,y:204.4,alpha:0.8265},0).wait(1).to({scaleX:0.9493,scaleY:0.9493,x:296.6,y:204,alpha:0.8397},0).wait(1).to({scaleX:0.9532,scaleY:0.9532,x:296.1,y:203.75,alpha:0.8521},0).wait(1).to({scaleX:0.9569,scaleY:0.9569,x:295.6,y:203.4,alpha:0.8638},0).wait(1).to({scaleX:0.9604,scaleY:0.9604,x:295.15,y:203.15,alpha:0.8748},0).wait(1).to({scaleX:0.9636,scaleY:0.9636,x:294.7,y:202.9,alpha:0.8851},0).wait(1).to({scaleX:0.9667,scaleY:0.9667,x:294.35,y:202.65,alpha:0.8947},0).wait(1).to({scaleX:0.9696,scaleY:0.9696,x:293.95,y:202.4,alpha:0.9038},0).wait(1).to({scaleX:0.9723,scaleY:0.9723,x:293.6,y:202.2,alpha:0.9123},0).wait(1).to({scaleX:0.9748,scaleY:0.9748,x:293.25,y:202,alpha:0.9203},0).wait(1).to({scaleX:0.9771,scaleY:0.9771,x:292.95,y:201.8,alpha:0.9277},0).wait(1).to({scaleX:0.9793,scaleY:0.9793,x:292.65,y:201.6,alpha:0.9347},0).wait(1).to({scaleX:0.9814,scaleY:0.9814,x:292.4,y:201.45,alpha:0.9411},0).wait(1).to({scaleX:0.9833,scaleY:0.9833,x:292.15,y:201.3,alpha:0.9472},0).wait(1).to({scaleX:0.9851,scaleY:0.9851,x:291.9,y:201.2,alpha:0.9528},0).wait(1).to({scaleX:0.9867,scaleY:0.9867,x:291.7,y:201.05,alpha:0.958},0).wait(1).to({scaleX:0.9883,scaleY:0.9883,x:291.5,y:200.9,alpha:0.9629},0).wait(1).to({scaleX:0.9897,scaleY:0.9897,x:291.3,y:200.8,alpha:0.9674},0).wait(1).to({scaleX:0.991,scaleY:0.991,x:291.15,y:200.7,alpha:0.9715},0).wait(1).to({scaleX:0.9922,scaleY:0.9922,x:291,y:200.6,alpha:0.9753},0).wait(1).to({scaleX:0.9933,scaleY:0.9933,x:290.85,y:200.5,alpha:0.9788},0).wait(1).to({scaleX:0.9943,scaleY:0.9943,x:290.7,y:200.4,alpha:0.9819},0).wait(1).to({scaleX:0.9952,scaleY:0.9952,x:290.65,alpha:0.9848},0).wait(1).to({scaleX:0.996,scaleY:0.996,x:290.5,y:200.3,alpha:0.9874},0).wait(1).to({scaleX:0.9967,scaleY:0.9967,x:290.4,y:200.25,alpha:0.9897},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,x:290.35,y:200.15,alpha:0.9918},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:290.2,alpha:0.9936},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,y:200.1,alpha:0.9951},0).wait(1).to({scaleX:0.9989,scaleY:0.9989,x:290.15,y:200.05,alpha:0.9965},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:290.1,alpha:0.9976},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:290.05,y:200,alpha:0.9985},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:290,alpha:0.9991},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,y:199.95,alpha:0.9996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.9999},0).wait(1).to({regX:0,regY:0,x:150,y:300,alpha:1},0).wait(391));

	// Text_1
	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.setTransform(150,319.95);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(1).to({regX:140,regY:-100,x:290,y:219.9,alpha:0.0003},0).wait(1).to({alpha:0.0014},0).wait(1).to({y:219.85,alpha:0.0031},0).wait(1).to({y:219.8,alpha:0.0057},0).wait(1).to({y:219.75,alpha:0.0091},0).wait(1).to({y:219.65,alpha:0.0135},0).wait(1).to({y:219.55,alpha:0.0189},0).wait(1).to({y:219.4,alpha:0.0253},0).wait(1).to({y:219.25,alpha:0.033},0).wait(1).to({y:219.1,alpha:0.0419},0).wait(1).to({y:218.9,alpha:0.0523},0).wait(1).to({y:218.65,alpha:0.0642},0).wait(1).to({y:218.35,alpha:0.0777},0).wait(1).to({y:218.05,alpha:0.0932},0).wait(1).to({y:217.7,alpha:0.1106},0).wait(1).to({y:217.35,alpha:0.1302},0).wait(1).to({y:216.9,alpha:0.1523},0).wait(1).to({y:216.4,alpha:0.1769},0).wait(1).to({y:215.85,alpha:0.2043},0).wait(1).to({y:215.25,alpha:0.2346},0).wait(1).to({y:214.6,alpha:0.2677},0).wait(1).to({y:213.85,alpha:0.3037},0).wait(1).to({y:213.1,alpha:0.3423},0).wait(1).to({y:212.3,alpha:0.383},0).wait(1).to({y:211.45,alpha:0.4251},0).wait(1).to({y:210.6,alpha:0.4678},0).wait(1).to({y:209.75,alpha:0.5102},0).wait(1).to({y:208.9,alpha:0.5516},0).wait(1).to({y:208.15,alpha:0.5914},0).wait(1).to({y:207.4,alpha:0.629},0).wait(1).to({y:206.65,alpha:0.6642},0).wait(1).to({y:206,alpha:0.6968},0).wait(1).to({y:205.4,alpha:0.727},0).wait(1).to({y:204.85,alpha:0.7548},0).wait(1).to({y:204.35,alpha:0.7803},0).wait(1).to({y:203.9,alpha:0.8036},0).wait(1).to({y:203.45,alpha:0.8249},0).wait(1).to({y:203.1,alpha:0.8443},0).wait(1).to({y:202.75,alpha:0.8621},0).wait(1).to({y:202.4,alpha:0.8783},0).wait(1).to({y:202.1,alpha:0.893},0).wait(1).to({y:201.85,alpha:0.9064},0).wait(1).to({y:201.6,alpha:0.9186},0).wait(1).to({y:201.4,alpha:0.9296},0).wait(1).to({y:201.2,alpha:0.9396},0).wait(1).to({y:201,alpha:0.9485},0).wait(1).to({y:200.85,alpha:0.9566},0).wait(1).to({y:200.7,alpha:0.9638},0).wait(1).to({y:200.55,alpha:0.9702},0).wait(1).to({y:200.45,alpha:0.9759},0).wait(1).to({y:200.35,alpha:0.9809},0).wait(1).to({y:200.25,alpha:0.9852},0).wait(1).to({y:200.2,alpha:0.9889},0).wait(1).to({y:200.15,alpha:0.992},0).wait(1).to({y:200.1,alpha:0.9945},0).wait(1).to({y:200.05,alpha:0.9966},0).wait(1).to({y:200,alpha:0.9981},0).wait(1).to({alpha:0.9992},0).wait(1).to({alpha:0.9998},0).wait(1).to({regX:0,regY:0,x:150,y:300,alpha:1},0).wait(391));

	// Text_2
	this.instance_5 = new lib.Анимация8("synched",0);
	this.instance_5.setTransform(150.1,300.1,1.0001,1,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},42).wait(379));

	// Button
	this.instance_6 = new lib.Анимация6("synched",0);
	this.instance_6.setTransform(143.9,482.9,0.7513,0.7513,0,0,0,0.1,229.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:150,y:529.6,alpha:1},90,cjs.Ease.sineInOut).to({regX:0.1,regY:229.5,scaleX:0.857,scaleY:0.857,x:144.85,y:502.8},90,cjs.Ease.sineInOut).to({regX:0,regY:229.6,scaleX:1,scaleY:1,x:150,y:529.6},90,cjs.Ease.sineInOut).to({regX:0.1,regY:229.5,scaleX:0.857,scaleY:0.857,x:144.85,y:502.8},90,cjs.Ease.sineInOut).to({regX:0,regY:229.6,scaleX:1,scaleY:1,x:150,y:529.6},90,cjs.Ease.sineInOut).wait(1));

	// Plash
	this.instance_7 = new lib.plash();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(480));

	// Background
	this.instance_8 = new lib.Анимация7("synched",0);
	this.instance_8.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.2287,scaleY:1.2287,x:129.4,y:341.05},479).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(211,172.5,482.6,291.5);
// library properties:
lib.properties = {
	id: 'F8381B7F4BE80E4794FE57F53D513D5F',
	width: 580,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/button.png", id:"button"},
		{src:"images/choco.png", id:"choco"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pack.png", id:"pack"},
		{src:"images/plash.png", id:"plash"},
		{src:"images/txt.png", id:"txt"},
		{src:"images/txt2.png", id:"txt2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F8381B7F4BE80E4794FE57F53D513D5F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;