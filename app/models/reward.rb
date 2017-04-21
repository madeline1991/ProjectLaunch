# == Schema Information
#
# Table name: rewards
#
#  id               :integer          not null, primary key
#  project_id       :integer          not null
#  title            :string           not null
#  pledge_amount    :integer          not null
#  description      :text             not null
#  deliver_date     :date             not null
#  number_available :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Reward < ActiveRecord::Base
  validates :project, :title, :pledge_amount, :description, :deliver_date,
    presence: true

  belongs_to :project
end