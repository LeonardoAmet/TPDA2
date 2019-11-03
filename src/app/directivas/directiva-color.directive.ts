import { Directive, ElementRef, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDirectivaColor]'
})
export class DirectivaColorDirective {

  // No me funciono el binding; Probé muchas cosas pero nada. 
  @Input() valorMedicion: string = "11";
  

  constructor(private el:ElementRef) { 
    if(parseInt(this.valorMedicion) >= 0 && parseInt(this.valorMedicion) <= 10 ){
      //ionRow.nativeElement.style.backgroundColor = "green"
      el.nativeElement.style.backgroundColor = "green"
    }
    else if (parseInt(this.valorMedicion) > 10 && parseInt(this.valorMedicion) <= 30 ){
      el.nativeElement.style.backgroundColor = "yellow"
    }
    else {
      el.nativeElement.style.backgroundColor = "red"
    }
  }

  ngOnInit(){
    
  }
}
