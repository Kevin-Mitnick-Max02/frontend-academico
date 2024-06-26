import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { DocenteModel } from "../models/docente.model";
import { DocenteServices } from "../services/docente.service";
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
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.scss'
})
export class DocenteComponent {
  listaDocentes : DocenteModel[] = [];
  docenteModelo : DocenteModel = new DocenteModel();

  constructor(private docenteService: DocenteServices){
    this.getDocentes();
  }
  getDocentes(){
    this.docenteService.getTodosLosDocente().subscribe({
      next : (Response) => {
        console.log(Response);
        this.listaDocentes = Response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  };
  guardarDocente(){
      console.log(this.docenteModelo);
       if(this.docenteModelo._id == ''){
        console.log("guardar", this.docenteModelo);
        this.agregarDocente();
       }else{
        console.log("editar", this.docenteModelo);
        this.editarDocente();
       }
  }
  verDocente(m : DocenteModel){
    this.docenteModelo = m;
  }
  agregarDocente(){
    this.docenteService.agregarDocente(this.docenteModelo).subscribe({
      next : (Response) => {
        console.log(Response);
        console.log("Datos registrados exitosamente",Response); 
        this.getDocentes();
        this.docenteModelo = new DocenteModel();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  eliminarDocente(m : DocenteModel){
    console.log("item para eliminar",m);
    this.docenteService.eliminarDocente(m._id).subscribe({
      next : (Response) => {
        console.log(Response);
        console.log("Datos eliminados exitosamente",Response); 
        this.getDocentes();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
    editarDocente(){
      this.docenteService.editarDocente(this.docenteModelo).subscribe({
        next : (Response) => {
          console.log("Datos editados exitosamente",Response); 
          this.getDocentes();
          this.docenteModelo = new DocenteModel();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
