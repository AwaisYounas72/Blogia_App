import { IsEnum } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { Blog } from "../../blogs/schemas/blog.schema";
import { ReactionType } from "../schemas/reaction.schema";

 

export  class CreateReactionDto{

    @IsEnum(ReactionType)
    readonly reactionType:ReactionType


    readonly  user:User

    readonly  blog:Blog

}