import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, Res } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';
import { Response } from 'express';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
 
  @Post()
  create(@Body() todo: TodoDto) {
    return this.todoService.create(todo);
  }

  @Get()
  findAll(@Query() query:any,@Res() res:Response) {
    let {page, limit,userid} = query;
    

    if(page<0){
      page=1
    }
    
    const skip = (page-1) * limit;
    return this.todoService.findAll(+skip,+limit,+userid,res);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() todo: TodoDto) {
    return this.todoService.update(+id, todo);
  }

  @Put(':id')
  updateDone(@Param('id') id:string){
    return this.todoService.updateDone(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todoService.remove(+id);
  }
}
   