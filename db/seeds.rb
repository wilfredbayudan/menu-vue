# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Business.destroy_all
Menu.destroy_all
Category.destroy_all
Item.destroy_all
Comment.destroy_all


first_user = User.create(
  email: "test@mail.com",
  password: "test1234",
  first_name: "Test1",
  last_name: "Last1"
)

business = first_user.businesses.create(
  name: "Genki Sushi",
  description: "Genki Sushi is a chain of conveyor belt sushi restaurants established in 1990 in Japan. The chain expanded to include locations in Japan, Hong Kong, Indonesia, Singapore, Kuwait, the Philippines, China, Australia, Cambodia, Myanmar and the United States, including, California, Hawaii and Washington.",
  image: "https://www.honolulumagazine.com/wp-content/uploads/data-import/7350e69a/genki-sushi.jpg",
  slug: "genki-sushi"
)

role = business.user_businesses.last
role.owner = true
role.save
menu = business.create_menu

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

hot_dog = nigiri.items.create(
  description: "Hot dog and rice wrapped with nori.",
  image: "https://genkisushihawaii.com/images2/menu/nigiri/hotdognig.jpg",
  likes: 12,
  price: 1.85,
  item: "Hot Dog"
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