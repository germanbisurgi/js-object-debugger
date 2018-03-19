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
	mouse: {
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
	promise: new Promise(function (resolve, reject) {})
};

var objectDebugger = new ObjectDebugger(document.querySelector('.output'));

document.addEventListener('mousemove', function (event) {
	object.mouse.x = event.clientX;
	object.mouse.y = event.clientY;
});

function step (timestamp) {
	object.date = new Date();
	object.timestamp = timestamp;
	objectDebugger.print(object, 3);
	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

