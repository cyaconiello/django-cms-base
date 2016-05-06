##
# Set up the Django server
##

# mkdir :site/app
directory "#{node[:app][:paths][:site]}/app/" do
  owner node[:app][:user]
  group node[:app][:user]
  recursive true
end

# mkdir :site/logs
directory "#{node[:app][:paths][:site]}/logs/" do
  owner node[:app][:user]
  group node[:app][:user]
  recursive true
end

# mkdir :site/static
directory "#{node[:app][:paths][:site]}/static/" do
  owner node[:app][:user]
  group node[:app][:user]
  recursive true
end

# mkdir :site/media
directory "#{node[:app][:paths][:site]}/media/" do
  owner node[:app][:user]
  group node[:app][:user]
  recursive true
end

# create the virtual environment
python_virtualenv "#{node[:app][:paths][:site]}/venv/" do
  owner node[:app][:user]
  group node[:app][:user]
  options "--no-site-packages"
  action :create
  not_if { File.exist?("#{node[:app][:paths][:site]}/venv/bin/activate") }
end

# Set up imaging for Pillow
execute "apt-get build-dep python-imaging libxml2 libxslt --assume-yes" do
  action :run
  user "root"
end

# Set up nodejs and npm
execute "curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -" do
  action :run
  user "root"
end
execute "sudo apt-get install -y nodejs" do
  action :run
  user "root"
end

execute "apt-get install libpython2.7-dev python2.7-dev python-dev python-lxml libxslt1-dev libxslt1.1 libxml2-dev libxml2 libssl-dev libmysqlclient-dev python-mysqldb libpq-dev libpcre3 libpcre3-dev --assume-yes" do
  action :run
  user "root"
end
execute "ln -s /usr/lib/`uname -i`-linux-gnu/libfreetype.so /usr/lib/" do
  action :run
  user "root"
  not_if { File.exist?('/usr/lib/libfreetype.so') }
end
execute "ln -s /usr/lib/`uname -i`-linux-gnu/libjpeg.so /usr/lib/" do
  action :run
  user "root"
  not_if { File.exist?('/usr/lib/libjpeg.so') }
end
execute "ln -s /usr/lib/`uname -i`-linux-gnu/libz.so /usr/lib/" do
  action :run
  user "root"
  not_if { File.exist?('/usr/lib/libz.so') }
end

# Cython?
python_pip "cython" do
  action :install
  virtualenv "#{node[:app][:paths][:site]}/venv/"
end

# Add uwsgi to the virtualenv
python_pip "uwsgi" do
  action :install
  virtualenv "#{node[:app][:paths][:site]}/venv/"
  user node[:app][:user]
end

# set up uwsgi's INI file
template "#{node[:app][:paths][:site]}/uwsgi.ini" do
    source "uwsgi.ini.erb"
    owner node[:app][:user]
    group node[:app][:user]
end

# set up the uwsgi upstart script
template "/etc/init/uwsgi.conf" do
    source "upstart-uwsgi.conf.erb"
    owner 'root'
    group 'root'
end
