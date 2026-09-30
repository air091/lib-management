import { IsEmail, IsString } from 'class-validator';

export class JwtPayloadDto {
  @IsString()
  sub: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  role: string;
}
