import { GoogleGenAI } from "@google/genai";
import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";

@Injectable()
export class GeminiService {
    private readonly logger: Logger = new Logger('gemini.service');
    private ai: GoogleGenAI;
    private readonly modelGemini: string;
    constructor(api_key: string, model: string) {
        this.ai = new GoogleGenAI({ apiKey: api_key });
        this.modelGemini = model;
    }

    async simpleChat(message: string): Promise<string | undefined> {
        try {
            const response = await this.ai.models.generateContent({
                model: this.modelGemini,
                contents: message
            })
            return response.text;
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException(`It was not possible to get response from IA. PLease check server errors`);

        }
    }
}