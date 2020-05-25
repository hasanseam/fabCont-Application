import { Component, OnInit } from '@angular/core';
import {Container} from '../container.model';
import { NgForm } from '@angular/forms';
import { AddcontService } from '../addcont.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  container = new Container('','','','','','','')
  constructor(private router:Router,private _addContainerServeice:AddcontService,private _toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess(){
    this._toastrService.success("Successfully saved");   
  }
  addContainerFormSubmit(addContainerform : NgForm){
    let obs= this._addContainerServeice.addContainer(this.container); 
      obs.subscribe(
        data => { 
          this.showSuccess()
          addContainerform.reset()
          //this.router.navigate(['/query']);
        },
      )

  }
}
