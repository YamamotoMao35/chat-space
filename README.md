# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

-----------------------------------------------------------------

## messages table

|Column|Type|Options|
|------|----|-------|
|body|text| |
|image|string| |
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false|
|email|string|null: false,unique: true|
|user_id|integer|null: false,foreign_key: true|

### Association
- has_many :messages
- has_many :groups
- has_many through: :members

## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many through: :members

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_keys: true|
|group_id|integer|null: false, foreign_keys: true|

### Association
- belongs_to :group
- belongs_to :user

-----------------------------------------------------------------
* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
