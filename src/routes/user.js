import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

router.post('/', (req, res) => {
  console.log('🚀 ~ router.post ~ req:', req.body);

  return res.send(JSON.stringify(req.body));
});

export default router;
