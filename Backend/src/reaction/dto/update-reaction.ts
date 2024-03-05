import { IsEnum } from "class-validator";
import { User } from "src/auth/schemas/user.schema";
import { Blog } from "src/blogs/schemas/blog.schema";
import { ReactionType } from "../schemas/reaction.schema";

 

export  class UpdateReactionDto{
    
    @IsEnum(ReactionType)
    readonly reactionType:ReactionType


    readonly  user:User

    readonly  blog:Blog

}