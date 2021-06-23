import { Router } from 'express';

import { getUsers, updateFavUsers } from '../controllers/user.controller';

const router: Router = Router();

router.route('/update-fav-users').post(updateFavUsers);
router.route('/fav-users').get(getUsers);

export default router;
