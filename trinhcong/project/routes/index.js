const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/userList', async (req, res) => {
  try {
    const users = await UserController.getAllUsers();
    res.render('userList', { users });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/addUser', (req, res) => {
  res.render('addUser');
});

router.post('/addUser', async (req, res) => {
  const { firstName, lastName, mobile, username, password } = req.body;

  try {
    if (!firstName || !lastName || !mobile || !username || !password) {
      throw new Error('All fields are required.');
    }

    await UserController.createUser(firstName, lastName, mobile, username, password);
    res.redirect('/userList');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;