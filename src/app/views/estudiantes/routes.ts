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
        path: 'estudiante',
        loadComponent: () => import('../estudiantes/estudiante/estudiante.component').then(e => e.EstudianteComponent),
        data: {
          title: 'Estudiante'
        }
      },
      /*
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
          title: 'Reportes'
        }
      }*/
      ]
    }
];