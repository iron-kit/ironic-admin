
import { delay } from './_utils';

export default {
  'GET /api/currentUser': {

  },

  'POST /api/login/account': (req, res) => {
    delay(1000).then(() => {
      const { password, username } = req.body;

      if (password === 'ironic' && username === 'ironman') {
        res.send({
          status: 'ok',
          currentAuthority: 'admin',
        });

        return;
      }

      res.send({
        status: 'error',
        currentAuthority: 'guest',
      });
    })
  }
}