import fs from 'fs';
import ejs from 'ejs';

// 建立渲染函數 [cite: 19, 138]
export function renderTemplate(res, filePath, data = {}) {
  fs.readFile('.' + filePath, 'utf8', (err, template) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('錯誤：無法讀取模板文件 - ' + err.message); 
      return;
    }
    const html = ejs.render(template, data);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  });
}

// 建立 404 處理函數
export function render404(res) {
  fs.readFile('./index3.ejs', 'utf8', (err, template) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Not Found');
      return;
    }
    const html = ejs.render(template);
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  });
}