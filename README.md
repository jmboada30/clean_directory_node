# Cleanup SQL Backups

Este proyecto es una aplicación Node.js que se encarga de eliminar automáticamente los archivos que sean más antiguos que un número determinado de días.

## Configuración

Para configurar este proyecto, necesitarás definir dos variables de entorno en un archivo `.env`:

- `FILE_PATH`: La ruta al directorio que contiene los archivos de respaldo.
- `DAYS_OLD`: El número de días después de los cuales se deben eliminar los archivos de respaldo.

Por ejemplo:

```env
FILE_PATH=D:\\respaldos
DAYS_OLD=30
```

## Ejecución

Para ejecutar este proyecto, primero necesitas instalar las dependencias:

```bash
npm install
```

Luego, puedes ejecutar el proyecto con el siguiente comando:

```bash
npm start
```


## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
