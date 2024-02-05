import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environment/environment";
import { Observable } from "rxjs";
import { Wish } from "../../../shared/interfaces";

@Injectable()
export class WishListService {
  private readonly _url = environment.baseBackendUrl;
  private readonly _headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Origin', '*');
  constructor(private readonly _http: HttpClient) { }

  public createWish(title: string): Observable<void> {
    return this._http.post<void>(
      `${this._url}/wishes`,
      { title },
      { headers: this._headers }
    )
  }
  public getAllWishes(): Observable<Wish[]> {
    return this._http.get<Wish[]>(`${this._url}/wishes`,{ headers: this._headers })
  }
}
