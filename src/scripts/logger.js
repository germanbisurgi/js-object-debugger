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

      console.log(arguments)

      for (var i = 0; i < arguments.length; i++) {

         var value = arguments[i];

         self.output += '<ul>';

         if (self.isNull(value)) {
            self.output += '<span class="logger-null">';
           self.output += 'null';
           self.output += '</span>';
         }

         if (self.isUndefined(value)) {
             self.output += '<span class="logger-undefined">';
             self.output += '"undefined"';
             self.output += '</span>';
         }

         if (self.isString(value)) {
             self.output += '<span class="logger-string">';
             self.output += '"' + value + '"';
             self.output += '</span>';
         }

         if (self.isBoolean(value)) {
             self.output += '<span class="logger-boolean">';
            self.output += value;
            self.output += '</span>';
         }

         if (self.isNumber(value)) {
             self.output += '<span class="logger-number">';
            self.output += value;
            self.output += '</span>';
         }

         if (self.isString(value)) {
             self.output += '<span class="logger-string">';
             self.output += '"' + value + '"';
             self.output += '</span>';
         }

         if (self.isFunction(value)) {
             self.output += '<span class="logger-function">';
            self.output += value;
            self.output += '</span>';

         }

         if (self.isArray(value)) {
             self.output += '<span class="logger-array">';
             self.output += '(' + value.length + ') ';
            self.output += JSON.stringify(value, null, 4);
            self.output += '</span>';
         }

         if (self.isObject(value)) {

             self.recursive(value, function (_key, _value, _path, _depth) {

                self.output += '<li class="logger-entry" style="margin-left: ' + _depth * 20 + 'px; list-style-type: square;">';

                if (self.isNull(_value)) {
                   self.output += _key;
                   self.output += ': ';
                   self.output += '<span class="logger-null">';
                  self.output += 'null';
                  self.output += '</span>';
                }

                if (self.isUndefined(_value)) {
                    self.output += _key;
                    self.output += ': ';
                    self.output += '<span class="logger-undefined">';
                    self.output += '"undefined"';
                    self.output += '</span>';
                }

                if (self.isBoolean(_value)) {
                    self.output += _key;
                    self.output += ': ';
                    self.output += '<span class="logger-boolean">';
                   self.output += _value;
                   self.output += '</span>';
                }

                if (self.isNumber(_value)) {
                    self.output += _key;
                    self.output += ': ';
                    self.output += '<span class="logger-number">';
                   self.output += _value;
                   self.output += '</span>';
                }

                if (self.isString(_value)) {
                    self.output += _key;
                    self.output += ': ';
                    self.output += '<span class="logger-string">';
                    self.output += '"' + _value + '"';
                    self.output += '</span>';
                }

                if (self.isFunction(_value)) {
                    self.output += _key;
                    self.output += ': ';
                    self.output += '<span class="logger-function">';
                   self.output += _value;
                   self.output += '</span>';

                }

                if (self.isArray(_value)) {
                    self.output += _key;
                    self.output += ': ';
                    self.output += '<span class="logger-array">';
                    self.output += '(' + _value.length + ') ';
                   self.output += JSON.stringify(_value, null, 4);
                   self.output += '</span>';
                }

                if (self.isObject(_value)) {
                    self.output += _key;
                    self.output += ': ';
                    self.output += '<span class="logger-object">';
                    self.output += self.classOf(_value);
                    if (self.classOf(_value) !== 'Object') {
                        self.output += ' => ' + JSON.stringify(_value, null, 4);
                    }
                    self.output += '</span>';
                }

                self.output += '</li>';
            });
        }

        self.output += '</ul>';


      }

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

};
