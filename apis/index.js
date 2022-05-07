import express from 'express'

// Create express router
const router = express.Router()

const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.post('/login', (req, res) => {
  let authUser = {id: '', name: ''}
  if (req.body.id !== '' && req.body.name !== '' && req.body.isLogin === true) {
    // login success
    authUser = {id: req.body.id, name: req.body.name}
    req.session.authUser = authUser
    return res.json(authUser);
  }
  return res.json(authUser);
});

router.post('/logout', (req, res) => {
  delete req.session.authUser;
  res.json({ok: true});
});

// Export the server middleware
export default {
  path: '/apis',
  handler: router
};
