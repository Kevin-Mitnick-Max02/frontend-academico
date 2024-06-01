import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
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

}
