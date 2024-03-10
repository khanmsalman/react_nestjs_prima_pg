import { Injectable } from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Response } from 'express';

@Injectable()
export class TodoService {
  constructor(private readonly prisma:PrismaService){}

  async create(todoData: TodoDto) {
    
    const todo = await this.prisma.todo.create({
      data:{
        title:todoData.title,
        user_id:todoData.user_id
      }
    })
    return todo;
  }

 
  async findAll(skip:number,limit:number,userId:number, res:Response) {
    const todos = await this.prisma.todo.findMany({
      where:{
        user_id:userId
      },  
      skip:skip,
      take:limit,
      // include:{
        // user:{ 
        //   include:{
        //     todos:{
        //       select:{
        //         title:true,
        //         done:true
        //       }
        //     }
        //   }
        // }
      // }
    })

    const totalPosts = await this.prisma.todo.count();
    const totalPages = Math.ceil(totalPosts/limit)
    return res.json({
      todos,
      totalPages,
    })
    }

  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where:{
        id
      }
    })
    return todo;
  }

  async updateDone(id:number){
    const todoData = await this.prisma.todo.findUnique({where:{id}})
    const todo = await this.prisma.todo.update({
      where:{id},
      data:{
        done:!todoData.done
      }
    })
    return todo;
  }

   async update(id: number, todo: TodoDto) {
    const result = await this.prisma.todo.update({
      where:{
        id
      },
      data:todo
    })

    return result;
  }

  async remove(id: number) {
    const todo = await this.prisma.todo.delete({
      where:{
        id
      }
    })
    return "Todo Deleted Successfully";
  }
}
