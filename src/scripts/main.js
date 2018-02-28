var MyCLass = function () {
	this.iterableProperty = [
		'v0',
		'v1',
		'v2'
	];
	this.property = 'a property';
	this.aFunction = function () {};
};

var CircularClass = function (){
	this.name = 'circular class';
	this.reference = this;
};

var circular = new CircularClass();

var object = {
	live: {
		x: 0,
		y: 0
	},
	circularClass: circular,
	array: [
		'v0',
		'v1',
		'v2',
		circular
	],
	instance: new MyCLass(),
	null: null,
	undefined: undefined,
	boolean: true,
	number: 101,
	string: 'some string',
	function: MyCLass,
	date: new Date(),
	regexp: /^\d+$/,
	promise: new Promise(function (resolve, reject) { /**/ })
};



var loggerElement = document.querySelector('.logger');
var loggerDeeper = document.querySelector('.logger-deeper');
var loggerShallower = document.querySelector('.logger-shallower');
var loggerRange = document.querySelector('.logger-range');
var myLogger = new Logger(document.querySelector('.logger'));
myLogger.print(object);


loggerDeeper.onmousedown = function (_event) {
	_event.preventDefault();
	myLogger.goDeeper();
};
loggerShallower.onmousedown = function (_event) {
	_event.preventDefault();
	myLogger.goShallower();
};
loggerDeeper.ontouchstart = function (_event) {
	_event.preventDefault();
	myLogger.goDeeper();
};
loggerShallower.ontouchstart = function (_event) {
	_event.preventDefault();
	myLogger.goShallower();
};
loggerRange.oninput = function (_event) {
	loggerElement.scrollTop = Math.floor((loggerElement.scrollHeight - window.innerHeight) * _event.target.value);
};
document.addEventListener('mousemove', function (event) {
	myLogger.set(object, 'date', new Date());
	myLogger.set(object, 'live.x', event.clientX);
	myLogger.set(object, 'live.y', event.clientY);
	myLogger.print(object);
});

