# An app to randomly present lunch group suggestions.

______

## The back end was created and started as follows:

```
rails new api-test --api
vim config/puma.rb # modify it to use port 3038
rails generate scaffold People name:string
rails db:migrate
vim app/controllers/people_controller.rb  # see comments below for instructions
nohup rails server &
```

The Rails server has a single table for people with a `name` column (and also id, created_at, updated_at). It is running via http, not https, and doesn't require a login.  Therefore, as minimal security, the following edit is made to the people controller so that the database can't grow too large (a poor man's way to mitigate DOS attack):

Add these lines:
```
    if Person.count > 150
      render :json => {"error" => "exceed 150 situation"}.to_json, :status => :unprocessable_entity
      return
    end
```
as the first three lines of the `create` method.

See curl.md for an example of the sorts of ways the back end can be hit, and how it responds.

## TODOs:

1. refactor components
2. add foundation css
