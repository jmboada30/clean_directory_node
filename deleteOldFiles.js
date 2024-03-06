import { statSync, unlinkSync, readdirSync } from 'fs';
import { join } from 'path';
import 'dotenv/config';

const filePath = process.env.FILE_PATH;
const daysOld = Number(process.env.DAYS_OLD);

// Validar que la variable de entorno FILE_PATH esté definida
if (!filePath) {
  console.error('La variable de entorno FILE_PATH no está definida');
  process.exit(1);
}

// Validar que la variable de entorno DAYS_OLD esté definida
if (!daysOld) {
  console.error('La variable de entorno DAYS_OLD no está definida');
  process.exit(1);
}

const currentDate = new Date();
const limitDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() - daysOld
);

// Funcion para obtener la fecha y hora actuales en formato legible
function getCurrentDate() {
  return new Date().toLocaleString();
}

// Función para obtener la fecha de modificación de un archivo
function getUpdateDate(file) {
  return statSync(join(filePath, file)).mtime;
}

// Función para eliminar un archivo
function removeFile(file) {
  unlinkSync(join(filePath, file));
}

// Recorrer la carpeta y eliminar archivos antiguos
function deleteOldFiles() {
  console.log(getCurrentDate(), '| Running scheduled deletion task...');

  readdirSync(filePath).forEach((file) => {
    const lastUpdate = getUpdateDate(file);
    if (lastUpdate < limitDate) {
      console.log(`${getCurrentDate()} | Deleting file: ${file}`);
      removeFile(file);
    }
  });
}

export { getCurrentDate, deleteOldFiles };
