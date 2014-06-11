loadAPI(1);
/**
 * Copyright 2014 Alan Drees
 *   
 * Purpose:
 *   Function definitions for the core functionality of the aleph script encapsulation system
 *
 * Requires:
 *   aleph.configuration.js
 */

var Aleph = Aleph || {};

/************/
/* requires */
/************/

load('aleph.configuration.js');

/*************/
/* functions */
/*************/

/**\fn Aleph.init
 * 
 * Bitwig init function.  Wrapped by a public init function defined below
 *
 * @param None
 * 
 * @returns None
 */

Aleph.init = funciton(){
 
    for(cb in init.callbacks)
    {
	cb[0].call(cb[1]);
    }
}


/**\fn Aleph.add_init_callback
 *
 * Adds a controller initalizer to the list of initializers to be called.
 *
 * @param callback controller init function to be added
 * @param context context within which to execute the callback
 *
 * @returns None
 */


Aleph.add_init_callback = function(callback, context){

    if(typeof Aleph.init.cb === 'undefined')
    {
	Aleph.init.cb = [];
    }

    Aleph.init.cb[0] = [callback, context];
}


/**\fn Aleph.load_controller_scripts
 * 
 * Loads the controller scripts set in the configuration
 *
 * @param None
 *
 * @return None
 * 
 */

Aleph.load_controller_scripts = function(){
    for(var i in Aleph.controller_list)
    {
	//this is just placehold code until I can figure out how to get a list of user scripts and controller scripts
	println(Aleph.controller_list[i]);
    }
}
