 if (idAtencionesPasoNumACompletar.length > 0){
                              const atencionPasoCabecera = await repositorioAtencionPasoNumero.find(
                                {
                                  relations: ['atencionPasoCabeceraAPN'],
                                  where: {
                                    id: idAtencionesPasoNumACompletar[0],
                                  },
                                },
                              );
                             /!* const respuesta = await repositorioAtencionPasoNumero.createQueryBuilder('atencionPasoNumero').
                                innerJoinAndSelect('atencionPasoNumero.atencionPasoCabeceraAPN',
                                'pasoCabecera',
                                'pasoCabecera.id=atencionPasoNumero.atencionPasoCabeceraAPN')
                                .where('atencionPasoNumero.id=:idAtencionesPasoNumACompletar', {
                                  idAtencionesPasoNumACompletar: idAtencionesPasoNumACompletar[0],
                              }).getMany();*!/
                              if (atencionPasoCabecera.length > 0){
                                // tslint:disable-next-line:max-line-length
                                const idPasoCabecera = typeof atencionPasoCabecera[0].atencionPasoCabeceraAPN === 'object' ? atencionPasoCabecera[0].atencionPasoCabeceraAPN.id : -1 ;
                                const atencionesPasoNumero: AtencionPasoNumeroEntity[] = await repositorioAtencionPasoNumero.find(
                                  {relations: ['atencionPasoCabeceraAPN'],
                                  where: {
                                    atencionPasoCabeceraAPN: idPasoCabecera,

                                  }});
                                const respuestaAlgunaIncompleto = atencionesPasoNumero.some((val: AtencionPasoNumeroEntity) => val.completo === 0);
                                if (!respuestaAlgunaIncompleto){
                                   await repositorioAtencionPasoCabecera.save(
                                    {
                                      id: idPasoCabecera,
                                      completo: 1},
                                      );
                                   // await repositorioAtencionPasoCabecera.findOne(idPasoCabecera);
                                }
                              }
                            }
