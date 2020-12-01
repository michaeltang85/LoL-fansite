//check if duplicate username or email

const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDupeUserOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: "Username is already taken"
            });
            return;
        }  
   

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Email is already taken"
            });
            return;
        }
        
        next();
    });
    });
};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!ROLES.includes(req.body.roles[i])) {
          res.status(400).send({
            message: "Failed! Role does not exist = " + req.body.roles[i]
          });
          return;
        }
      }
    }
    
    next();
  };

  const verifySignUp = {
      checkDupeUserOrEmail: checkDupeUserOrEmail,
      checkRolesExisted: checkRolesExisted
  };

  module.exports = verifySignUp;