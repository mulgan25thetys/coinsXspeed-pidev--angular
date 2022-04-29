import { ScoreQuestion } from "./score-question";
import { User } from "./user";

export class ScoreForm {

    id_scoreForm?:any;
 
	title?:any;

	description?:any;
	
	created_at?:any;
    
	lastUpdated_at?:any;
	
	questions?: ScoreQuestion[];
	
    users?:User[];

	checked?:boolean;
}
 