class Api::MessagesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json {@messages = Group.find(params[:group_id]).messages.where('id > ?', params[:id])}
    end
  end
end
