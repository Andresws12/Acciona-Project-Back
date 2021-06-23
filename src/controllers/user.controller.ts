import { Request, Response } from 'express';

import { User } from '../models/user';

let favUsers: User[] = [];

export async function updateFavUsers(req: Request, res: Response) {
    favUsers = req.body;

    return res.json(favUsers);
}

export async function getUsers(req: Request, res: Response) {
    return res.json(favUsers);
}
