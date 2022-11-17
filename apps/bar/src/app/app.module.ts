import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BazComponent } from '@foo/baz';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BazComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
