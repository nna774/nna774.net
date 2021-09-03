xml.instruct! :xml, :version => '1.0'
xml.rss :version => "2.0" do
  xml.channel do
    site_url = base_url + "/blog/"
    xml.title "/dev/nona"
    xml.description "いっと☆わーくす！"
    xml.link "href" => URI.join(site_url, blog.options.prefix.to_s)
    xml.link "href" => base_url + "/blog/rss", "rel" => "self"
    xml.updated(blog.articles.first.date.to_time.iso8601) unless blog.articles.empty?
    xml.author { xml.name "久我山菜々" }

    blog.articles[0..10].each do |article|
      xml.item do
        xml.title article.title
        xml.link "rel" => "alternate", "href" => URI.join(site_url, article.url)
        xml.guid URI.join(site_url, article.url)
        xml.pubDate article.date.to_time.iso8601
        xml.updated File.mtime(article.source_file).rfc822
        xml.description article.body
      end
    end
  end
end
