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

};
