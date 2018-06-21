import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TintucService } from '../../Services/tintuc.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./../../../assets/scss/layout/_TinTuc.scss']
})
export class TinTucComponent implements OnInit {
  renderer: any;
  public entryNews:number = 3;
  private listNews_1:Array<any>;
  private listNews_2:Array<any>;
  public amountNews_2:number;
  constructor(private _newService:TintucService) { }

  ngOnInit() {
    this.listNews_1 = this._newService.getNews_1();
    this.listNews_2 = this._newService.getNews_2();
    this.amountNews_2 = this.listNews_2.length; 
  }
  @ViewChild("btnSeemore") btnSeeMore:ElementRef;
  @ViewChild("btnSeeless") btnSeeLess:ElementRef;
  seemore(btnMore, btnLess){
    if(this.entryNews < this.amountNews_2){
      
    }
    else{
      // btnSeeMore.clas
    }
  }
  ngOnChanges(){
    console.log(this.entryNews);
  }

  seeless(btnMore, btnLess){
    // if(this.entryNews >= this.amountNews_2){
    //   this.entryNews -= 2;
    // }
    // console.log(this.entryNews);
  }
}
