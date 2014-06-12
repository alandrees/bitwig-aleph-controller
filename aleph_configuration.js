/**
 * Copyright 2014 Alan Drees
 *   
 * Purpose:
 *  Configuration file for the Aleph script system.  In lieu of 
 *
 * Requires:
 *  None
 *
 */

var Aleph = Aleph || {};

Aleph.controller_list = [];

/*
This is an example of how you would specify other controllers to load into the Aleph environment
*/

/*
0 -> name of the controller to load the script for
1 -> number of inputs total
2 -> number of outputs total
3 -> number of controllers total
*/

Aleph.controller_list.push(['Launchpad', 1, 1, 1] );
Aleph.controller_list.push(['BCR2000', 1, 1, 1]);
Aleph.controller_list.push(['BCF2000', 1, 1, 1]);
