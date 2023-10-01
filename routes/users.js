const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const emailRegex = require('../utils/constants');
const {
  getUserById, editUserData,
} = require('../controllers/users');

router.get('/me', getUserById);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().pattern(emailRegex),
  }),
}), editUserData);

module.exports = router;
