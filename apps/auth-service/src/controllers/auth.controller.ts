import { Request, Response } from "express";

export class AuthController {
  async register(req: Request, res: Response) {
    return res.status(201).json({
      success: true,
      message: "Register endpoint is ready to be implemented.",
    });
  }
}

export default new AuthController();