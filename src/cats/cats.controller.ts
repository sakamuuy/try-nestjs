import { Body, Controller, Get, Query, HttpCode, Param, Post, Req, Put, Delete } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This actions adds a new cat'
  }

  @Get()
  async findAll(@Query() query: ListAllEntities) {
    return `This action`
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id)
    return `This actiosn returns a #${params.id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updats a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }
}
