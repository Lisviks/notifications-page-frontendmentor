const notificationNumber = document.querySelector('.notification-number');
const markAsReadBtn = document.querySelector('.btn.mark-as-read');
const notifications = document.querySelectorAll('.notification-wrapper');

const countUnreadNotifications = () => {
  let total = 0;
  notifications.forEach((item) => {
    if (item.classList.contains('new')) total++;
  });
  return total;
};

notificationNumber.innerText = countUnreadNotifications();

markAsReadBtn.addEventListener('click', () => {
  notifications.forEach((item) => {
    item.classList.remove('new');
  });
  notificationNumber.innerText = '0';
});
