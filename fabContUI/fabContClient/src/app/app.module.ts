import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QueryComponent } from './query/query.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './add/edit/edit.component';
import { QueryResolverService } from './query-resolver.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueryComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [QueryResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
