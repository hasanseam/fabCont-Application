import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './query/query.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './add/edit/edit.component';
import { QueryResolverService } from './query-resolver.service';


const routes: Routes = [
{ path: '',   redirectTo: '/query', pathMatch: 'full' },
{path: 'query', component: QueryComponent, resolve:{ queryContainer: QueryResolverService} },
{path: 'add', component: AddComponent},
{path: "edit/:key", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
