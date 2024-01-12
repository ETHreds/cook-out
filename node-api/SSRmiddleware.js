const { createSSRApp } = require('vue');
const { renderToString } = require('vue/server-renderer');

// Middleware function that sets up the SSR logic for the '/' route
function createAppMiddleware(req, res, next) {
  const vueApp = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  });

  renderToString(vueApp).then((html) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vue SSR Example</title>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
      </html>
    `);
  });
}

module.exports = {
  createAppMiddleware
};
