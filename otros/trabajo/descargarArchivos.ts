// Dentro de un servicio
// Tambien ser puede utilizar la libreria file-saver.

getFile(){
  return this.http.get('assets/files/test.txt',{
    responseType; 'text'
  })
} 
