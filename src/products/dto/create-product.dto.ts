import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number
}
