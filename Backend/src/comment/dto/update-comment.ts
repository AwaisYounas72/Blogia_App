import {  IsOptional, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";
import { Blog } from "src/blogs/schemas/blog.schema";


export  class UpdateCommentDto{

    @IsOptional()
    @IsString()
    readonly comment:string;

    readonly  user:User

    readonly  blog:Blog
}