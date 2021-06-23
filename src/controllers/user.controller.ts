import { Request, Response } from 'express';

import { ListUsers } from '../models/user';

let favUsers: ListUsers[] = [];

export async function updateFavUsers(req: Request, res: Response) {
    favUsers.push(req.body);

    return res.json(favUsers);
}

export async function getUsers(req: Request, res: Response) {
    return res.json(favUsers);
}
