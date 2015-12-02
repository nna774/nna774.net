use Rack::ETag
use Rack::Deflater
use Rack::Static, urls: [''], root: 'build', index: 'index.html'
run lambda {|env|}
