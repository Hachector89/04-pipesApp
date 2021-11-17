# 04-pipesApp

_Aplicación para profundizar en el uso de pipes básicos y poco comunes de Angular tales como uppercase, date, i18nSelect, i18nPlural, currency, además de otros pipes creados manualmente._

## Pre-requisitos:

Esta aplicación requiere Angular CLI v12 y Node v16 para su correcta ejecucíón

## Ejecución

En la consola de comandos, use `ng serve -o` para abrir ejecutar el proyecto y que se abra automáticamente una pestaña `http://localhost:4200/` en el navegador.

# App GifsApp:

## Componente Básicos

Muestra el uso de una serie de Pipes básicos de Angular, conviertiendo texto en mayúsculas, minúsculas o distintos formatos de fechas.

## Componente Números

Se centra sobre todo en el uso de los pipes numéricos como number, currency y percent.

## Componente No-Comunes

Profundiza el uso de pipes menos comunes como i18nSelect, i18nPlural... Y muestra también el comportamiento del pipe async tanto con un observable como con una promesa:
```
miObservable = interval(1000); // 0, 1, 2, 3...

valorPromesa = new Promise( (resolve) => {
    setTimeout(() => {
        resolve('Devuelve promesa');
    }, 3500);
});
```

## Componente Ordenar

Ejemplo de pipes personalizados, simulando un uppercase/lowercase, conviertiendo una propiedad boolean "vuela" en texto (Vuela, No Vuela), y un tercer pipe que ordena la tabla en función del parametro de entrada (Nombre, Color, Vuela).