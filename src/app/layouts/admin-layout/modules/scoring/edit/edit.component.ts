import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreForm } from 'src/app/models/score-form';
import { ScoringsServiceService } from 'src/app/services/scorings/scorings-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pageTitle :string ="Form Scoring > Edit";
  baseLink:string ="/admin/management/scoring/";
  // form element
  scoreform  = new ScoreForm();

  hasPropositions :boolean= false;

  constructor(private scoreform_service:ScoringsServiceService,
    private router:Router,private activedRoute:ActivatedRoute,private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // idd :Number = this.activedRoute.snapshot.params.id;
    this.scoreform_service.getScoreForm(this.activedRoute.snapshot.params.id).subscribe(
        res => {
          this.scoreform = res;
        }
    );
  }

  onEditScoreForm(){
    this.scoreform_service.updateScoreForm(this.scoreform).subscribe(
      () =>{
        this.router.navigate(['/admin/management/scoring/list-all']);
        this.toastr.success('The updating was successfull!','Updating Score Form');
      },
      error => {
        this.toastr.error(error,'An error has been occured!');
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
}
