import { Injectable, NotFoundException } from '@nestjs/common';
import { craeteDtoRecados } from './dto/createDtoRecados';
import { updateDtoRecados } from './dto/updateDtoRecados';


// Definição da interface Recado com os campos necessários
interface Recado {
    id: string;
    texto: string;
    de: string;
    para: string;
    lido: boolean;
    data: Date;
}

@Injectable()
export class RecadosService {
    // Criando uma lista privada de recados para simular um banco de dados em memória
    private lestId = 1;
    private recados: Recado[] = [
        {
            id: "1",
            texto: 'Primeiro recado',
            de: 'Alice',
            para: 'Bob',
            lido: false,
            data: new Date()
        }
    ]

    // Método para retornar todos os recados
    findAll() {
        return this.recados;
    }

    // Método para encontrar um recado pelo ID
    findOne(id: string) {
        const recado = this.recados.find(item => item.id === id);

        if (!recado) {
            throw new NotFoundException('Recado não encontrado');
        }
        return recado;
    }

    create(craeteDtoRecados: craeteDtoRecados) {

        if (!craeteDtoRecados || !craeteDtoRecados.texto || !craeteDtoRecados.de || !craeteDtoRecados.para) {
            throw new NotFoundException('Dados do recado inválidos');
        }

        this.lestId++;
        const id = this.lestId;
        const novoRecado = {
            "id": id.toString(),
            ...craeteDtoRecados,
            lido: false,
            data: new Date()
        }
        this.recados.push(novoRecado);
        return novoRecado;
    }

    update(id: string, updateDto: updateDtoRecados) {
        const encontrarRecado = this.recados.findIndex(item => item.id === id);

        if (encontrarRecado >= 0) {
            const recadoAtualizado = this.recados[encontrarRecado];

            this.recados[encontrarRecado] = {
                ...recadoAtualizado,
                ...updateDto
            }
            return "Recado atualizado com sucesso";
        } else {
            throw new NotFoundException('Recado não encontrado');
        }
    }

    remove(id: string) {
        const encontrarRecado = this.recados.findIndex(item => item.id === id);

        if (encontrarRecado >= 0) {
            this.recados.splice(encontrarRecado, 1);
            return `Recado com id ${id} removido com sucesso`;
        } else {
            throw new NotFoundException('Recado não encontrado');
        }
    }
}