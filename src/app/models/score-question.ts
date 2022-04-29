import { ScoreProposition } from "./score-proposition";

export class ScoreQuestion {

	constructor(
		id_scoreQuestion : any,

		created_at:any,

		questionForm:any,

		title:any,

		description:any,

		points :any,

		answer : ScoreProposition,

		propositions: ScoreProposition[]
	  ) {  }
	
    id_scoreQuestion : any;

	title :any;

	description :any;

	points :any;

	created_at:any;
	
	propositions:ScoreProposition[];
    
	answer:ScoreProposition;
}
