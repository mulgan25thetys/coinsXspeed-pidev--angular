import { ScoreForm } from "./score-form";
import { User } from "./user";

export class ScoreResponse {
    
    id_response?: any;
    result?: any;
    total?: any;
    score?: any;
    user?: User;
    response_date?: any;
    approved?: any;
    form?: ScoreForm;
    checked?:boolean;
}
