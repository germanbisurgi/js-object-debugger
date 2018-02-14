window.onload = function () {

   var loggerContainer = document.querySelector('.logger');
   var logger = new Logger(loggerContainer);

	var myObject = {
		_propertyA_0 : {
			_propertyA_1 : {
				_propertyA_2 : {}
			}
		},
		_propertyB_0 : {
			_propertyB_1 : {
				_propertyB_2 : {}
			}
		},
		_propertyC_0 : {
			_propertyC_1 : {
				_propertyC2_2 : {
					_propertyC_3 : {
						_propertyC_4 : 5
					}
				}
			}
		}
	}

	var depth = 1;
	var maxDepth = 5;

	var recursive = function (_object, _function) {

		for (var _property in _object) {
			if (_object.hasOwnProperty(_property)) {
				_function(_property, _object[_property], depth);
				if (typeof _object[_property] === 'object' && depth < maxDepth) {
					depth++;
                    recursive(_object[_property], _function, depth);
					depth--;
                }
            }
		}
	}

   recursive(myObject, function (_key, _value, _depth) {
	   // console.log(_key, _value, _depth);
	   console.log(_key, typeof _value, _depth);
   });


};
