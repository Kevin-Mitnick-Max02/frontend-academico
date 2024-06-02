import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { EstudianteModel } from "../../estudiante copy/models/estudiante.modelte/models/estudiante.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn : 'root',
})
export class EstudianteServices {
    private API_URL = 'http://localhost:800/estudiantes';
    constructor(private http: HttpClient){

    }
    getTodosLosEstudiantes (): Observable<EstudianteModel[]>{
        return this.http.get<EstudianteModel[]>(this.API_URL+'/getEstudiantes');
    }
    agregarEstudiante(estudiante: EstudianteModel) : Observable<EstudianteModel>{
        return this.http.post<EstudianteModel>(this.API_URL+'/registrar/'+estudiante._id, estudiante);
    }
    eliminarEstudiante(idEstudiante: String) : Observable<EstudianteModel>{
        return this.http.delete<EstudianteModel>(this.API_URL+'/eliminar/'+idEstudiante);
    }
    editarEstudiante(estudiante: EstudianteModel) : Observable<EstudianteModel>{
        return this.http.put<EstudianteModel>(this.API_URL+'/editar/'+estudiante._id, estudiante);
    }
}