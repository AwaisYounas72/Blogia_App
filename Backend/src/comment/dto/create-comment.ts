import { IsNotEmpty, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";
import { Blog } from "src/blogs/schemas/blog.schema";


export  class CreateCommentDto{

    @IsNotEmpty()
    @IsString()
    readonly comment:string;

    readonly  user:User

    readonly  blog:Blog
}