import { IsNotEmpty, IsString } from "class-validator";

export class craeteDtoRecados {

    @IsNotEmpty()
    @IsString()
    texto: string;

    @IsNotEmpty()
    @IsString()
    de: string;

    @IsNotEmpty()
    @IsString()
    para: string;

}
