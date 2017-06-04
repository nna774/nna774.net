# coding: utf-8

helpers do
  def base_url
    'https://nna774.net'
  end

  def onion_domain
    'j5e4w6u3apivbn44.onion'
  end

  def commitHash
    @commitHash ||= `git log --pretty=format:'%H' -n1`
  end
  def commitMsg
    @commitMsg ||= `git log --pretty=format:'%s' -n1`
  end
end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'images'

set :minify_size, 1024

# Build-specific configuration
configure :build do

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
  activate :minify_css
  activate :minify_javascript
  activate :minify_html, :remove_http_protocol => false, :remove_https_protocol => false
  activate :gzip
  activate :asset_hash, :ignore => [/.*\.png/, /.*\.gif/, /.*\.webp/]
end


activate :livereload
activate :directory_indexes
page "/blog/tag.html", :directory_index => false
page "/blog/calendar.html", :directory_index => false

Time.zone = "Tokyo"

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "blog"

  blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  blog.sources = "{year}/{month}/{day}-{title}.html"
  blog.taglink = "tags/{tag}/index.html"
  ##### {tag}.html から {tag}/index.html に変更したので、nginxの設定で適切に301すること。
  blog.layout = "article_layout"
  blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  blog.year_link = "{year}.html"
  blog.month_link = "{year}/{month}.html"
  blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".md"

  blog.tag_template = "blog/tag.html"
  blog.calendar_template = "blog/calendar.html"
  

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
end

page "/blog/feed.xml", layout: false
page "/blog/rss", layout: false
page "/sitemap.xml", layout: false

activate :deploy do |deploy|
  deploy.build_before  = false
  deploy.deploy_method = :rsync
  deploy.user          = 'nona'
  deploy.host          = 'sakura.nna774.net'
  deploy.path          = '/srv/http'
  deploy.port          = "22"
  deploy.flags         = '-avO --no-p --no-g --no-o --exclude=".git/"'
end
