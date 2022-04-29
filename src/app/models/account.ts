import { User } from "./user"; 
import { FinancialService } from "./financialService";
import { Transaction } from "./transaction";

export class Account {
    id_account : any;
    
    type :any ;
    
    account_number : any;
    
    capital : any;
    
    score:any;
    
    isApproved:any;
    
    state :any;
    
    updated_at:any;
    
    created_at:any;
    
    financialServices?:FinancialService[];
    
    transactions: Transaction[];

    user: User;

    checked?:boolean;
}
 