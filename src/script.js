const searchWords = (...strings) => {
    let resultado = '%20%28';
    for (let i = 0; i < strings.length; i++) {
        if (resultado !== '%20%28') {
            resultado += '%20OR%20';
        }
        if (strings[i] == ' ') {
            resultado += '%20';
        }
        else {
            resultado += strings[i];
        }
    }
    return resultado.concat('%29');
}
const resetError = () => {
    setTimeout(() => {
        optionError.innerHTML = '';
    }, 2500);
}
const openWindow = (searchQuery) => {
    window.open(searchQuery, '_blank')
}
function buscarTweets() {
    const twitterUsername = document.getElementById('twitterUsername').value
    const opcion = document.getElementById('filtros')
    const optionError = document.getElementById('optionError');
    const twitterSearch = "https://twitter.com/search?q=from%3A";
    let searchQuery = twitterSearch + `${twitterUsername}`;

    if (twitterUsername.length > 0) {
        switch (opcion.value) {
            case 'machistas':
                searchQuery += searchWords('mujer', 'mujeres', 'putas');
                openWindow(searchQuery);
                break;
            case 'homofob':
                searchQuery += searchWords('gay', 'gays', 'putos', 'trolos');
                openWindow(searchQuery);
                break;
            case 'racistas':
                searchQuery += searchWords('negro', 'negros', 'marron', 'marrones', 'nword');
                openWindow(searchQuery);
                break;
            case 'aborto':
                searchQuery += searchWords('aborto', 'niunamenos', 'dos vidas', 'anti derechos');
                openWindow(searchQuery);
                break;
            case 'messi':
                searchQuery += `%20messi%20until%3A2021-01-01`
                openWindow(searchQuery);
                break;
            case 'electoral':
                searchQuery += searchWords('milei', 'massa', 'larreta', 'bullrich');
                openWindow(searchQuery);
                break;
            case 'cuarentena':
                searchQuery += searchWords('pandemia', 'cuarentena', 'vacunas');
                openWindow(searchQuery);
                break;
            case 'seleccione':
                optionError.innerHTML = 'Ingrese una opción válida!!!';
                resetError();
                break;
            default:
                break;
        }
    } else {
        optionError.innerHTML = 'Ingrese un usuario valido!!!';
        resetError();
    }
}




