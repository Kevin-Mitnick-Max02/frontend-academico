import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { EstudianteModel } from "../../estudiantes/models/estudiante.model";
import { EstudianteServices } from "../../estudiantes/services/estudiante.service";
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TableColorDirective, 
  TableActiveDirective, TextColorDirective, FormSelectDirective, 
  CardComponent, CardHeaderComponent, CardBodyComponent, 
  FormDirective, FormLabelDirective, FormControlDirective, 
  ButtonDirective, BorderDirective, TableDirective} from '@coreui/angular';

@Component({
  selector: 'app-docente',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, 
    CardHeaderComponent, CardBodyComponent, DocsExampleComponent, 
    ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, 
    FormControlDirective, ButtonDirective, NgStyle, FormSelectDirective, 
    TableDirective,TableColorDirective, TableActiveDirective, BorderDirective],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class DocenteComponent {
  listaEstudiantes : EstudianteModel[] = [];
  estudianteModelo : EstudianteModel = new EstudianteModel();

  constructor(private estudianteService: EstudianteServices){
    this.getEstudiante();
  }
  getEstudiante(){
    this.estudianteService.getTodosLosEstudiantes().subscribe({
      next : (Response) => {
        console.log(Response);
        this.listaEstudiantes = Response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  };
  guardarEstudiante(){
      console.log(this.estudianteModelo);
       if(this.estudianteModelo._id == ''){
        console.log("guardar", this.estudianteModelo);
        this.agregarEstudiante();
       }else{
        console.log("editar", this.estudianteModelo);
        this.editarEstudiante();
       }
  }
  verEstudiante(e : EstudianteModel){
    this.estudianteModelo = e;
  }
  agregarEstudiante(){
    this.estudianteService.agregarEstudiante(this.estudianteModelo).subscribe({
      next : (Response) => {
        console.log(Response);
        console.log("Datos registrados exitosamente",Response); 
        this.getEstudiante();
        this.estudianteModelo = new EstudianteModel();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  eliminarEstudiante(e : EstudianteModel){
    console.log("item para eliminar",e);
    this.estudianteService.eliminarEstudiante(e._id).subscribe({
      next : (Response) => {
        console.log(Response);
        console.log("Datos eliminados exitosamente",Response); 
        this.getEstudiante();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
    editarEstudiante(){
      this.estudianteService.editarEstudiante(this.estudianteModelo).subscribe({
        next : (Response) => {
          console.log("Datos editados exitosamente",Response); 
          this.getEstudiante();
          this.estudianteModelo = new EstudianteModel();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
