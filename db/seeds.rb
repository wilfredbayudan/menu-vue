# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying existing data..."

User.destroy_all
Business.destroy_all
Menu.destroy_all
Category.destroy_all
Item.destroy_all
Comment.destroy_all
UserBusiness.destroy_all

puts "Creating new user test@mail.com with password test1234..."

first_user = User.create(
  email: "test@mail.com",
  password: "test1234",
  first_name: "Test1",
  last_name: "Last1"
)

puts "Creating Genki Sushi..."

business = first_user.businesses.create(
  name: "Genki Sushi",
  description: "Genki Sushi is a chain of conveyor belt sushi restaurants established in 1990 in Japan. The chain expanded to include locations in Japan, Hong Kong, Indonesia, Singapore, Kuwait, the Philippines, China, Australia, Cambodia, Myanmar and the United States, including, California, Hawaii and Washington.",
  image: "https://www.honolulumagazine.com/wp-content/uploads/data-import/7350e69a/genki-sushi.jpg",
  slug: "genki-sushi"
)

puts "Giving user access to business..."

role = business.user_businesses.last
role.owner = true
role.save
menu = business.create_menu

puts "Creating categories..."

nigiri = menu.categories.create(
  category: "Nigiri",
  slug: "nigiri",
  description: "Sushi consisting of a small ball of rice smeared with wasabi sauce and topped with raw fish or other seafood."
)

gunkan = menu.categories.create(
  category: "Gunkan",
  slug: "gunkan",
  description: "Gunkan” means “Mothership” and consists of a small ball of rice wrapped in a thin band of dry seaweed and topped with various ingredients."
)

maki = menu.categories.create(
  category: "Maki",
  slug: "maki",
  description: "A Japanese dish consisting of sushi and raw vegetables wrapped in seaweed."
)

deep_fried = menu.categories.create(
  category: "Deep Fried",
  slug: "deep-fried",
  description: "Various deep fried dishes."
)

sashimi = menu.categories.create(
  category: "Sashimi",
  slug: "sashimi",
  description: "A Japanese dish of bite-sized pieces of raw fish eaten with soy sauce and wasabi paste."
)

puts "Creating items..."

hot_dog = nigiri.items.create(
  description: "Hot dog and rice wrapped with nori.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/hotdognig.jpg",
  likes: 12,
  price: 1.85,
  item: "Hot Dog"
)

hot_dog.comments.create(
  author: "Wilfred Bayudan",
  comment: "Hot dog sushi? Interesting..."
)

kanikama = nigiri.items.create(
  description: "Imitation crab sticks and rice wrapped with nori.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/kanikama.jpg",
  likes: 19,
  price: 1.85,
  item: "Kanikama"
)

tamago = nigiri.items.create(
  description: "Sweetened egg and rice wrapped with nori.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/Tamago.jpg",
  likes: 25,
  price: 2.75,
  item: "Tamago"
)

tamago.comments.create(
  author: "Jane Doe",
  comment: "My kids love this!"
)

tamago.comments.create(
  author: "Jennifer Smith",
  comment: "I always need to get 5 orders for my son, he enjoys it a lot."
)

string_bean = nigiri.items.create(
  description: "Sweetened egg and rice wrapped with nori.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/sbeantemp.jpg",
  likes: 47,
  price: 3.65,
  item: "String Bean Tempura"
)

garlic_salmon = nigiri.items.create(
  description: "Salmon on rice, seared with special house sauce and seared to perfection.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/garicsalmon.jpg",
  likes: 36,
  price: 4.55,
  item: "Garlic Salmon"
)

avocado_ebi = nigiri.items.create(
  description: "Shrimp on rice, topped with mayo, avocado and white onions.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/avoebi.jpg",
  likes: 31,
  price: 4.55,
  item: "Avocado Ebi"
)

seared_spicy_ebi = nigiri.items.create(
  description: "Shrimp on rice, topped with mayo, avocado and white onions.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/searedspicyebi.jpg",
  likes: 22,
  price: 4.55,
  item: "Seared Spicy Ebi"
)

