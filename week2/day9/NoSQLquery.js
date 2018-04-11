//Day 9 using mongo aggregare
mongoimport --db myDB --collection zips --drop --file ~/Downloads/zips.json

// 1. Find all the zip codes in Iowa state.
db.zips.aggregate([{$match:{state:"IA"}}]);
// 2. Find all the zip codes with a population less than 1000.
db.zips.aggregate([{$match:{pop:{$lt:1000}}}])
// 3. Find all cities that have more than one zip code, sort the results based by state and city name.
db.zips.aggregate([{$group:{_id:{"state":"$state","city":"$city"},count:{$sum:1}}},
					{$match:{count:{$gt:1}}},
					{$project:{count:0}},
				   {$sort:{ "_id.state":1,"_id.city":1}}]);
// 4. Display the least populated city in each state
db.zips.aggregate([
{$group:{_id:{"state":"$state","city":"$city"},"pop":{$sum:"$pop"}}},
{$sort:{"_id.state":1,"pop":1,"_id.city":1}},
{$group:{_id:{"state":"$_id.state"},"city":{$first:"$_id.city"},"least populated city":{$first:"$pop"}}},
{$sort:{_id:1}}
]);