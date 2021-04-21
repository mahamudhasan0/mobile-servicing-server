const {createReview,getReviews} = require('../controllers/Review')

const router = require('express').Router()

router.get('/',getReviews)
router.post('/',createReview)

module.exports=router