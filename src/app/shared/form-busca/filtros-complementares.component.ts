import { Component, Directive, EventEmitter, Output } from "@angular/core";
import { FormBuscaService } from "src/app/core/services/form-busca.service";

@Directive({
    selector: 'app-filtros-complementares'
})
export class FiltrosComplementaresComponent {
    
    @Output() realizarBusca = new EventEmitter();

    constructor(private formBuscaService: FormBuscaService){}
      

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
    
  }