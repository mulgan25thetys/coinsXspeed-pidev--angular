import { Account } from "./account";
import { FinancialService } from "./financialService";

export class Payment{
    
      id_Payement?:any;
	  remaining_amount?:any ;
	  interest?:any ;
	  amortization?:any ;
	  mensuality?:any ;
	  paid_amount?:any ;
	  dateLimit?:any ;
	  creation_date?:any ;
	  paid_at?:any;
	  account?:Account;
	  financialService?:FinancialService ;
	  checked?:boolean; 
}