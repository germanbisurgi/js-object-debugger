window.onload = function () {

   var loggerContainer = document.querySelector('.logger');
   var logger = new Logger(loggerContainer);

   var myFunction = function () {
      var self = this;
   };

   var myObject = {
      _objectA: {
         _function: function () {},
         _boolean: true,
         _string: 'bla bla',
         _number: 30,
         _array: ['banana', 'apple'],
         _instance: self.myIstance = new myFunction(),
         _objectB: {
            _function: function () {},
            _boolean: true,
            _string: 'bla bla',
            _number: 30,
            _array: ['banana', 'apple'],
            _instance: self.myIstance = new myFunction(),
            _objectC: {
               _function: function () {},
               _boolean: true,
               _string: 'bla bla',
               _number: 30,
               _array: ['banana', 'apple'],
               _instance: self.myIstance = new myFunction(),
               _objectD: {}
            }
         }
      },
      _objectB: {
         _function: function () {},
         _boolean: true,
         _string: 'bla bla',
         _number: 30,
         _array: ['banana', 'apple'],
         _instance: self.myIstance = new myFunction(),
         _objectB: {
            _function: function () {},
            _boolean: true,
            _string: 'bla bla',
            _number: 30,
            _array: ['banana', 'apple'],
            _instance: self.myIstance = new myFunction(),
            _objectC: {
               _function: function () {},
               _boolean: true,
               _string: 'bla bla',
               _number: 30,
               _array: ['banana', 'apple'],
               _instance: self.myIstance = new myFunction(),
               _objectD: {}
            }
         }
      },
      _objectC: {
         _function: function () {},
         _boolean: true,
         _string: 'bla bla',
         _number: 30,
         _array: ['banana', 'apple'],
         _instance: self.myIstance = new myFunction(),
         _objectB: {
            _function: function () {},
            _boolean: true,
            _string: 'bla bla',
            _number: 30,
            _array: ['banana', 'apple'],
            _instance: self.myIstance = new myFunction(),
            _objectC: {
               _function: function () {},
               _boolean: true,
               _string: 'bla bla',
               _number: 30,
               _array: ['banana', 'apple'],
               _instance: self.myIstance = new myFunction(),
               _objectD: {}
            }
         }
      }
   };

   logger.log(myObject);

   var touchHandler = function (_event) {
      _event.preventDefault();
      logger.log(_event.touches);
      console.log(_event.touches)
   };

   loggerContainer.addEventListener('touchstart', touchHandler);
   loggerContainer.addEventListener('touchmove', touchHandler);
   loggerContainer.addEventListener('touchend', touchHandler);




































   var canvas = document.querySelector('.canvas');
   var context = canvas.getContext('2d');
   var image = new Image();
   image.src = anImage;

   var width = 500;
   var height = 500;
   var scale = null;

   //document.body.appendChild(image);
   image.width = width;
   image.height = height;

   /*setInterval (function () {
      scale = window.devicePixelRatio || 1;
      //scale = 1;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = width * scale;
      canvas.height = height * scale;
      context.scale(scale, scale);
      context.drawImage(image, 0, 0, 500, 500);
      // console.log(scale)
   }, 0);*/

};
