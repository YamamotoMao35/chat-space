json.id         @message.id
json.body       @message.body
json.image      @message.image__url
json.date       @message.created_at.swifttime("%Y/%m/%d %H:%M:%S")
json.user_name  @message.user.name
