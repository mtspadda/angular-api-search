import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(
    public formBuscaService: FormBuscaService,
    public passagensService: PassagensService
  ){}

  busca(){
    if(!this.formBuscaService.valid){
      this.formBuscaService.formBusca.markAllAsTouched()
      window.scroll({
        top: 0,
        left: 0,
        behavior:'smooth'
      })
      return
    }
    this.realizarBusca.emit(this.formBuscaService.obterDadosBusca())
  }

  limparFiltros(){
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagensService.precoMin,
      precoMax: this.passagensService.precoMax
    })
  }
}
