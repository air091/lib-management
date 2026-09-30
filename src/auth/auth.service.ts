import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto.js';
import { JwtPayloadDto } from './dto/jwt-payload.dto.js';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(data.email);

    if (!user)
      throw new UnauthorizedException('Email or password is incorrect');

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch)
      throw new UnauthorizedException('Email or password is incorrect');

    const payload: JwtPayloadDto = {
      sub: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
