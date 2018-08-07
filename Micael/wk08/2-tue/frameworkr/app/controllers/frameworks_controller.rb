class FrameworksController < ApplicationController

  def index
    @frameworks = Framework.all
  end

  def new
  end

  def create
    if Framework.new(name: params[:name], image_url: params[:image_url], description: params[:description]).save
      redirect_to '/'
    end
  end

  def destroy
    if Framework.find(params[:id]).destroy
      redirect_to '/'
    end
  end

  def edit
    @framework = Framework.find( params[:id] )
    render :edit
  end

  def update
    framework = Framework.find( params[:id] )
    framework.name = params[:name]
    framework.image_url = params[:image_url]
    framework.description = params[:description]
    framework.save
    redirect_to '/'
  end

end
