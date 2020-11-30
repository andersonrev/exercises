const crearRecaudo = (recaudo, formaPD[], rds[]) => {
  
  // Inicia las transacciòn
  
  const recaudoGuardado = recaudo.guardarEnBDD;
  
  const idRecaudo = recaudoGuardado.id;
// por cada fpd guardar los recaudos detalles  ==> O(n²)?
  for (fpd of formaPD){
    const fpdCreado = fpd.guardarEnBDD({
        ...fpd,
      idRecaudo: idRecaudo
    });
    for ( rd of rds ){
      rd.guardarEnBDD({
	...rd,
	idRecaudo: idRecaudo,
	idFPD: fpdCreado.id
      });
    }
  }
}
