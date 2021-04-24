var express = require('express');
const car_controlers= require('../controllers/car');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
   

/* GET home page. */
router.get('/', car_controlers.car_view_all_Page );
router.get('/detail', car_controlers.car_view_one_Page);
router.get('/create', car_controlers.car_create_Page);
router.get('/update', car_controlers.car_update_Page);
router.get('/delete', car_controlers.car_delete_Page);

module.exports = router;