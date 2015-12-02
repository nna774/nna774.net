task :default => "build"

desc "call build"
task "assets:precompile" => [:build]

desc "build by using middleman"
task :build do
  sh "bundle exec middleman build"
end

desc "deploy by using middleman"
task "deploy" do
  sh "bundle exec middleman deploy"
end

desc "preview by using middleman"
task "preview" do
  sh "bundle exec middleman server"
end
