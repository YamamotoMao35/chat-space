$(function(){
  var textField = $("#user-search-field");
  var search_result = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                    ${user.name}
                  </p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add", data-user-id="${user.id}", data-user-name="${user.name}">追加
                  </a>
                </div>`
      search_result.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                    ${ msg }
                  </p>
                </div>`
      search_result.append(html);
  }

  textField.on("keyup", function(){
    var input = textField.val();

    $.ajax({
      type: 'GET',
      url: '/users/',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      search_result.empty();
      var members = $('.chat-group-user__name').text();
      console.log(members)
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーはいません");
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });
});
