##
# Sets up an Nginx vhost and restarts the service
##

template "/etc/nginx/sites-available/#{node[:app][:name]}" do
    source "nginx-vhost.erb"
    owner 'root'
    group 'root'
end

execute "ln -s /etc/nginx/sites-available/#{node[:app][:name]} /etc/nginx/sites-enabled/#{node[:app][:name]}" do
  action :run
  user "root"
  notifies :restart, "service[nginx]", :delayed
  not_if { File.exist?("/etc/nginx/sites-enabled/#{node[:app][:name]}") }
end

execute "service nginx restart" do
  action :run
  user "root"
end