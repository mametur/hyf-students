const db = require('../db-connection');

const controllers = {
  getClassesByModule: (req,res,next) => {
    const sql = 'SELECT c.Name as className, m.Name as moduleName  FROM ClassModule as cm  inner join Class as c on cm.ClassId = c.ClassId inner join Module as m on cm.ModuleId = m.ModuleId  where m.Name = ?';
    const params = [req.params.moduleName]
    db.all(sql,params, (err,rows) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    })
 }
}

module.exports = controllers;
