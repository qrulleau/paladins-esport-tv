import { Controller, Get, Req, Post, Delete } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'this action add a new cat';
  }

  @Delete()
  deleteCat(): string {
    return 'This action will delete a cat';
  }

  @Get('breed')
  findBreed(): string {
    return 'this action returns cat by breed';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}

