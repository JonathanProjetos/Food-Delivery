const LoginServices = require("../services/Login");

const LoginController = {

  Login: async (req, res) => {
    const token = await LoginServices.Login(req.body);
    res.status(200).json({ token });
  },

  Register: async (req, res) => {
    const message = await LoginServices.Register(req.body);
    res.status(200).json(message);
  }

};

module.exports = LoginController;