import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {  UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){}

    async getUsers(){
        const users = await this.prisma.user.findMany();
        return users
    }

    async getOneUser(id:number){
        const user = await this.prisma.user.findUnique({
            where:{id}
        })

        return user
    }

    async deleteUser(id:number){
        const todo = await this.prisma.user.delete({
            where:{
              id
            }
          })

        return 'User Deleted Successfully'
    } 
}
