var MyCLass = function () {
	this.iterableProperty = [
		'v0',
		'v1',
		'v2'
	];
	this.property = 'a property';
	this.aFunction = function () {};
};

var CircularClass = function () {
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

var loggerElement = document.querySelector('.output');
var loggerRange = document.querySelector('.output-range');
var objectDebugger = new ObjectDebugger(document.querySelector('.output'));

loggerRange.oninput = function (_event) {
	loggerElement.scrollTop = Math.floor((loggerElement.scrollHeight - window.innerHeight) * _event.target.value);
};

document.addEventListener('mousemove', function (event) {
	objectDebugger.set(object, 'live.x', event.clientX);
	objectDebugger.set(object, 'live.y', event.clientY);
});

function step (timestamp) {
	objectDebugger.set(object, 'date', new Date());
	objectDebugger.set(object, 'timestamp', timestamp);
	objectDebugger.print(object, 3);
	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

