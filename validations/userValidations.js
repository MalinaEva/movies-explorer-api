const Joi = require('joi');

// Валидация для регистрации (signup)
const signupValidation = Joi.object({
  email: Joi.string()
  .email()
  .required()
  .messages({
    'string.email': 'Введите действительный адрес электронной почты',
    'any.required': 'Электронная почта обязательна для заполнения',
  }),
  password: Joi.string()
  .min(6)
  .required()
  .messages({
    'string.min': 'Пароль должен содержать минимум 6 символов',
    'any.required': 'Пароль обязателен для заполнения',
  }),
  name: Joi.string()
  .min(2)
  .max(30)
  .required()
  .messages({
    'string.min': 'Имя должно содержать минимум 2 символа',
    'string.max': 'Имя должно содержать максимум 30 символов',
    'any.required': 'Имя обязательно для заполнения',
  }),
});

// Валидация для входа в систему (signin)
const signinValidation = Joi.object({
  email: Joi.string()
  .email()
  .required()
  .messages({
    'string.email': 'Введите действительный адрес электронной почты',
    'any.required': 'Электронная почта обязательна для заполнения',
  }),
  password: Joi.string()
  .min(6)
  .required()
  .messages({
    'string.min': 'Пароль должен содержать минимум 6 символов',
    'any.required': 'Пароль обязателен для заполнения',
  }),
});

const editProfileValidation = Joi.object({
  email: Joi.string()
  .email()
  .required()
  .messages({
    'string.email': 'Введите действительный адрес электронной почты',
    'any.required': 'Электронная почта обязательна для заполнения',
  }),
  name: Joi.string()
  .min(2)
  .max(30)
  .required()
  .messages({
    'string.min': 'Имя должно содержать минимум 2 символа',
    'string.max': 'Имя должно содержать максимум 30 символов',
    'any.required': 'Имя обязательно для заполнения',
  }),
});

module.exports = {
  signupValidation,
  signinValidation,
  editProfileValidation,
};
