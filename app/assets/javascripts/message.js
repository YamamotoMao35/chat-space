$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html = `<div class="message">
                    <div class="message-info">
                      <div class="message-info__user">
                        ${message.user.name}
                      </div>
                      <div class="message-info__date">
                        ${message.date}
                      </div>
                    </div>
                    <p class="messages__text">
                      ${message.body}
                    </p>
                    <asset_path src=${message.image} >
                  </div>`
      return html;
    } else {
      var html = `<div class="message">
                    <div class="message-info">
                      <div class="message-info__user">
                      ${message.user.name}
                      </div>
                      <div class="message-info__date">
                      ${message.date}
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
    var message = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.message')[0].sctollHeight}, 'fast');
      $('.textbox').val('');
    })
  })
})
