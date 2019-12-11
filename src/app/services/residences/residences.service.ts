import { Residence } from "./../../model/residence.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ResidenceRoutes } from "../routes/service-routes";
import { Shotgun } from 'src/app/model/shotgun.model';

@Injectable({
  providedIn: "root"
})
export class ResidencesService {
  private _ResidencesList: BehaviorSubject<
    Map<string, Shotgun>
  > = new BehaviorSubject(new Map<string, Shotgun>());

  public residencesList: Observable<
    Map<string, Shotgun>
  > = this._ResidencesList.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getResidences() {
    this.httpClient
      .get<Map<string, Shotgun>>(ResidenceRoutes.GET_RESIDENCES())
      .subscribe((values: Map<string, Shotgun>) => {
        this._ResidencesList.next(values);
      });
  }

  public getResidencesShotguns() {
    this.httpClient
      .get<Map<string, Shotgun>>(ResidenceRoutes.GET_RESIDENCES_SHOTGUNS())
      .subscribe((values: Map<string, Shotgun>) => {
        this._ResidencesList.next(values);
      });
  }
}
