import { IsString, MinLength } from "class-validator";

export class CreateChatDto {
    @IsString()
    @MinLength(1)
    message_from_client: string;
}
