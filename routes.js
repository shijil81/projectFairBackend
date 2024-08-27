// import express
const express = require('express')

// import userController
const userController=require('./controllers/userController')

// project Controller
const projectController = require('./controllers/projectController')

//jwt middleware
const jwt=require('./middleware/jwtMiddleware')

const multer = require('./middleware/multerMiddleware')

// create object for router class
const router = new express.Router()


// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// Add project
router.post('/add-project',jwt,multer.single("projectImg"),projectController.addProjectController)

// get home project

router.get('/home-project',projectController.getHomeProjectController)


// get all project

router.get('/all-project',projectController.getAllProjectController)


// get userProject

router.get('/user-project',jwt,projectController.getUserProjectController)

// delete userProject
router.delete('/remove-userProject/:id',projectController.deleteUserProjectController)

// edit user project
router.put('/edit-project/:id',jwt,multer.single('projectImg'),projectController.editUserProjectController)

// update profile
router.put('/update-profile',jwt,multer.single('profile'),userController.updateProfileController)


module.exports = router