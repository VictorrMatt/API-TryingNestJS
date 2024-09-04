import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  ValidationError,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true, // Automatically transform input data to the correct type
      exceptionFactory: (errors: ValidationError[]) => {
        const errorsArray = errors.map((error) => ({
          field: error.property,
          message: error.constraints?.[Object.keys(error.constraints)[0]], // Access the first constraint message
        }));
        return new BadRequestException(
          'Validation failed',
          errorsArray['message'],
        );
      },
    }),
  )
  async signupUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
