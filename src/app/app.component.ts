import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondProject';
  public input = Array(25);
  count:number  = 1;
  flag:boolean  = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void  {
    if  ((window.innerHeight + window.scrollY)  >= document.body.offsetHeight)  {
      this.flag = true;
      setTimeout(() =>  {
        this.flag = false;
        this.input = [...this.input, this.count++];
      }, 500);
      console.log(this.count);
    }
  }
}
