import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TableColorDirective, 
  TableActiveDirective, TextColorDirective, FormSelectDirective, 
  CardComponent, CardHeaderComponent, CardBodyComponent, 
  FormDirective, FormLabelDirective, FormControlDirective, 
  ButtonDirective, BorderDirective, TableDirective } from '@coreui/angular';
import { MatriculaServices } from '../services/matricula.service';
import { MatriculaModel } from '../models/matricula.model';
import { EstudianteModel } from '../../estudiantes/models/estudiante.model';
import { EstudianteServices } from '../../estudiantes/services/estudiante.service';
@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, 
    CardHeaderComponent, CardBodyComponent, DocsExampleComponent, 
    ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, 
    FormControlDirective, ButtonDirective, NgStyle, FormSelectDirective, 
    TableDirective,TableColorDirective, TableActiveDirective, BorderDirective ],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {
  listaEstudiantes : EstudianteModel[] = [];
  estudianteModelo : EstudianteModel = new EstudianteModel();

  constructor(private estudianteService: EstudianteServices){
    this.getReporte1();
  }
  getReporte1(){
    this.estudianteService.getReporte1().subscribe({
      next : (Response) => {
        console.log(Response);
        this.listaEstudiantes = Response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  };

}
