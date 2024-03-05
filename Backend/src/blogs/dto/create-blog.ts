import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";
import { Category } from "src/category/schemas/category.schema";
import { Comment } from "src/comment/schemas/comment.schema";
import { Reaction } from "src/reaction/schemas/reaction.schema";



export  class CreateBlogDto{

    @IsNotEmpty()
    @IsString()
    readonly title:string;

    @IsNotEmpty()
    @IsString()
    readonly content:string;

    @IsEmpty({message: 'not input user'})
    readonly  user:User

    @IsNotEmpty()
    @IsString()
    readonly  category:Category

    readonly reaction:Reaction

    readonly comments:Comment[]

}