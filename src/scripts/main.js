window.onload = function() {

    var loggerContainer = document.querySelector('.logger');
    var logger = new Logger(loggerContainer);
    var myFunction = function() {}
    var bla;
    var myObject = {
        propertyA_1: {
            propertyA_2: {
                null: null,
                undefined: bla,
                boolean: true,
                number: 30,
                string: 'string',
                function: function() {},
                array: [null, bla, true, 'string', 101, myFunction, {x: 30, y: {x: 30, y: 45}}],
                instance: self.myIstance = new myFunction()
            }
        }
    }

    logger.log(
        null,
        bla,
        true,
        101,
        'string',
        function() {},
        [null, bla, true, 'string', 101, myFunction, {x: 30, y: {x: 30, y: 45}}],
        myObject
    );

    /*var tracked = [];

	var touchHandler = function (_event) {
      _event.preventDefault();
	  for (var i = 0; i < event.changedTouches.length; i++) {
			tracked[event.changedTouches[i].identifier] = {
				id: event.changedTouches[i].identifier,
				startX: event.changedTouches[i].clientX,
				startY: event.changedTouches[i].clientY,
				currentX: event.changedTouches[i].clientX,
				currentY: event.changedTouches[i].clientY,
				offsetX: 0,
				offsetY: 0,
				justTouched: true,
				touching: true,
				released: false,
				milliseconds: 0,
			};
		}
      logger.log(tracked);
     console.log('something')
   };

   loggerContainer.addEventListener('touchstart', touchHandler, false);
   loggerContainer.addEventListener('touchmove', touchHandler, false);
   loggerContainer.addEventListener('touchend', touchHandler, false);*/



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
