import { Account } from "./account";
import { Claim } from "./claim";
import { Communication } from "./communication";
import { Notification } from "./notification";
import { ScoreForm } from "./score-form";

export class User{

    userId : any;
    userName : any;
    password : any;
    role : any;
    gender? : any;
    level? : any;
    situation? : any;
    email? : any;
    city ?: any;
    country? : any;
    address? : any;
    phone? : any;
    date_of_birth? : any;
    age? : any;
    salary? : any;
    holidays? : any;
    updated_at? : any;
    banned_at? : any;
    only? : false;
    failed_login_attemp? : any;
    session_per_user? : any;
    egroup? : any;
    status? : any;
    join_groupe? : any;
    idle_time? : any;
    created_at? : any;
    privileges? : any;
    usernoservice? : any;
    scoreform? : ScoreForm;
    communications? : Communication[];
    notifications? : Notification[];
    account? : Account;
    claim? : Claim[];
    remember_me?:any;
    token?:any;
    checked?:boolean;
}