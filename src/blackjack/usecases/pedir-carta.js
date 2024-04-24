
/**
 * 
 * @param {Array<String>} deck Es un Arreglo el deck de cartas
 * @returns {String}  Retorna el String de la carta del deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}