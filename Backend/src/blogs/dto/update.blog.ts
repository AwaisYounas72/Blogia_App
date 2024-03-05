import { IsOptional, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";
import { Category } from "src/category/schemas/category.schema";
import { Comment } from "src/comment/schemas/comment.schema";
import { Reaction } from "src/reaction/schemas/reaction.schema";



export  class UpdateBlogDto{

    @IsOptional()
    @IsString()
    readonly title:string;

    @IsOptional()
    @IsString()
    readonly content:string;

    readonly  user:User

    @IsOptional()
    @IsString()
    readonly  category:Category

    readonly reaction:Reaction

    readonly comments:Comment[]
}