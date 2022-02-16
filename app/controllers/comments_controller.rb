class CommentsController < ApplicationController

  before_action :authorize_permission
  skip_before_action :authorize_permission, only: [:index, :show, :create]

  # GET '/businesses/:business_id/menus/categories/:category_id/items/:item_id/comments'
  def index
    comments = find_item.comments
    render json: comments
  end

  # GET '/businesses/:business_id/menus/categories/:category_id/items/:item_id/comments/:id'
  def show
    comment = find_comment
    render json: comment
  end

  # POST '/businesses/:business_id/menus/categories/:category_id/items/:item_id/comments'
  def create
    comment = find_item.comments.create(comment_params)
    render json: comment
  end

  # DELETE '/businesses/:business_id/menus/categories/:category_id/items/:item_id/comments/:id'
  def destroy
    comment = find_comment
    comment.destroy
    head :no_content
  end


  private

  def authorize_permission
    super
  end

  def find_business
    super
  end

  def find_menu
    super
  end

  def find_category
    super
  end

  def find_item
    super
  end

  def find_comment
    find_item.comments.find(params[:id])
  end

  def comment_params
    params.permit(:name, :comment)
  end

end
