##
# Set up django user
##

#install passwd pre-requisite
execute "gem install ruby-shadow" do
    action :run
    user "root"
end

user node[:app][:user] do
    supports :manage_home => true
    home "/home/#{node[:app][:user]}"
    shell "/bin/bash"
    password "#{node[:app][:shadow_hash]}"
    action :create
end

