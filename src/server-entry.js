// server-entry.js

import createClient from './client-entry';

const { app, router } = createClient();

// const meta = app.$meta() // here

// since there could potentially be asynchronous route hooks or components,
// we will be returning a Promise so that the server can wait until
// everything is ready before rendering.
export default context => new Promise((resolve, reject) => {
  // const { app, router } = createApp();

  // set server-side router's location
  router.push(context.url);

  // wait until router has resolved possible async components and hooks
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents();
    // no matched routes, reject with 404
    if (!matchedComponents.length) {
      return reject(new Error({ code: 404 }));
    }

    // context.meta = meta
    // the Promise should resolve to the app instance so it can be rendered
    return resolve(app);
  }, reject(new Error()));
});
