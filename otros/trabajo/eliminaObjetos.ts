 async eliminarObjetos(
        idsObjetosAEliminar: number[],
    ) {
        try {
            return await this._objetoVisualRepository
                .createQueryBuilder()
                .update(ObjetoVisualEntity)
                .set({
                    mapaVisualOV: null,
                    mapaGrupoOV: null,
                })
                .where('id IN (:...ids)',
                    {
                        ids: idsObjetosAEliminar,
                    })
                .execute();
        } catch (e) {
            console.error({
                error: e,
                mensaje: 'Error al eliminar objetos visuales',
                data: idsObjetosAEliminar,
            });
            throw new InternalServerErrorException({
                mensaje: 'Error con el servidor',
            });
        }
    }
