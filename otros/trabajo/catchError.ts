// dentro de un servicio donde se realiza las peticiones rest

import {
  retry } from 'rxjs/operators';

getRandomUsers(): Observable<User[]> {
  return this.http.get('http://reandadjfalkfjaldf.com/api/axxx')
  .pipe(
    retry(3), // intenta realizar 3 veces más la peticion.
    catchError(error => {
      return throwError('Ups algo salio mal');
    }),
    map((response: any)=> response.results as User[]),

  )
}
