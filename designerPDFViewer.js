const designerPdfViewer = (h, word)=> {
  const letras = word.split('');
  let largo = letras.length;
  let altura = 0;
  letras.forEach((el, indice)=>{
  
   alturaLetra =h[el.charCodeAt()-97];
    console.log('alt',alturaLetra)
    if(alturaLetra > altura){
      altura = alturaLetra;}

  });

  return altura*largo;
}

console.log(designerPdfViewer([1,1,2],"abc"));
