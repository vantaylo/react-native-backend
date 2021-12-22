# react-native-backend

API reference

Items
Endpoints	| Method |	Body	| Description
----------|--------|--------|------------
/items	  | GET    |        |	Returns all items
/:item_id	| GET    |        |	Returns a single item
/	        | POST   | { name, frequency, last_replaced, next_replace } | Creates a new item
/:item_id | PUT    | { name, frequency, last_replaced, next_replace } | Updates item
/:item_id | DELETE |        | Deletes item



Recreate the following screenshot:
![Screen Shot 2021-12-22 at 4 06 22 PM](https://user-images.githubusercontent.com/12515235/147155147-2a9c6313-f995-47bd-8eed-6b29131bfef7.png)
