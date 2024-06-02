import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { MatriculaModel } from "../models/matricula.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn : 'root',
})
export class MatriculaServices {
    private API_URL = 'http://localhost:800/matricula';
    private API_URL1 = 'http://localhost:800/estudiantes';
    constructor(private http: HttpClient){

    }
    getTodasLasMatricula (): Observable<MatriculaModel[]>{
        return this.http.get<MatriculaModel[]>(this.API_URL+'/getMatricula');
    }
    agregarMatricula(matricula: MatriculaModel) : Observable<MatriculaModel>{
        return this.http.post<MatriculaModel>(this.API_URL+'/registrar/'+matricula._id, matricula);
    }
    eliminarMatricula(idMatricula: String) : Observable<MatriculaModel>{
        return this.http.delete<MatriculaModel>(this.API_URL+'/eliminar/'+idMatricula);
    }
    editarMatricula(matricula: MatriculaModel) : Observable<MatriculaModel>{
        return this.http.put<MatriculaModel>(this.API_URL+'/editar/'+matricula._id, matricula);
    }
    getReporte1 (): Observable<MatriculaModel[]>{
        return this.http.get<MatriculaModel[]>(this.API_URL1+'/reporte/no-matriculados');
    }
}