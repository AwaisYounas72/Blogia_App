import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { Category } from "../../category/schemas/category.schema";
import { Comment } from "../../comment/schemas/comment.schema";
import { Reaction } from "../../reaction/schemas/reaction.schema";



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