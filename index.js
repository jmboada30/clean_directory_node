import * as schedule from 'node-schedule';
import { deleteOldFiles, getCurrentDate } from './deleteOldFiles.js';

// Crea la tarea programada pero no la inicia
const job = new schedule.Job('deleteOldFiles', deleteOldFiles);

// Configura la regla de programación
const rule = new schedule.RecurrenceRule();
rule.minute = new schedule.Range(0, 59, 1); // Ejecuta cada minuto

// Programa la tarea con la regla
job.schedule(rule);

// Opcional: Inicia la tarea manualmente
job.invoke();

console.log(`${getCurrentDate()} | Process 'DeleteOldFiles' started...`);
