import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'Post title',
    example: 'some interesting title',
  })
  @IsString()
  @MinLength(8, { message: 'Title must be at least 8 characters long' })
  title: string;

  @ApiProperty({
    description: 'Post content',
    example: 'some interesting content',
  })
  @MinLength(8, { message: 'Content must be at least 8 characters long' })
  content: string;

  @ApiProperty({
    description: 'Post author ID',
    example: '3',
  })
  @IsNumber()
  authorId: number;
}
