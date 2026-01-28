import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RecadosService } from './recados.service';
import { craeteDtoRecados } from './dto/createDtoRecados';
import { updateDtoRecados } from './dto/updateDtoRecados';

@Controller('recados') // Dcorreitor de controlador que define a rota base como 'recados'
export class RecadosController {
    // Injeção de dependência do serviço RecadosService
    constructor(private readonly recadosService: RecadosService) { }

    @Get() // decorreitor de manipulador de rota para solicitações GET na rota base
    findAll(): string | any {
        return this.recadosService.findAll();
    }

    @Get(':id') // decorreitor de manipulador de rota para solicitações GET na rota com Id dinamico :id
    // O decorreitor @Param extrai o parâmetro 'id' da rota
    findOne(@Param("id") id: string): string | any {
        return this.recadosService.findOne(id);
    }

    // Decoreitor de manipulador de rota para solicitações POST na rota base
    @Post()
    // O decorreitor @Body extrai o corpo da solicitação
    create(@Body() createDto: craeteDtoRecados): string | any {
        return this.recadosService.create(createDto);
    }

    //Patch para atualizar um recado parcialmente
    @Patch(':id')
    // Os decorreitores @Param e @Body extraem o parâmetro 'id' da rota e o corpo da solicitação, respectivamente
    update(@Param("id") id: string, @Body() updateDto: updateDtoRecados): string | any {
        return this.recadosService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param("id") id: string): string | any {
        return this.recadosService.remove(id);
    }

}
