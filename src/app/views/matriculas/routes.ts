import { Routes } from '@angular/router';
export const routes: Routes = [
   
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'matriculas',
        loadComponent: () => import('./matricula/matricula.component').then(m => m.MatriculaComponent),
        data: {
          title: 'Matriculas'
        }
      },  
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
          title: 'Reportes'
        }
      },
      
      ]
    }
];