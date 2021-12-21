# react-native-backend

API reference
Deployed on Heroku: https://

Items
Endpoints	| Method |	Body	| Description
----------|--------|--------|------------
/items	  | GET    |        |	Returns all items
/:item_id	| GET    |        |	Returns a single item
/	        | POST   | { name, frequency, last_replaced, next_replace } | Creates a new item
/:item_id | PUT    | { name, frequency, last_replaced, next_replace } | Updates item
/:item_id | DELETE |        | Deletes item
