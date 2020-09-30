const facts = [
  'Do you know adult humans are 60 percent water, and our blood is 90 percent water? 🌊',
  'Drinking water instead of soda can help with weight loss! 🥛',
  'Do you know drinking water reduces the chance of a hangover? 🍺',
  'Drinking water helps in enhancing physical performance! 🏋',
  'Drinking water improves your skin health and beauty! 💃',
  'Drinking water instead of other liquids will help you in weight loss! 🧘‍♀️',
  'Drinking more water may help relieve Constipation! 🚽',
  'Pace yourself to approach half of your recommended consumption by midday! 🌞',
  'Drinking water when you first get up helps you to improve your immune system! 💪',
  'Do you know drinking water before a workout will protect you from dehydration? 🏋',
  'Drinking water helps you to regulate Body temperature! 🚶‍♂️',
  'Did you know that drinking water lubricates the joints? It can even help with your back pain 🎒',
  'Drinking water helps maintaining your blood pressure 🅰️🅱️🆎🅾️',
  'Studies show that even mild dehydration, such as the loss of 1–3% of body weight, can impair many aspects of brain function.'
];
const notificationMessage = 'Hey buddy, you should drink some water.';
const notificationTitle = 'Stay hydrated!';
var timeInterval = 15;

restartAlarms();
browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponse) {
  timeInterval = request.time;
  sendResponse({
    response: 'Time received successfully'
  });
  restartAlarms();
}

browser.alarms.onAlarm.addListener(function (alarm) {
  browser.notifications.create('waterNotification', {
    'type': 'basic',
    'iconUrl': 'icons/bottle.png',
    'title': notificationTitle,
    'message': notificationMessage + '\n' + facts[Math.floor(Math.random() * 11)]
  });
});

function restartAlarms() {
  browser.alarms.clearAll();
  browser.alarms.create('waterReminder', {
    periodInMinutes: timeInterval
  });
}
