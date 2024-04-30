import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { DadosBusca, Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent {

    passagens: Passagem[] = [];
  
    constructor(private passagemService: PassagensService, private formBuscaService: FormBuscaService){}
  
    ngOnInit(): void {
      this.formBuscaService.fomularioBusca
        .subscribe(filtro => {
          this.passagemService.getPassagens(filtro)
            .subscribe(res => {
              this.passagens = res.resultado;
              console.log(this.passagens);
            });
        });
    }

    busca(ev: DadosBusca) {
        this.passagemService.getPassagens(ev).subscribe(
          res => {
            console.log(res)
            this.passagens = res.resultado
          })
      }
  }
  