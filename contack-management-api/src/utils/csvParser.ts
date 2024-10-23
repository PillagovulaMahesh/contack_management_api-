// src/utils/csvparser.ts
import fs from 'fs';
import csvParser from 'csv-parser';

export const parseCSV = (filePath: string) => {
  return new Promise((resolve, reject) => {
    const contacts = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => contacts.push(data))
      .on('end', () => resolve(contacts))
      .on('error', (err) => reject(err));
  });
};
