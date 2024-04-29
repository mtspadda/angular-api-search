import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

  @Output() realizarBusca = new EventEmitter()

  constructor( 
    public formBuscaService : FormBuscaService) {}

  buscar () {
    if (this.formBuscaService.valid){
    const formBuscaValue = this.formBuscaService.formBusca.value;
    this.realizarBusca.emit(formBuscaValue)
  } else {
    alert("O formulário precisa ser preenchido")
  }
  }
}
