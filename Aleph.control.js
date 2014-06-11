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


/***************/
/* entry point */
/***************/


//This needs to be refined to work with different directories and the like//
if(host.platformIsLinux)
{
    Aleph.scriptdir = '/opt/bitwig-studio/resources/controllers';
    Aleph.usrdir    = '~/Bitwig Studio/Controller Scripts';
}

if(host.platformIsMac)
{
    Aleph.scriptdir = '/opt/bitwig-studio/resources/controllers';
    Aleph.usrdir    = '~/Documents/Bitwig Studio/Controller Scripts';
}

if(host.platformIsWindows)
{
    Aleph.scriptdir = 'C:\Program Files\Bitwig Studio\resources/controllers';
    Aleph.usrdir    = '%USER%/Documents\Bitwig Studio\Controller Scripts';
}

