//we have two types of import and exports 
//default we can change the name of the exported object or something 
//named we can not change the name of the exported object or something

//default
import obj from './temp';
import yolo from './temp';


//named
import {key,info} from './temp';
//if we want to import all function 
import * as bundle from './temp'
// console.log(bundle);

//if we want to use the key as something else then 
import {key as secretKey} from './temp'     

