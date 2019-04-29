# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## messages table

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false,foreign_key: true|
|email|string|null: false,unique: true|
|user_id|integer|null: false,foreign_key: true|

### Association
- has_many :messages
- has_many :groups
- belongs_to :member

## groups table

|Column|Type|Options|
|------|----|-------|
|group_name|string|index: true, null: false, foreign_keys|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many through: :members

## members table

|Column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false, foreign_keys: true|
|group_name|string|index: true,null: false, foreign_keys: true|
|member_id|integer|null: false,unique: true|

### Association
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
