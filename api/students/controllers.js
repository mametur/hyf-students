const db = require('../db-connection');

const controllers = {
	getAll: {},

getStudent:(req,res)=>{
	const student = req.params.id;
	
	//console.log(student);

	let sql= `SELECT Module.Name as module, Class.Name as class,Student.Name as Student,LastName FROM module LEFT JOIN ClassModule on ClassModule.ModuleId = Module.ModuleId LEFT JOIN Class on Class.ClassId = ClassModule.ClassId LEFT JOIN Student on Student.ClassId= Class.ClassId WHERE Student.name = '${student}';
;`
 db.all(sql,(err,row)=>{
  if(err){
    res.status(400).json({ "error": err.message });
        return;
  }
 //console.log(row);
  res.json(row);
  

})
  },

};

module.exports = controllers;
