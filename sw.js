
self.addEventListener("push", function (event) {
    console.log('[Service Worker] Push Received.');

    var data = event.data.json();
    console.log(`[Service Worker] Push had this data:`, data);

    var title = data.title;
    var options = data.options;
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

