var Logger = function (_container) {
   'use strict';
   var self = this;
   self.container = _container;
   self.output = '';
   self.depth = 3;
   self.currentLevel = 0;

   self.log = function () {
      self.container.innerHTML = '';
      self.output = '';

      for (var i = 0; i < arguments.length; i++) {
         var value = arguments[i];

         if (self.isNull(value)) {
            self.output += 'null';
         }

         if (self.isUndefined(value)) {
            self.output += 'undefined';
         }

         if (self.isBoolean(value)) {
            self.output += value;
         }

         if (self.isNumber(value)) {
            self.output += '(number) ';
            self.output += value;
         }

         if (self.isString(value)) {
            self.output += '(string) ';
            self.output += value;
         }

         if (self.isFunction(value)) {
            self.output += value;
         }

         if (self.isArray(value)) {
            self.output += JSON.stringify(value, null, 4);
         }

         /* put complex stuff here */

         if (self.isObject(value)) {
            self.printObject(value);
         }



         self.output += '<br /><br />';

      }

      self.container.innerHTML += self.output;

   };

   self.goDeeper = function () {
      self.currentLevel++;
      if (self.currentLevel > self.depth) {
         self.currentLevel = self.depth;
      }
   };

   self.goShallower = function () {
      self.currentLevel--;
      if (self.currentLevel < 0) {
         self.currentLevel = 0;
      }
   };

   self.printObject = function (_object) {
      self.output += '<ul style="margin-left: 50px;">';
         for (var property in _object) {
            self.output += '<li style="list-style-type: square;">';

               self.output += property;
               self.output += ': ';

               if (!self.isObject(_object[property])) {
                  self.output += _object[property];
               }

               if (self.isObject(_object[property])) {

                  if (self.currentLevel < self.depth) {

                     self.goDeeper();
                     self.printObject(_object[property]);
                     self.goShallower();
                  } else {
                     console.log(_object)

                     self.output += self.classOf(_object);

                  }
               }

            self.output += '</li>';
         }
      self.output += '</ul>';
   };

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
