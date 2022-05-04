import { Account } from "./account";

export class Transaction{
    idTransaction :any;
	
	type? :any;
	amont? :any;
	creditAcc? :any;
	debtorAcc? :any;
	
	created_at? :any;
	
	account?: Account ;
	checked?:boolean;
} 