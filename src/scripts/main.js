window.onload = function() {

    var loggerContainer = document.querySelector('.logger');
    var touchableSurface = document.querySelector('.touchable-surface');
    var logger = new Logger(loggerContainer);
    var myFunction = function() {}
    var bla;

    logger.log(
        null,
        bla,
        true,
        101,
        'string1',
        function() {},
        [null, bla, true, 'string2', 101, myFunction, {x: 30, y: {x: 30, y: 45}}],
        {
            propertyA_1: {
                propertyA_2: {
                    null: null,
                    undefined: bla,
                    boolean: true,
                    number: 30,
                    string: 'string3',
                    function: function() {},
                    array: [null, bla, true, 'string4', 101, myFunction, {x: 30, y: {x: 30, y: 45}}],
                    instance: self.myIstance = new myFunction()
                }
            }
        }
    );

    var tracked = [];

	var touchHandler = function (_event) {
      _event.preventDefault();
	  for (var i = 0; i < event.changedTouches.length; i++) {
			tracked[event.changedTouches[i].identifier] = {
				id: event.changedTouches[i].identifier,
				startX: event.changedTouches[i].clientX,
				startY: event.changedTouches[i].clientY,
				currentX: event.changedTouches[i].clientX,
				currentY: event.changedTouches[i].clientY,
			};
		}
      logger.log(tracked);
   };

   touchableSurface.addEventListener('touchstart', touchHandler, false);
   touchableSurface.addEventListener('touchmove', touchHandler, false);
   touchableSurface.addEventListener('touchend', touchHandler, false);


   var loggerElement = document.querySelector('.logger');
   var loggerDeeper = document.querySelector('.logger-deeper');
   var loggerShallower = document.querySelector('.logger-shallower');
   var loggerRange = document.querySelector('.logger-range');
   var scrollingUp = false;
   var scrollingDown = false;
   loggerDeeper.onmousedown = function (_event) {
       _event.preventDefault();
       logger.goDeeper();
       logger.refresh();
   }
   loggerShallower.onmousedown = function (_event) {
       _event.preventDefault();
       logger.goShallower();
       logger.refresh();
   }
   loggerDeeper.ontouchstart = function (_event) {
       _event.preventDefault();
       logger.goDeeper();
       logger.refresh();
   }
   loggerShallower.ontouchstart = function (_event) {
       _event.preventDefault();
       logger.goShallower();
       logger.refresh();
   }
   loggerRange.oninput = function (_event) {
       loggerElement.scrollTop = Math.floor((loggerElement.scrollHeight - window.innerHeight) * _event.target.value);
       console.log(loggerElement.scrollTop)
   }



    /* var depth = 1;
	var maxDepth = 5;
	var path = '';

	var recursive = function (_object, _function) {
		for (var _property in _object) {
			if (_object.hasOwnProperty(_property)) {

				if (depth === 1) {
					path = '';
					path += _property;
				} else if (depth > 1) {
					path +=  '.' + _property;
				}

				_function(_property, _object[_property], path, depth);
				if (typeof _object[_property] === 'object' && depth < maxDepth) {
					depth++;
                    recursive(_object[_property], _function, depth);
					depth--;
                }
            }
		}
	}

   recursive(myObject, function (_key, _value, _path, _depth) {
	   console.log(typeof _value, _depth);
   }); */


};
