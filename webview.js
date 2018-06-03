'use strict';

module.exports = (Franz) => {
  // from https://github.com/kevinoes/franz-plugin-steam-chat/blob/master/webview.js
  const getMessages = function getMessages() {
    //// get new msg count
    let count = 0;
    let counters = document.querySelectorAll('.unread_message_count:not([style="display: none;"])');
    counters = Array.prototype.slice.call(counters, Math.floor(counters.length / 2));
    [].filter.call(counters, countValues => {
      const countValue = countValues.getElementsByClassName('unread_message_count_value')[0];
      if (countValue && countValue.firstChild && countValue.firstChild.nodeValue) {
        count += parseInt(countValue.firstChild.nodeValue);
      }
    });
    Franz.setBadge(count);

    // force scroll to bottom of chat window
    const chatBoxes = document.getElementsByClassName('chat_dialog');
    const chatBox = Array.prototype.filter.call(chatBoxes, chat => chat.style.display !== 'none');
    if (chatBox[0]) {
      const chatWindow = chatBox[0].querySelector('chat_dialog_scroll');
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  };
  
  Franz.loop(getMessages);
};