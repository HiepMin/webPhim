import { Injectable } from '@angular/core';
import swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {



  constructor() { }


  AlertWarning(title, callback){
    swal({
      title: `${title}`,
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No!',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if(result.value){
        callback();
      }
    })
  }

  toastRight(title){
    swal({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      type: 'success',
      title: `${title}`
    });
  }


}
