import { IsString } from 'class-validator';

export class CreateUrlDto {
  @IsString()
  public url: string;
}
