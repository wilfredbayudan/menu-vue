class CommentSerializer < ActiveModel::Serializer
  attributes :id, :author, :comment, :created_at
end
