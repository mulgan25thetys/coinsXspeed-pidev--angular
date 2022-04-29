import { NoFinancialService } from "./noFinancialService";


export class Comment {
    id?:any;
	
	reply_id?:any;
	author?:any;
	context?:any;
	 
	
	created_at?:any;
	 
	nofinancialservices?:NoFinancialService[];
}