import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreForm } from 'src/app/models/score-form';
import { ScoringsServiceService } from 'src/app/services/scorings/scorings-service.service';
import swal from 'sweetalert2'; 
import { ToastrService } from 'ngx-toastr';
import { ScoreResponse } from 'src/app/models/score-response';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle:string = "Form Scoring > List All";
  baseLink:string="/admin/management/scoring/";
  is_deleted:boolean=true;

  search:string="";
  searchresponse:string="";

  listforms:ScoreForm[] = [];
  listresponses:ScoreResponse[];

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [2, 4, 8, 11];

  total_answered :any;
  total_not_answered :any;

  iduser:number;
  addFormLink :string = "admin/management/scoring/add";
  constructor(private _serviceform:ScoringsServiceService,
    private router:Router,private toastr:ToastrService,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.iduser = this.activedRoute.snapshot.params.id;
    window.scrollTo(0, 0);
    this.onActualize();
    this.getAllScoreForm(this.iduser);
  } 

  getAllScoreForm(iduser:number) {
    if (iduser) {
      this._serviceform.getScoreFormByUser(iduser).subscribe(
        res => {
          if (res != null) {
            this.listforms = [];
           this.listforms.push(res);
           this.getAllResponses(this.listforms);
          } else {
            this.toastr.info("There is no form for this user","Show form")
          }
        },
        error => {
          this.toastr.error(error,"An error has been occured!");
        }
      )
    } else {
      this._serviceform.getAllScoreForms().subscribe(
        res =>{
            this.listforms = res; 
          this.getAllResponses(this.listforms);
        },
        error =>{  console.log(error);  }
      )
    }
  }

  getAllResponses(list:ScoreForm[]){  
    this._serviceform.getResponsesForm().subscribe(
      res => {
        this.listresponses =res;
        this.total_answered = res.map(item => item.form.id_scoreForm)
        .filter((value, index, self) => self.indexOf(value) === index).length
        this.total_not_answered = list.length - this.total_answered;
      },
      error => { console.log(error);  }
    )
  }

  onActualize(){
    this.getAllScoreForm(this.iduser);
  }

  onDeleteScoreForm(id:any){
    swal.fire({
      title: 'Are you sure?',
      text: "This form will be delete!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, continue!'
    }).then((res) =>{
          if((res.isConfirmed)){
            this._serviceform.deleteScoreForm(id).subscribe(
              () =>{ this.toastr.success("Deletion",'The Form has been deleted!'); },
              (err) => { this.toastr.warning(err,'An error has been occured!')}
            );
            swal.fire(
              'Deletion!',
              'Done!',
              'success'
            ).then((res) =>{
              // window.location.reload;/
              this.ngOnInit();
            })
          }
      })
  }

  ondeleteAnyResponse(id:any){
    this._serviceform.deleteScoreResponse(id).subscribe(
      res => {
        this.toastr.success("Deletion",'The response has been deleted!');
        this.ngOnInit();
      },
      error =>{ this.toastr.error(error,'An error has been occured!') } )
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllScoreForm(this.iduser);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllScoreForm(this.iduser);
  }
  //checkAllCheckBox(ev) { // Angular 9
  checkAllCheckBox(ev: any) { // Angular 13
		this.listforms.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.listforms?.every(f => f?.checked);
	}
}
