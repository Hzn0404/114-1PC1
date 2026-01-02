import http from 'http';
import { renderTemplate } from './utils/templateRenderer.js';
import { handleStaticFile } from './utils/staticFileHandler.js'; 

http.createServer((req, res) => {
  const url = req.url;
// 使用 switch 處理路由
  switch (url) {
    case '/':
      renderTemplate(res, '/index.ejs', { data: "您好" });
      break;
    case '/calculator':
      renderTemplate(res, '/index2.ejs'); 
      break;
    default:
      handleStaticFile(res, url);
  }

}).listen(3000, () => {
  console.log('伺服器已啟動：http://localhost:3000');
});