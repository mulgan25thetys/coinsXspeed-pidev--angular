import { Payment } from "./payment";

export class FinancialService{
	id_ServiceFinancial?:any;
	amount?:any;
	category?:any;
	ceiling?:any;
	createdBy_id?:any;
	date_of_creation?:any;
	date_of_updating?:any;
	duration?:any;
	interest_pr?:any;
	isAccepted?:any;
	payement: Payment[];
	reimbment_method?:any;
	checked?:boolean;
} 