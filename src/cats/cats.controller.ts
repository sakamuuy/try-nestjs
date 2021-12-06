import { Body, Controller, Get, Query, HttpCode, Param, Post, Req, Put, Delete } from '@nestjs/common';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {

  }

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto)
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    return this.catsService.findAll()
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
