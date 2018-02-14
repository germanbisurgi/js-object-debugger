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

      for (var i = 0; i < arguments.length; i++) {
         var value = arguments[i];

         self.recursive(value, function (_key, _value, _path, _depth) {

                self.output += '<ul>';
                    self.output += '<li style="margin-left: ' + _depth * 20 + 'px; list-style-type: square;">';

                    if (self.isNull(_value)) {
                       self.output += _key;
                       self.output += ': ';
                       self.output += _value;
                    }

                    if (self.isUndefined(_value)) {
                        self.output += _key;
                        self.output += ': ';
                        self.output += '"' + _value + '"';
                    }

                    if (self.isBoolean(_value)) {
                        self.output += _key;
                        self.output += ': ';
                        self.output += _value;
                    }

                    if (self.isNumber(_value)) {
                        self.output += _key;
                        self.output += ': ';
                        self.output += _value;
                    }

                    if (self.isString(_value)) {
                        self.output += _key;
                        self.output += ': ';
                        self.output += '"' + _value + '"';
                    }

                    if (self.isFunction(_value)) {
                       self.output += _value;
                    }

                    if (self.isArray(_value)) {
                       self.output += JSON.stringify(_value, null, 4);
                    }

                    if (self.isObject(_value)) {
                        self.output += _key;
                        self.output += ': ';
                        self.output += self.classOf(_value);
                        if (self.classOf(_value) !== 'Object') {
                            self.output += ' => ' + JSON.stringify(_value, null, 4);
                        }
                    }

                    self.output += '</li>';
                self.output += '</ul>';
                self.output += '<br />';

        });

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

   self.isObject = function (_value) {
      return typeof _value === 'object' && !Array.isArray(_value) && _value !== null;
   };

   self.isArray = function (_value) {
      return {}.toString.call(_value) === '[object Array]';
   };

   self.classOf = function (_value) {
      return _value.constructor.name;
   };

};
