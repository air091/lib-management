import { IsString } from 'class-validator';

export class UserResponse {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsString()
  email: string;
}
