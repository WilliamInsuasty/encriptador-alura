# Proyecto: Desafío Encriptador - Desencriptador de Texto - Alura

Este proyecto proporciona una interfaz para encriptar y desencriptar texto utilizando un conjunto específico de reglas de encriptación. Además, permite copiar el texto encriptado o desencriptado al portapapeles y maneja la visibilidad de los elementos de la interfaz según el tamaño de la ventana del navegador.

## Descripción

El proyecto incluye las siguientes funcionalidades:
- Encriptar texto usando una serie de reglas de sustitución.
- Desencriptar texto que ha sido encriptado.
- Copiar el texto encriptado al portapapeles.
- Actualizar el estado de los botones según la entrada del usuario.
- Manejar la visibilidad de los elementos según el tamaño de la ventana.

## Uso

1. **Ingresar texto:**
   - Escribe el texto en el área de texto principal (`texto`). No pueden haber en el texto letras mayúsculas ni caracteres especiales.
2. **Encriptar texto:**
   - Haz clic en el botón "Encriptar" (`.btn-encriptar`). El texto encriptado se mostrará en el área de texto de evaluación (`textarea-evaluar`).
3. **Desencriptar texto:**
   - Coloque directamente el texto encriptado o utilice el botón "Copiar" (`.btn-copiar`) para posteriormente pegar el texto que desea desencriptar.
   - Haz clic en el botón "Desencriptar" (`.btn-desencriptar`). El texto desencriptado se mostrará en el área de texto de evaluación (`textarea-evaluar`).
4. **Copiar texto:**
   - Haz clic en el botón "Copiar" (`.btn-copiar`) para copiar el contenido del área de texto de evaluación al portapapeles.

## Funciones Principales

### `mostrarAlerta(mensaje)`

Muestra una alerta con el mensaje proporcionado "No pueden haber en el texto letras mayúsculas ni caracteres especiales".

### `limpiarTexto()`

Limpia el área de texto principal y actualiza el estado de los botones.

### `verificarTexto(texto)`

Valida que el texto solo contenga letras minúsculas y espacios. Muestra una alerta y limpia el texto si no es válido.

### `encriptar(texto)`

Encripta el texto basado en un conjunto de reglas de sustitución y devuelve el texto encriptado. Utiliza las siguientes reglas:
- **"e"** → **"enter"**
- **"i"** → **"imes"**
- **"a"** → **"ai"**
- **"o"** → **"ober"**
- **"u"** → **"ufat"**

### `desencriptar(texto)`

Desencripta el texto basado en un conjunto de reglas de sustitución y devuelve el texto desencriptado. Utiliza las siguientes reglas:
- **"enter"** → **"e"**
- **"imes"** → **"i"**
- **"ai"** → **"a"**
- **"ober"** → **"o"**
- **"ufat"** → **"u"**

### `btnEncriptar()`

Maneja el evento del botón "Encriptar". Encripta el texto ingresado y actualiza la interfaz de usuario. Oculta los elementos de imagen y mensajes después de encriptar el texto.

### `btnDesencriptar()`

Maneja el evento del botón "Desencriptar". Desencripta el texto ingresado y actualiza la interfaz de usuario. Oculta los elementos de imagen y mensajes después de desencriptar el texto.

### `copiarTexto()`

Copia el contenido del área de texto de evaluación al portapapeles y actualiza la visibilidad de los elementos. Limpia el área de texto de evaluación después de copiar el texto.

### `actualizarEstadoBotones()`

Actualiza el estado de los botones en función del contenido de los campos de texto. Habilita o deshabilita los botones "Encriptar" y "Desencriptar" según si hay texto en el área de texto principal, y muestra u oculta el botón "Copiar" según si hay texto en el área de texto de evaluación.

### `manejarTamañoVentana()`

Maneja la visibilidad del elemento del muñeco basado en el tamaño de la ventana del navegador. Oculta el muñeco si la ventana es menor o igual a 1375 píxeles de ancho.

## Eventos

- **`input` en `textoArea`:** Actualiza el estado de los botones cada vez que el contenido del área de texto cambia. Esto asegura que los botones se habiliten o deshabiliten de acuerdo con el contenido del área de texto.
- **`resize` en `window`:** Ajusta la visibilidad del muñeco cuando el tamaño de la ventana cambia. Esto se utiliza para ocultar o mostrar el muñeco en función del ancho de la ventana.

## Contribuciones

Si deseas contribuir al proyecto, por favor realiza un fork del repositorio, crea una nueva rama para tus cambios y envía un pull request.






