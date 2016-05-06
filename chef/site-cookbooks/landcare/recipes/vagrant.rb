##
# Do vagrant specific thing
##

# ln -s /vagrant /home/vagrant/app
execute "ln -s /vagrant #{node[:app][:paths][:site]}/app" do
    action :run
    user node[:app][:user]
    not_if { File.symlink?("#{node[:app][:paths][:site]}/app") }
end
