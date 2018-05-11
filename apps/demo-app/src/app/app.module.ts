import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RockModuleModule } from '@nx-rock-workspace/rock-module';

@NgModule({
  imports: [
    BrowserModule, 
    NxModule.forRoot(),
    RockModuleModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
