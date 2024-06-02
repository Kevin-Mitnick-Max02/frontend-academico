import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { DocenteModel } from "../models/docente.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn : 'root',
})
export class DocenteServices {
    private API_URL = 'http://localhost:800/docentes';
    constructor(private http: HttpClient){

    }
    getTodosLosDocente (): Observable<DocenteModel[]>{
        return this.http.get<DocenteModel[]>(this.API_URL+'/getDocentes');
    }
    agregarDocente(docente: DocenteModel) : Observable<DocenteModel>{
        return this.http.post<DocenteModel>(this.API_URL+'/registrar/'+docente._id, docente);
    }
    eliminarDocente(idDocente: String) : Observable<DocenteModel>{
        return this.http.delete<DocenteModel>(this.API_URL+'/eliminar/'+idDocente);
    }
    editarDocente(docente: DocenteModel) : Observable<DocenteModel>{
        return this.http.put<DocenteModel>(this.API_URL+'/editar/'+docente._id, docente);
    }
}