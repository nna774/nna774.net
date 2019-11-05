# nna774.net

[![CircleCI](https://circleci.com/gh/nna774/nna774.net/tree/master.svg?style=svg)](https://circleci.com/gh/nna774/nna774.net/tree/master)

middleman で管理されたnna774.net です。
以下のようなURL で見ることができます。

* [https://nna774.net](https://nna774.net)
* [https://nna774-net.herokuapp.com/](https://nna774-net.herokuapp.com/) Herokuにmasterが自動でデプロイされています。 ~~寝ていなければ私の家のラズベリーパイがぶっこわれていても見れるでしょう。~~ ~~[middlemanをrackで動かすのは邪道だと公式ページにも書いてある](https://middlemanapp.com/jp/basics/start_new_site/#config-ru)ので、コミットハッシュとか出てないしちょっとおかしなことが起きてるかもしれないけどだいたい見れるはず。~~ ビルドしてせいてきファイルをrackで配信するようにした。
* ~~[http://nna774.github.io/](http://nna774.github.io/) 結構最新とは離れています.~~
* ~~[http://nna774.net.s3-website-ap-northeast-1.amazonaws.com/](http://nna774.net.s3-website-ap-northeast-1.amazonaws.com/) ある程度最新と同期していると思う.~~
* [https://fervent-euler-4c9944.netlify.com/](https://fervent-euler-4c9944.netlify.com/)

ビルド済みの静的ファイルは[nna774/nna774.github.com](https://github.com/nna774/nna774.github.com) にあります。(更新されていません)

~~ビルド済みの静的ファイルのtar.gz は[ここ](https://drone.io/github.com/nna774/nna774.net/files/nna774.net.tar.gz) にあります。(これは自動生成なので最新のハズ)~~

master を進めると、 ~~[drone.io](https://drone.io) により RPi に自動でデプロイされるような構成に今はなっている。~~ [CircleCI](https://circleci.com/)により ~~[sakura.nna774.net](https://sakura.nna774.net)~~ S3 に自動でデプロイされます。
