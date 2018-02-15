window.onload = function () {

   var loggerContainer = document.querySelector('.logger');
   var logger = new Logger(loggerContainer);

   var myFunction = function () {}


	var myObject = {
		propertyA_1: {
			propertyA_2: {
				_null: null,
				_undefined: undefined,
				_function: function () {},
	            _boolean: true,
	            _string: 'bla bla',
	            _number: 30,
	            _array: ['banana', 'apple', {x: 30, y: 45}],
				_instance: self.myIstance = new myFunction()
			}
		},
		propertyB_1: {
			propertyB_2: {
				propertyB_3: new Date()
			}
		},
		propertyC_1: {
			propertyC_2: {
				propertyC_3: {
					propertyC_4: {
						propertyC_5: 5
					}
				}
			}
		}
	}
	var bla;
	logger.log(null, bla, true, 455, 'STRING', myFunction,  ['dada', 'dede', 110], myObject);


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
