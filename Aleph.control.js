loadAPI(1);
/**
 * Copyright 2014 Alan Drees
 *   
 * Purpose:
 *   Script entry point for the aleph script encapsulator
 *
 * Requires:
 */

var Aleph = Aleph || {};

/************/
/* requires */
/************/

load('aleph_core.js');

/*************/
/* functions */
/*************/

/**\fn init
 * 
 * Entry point for the program.  Calls the Aleph.init function.
 *
 * @param None
 *
 * @returns None
 */

function init(){
    if(typeof Aleph !== 'undefined')
    {
	Aleph.init();
    }
}

init();
