import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { JwtGuard } from 'src/auth/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
 
  @Get()
  // @UseGuards(JwtGuard)
  getUsers(){
    return this.userService.getUsers()
  }

  @Get(':id') 
  getOneUser(@Param('id') id:string){
    return this.userService.getOneUser(+id)
  }

  @Delete(':id')
  deleteUser(@Param('id') id:string){
    return this.userService.deleteUser(+id)
  }

} 
