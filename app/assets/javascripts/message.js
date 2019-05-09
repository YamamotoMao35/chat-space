$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html = `<div class="message">
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
                    <img src=${message.image} >
                  </div>`
      return html;
    } else {
      var html = `<div class="message">
                    <div class="message-info">
                      <div class="message-info__user">
                        ${message.user_name}
                      </div>
                      <div class="message-info__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <p class="messages__text">
                      ${message.body}
                    </p>
                  </div>`
      return html;
    };
  }
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
  })
})
