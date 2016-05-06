##
# Set up the mysql server and client, set up an app user and database
##

mysql_service node[:mysql][:service_name] do
  port node[:mysql][:port]
  bind_address node[:mysql][:bind_address]
  data_dir node[:mysql][:data_dir]
  initial_root_password node[:mysql][:server_root_password]
  action [:create, :start]
end

mysql_client node[:mysql][:service_name] do
  action :create
end

mysql_database node[:app][:database][:name] do
    connection ({:host => '127.0.0.1', :username => 'root', :password => node[:mysql][:server_root_password]})
    action :create
end

mysql_database_user node[:app][:database][:user] do
    connection ({:host => '127.0.0.1', :username => 'root', :password => node[:mysql][:server_root_password]})
    password node[:app][:database][:pass]
    database_name node[:app][:database][:name]
    privileges [:select,:update,:insert,:create,:delete,:alter,:drop,:index]
    action :grant
end