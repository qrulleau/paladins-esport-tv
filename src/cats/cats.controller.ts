import { Controller, Get, Req, Post, Delete, Redirect, Param } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `this action return a #${params.id} cat`;
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('a*z')
  @Redirect('https://nestjs.com',301)
  redirectToNestJs(): void {}
}

