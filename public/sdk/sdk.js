import sitemap from './sitemap.js';

const sdk = {
  init: function () {
    return 'initialized';
  },
  dummyUserData: {},
  sendEvent: function (userData, eventName, eventData) {
    if (!userData || !eventName || !eventData) return;

    const payload = {
      userData: userData,
      eventName: eventName,
      eventData: eventData,
    };

    this.sendData(payload);
  },
  sendData: function (payload) {
    console.log('payload1', payload)
    fetch('/api/webhook', { // Request to your backend proxy
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(response => response.json()).then(responseData => {
      console.log({ payload })
      console.log('Response from webhook.site:', responseData);
    }).catch(error => {
      console.error('Error sending data:', error);
    });
    // if (navigator.sendBeacon(API_ENDPOINT, blob)) {
    //   console.log('Data sent with sendBeacon');
    // } else {
    //   console.error('sendBeacon failed'); // Fallback to fetch if needed
    //   fetch(API_ENDPOINT, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then(response => {
    //       console.log('Data sent successfully:', response);
    //     })
    //     .catch(error => {
    //       console.error('Error sending data:', error);
    //     });
    // }
    // fetch(API_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // })
    //   .then(response => {
    //     console.log('Data sent successfully:', response);
    //   })
    //   .catch(error => {
    //     console.error('Error sending data:', error);
    //   });
    return;
  },


  sitemap: function () {
    this.dummyUserData = {  // Example dummy user data
      userId: 'user123',
      pageViewed: '/home',
      timestamp: Date.now(),
    };

    const userData = this.dummyUserData
    const eventName = 'Click'
    const eventData = {
      target: 'button A',
      dateTime: new Date().toISOString(),
    }

    this.sendEvent(userData, eventName, eventData);
  }

}

export default sdk;
