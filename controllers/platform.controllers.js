//import bcrypt from 'bcryptjs';
// import { createToken } from '../services/auth.js';
import { Platform } from '../index.js';

export const getPlatforms = async (req, res, next) => {
    try {
        const resp = await Platform.find({});
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const insertPlatform = async (req, resp) => {
    const PlatformData = { ...req.body };
    const newPlatform = new Platform(PlatformData);
    const result = await newPlatform.save();
    resp.json(result);
};

export const deletetPlatform = async (req, resp) => {
    const PlatformData = { ...req.body };
    const newPlatform = new Platform(PlatformData);
    const result = await newPlatform.save();
    resp.json(result);
};
