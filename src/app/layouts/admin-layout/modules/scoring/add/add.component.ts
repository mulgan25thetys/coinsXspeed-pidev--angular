import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreForm } from 'src/app/models/score-form';
import { ScoringsServiceService } from 'src/app/services/scorings/scorings-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageTitle :string ="Form Scoring > Add";
  baseLink:string ="/admin/management/scoring/";
  // form element
  scoreform  = new ScoreForm();

  hasPropositions :boolean= false;
  showAlert=false;
  messageAlert="";
  
  constructor(private scoreform_service:ScoringsServiceService,
    private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.scoreform.questions =[];
  }

  onAddScoreForm(form:NgForm){
    this.scoreform_service.addScoreForm(this.scoreform).subscribe(
      () =>{
        //this.router.navigate(['/admin/management/scoring/list-all'])
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        this.scoreform.questions = [];
        form.reset();
        this.toastr.success('Add Scoring Form',"the operation was carried out successfully!");
      },
      error => {
        console.log(error);
        this.toastr.error(error.status,'An error has been occured!');
      }
    )
  }

  addQuestion (){
    
    this.scoreform.questions.push(
      {id_scoreQuestion:'',created_at :'',title :'',description :'',points : '',
      answer :{id_proposition:'',description:'',created_at:''},propositions : []}
      );
  }

  removeQuestion(i){
    this.scoreform.questions.splice(i,1);
    
  }

  addProposition(i){
    this.scoreform.questions[i].propositions.push(
      {id_proposition:'',description:'',created_at:''}
    )
  }

  removeProposition(i,j){
    this.scoreform.questions[i].propositions.splice(j,1);
  }

  /*errormsg = error.statusText */
}
