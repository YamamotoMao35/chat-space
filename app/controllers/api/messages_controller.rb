class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where('name LIKE(?)', "%#{"data-message_id"}%")
    respond_to do |format|
      format.html
      format.json
    end
  end
end