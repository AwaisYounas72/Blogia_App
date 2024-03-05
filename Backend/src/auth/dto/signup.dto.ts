import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator"

export enum Role{
    ISADMIN='admin',
    ISWRITER='writer',
    ISUSER='user'

}

export class SignUpDto{

    readonly image:string
    
    @IsNotEmpty()
    @IsString()
    readonly name:string;

    @IsNotEmpty()
    @IsEmail({},{message:"Please enter correct email"})
    readonly   email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly  password:string;

     @IsEnum(Role)
    readonly role:Role
    
}