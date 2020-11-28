import { getstudent } from '../handlers/getstudent.js'
import { getClassesByModuleName } from '../handlers/getClasses.js';


document.getElementById('submit').addEventListener('click',getstudent)

// get classes by module name
document.querySelector('#getClasses').addEventListener('click', getClassesByModuleName);