# sitemap http://qiita.com/youcune/items/71e18e7bd5219b4a07f8

# changefreq Definition Hash
# { String | Regexp } file => { Symbol | String | nil } freq
changefreqs = {
  /^index.html/ => :monthly,
  /^blog\/index.html/ => :weekly,
  /^blog\/tags\// => :weekly,
  /^blog\/page\// => :weekly,
  /^blog\/20\d\d\/\d\d\/\d\d\/[\w-]+\.html$/ => :never,
  /^blog\/2014\/01/ => :never,
  /^blog\/2014\/02/ => :never,
  /^blog\/2014\/03/ => :never,
  /^blog\/2014\/04/ => :never,
  /^blog\/2014\/05/ => :never,
  /^blog\/2014/ => :weekly,
  /^blog\/20\d\d/ => :never,
  /lifepng/ => :monthly,
  /errors/ => :monthly,
  /about/ => :monthly
}

# priority Definition Hash
# { String | Regexp } file => { Float | nil } priority
priorities = {
  /^index.html/ => 1.0,
  /^blog\/index.html/ => 1.0,
  /^blog\/tags\// => 0.4,
  /^blog\/.*page\// => 0.2,
  /^blog\/20\d\d\/\d\d\/\d\d\/.+\.html$/ => 0.8,
  /^blog\/20\d\d/ => 0.4,
  /lifepng/ => 0.8,
  /errors/ => 0.2,
  /about/ => 0.8
}

xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  sitemap.resources.each do |resource|
    xml.url do
      # loc
      xml.loc "https://nna774.net#{resource.url}"

      # lastmod
      lastmod = resource.data.modify_date.presence || resource.data.date.presence
      xml.lastmod lastmod[0,10] if lastmod.present?

      # changefreq
      changefreqs.each do |file, freq|
        next unless resource.destination_path.match(file)
        xml.changefreq freq.to_s if freq.present?
        break
      end

      # priority
      priorities.each do |file, priority|
        next unless resource.destination_path.match(file)
        xml.priority priority.to_s if priority.present?
        break
      end
    end if resource.destination_path =~ /\.html$/
  end
end
