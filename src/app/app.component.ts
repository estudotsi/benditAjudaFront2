import { Component, OnInit } from '@angular/core';
import { PesquisaService } from './services/pesquisa.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'bendita-ajuda-front-end';
  public formRepertorio!: FormGroup;
  public repertorio?: any;

  servicos: any[] = [];
  prestadores: any[] = [];

  constructor(private service: PesquisaService,
              private config: NgSelectConfig,
              private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.pesuisarServicos();

    this.formRepertorio = this.formBuilder.group({
      servicos: ['',]
    });

  }

  public pesuisarServicos(): void{
    this.service.pesuisar().subscribe({
      next: (servico: any[]) => {
        this.servicos = servico;
        console.log("Aqui: ", this.servicos);
      },
      error: (error: any) => {

      },
      complete: () => {

      }
    });
  }

  public pesuisarPrestador(): void{
    this.repertorio = this.formRepertorio!.getRawValue();
    console.log("Aqui2", this.repertorio.servicos);
    this.service.buscarPedidosPorId(this.repertorio.servicos).subscribe({
      next: (prestadores: any[]) => {
        this.prestadores = prestadores;
        console.log("Aqui3: ", this.prestadores);
      },
      error: (error: any) => {

      },
      complete: () => {

      }
    });
  }


}
