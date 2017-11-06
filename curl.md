# Using curl to hit the back end Rails api

## Add Elizabeth to the database
```
curl -X POST -H "Content-Type: application/json" -d '{"person": {"name": "Elizabeth"}}' localhost:3000/people.json

{"id":4,"name":"Elizabeth","created_at":"2017-11-05T18:01:48.264Z","updated_at":"2017-11-05T18:01:48.264Z"}
```

## (Optional) Verify that she's there by looking at the Rails Console
```
rails console
Running via Spring preloader in process 87034
Loading development environment (Rails 5.1.4)
2.4.1 :001 > Person.all
  Person Load (2.0ms)  SELECT  "people".* FROM "people" LIMIT ?  [["LIMIT", 11]]
 => #<ActiveRecord::Relation [#<Person id: 1, name: "Joseph", created_at: "2017-11-05 17:45:27", updated_at: "2017-11-05 17:45:27">, #<Person id: 2, name: "Alice", created_at: "2017-11-05 17:45:42", updated_at: "2017-11-05 17:45:42">, #<Person id: 3, name: "Zoe", created_at: "2017-11-05 17:45:46", updated_at: "2017-11-05 17:45:46">, #<Person id: 4, name: "Elizabeth", created_at: "2017-11-05 18:01:48", updated_at: "2017-11-05 18:01:48">]> 
2.4.1 :002 > exit
```

## Add Eunice to the database
```
curl -X POST -H "Content-Type: application/json" -d '{"person": {"name": "Eunice"}}' localhost:3000/people.json

{"id":5,"name":"Eunice","created_at":"2017-11-05T22:30:55.930Z","updated_at":"2017-11-05T22:30:55.930Z"}
```

## Verify that she's there by doing a GET of all people in the database
```
curl -X GET -H "Content-Type: application/json" localhost:3000/people

[{"id":1,"name":"Joseph","created_at":"2017-11-05T17:45:27.568Z","updated_at":"2017-11-05T17:45:27.568Z"},{"id":2,"name":"Alice","created_at":"2017-11-05T17:45:42.045Z","updated_at":"2017-11-05T17:45:42.045Z"},{"id":3,"name":"Zoe","created_at":"2017-11-05T17:45:46.368Z","updated_at":"2017-11-05T17:45:46.368Z"},{"id":4,"name":"Elizabeth","created_at":"2017-11-05T18:01:48.264Z","updated_at":"2017-11-05T18:01:48.264Z"},{"id":5,"name":"Eunice","created_at":"2017-11-05T22:30:55.930Z","updated_at":"2017-11-05T22:30:55.930Z"}]
```

## GET just Eunice via her id of 5
```
curl -X GET -H "Content-Type: application/json" localhost:3000/people/5

{"id":5,"name":"Eunice","created_at":"2017-11-05T22:30:55.930Z","updated_at":"2017-11-05T22:30:55.930Z"}
```

## Update Eunice via PATCH request -- now her last name is also in the db
```
curl -X PATCH -H "Content-Type: application/json" -d '{"person": {"name": "Eunice Kim"}}' localhost:3000/people/5

{"id":5,"name":"Eunice Kim","created_at":"2017-11-05T22
```

## Delete Elizabeth from the database (she has id 4)
```
curl -X DELETE -H "Content-Type: application/json" localhost:3000/people/4
```

## Verify she has been deleted by doing a GET of all people in the database
```
curl -X GET -H "Content-Type: application/json" localhost:3000/people

[{"id":1,"name":"Joseph","created_at":"2017-11-05T17:45:27.568Z","updated_at":"2017-11-05T17:45:27.568Z"},{"id":2,"name":"Alice","created_at":"2017-11-05T17:45:42.045Z","updated_at":"2017-11-05T17:45:42.045Z"},{"id":3,"name":"Zoe","created_at":"2017-11-05T17:45:46.368Z","updated_at":"2017-11-05T17:45:46.368Z"},{"id":5,"name":"Eunice Kim","created_at":"2017-11-05T22:30:55.930Z","updated_at":"2017-11-05T22:37:16.044Z"}]
```
