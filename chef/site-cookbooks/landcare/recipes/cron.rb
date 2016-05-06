# cron "update_solr_schma" do
#   minute 0
#   hour 0
#   command "export DJANGO_SETTINGS_MODULE=#{node[:app][:DJANGO_SETTINGS_MODULE]} && #{node[:app][:paths][:site]}/venv/bin/python #{node[:app][:paths][:site]}/app/manage.py update_index >> #{node[:app][:paths][:site]}/logs/solr.log 2>&1"
#   user 'root'
#   mailto "francis@teamcolab.com"
# end
