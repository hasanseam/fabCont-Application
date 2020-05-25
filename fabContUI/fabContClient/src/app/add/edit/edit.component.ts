import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QueryService } from 'src/app/query.service';
import { Container } from 'src/app/container.model';
import { NgForm } from '@angular/forms';
import { AddcontService } from 'src/app/addcont.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  cnr:string = '';
  result:any;
  container:Container;
  constructor(private _addContainerServeice:AddcontService,private _toastrService:ToastrService,private router:Router,private route: ActivatedRoute, private _queryService:QueryService) { }

  fillInputField(cnr){
    let obs = this._queryService.querySingle(cnr)
    obs.subscribe((response)=> {
      this.result = response;
      //console.log(this.result)
      this.container = new Container(this.result.CNR, 
                                     this.result.Record.vgm,this.result.Record.type,this.result.Record.status,this.result.Record.destination,                      
                                     this.result.PrivRecord.cargo,this.result.PrivRecord.location,
                                    )
    });
  }
  showSuccess() {
    this._toastrService.success("Wait a bit to Update the data","Successfully Updated");
  }
  updateFormSubmit(updateContainerForm:NgForm){
    let obs= this._addContainerServeice.addContainer(this.container); 
    obs.subscribe(
      data => { 
        this.showSuccess() 
        //
        setTimeout(function(){ 
          window.location.href = "/query"
      }, 2000);
      },
      error => console.log(error),
      () => {
        
      }
    ) 
    //this.refresh()
  }
  refresh(): void {
    window.location.reload();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cnr = params["key"]
      console.log(this.cnr)
    })
    this.fillInputField(this.cnr)
  }

}
