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
Aleph.scriptdir    = '';
Aleph.usrdirdir    = '';
Aleph.name = "Aleph";
/************/
/* requires */
/************/

load('aleph_configuration.js');

for(i in Aleph.controller_list){
    Aleph.name += "-" + Aleph.controller_list[i][0];
}

host.defineController("pirate-hour", Aleph.name, "0.0", "0D58C5F7-74A2-48AF-BB45-0479AB55F457");

/*************/
/* functions */
/*************/

/**\fn Aleph.init
 * 
 * Bitwig init function.  Wrapped by a public init function defined in the Aleph.control.js entry point file.
 *
 * @param None
 * 
 * @returns None
 */

Aleph.init = function(){

    Aleph.init_io();

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


/**\fn Aleph.is_valid_script
 * 
 * Checks if a script is a valid, existing script.  PLACEHOLDER UNTIL A RELIABLE METHOD TO DETERMINE THE EXISTANCE OF A SCRIPT CAN BE DETERMINED.
 *
 * @param script script to check for
 *
 * @returns Boolean true if the script exists and is executable (has a control.js entry point), false otherwise
 */

Aleph.is_valid_script = function(script){
    return true;
}
 
  
/**\fn Aleph.manage_io
 * 
 * Configure the requested number of inputs and outputs
 *
 * @param None
 *
 * @returns None
 */


Aleph.init_io = function(){
    var num_ins = 0;
    var num_outs = 0;
    for(var script in Aleph.controller_list){
	if(Aleph.is_valid_script(Aleph.controller_list[script]))
	{
	    num_ins += Aleph.controller_list[script][1] * Aleph.controller_list[script][3];
	    num_outs += Aleph.controller_list[script][2] * Aleph.controller_list[script][3];
	}
    }

    host.defineMidiPorts(num_ins, num_outs);
    Aleph.defined_ins = num_ins;
    Aleph.defined_outs = num_outs;
}
