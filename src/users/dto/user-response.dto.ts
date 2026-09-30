import { IsDate, IsString } from 'class-validator';

export class UserResponseDto {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  role: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
