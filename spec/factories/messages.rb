FactoryBot.define do
  factory :message do
    body {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/assets/images/matsuri.jpg")}
    user
    group
  end
end