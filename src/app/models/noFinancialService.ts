import { Comment } from "./comment";
import { User } from "./user";

export class NoFinancialService {

        id?:any;
	   category?:any;
	    title?:any;
	  
	
	    activityType?:any;
	    content?:any;
	  
	  
	    contentType?:any;
	    slug?:any;
	    image?:any;
	    published?:any;
	    nbr_views?:any;
	    nbr_like?:any;
	    nbr_unlike?:any;
	    beneficiaries?:any;
	    trainers?:any;
	    price?:any;
	  
	    start_?:any;
	  
	    end_?:any;
	  
	    created_at?:any;
	  
	    upd_at?:any;
	 
	   users?:User[];
	  
	   Comments?:Comment[];
	   checked?:boolean;
}