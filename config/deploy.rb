# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

set :application, "chat-space"
set :repo_url, "git@github.com:YamamotoMao35/chat-space.git"

set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

set :rbenv_type, :user
set :rbenv_ruby, '2.3.1'

set :ssh_options, auth_methods: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDdlTgbZ6dH/rl1YCmx4qAJy5xhDQHcOJ5d6Yj3qV2pgpx4bWyL5eABWwwQ2zyZtTtfgjlkqvwrH4ZtPZtQ4FSZycUHu+kqW3fWonxLgNaDWhu7n86lAWOaN8SKEfGTIIWmhDK57OQJZM+bDvOEgFDRlpcmshOb/mkEr1v8VvbHwHKFiZcIcQdWJCZFeElBw/brhiO3e8CKOyOdPtU7jS9i1UhPyQTynZEhM+MLB8eBTw9++RVcj2+/EJcVgqvYcxL5oYt2LWT4uxBPlTF+bkK0CWpOnyl8QZ5GUNDc0uafXRpJPiamZ/LqNXifmvShgDY81qQuwWn/qXCaORi60kifF+0mRZeOL4k2Fi1J7iXalLzgXBRH6K2BfWHomMJl6eOb4gzPC4SS+Z33j9LwQIjTZK6W8X07xZmyHSg7LmY3HuTzpaX/tmVax7mDKcJrObodqDSsMy0974ZvTsxaH0ejlLITrcty/ypiYohjrMk7sUO9VRVZtyag+hN8fLKsr3Q0d8oRG8oN2DkymX1CmgG0r/XEZpqZfwaH1D32MKR+MEh6ukhLBq3EUuKk6B4n1GosWQOa9kcR7lN/hc5fC27R0r7xUx1LWaNvTMt+j4IUbEZ6PNVSppen+U8o4//T9yu6Tyk4ME7HA5WhnQZ/njigrqv9Ax2jw+OELFEOYC/iNw==',
                  keys: '/.ssh/Mihouchat.pem'

set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }
set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb"}
set :keep_releases, 5

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
