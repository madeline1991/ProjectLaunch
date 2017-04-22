class Api::RewardsController < ApplicationController

  def index
    @project = Project.find(params[:project_id])
    render 'api/rewards/show.json.jbuilder'
  end

  def show
    @project = Project.find(params[:id])
    render 'api/rewards/show.json.jbuilder'
  end

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
        render 'api/rewards/index.json.jbuilder'
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def update
    @reward = current_user.projects.rewards.find(params[rewards][:id])

    if @reward.update(reward_params)
      render 'api/rewards/index.json.jbuilder'
    else
      render json: @reward.errors.full_messages
    end
  end

  def destory
  end

  private

  def reward_params
    params.require(:rewards).permit(:project_id, :title, :pledge_amount, :description, :number_available, :delivery_date)
  end
end