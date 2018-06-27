import { Injectable } from '@angular/core';
import swal from 'sweetalert2';



@Injectable({
	providedIn: 'root'
})
export class SweetAlertService {



	constructor() { }

	AlertError(...title){
		swal({
			type: 'error',
			title: `${title}`,
			text: `${title}`,
		})
	}

	AlertSuccess(title, callback){
		swal({
			title: `${title}`,
			type: 'success',
			showCancelButton: true,
		}).then((result) => {
			if (result.value) {
				callback();
			}
		})
	}
	AlertWarning(title, callback) {
		swal({
			title: `${title}`,
			type: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'No!',
			confirmButtonText: 'Yes!'
		}).then((result) => {
			if (result.value) {
				callback();
			}
		})
	}

	toastRight(title) {
		swal({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			type: 'success',
			title: `${title}`
		});
	}
	toastRight_err(title) {
		swal({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			type: 'warning',
			title: `${title}`
		});
	}


}
