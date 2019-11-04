import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';

@Directive({
	selector: '[dragNdrop]'
})
export class DragNdropDirective {
	@Output() private filesChangeEmiter : EventEmitter<FileList> = new EventEmitter();
	@HostBinding('style.background') private background = '#eee';

	constructor() { }

	@HostListener('dragover', ['$event']) onDragOver(event) {
		console.log(event);
		event.preventDefault();
		event.stopPropagation();
		this.background = '#999';
		let files = event.dataTransfer.files;
		if (files.length > 0) {
			//do some stuff here
		}
	}

	@HostListener('dragleave', ['$event']) public onDragLeave(event) {
		event.preventDefault();
		event.stopPropagation();
		this.background = '#eee'
		//do some stuff
	}

	@HostListener('drop', ['$event']) public onDrop(event) {
		event.preventDefault();
		event.stopPropagation();
		let files = event.dataTransfer.files;
		if (files.length > 0) {
			this.background = '#eee'
			this.filesChangeEmiter.emit(files);
		}
	}

}
