import { 
  Component, 
  OnInit, 
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import * as $ from "jquery";

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: []
})
export class ModalTrailerComponent implements OnInit, OnDestroy, OnChanges {

  @Input("trailerURL") trailerURL:SafeResourceUrl;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){
    // $("#modalTrailer iframe").attr("src", "");
  }
  ngOnChanges(SimpleChanges:SimpleChanges){
    console.log("change");
    console.log(SimpleChanges);
    // $("#modalTrailer").on("hidden.bs.modal", function(){
    //   SimpleChanges.trailerURL.currentValue.changingThisBreaksApplicationSecurity += "?enablejsapi=1";
    //   console.log(SimpleChanges.trailerURL.currentValue.changingThisBreaksApplicationSecurity);
    // })
  }

}
