
/**
 * 
 * @param {String} carta Recibe el string de la Carta 
 * @returns {Number} Retorna un valor para la Carta enviada
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}