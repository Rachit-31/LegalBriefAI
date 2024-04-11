const express=require('express');
const router=express.Router();
const cors=require('cors');
const {test,registerUser,loginUser,getProfile}=require('../controller/authcontroller')

// middleware
// cors=cross orign resourse shareing
// router.use==this is method used to mount middleware on router. It means that any request handled by this router will pass through this middleware.
router.use(
    cors(
        {
            credentials:true,
            origin: 'http://localhost:5173'
        }
    )
)

router.get('/',test)
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',getProfile)
module.exports=router