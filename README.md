# Crud-Mysql-Apis  -- CURL to test APIs

1. #### Create user
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"john@example.com", "age":25}'

2. #### Read users
curl -X GET http://localhost:3000/users

3. #### Update user
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name":"John Updated", "email":"john@update.com", "age":30}'

4. #### Delete user
curl -X DELETE http://localhost:3000/users/1



