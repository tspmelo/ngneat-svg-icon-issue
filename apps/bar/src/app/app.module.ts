import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BazComponent, sqIcons } from '@foo/baz';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BazComponent],
  providers: [provideSvgIcons([...sqIcons])],
  bootstrap: [AppComponent],
})
export class AppModule {}
