/*in questo esempio faccio vedere la differenza tra 
module.exports e esport */

/* nel file saluti.js trovi due oggetti diversi */

var saluti = require ('./saluti');

var saluti2 = require ('./saluti2');

saluti2.saluti();


