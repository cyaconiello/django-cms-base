##
# Set up the bare repository for deployment
##

# Make the app directory
directory "#{node[:app][:paths][:site]}/app/" do
    owner node[:app][:user]
    group node[:app][:user]
    recursive true
end

# set up a bare repository in that directory
execute "git init --bare #{node[:app][:paths][:site]}/landcare.git" do
    action :run
    user node[:app][:user]
end

# set up a post recieve hook
template "#{node[:app][:paths][:site]}/landcare.git/hooks/post-receive" do
    source "post-receive.erb"
    owner node[:app][:user]
    group node[:app][:user]
end

# chmod +x the post recieve file
execute "chmod +x #{node[:app][:paths][:site]}/landcare.git/hooks/post-receive" do
    action :run
    user node[:app][:user]
end
