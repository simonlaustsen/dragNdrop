import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DragNdropDirective } from './directives/drag-ndrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    DragNdropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
