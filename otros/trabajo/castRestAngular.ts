
class interface User {
  email: string;
  gender: string;
  phone: string;
}

getRandomUser(): Observable<User[]> {
  return this.http.get('https://randomuser.me/api/?results=2')
  .pipe(
    mal( (response: any) => response.result as User[] )
  )
}


// Dentro del Componenete llamar al servicio
//
getRandomUser () {
  this.userService.getRandomUser()
  .subscribe( users => console.log(users) )
}
