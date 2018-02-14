window.onload = function () {

   var loggerContainer = document.querySelector('.logger');
   var logger = new Logger(loggerContainer);

	var myObject = {
		propertyA_1: {
			propertyA_2: {
				propertyA_3: {}
			}
		},
		propertyB_1: {
			propertyB_2: {
				propertyB_3: {}
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

	var depth = 1;
	var maxDepth = 5;
	var path = '';

	var recursive = function (_object, _function) {
		for (var _property in _object) {
			if (_object.hasOwnProperty(_property)) {

				if (path.split('.').length === depth) {
					if (path === '') {
						path += _property;
					}
					path += '.' + _property;
				}

				_function(_property, _object[_property], depth, path);
				if (typeof _object[_property] === 'object' && depth < maxDepth) {
					depth++;
                    recursive(_object[_property], _function, depth);
					depth--;
                }
            }
		}
	}

   recursive(myObject, function (_key, _value, _depth, _path) {
	   //console.log(_key, typeof _value, _depth, 'root' +  '.' + _key);
	   console.log(_path);
   });


};
