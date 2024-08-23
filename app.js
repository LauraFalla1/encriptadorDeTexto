const encryptButton = document.querySelector('.button-encrypt');
const decryptButton = document.querySelector('.button-decrypt');
const rightPanel = document.querySelector('.newcontainer');
const textArea = document.querySelector('.input-text');

// Función para encriptar texto 
function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
}

// Función para desencriptar texto (reviertes las transformaciones de la encriptación)
function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

// Función para manejar el clic en el botón "Encriptar"
encryptButton.addEventListener('click', () => {
    const texto = textArea.value; // Obtenemos el texto del textarea
    if (texto) {
        const textoEncriptado = encriptarTexto(texto); // Encriptamos el texto
        
        // Actualizamos el contenido del right-panel
        rightPanel.innerHTML = `
            <p class="texto-encriptado">${textoEncriptado}</p>
            <button class="button button-copy">Copiar</button>
        `;

        // Limpiamos el textarea
        textArea.value = '';

        // Añadimos el evento de copiar al botón "Copiar"
        const copyButton = document.querySelector('.button-copy');
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(textoEncriptado).then(() => {
                alert('Texto copiado al portapapeles');
            });
        });
    } else {
        alert("Por favor ingrese un texto para encriptar");
    }
});

// Función para manejar el clic en el botón "Desencriptar"
decryptButton.addEventListener('click', () => {
    const texto = textArea.value; // Obtenemos el texto del textarea
    if (texto) {
        const textoDesencriptado = desencriptarTexto(texto); // Desencriptamos el texto
        
        // Actualizamos el contenido del right-panel
        rightPanel.innerHTML = `
            <p class="texto-encriptado">${textoDesencriptado}</p>
            <div class="copy-container">
                <button class="button button-copy">Copiar</button>
            </div>
        `;

        // Limpiamos el textarea
        textArea.value = '';

        // Añadimos el evento de copiar al botón "Copiar"
        const copyButton = document.querySelector('.button-copy');
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(textoDesencriptado).then(() => {
                alert('Texto copiado al portapapeles');
            });
        });
    } else {
        alert("Por favor ingrese un texto para desencriptar");
    }
});
