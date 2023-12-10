import express from 'express';
const router = express.Router()
import { authUser,
    registerUser,logoutUser,
    getUserProfile,updateUserProfile,
    getUsers,deleteUser,getUsersByID,updatedUser } from '../controllers/userControllers.js';
import {protect, admin} from '../middleware/authMiddleware.js';


router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/logout',logoutUser);
router.post('/auth',authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUsersByID).put(protect,admin,updatedUser);


export default router;
