
# Weather App
Weather App es un proyecto que muestra información meteorológica actual y un pronóstico de 7 días para cualquier ubicación en el mundo. Esta aplicación utiliza una API de clima para obtener los datos meteorológicos en tiempo real y se muestra de una manera clara y fácil de entender.

## Características
- **Información meteorológica actual:** La aplicación muestra la temperatura, humedad, velocidad del viento y presión atmosférica para el día actual.
- **Pronóstico para 7 días:** La aplicación también muestra un pronóstico detallado para los próximos 7 días.
- **Información gráfica:** Además de la información meteorológica, la aplicación muestra una representación gráfica acerca de la puesta y salida del sol como de la luna.
- **Buscador de ubicación:** La aplicación te permite buscar cualquier ciudad en el mundo y obtener información meteorológica para esa ubicación.
- **Fácil de usar:** La aplicación es fácil de usar y la información meteorológica se muestra de una manera clara y concisa.

## Tecnologías
Este proyecto utiliza dos tecnologías principales: **ReactJS** y **ViteJS**. ReactJS es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables, mientras que ViteJS es una herramienta de compilación de JavaScript que se centra en la velocidad y la eficiencia. Juntos, proporcionan una poderosa combinación para el desarrollo de aplicaciones web modernas y eficientes.

## Variables de Entorno
Antes de usar la aplicación, asegúrate de configurar las variables de entorno necesarias. Para ello, crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

`VITE_API_URL`=https://api.weatherbit.io/v2.0/forecast/daily

`VITE_API_KEY`=TU_API_KEY

Reemplaza TU_API_KEY con tu propia clave de API de Weatherbit. Puedes obtener una clave gratuita en su sitio web.

## Cómo utilizar la aplicación
Clona el repositorio

```bash
  git clone https://github.com/DavidVidaurre/Weather-App
```

Ir al directorio del proyecto

```bash
  cd Weather-App
```

Crea tu .env y configura tus variables de entorno

```bash
  VITE_API_URL
  VITE_API_KEY
```

Instala las dependencias

```bash
  npm install
```

Inicia el servidor

```bash
  npm run dev
```

## Autor
Este proyecto fue desarrollado por **Luis David Maquen Vidaurre**.

## Vista previa

![App Screenshot](https://i.ibb.co/TmdMkN5/Weather-App.png)

## Despliegue
https://weather-app-forecast.vercel.app/