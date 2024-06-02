import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { MatriculaModel } from "../models/matricula.model";
import { MatriculaServices } from "../services/matricula.service";
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TableColorDirective, 
  TableActiveDirective, TextColorDirective, FormSelectDirective, 
  CardComponent, CardHeaderComponent, CardBodyComponent, 
  FormDirective, FormLabelDirective, FormControlDirective, 
  ButtonDirective, BorderDirective, TableDirective } from '@coreui/angular';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, 
    CardHeaderComponent, CardBodyComponent, DocsExampleComponent, 
    ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, 
    FormControlDirective, ButtonDirective, NgStyle, FormSelectDirective, 
    TableDirective,TableColorDirective, TableActiveDirective, BorderDirective ],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.scss'
})
export class MatriculaComponent {
  listaMatriculas : MatriculaModel[] = [];
  matriculaModelo : MatriculaModel = new MatriculaModel();

  constructor(private matriculaService: MatriculaServices){
    this.getMatriculas();
  }
  getMatriculas(){
    this.matriculaService.getTodasLasMatricula().subscribe({
      next : (Response) => {
        console.log(Response);
        this.listaMatriculas = Response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  };
  guardarMatricula(){
      console.log(this.matriculaModelo);
       if(this.matriculaModelo._id == ''){
        console.log("guardar", this.matriculaModelo);
        this.agregarMatricula();
       }else{
        console.log("editar", this.matriculaModelo);
        this.editarMatricula();
       }
  }
  verMatricula(m : MatriculaModel){
    this.matriculaModelo = m;
  }
  agregarMatricula(){
    this.matriculaService.agregarMatricula(this.matriculaModelo).subscribe({
      next : (Response) => {
        console.log(Response);
        console.log("Datos registrados exitosamente",Response); 
        this.getMatriculas();
        this.matriculaModelo = new MatriculaModel();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  eliminarMatricula(m : MatriculaModel){
    console.log("item para eliminar",m);
    this.matriculaService.eliminarMatricula(m._id).subscribe({
      next : (Response) => {
        console.log(Response);
        console.log("Datos eliminados exitosamente",Response); 
        this.getMatriculas();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
    editarMatricula(){
      this.matriculaService.editarMatricula(this.matriculaModelo).subscribe({
        next : (Response) => {
          console.log("Datos editados exitosamente",Response); 
          this.getMatriculas();
          this.matriculaModelo = new MatriculaModel();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
