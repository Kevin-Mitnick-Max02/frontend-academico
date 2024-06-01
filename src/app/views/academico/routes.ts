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
        path: 'docentes',
        loadComponent: () => import('./docente/docente.component').then(m => m.DocenteComponent),
        data: {
          title: 'Docentes'
        }
      },
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
          title: 'Reportes'
        }
      }
      ]
    }
];