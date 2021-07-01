import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { StructureDirectiveDomOperationComponent } from './structure-directive-dom-operation/structure-directive-dom-operation.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    StructureDirectiveComponent,
    StructureDirectiveDomOperationComponent,
    AttributeDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
