import axios from "axios";


export class QueensRepository {
    async getAllQueens() {
        const allqueens = await axios.get('https://www.nokeynoshade.party/api/queens/all');
        return allqueens;
    }
}