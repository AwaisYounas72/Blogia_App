import { IsOptional, IsString } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { Category } from "../../category/schemas/category.schema";
import { Comment } from "../../comment/schemas/comment.schema";
import { Reaction } from "../../reaction/schemas/reaction.schema";



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