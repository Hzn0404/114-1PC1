import fs from 'fs';
import path from 'path';
import { getContentType } from './mimeTypes.js'; 
import { render404 } from './templateRenderer.js'; 

export function handleStaticFile(res, filePath) {
  const staticFilePath = '.' + filePath; 
  const extname = path.extname(filePath).toLowerCase();
  const contentType = getContentType(extname); 

  fs.readFile(staticFilePath, (err, content) => {
    if (err) {
     render404(res); 
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}