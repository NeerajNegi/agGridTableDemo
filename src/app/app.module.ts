import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Ng2TableModule } from "ng2-table/ng2-table";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Ng2TableModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
