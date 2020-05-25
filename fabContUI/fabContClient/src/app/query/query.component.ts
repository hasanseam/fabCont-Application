import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  results:any = []
  mySubscription:any;
  constructor(private _route:ActivatedRoute,private router:Router) { 
    this.results = this._route.snapshot.data['queryContainer']
    console.log(this.results)
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
      } 
  }
  
  ngOnInit(): void {

  }

  editContainer(cnr){
    this.router.navigate(['/edit',cnr]);
  }
  
}