hamachi = nigiri.items.create(
  description: "Yellow-tail on sushi rice.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/hamachi.jpg",
  likes: 27,
  price: 5.45,
  item: "Hamachi"
)

ahi = nigiri.items.create(
  description: "Yellow-fin tuna on sushi rice.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/ahi.jpg",
  likes: 34,
  price: 5.45,
  item: "Ahi"
)

corn = gunkan.items.create(
  description: "Corn mixed with mayo.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/corn.jpg",
  likes: 14,
  price: 1.85,
  item: "Corn"
)

ocean_salad = gunkan.items.create(
  description: "Seasoned seeweed.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/oceansalad.jpg",
  likes: 9,
  price: 1.85,
  item: "Ocean Salad"
)

tuna_salad = gunkan.items.create(
  description: "Canned tuna, mayo, cucumbers and onions.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/tunasalad.jpg",
  likes: 93,
  price: 2.75,
  item: "Tuna Salad"
)

natto = gunkan.items.create(
  description: "Fermented soybeans.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/natto.jpg",
  likes: 45,
  price: 2.75,
  item: "Natto"
)

spicy_salmon = gunkan.items.create(
  description: "Salmon mixed with spicy mayo.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/spicysalmon.jpg",
  likes: 35,
  price: 4.55,
  item: "Spicy Salmon"
)

ahi_poke = gunkan.items.create(
  description: "Tuna mixed with sesame oil, Hawaiian salt, ichimi, white onions and green onions.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/ahipoke.jpg",
  likes: 67,
  price: 4.55,
  item: "Ahi Poke"
)

tobikko = gunkan.items.create(
  description: "Flying fish eggs.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/tobikko.jpg",
  likes: 67,
  price: 4.55,
  item: "Tobikko"
)

spicy_tuna = gunkan.items.create(
  description: "Our top seller!",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/spicytuna.jpg",
  likes: 146,
  price: 4.55,
  item: "Spicy Tuna"
)

ikura = gunkan.items.create(
  description: "Salmon roe.",
  image: "https://genkisushihawaii.com/images2/menu/gunkan/ikura.jpg",
  likes: 72,
  price: 6.35,
  item: "Ikura"
)

oshinko = maki.items.create(
  description: "Daikon or radish.",
  image: "https://genkisushihawaii.com/images2/menu/rolls/oshinko.jpg",
  likes: 12,
  price: 1.85,
  item: "Oshinko Maki"
)

ume = maki.items.create(
  description: "Sour plum",
  image: "https://genkisushihawaii.com/images2/menu/rolls/ume.jpg",
  likes: 13,
  price: 1.85,
  item: "Ume Maki"
)

kanpyo = maki.items.create(
  description: "Gourd",
  image: "https://genkisushihawaii.com/images2/menu/rolls/kanpyo.jpg",
  likes: 13,
  price: 1.85,
  item: "Kanpyo Maki"
)

avocado = maki.items.create(
  description: "Avocado",
  image: "https://genkisushihawaii.com/images2/menu/rolls/avocado.jpg",
  likes: 23,
  price: 2.75,
  item: "Avocado Maki"
)

california = maki.items.create(
  description: "Avocado, cucumber, imitation crab and mayo.",
  image: "https://genkisushihawaii.com/images2/menu/rolls/cali4pc.jpg",
  likes: 44,
  price: 3.65,
  item: "California Roll"
)

california_tempura = maki.items.create(
  description: "Avocado, cucumber, imitation crab and mayo then deep fried.",
  image: "https://genkisushihawaii.com/images2/menu/rolls/calitemp.jpg",
  likes: 71,
  price: 4.55,
  item: "California Tempura Roll"
)

ebi_fry_roll = maki.items.create(
  description: "Deep fried shrimp, sprous, cucumber and avocados.",
  image: "https://genkisushihawaii.com/images2/menu/rolls/ebifry.jpg",
  likes: 61,
  price: 4.55,
  item: "Ebi Fry Roll"
)

