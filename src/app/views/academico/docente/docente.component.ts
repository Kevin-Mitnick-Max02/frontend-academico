import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'app-docente',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, 
    CardHeaderComponent, CardBodyComponent, DocsExampleComponent, 
    ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, 
    FormControlDirective, ButtonDirective, NgStyle],
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.scss'
})
export class DocenteComponent {

}
