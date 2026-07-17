import prisma from "../config/prisma";

export class UserRepository {
  async findByPhone(phone: string) {
    return prisma.user.findUnique({
      where: {
        phone,
      },
    });
  }

  async create(data: {
    phone: string;
    firstName: string;
    lastName: string;
    password: string;
  }) {
    return prisma.user.create({
      data,
    });
  }
}

export default new UserRepository();