dynamite_seafood = maki.items.create(
  description: "Deep fried shrimp topped with seafood mix.",
  image: "https://genkisushihawaii.com/images2/menu/rolls/seafooddyna.jpg",
  likes: 77,
  price: 6.35,
  item: "Dynamite Seafood"
)

kabocha = deep_fried.items.create(
  description: "Deep fried pumpkin.",
  image: "https://genkisushihawaii.com/images2/menu/other/kabocha.jpg",
  likes: 177,
  price: 3.65,
  item: "Kabocha Tempura"
)

croquette = deep_fried.items.create(
  description: "Deep fried veggie croquette.",
  image: "https://genkisushihawaii.com/images2/menu/other/vegcroq.jpg",
  likes: 112,
  price: 3.65,
  item: "Vegetable Croquette"
)

fries = deep_fried.items.create(
  description: "Deep fried pumpkin.",
  image: "https://genkisushihawaii.com/images2/menu/other/potatofries.jpg",
  likes: 101,
  price: 3.65,
  item: "Potato Fries"
)

gyoza = deep_fried.items.create(
  description: "Deep fried vegetable dumplings.",
  image: "https://genkisushihawaii.com/images2/menu/other/gyoza.jpg",
  likes: 89,
  price: 3.65,
  item: "Gyoza"
)

fried_squid = deep_fried.items.create(
  description: "Deep fried squid.",
  image: "https://genkisushihawaii.com/images2/menu/other/friedsquid.jpg",
  likes: 314,
  price: 4.55,
  item: "Fried Squid Combo"
)

chicken_wings = deep_fried.items.create(
  description: "Deep fried chicken wings.",
  image: "https://genkisushihawaii.com/images2/menu/other/chickenwings.jpg",
  likes: 223,
  price: 6.35,
  item: "Chicken Wings"
)

salmon_sashimi = sashimi.items.create(
  description: "4 pieces of salmon.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/salmonsash.jpg",
  likes: 124,
  price: 6.35,
  item: "Salmon Sashimi"
)

ahi_sashimi = sashimi.items.create(
  description: "3 pieces of yellow-fin tuna.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/ahisash.jpg",
  likes: 135,
  price: 6.35,
  item: "Ahi Sashimi"
)

hamachi_sashimi = sashimi.items.create(
  description: "3 pieces of yellow-fin tuna.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/hamachisash.jpg",
  likes: 162,
  price: 6.35,
  item: "Hamachi Sashimi"
)
sashimi_combo = sashimi.items.create(
  description: "1 salmon, 1 ahi, 1 hamachi.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/combosash.jpg",
  likes: 129,
  price: 6.35,
  item: "Sashimi Combo"
)


puts "Creating new user test2@mail.com with password test1234..."

second_user = User.create(
  email: "test2@mail.com",
  password: "test1234",
  first_name: "Test2",
  last_name: "Last2"
)

puts "Creating Burger King..."

business = second_user.businesses.create(
  name: "Burger King",
  description: "Burger King is an American multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain.",
  image: "https://pbs.twimg.com/media/ErJU_R2VkAE-w7Q?format=jpg&name=medium",
  slug: "burger-king"
)

puts "Giving user access to business..."

role = business.user_businesses.last
role.owner = true
role.save
menu = business.create_menu

puts "Creating categories..."

chicken = menu.categories.create(
  category: "Chicken & More",
  slug: "chicken-more",
  description: "Chicken and stuff."
)

hand_breaded = chicken.items.create(
  description: "Some chicken sandwich.",
  image: "https://www.pennlive.com/resizer/d1os-3VS3elS9yIcHxrlv7FBA1Q=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EDDRNJNVR5GQZIMNQVDJW2GZLE.jpeg",
  likes: 129,
  price: 6.35,
  item: "Hand Breaded Ch'king"
)

puts "Seeding done!"