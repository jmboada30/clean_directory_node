import * as schedule from 'node-schedule';
import { deleteOldFiles, getCurrentDate } from './deleteOldFiles.js';
import 'dotenv/config';

const interval = Number(process.env.TASK_EXECUTION_INTERVAL);

// Validar que la variable de entorno FILE_PATH esté definida
if (!interval) {
  console.error(
    'La variable de entorno TASK_EXECUTION_INTERVAL no está definida'
  );
  process.exit(1);
}

// Crea la tarea programada pero no la inicia
const job = new schedule.Job('deleteOldFiles', deleteOldFiles);

// Configura la regla de programación
const rule = new schedule.RecurrenceRule();
rule.minute = new schedule.Range(0, 59, interval); // Ejecuta cada minuto

// Programa la tarea con la regla
job.schedule(rule);

// Opcional: Inicia la tarea manualmente
job.invoke();

console.log(`${getCurrentDate()} | Process 'DeleteOldFiles' started...`);
