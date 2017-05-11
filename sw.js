
self.addEventListener("push", function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data:`, JSON.stringify(event.data));

    var data = event.data.json();
    var title = data.title;
    var options = {
        body: data.body,
        icon: data.icon,
        tag: data.tag
    }
    const notificationPromise = self.registration.showNotification(title, options);
    event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://developers.google.com/web/')
  );
});

