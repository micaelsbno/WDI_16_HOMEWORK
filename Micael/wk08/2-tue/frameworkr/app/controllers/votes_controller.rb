class VotesController < ApplicationController

  def create
  
    if Vote.new(fw_id: params[:fw_id]).save
      redirect_to '/'
    end
  end

end
