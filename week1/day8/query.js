 mongoimport --db myDB --collection restaurants --drop --file ~/Downloads/restaurants/restaurants.json
 db.restaurants.find({},{restaurant_id:1});