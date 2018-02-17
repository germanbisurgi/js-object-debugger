window.onload = function() {

    var loggerContainer = document.querySelector('.logger');
    var touchableSurface = document.querySelector('.touchable-surface');
    var logger = new Logger(loggerContainer);
    var myFunction = function() {}
    var bla;

    logger.log(
        null,
        bla,
        true,
        101,
        'string1',
        function() {},
        [null, bla, true, 'string2', 101, myFunction, {x: 30, y: {x: 30, y: 45}}],
        {
            propertyA_1: {
                propertyA_2: {
                    null: null,
                    undefined: bla,
                    boolean: true,
                    number: 30,
                    string: 'string3',
                    function: function() {},
                    array: [null, bla, true, 'string4', 101, myFunction, {x: 30, y: {x: 30, y: 45}}],
                    instance: self.myIstance = new myFunction()
                }
            }
        }
    );

   var loggerElement = document.querySelector('.logger');
   var loggerDeeper = document.querySelector('.logger-deeper');
   var loggerShallower = document.querySelector('.logger-shallower');
   var loggerRange = document.querySelector('.logger-range');
   loggerDeeper.onmousedown = function (_event) {
       _event.preventDefault();
       logger.goDeeper();
       logger.refresh();
   }
   loggerShallower.onmousedown = function (_event) {
       _event.preventDefault();
       logger.goShallower();
       logger.refresh();
   }
   loggerDeeper.ontouchstart = function (_event) {
       _event.preventDefault();
       logger.goDeeper();
       logger.refresh();
   }
   loggerShallower.ontouchstart = function (_event) {
       _event.preventDefault();
       logger.goShallower();
       logger.refresh();
   }
   loggerRange.oninput = function (_event) {
       loggerElement.scrollTop = Math.floor((loggerElement.scrollHeight - window.innerHeight) * _event.target.value);
       console.log(loggerElement.scrollTop)
   }

};
