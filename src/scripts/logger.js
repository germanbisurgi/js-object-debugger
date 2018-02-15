var Logger = function (_container) {
   'use strict';
   var self = this;
   self.container = _container;
   self.output = '';
   self.depth = 1;
   self.maxDepth = 10;
   self.path = '';

   self.log = function () {
      self.container.innerHTML = '';
      self.output = '';

      self.output += '<ul>';

      for (var i = 0; i < arguments.length; i++) {

         var value = arguments[i];

         if (self.isObject(value)) {

             self.output += '{';

             self.recursive(value, function (_key, _value, _path, _depth) {

                 self.output += '<li class="logger-entry" style="margin-left: ' + _depth * 20 + 'px; list-style-type: disc;">';

                if (self.isNull(_value)) {
                    self.printNull(_key, _value);
                }

                if (self.isUndefined(_value)) {
                    self.printUndefined(_key, _value);
                }

                if (self.isBoolean(_value)) {
                    self.printBoolean(_key, _value);
                }

                if (self.isNumber(_value)) {
                    self.printNumber(_key, _value);
                }

                if (self.isString(_value)) {
                    self.printString(_key, _value);
                }

                if (self.isFunction(_value)) {
                    self.printFunction(_key, _value);
                }

                if (self.isArray(_value)) {
                    self.printArray(_key, _value);
                }

                if (self.isObject(_value)) {
                    self.printObject(_key, _value);
                }

                self.output += '</li>';
            });

            self.output += '}';


        } else {

            self.output += '<li class="logger-entry">';

            if (self.isNull(value)) {
                self.printNull(null, value)
            }

            if (self.isUndefined(value)) {
                self.printUndefined(null, value)
            }

            if (self.isBoolean(value)) {
                self.printBoolean(null, value)
            }

            if (self.isNumber(value)) {
                self.printNumber(null, value)
            }

            if (self.isString(value)) {
                self.printString(null, value)
            }

            if (self.isFunction(value)) {
                self.printFunction(null, value)
            }

            if (self.isArray(value)) {
                self.printArray(null, value)
            }

            self.output += '</li>';
        }

      }

      self.output += '</ul>';

      self.container.innerHTML += self.output;

   };

   self.recursive = function (_object, _function) {
       for (var _property in _object) {
           if (_object.hasOwnProperty(_property)) {

               if (self.depth === 1) {
                   self.path = '';
                   self.path += _property;
               } else if (self.depth > 1) {
                   self.path +=  '.' + _property;
               }

               _function(_property, _object[_property], self.path, self.depth);
               if (self.isObject(_object[_property]) && self.depth < self.maxDepth) {
                   self.depth++;
                   self.recursive(_object[_property], _function, self.depth);
                   self.depth--;
               }
           }
       }
   }

   self.isNull = function (_value) {
      return _value === null;
   };

   self.isBoolean = function (_value) {
      return typeof _value === 'boolean';
   };

   self.isUndefined = function (_value) {
      return typeof _value === 'undefined';
   };

   self.isNumber = function (_value) {
      return typeof _value === 'number' && !isNaN(_value);
   };

   self.isString = function (_value) {
      return typeof _value === 'string';
   };

   self.isFunction = function (value) {
      return typeof value === 'function';
   };

   self.isArray = function (_value) {
      return {}.toString.call(_value) === '[object Array]';
   };

   self.isObject = function (_value) {
      return typeof _value === 'object' && !Array.isArray(_value) && _value !== null;
   };

   self.classOf = function (_value) {
      return _value.constructor.name;
   };

   self.printNull = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-null">';
      self.output += 'null';
      self.output += '</pre style="display: inline-block">';
   };

   self.printUndefined = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-undefined">';
       self.output += '"undefined"';
       self.output += '</pre style="display: inline-block">';
   };

   self.printBoolean = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-boolean">';
      self.output += _value;
      self.output += '</pre style="display: inline-block">';
   };

   self.printNumber = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-number">';
      self.output += _value;
      self.output += '</pre style="display: inline-block">';
   };

   self.printString = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-string">';
       self.output += '"' + _value + '"';
       self.output += '</pre style="display: inline-block">';
   };

   self.printFunction = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-function">';
      self.output += _value;
      self.output += '</pre style="display: inline-block">';
   };

   self.printArray = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-array">';
       self.output += '(' + _value.length + ') ';
      self.output += JSON.stringify(_value, null, 4);
      self.output += '</pre style="display: inline-block">';
   };

   self.printObject = function (_key, _value) {
       if (_key) {
           self.output += _key;
           self.output += ': ';
       }
       self.output += '<pre style="display: inline-block" class="logger-object">';
       self.output += self.classOf(_value);

       if (self.classOf(_value) !== 'Object') {
           self.output += ' => ' + JSON.stringify(_value, null, 4);
       }
       self.output += '</pre style="display: inline-block">';
   };

};
