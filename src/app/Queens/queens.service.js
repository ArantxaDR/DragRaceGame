import { QueensRepository } from "./queens.repository";

export class QueensService {

    constructor(){
        this.repository = new QueensRepository();
    }

    async getQueens() {
        return await this.repository.getAllQueens();

    }
}