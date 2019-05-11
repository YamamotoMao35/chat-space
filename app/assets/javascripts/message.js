$(function(){
  function buildHTML(message){
    if ( message.body && message.image.url) {
      var html = `<div class="message", data-message-id="${message.id}" >
                    <div class="message-info">
                      <div class="message-info__user">
                        ${message.user_name}
                      </div>
                      <div class="message-info__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <p class="message__text">
                      ${message.body}
                    </p>
                    <img src="${message.image.url}">
                  </div>`
    } else if (message.body) {
      var html = `<div class="message", data-message-id="${message.id}">
                    <div class="message-info">
                      <div class="message-info__user">
                        ${message.user_name}
                      </div>
                      <div class="message-info__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <p class="message__text">
                      ${message.body}
                    </p>
                  </div>`
    } else if (message.image.url) {
      var html = `<div class="message", data-message-id="${message.id}">
                    <div class="message-info">
                      <div class="message-info__user">
                        ${message.user_name}
                      </div>
                      <div class="message-info__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <img src="${message.image.url}">
                  </div>`
    };
    return html;
  };

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('#new_message').get(0).reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });

  var reloadMessages = function() {
    var group_id = $(".current-group").data('group_id');
    last_message_id = $(".message:last").data('message_id');
    $.ajax({
      url: `/groups/${group_id}/api/messages`,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id, group_id: group_id}
    })
    .done(function(messages) {
      if (messages.length != 0) {
        messages.forEach(function(message){
          var html = buildHTML(message)
          $('.messages').append(html);
        });
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      };
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  };
  setInterval(reloadMessages, 5000);
});
