import { IsOptional, IsString } from "class-validator";


export  class UpdateCategoryDto{

    @IsOptional()
    @IsString()
    readonly title:string;

    
}