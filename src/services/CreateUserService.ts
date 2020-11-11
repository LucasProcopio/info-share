import { getCustomRepository } from 'typeorm';
import UserReopsitory from '../repositories/UserRepository';
import User from '../entities/Users';

export default class CreateUserService {
  public async execute({
    firstName,
    lastName,
    password,
    username,
    email,
  }: User): User {
    const userRepository = getCustomRepository(UserReopsitory);
    const newUser = await userRepository.create(user);
  }
}
