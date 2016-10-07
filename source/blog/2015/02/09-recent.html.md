---
directory_index: false
title: 最近の様子
date: 2015-02-09 18:56 JST
tags:
---

最後の更新が結構前だったので、最近やったことを適当に書く。順不同。

# SSHの鍵をECDSAを使いはじめる。

なんとなくECDSA鍵を試してみようと思って、ECDSA鍵を作る。

`$ ssh-keygen -t ecdsa -b 521 -C "$(whoami)@$(hostname)-$(date -I)"`

既存のサーバとかのauthorized_keysの中のrsa鍵だったとこを少しずつ置き換えていく。

なんで512bitじゃなくて521bitなのか。512bitだと256bit鍵が部分空間に入ってしまって良くないのかなーとか適当に想像してる。なんでなんですか。

# GNU Cashで家計簿つけはじめる。

何故か手元で実行すると、トランザクションの記入中にフリーズしまくってまともに使えないので、家のサーバの中で動かしてX Forwardしてる。つらい。

# 家のルータをIX2015に置きかえて、ネットワークの整理。

設定ファイルは[ここ](https://github.com/nna774/yukari)。

前からやりかったRPiをDMZに置くとかやったりした。

家の外までギガビット来てるのに、IX2015はFastEthernetしかもってないので悲しい。
IX2105を買ってくれる優しい人を募集しています。

前まで10.0.0.0/8を使ってたのを10.8.8.0/24にきちんと収めた。きれいになった。

ここはこうしたほうがいい、とかあったら教えてほしいです。

家の無線APもFastEthernetしかついてないし、こっちはそんなに高くないし置きかえようかなぁ……(それをそのままIX2015の位置に置けば家に高速回線来るのでは…… って気もする)。

# SoftEtherVPNに一行パッチの送信

[SoftEtherVPN/SoftEtherVPN#127](https://github.com/SoftEtherVPN/SoftEtherVPN/pull/127)

使ってたら、変な挙動して、ソース読んでみたらそれっぽいのみつけたので、変更してビルドしてみたらうまく動作したので。

ドキュメントにはLogをファイルに保存できるとあったのに、書いてあった方法では標準出力に流れるだけで謎だった。

# nna774.netにCloudFlareを通した。

いつのまにかCloudFlareが無料でSSL対応していたので(しかもSPDYがデフォルトでついてくる)、はさみました。
今までは[PRi](https://www.flickr.com/photos/nna774/14434965670/)だったけど、これでいきなり莫大なトラフィック受けても落ちないね！(受けない)

そろそろ家のRPi上に置いておくメリット無いし、どこか家の外に置いても良い気もする。

# TwitterのTimeLineの全保存

Fluentd使って、全てのTweetを保存しはじめた。今まで特定の監視してる人のログはとってたけど、全てを保存するのはなんだかんだでちゃんとやってこなかった。

td-agent.confはこんな感じ。
<pre><code>&lt;source&gt;
  type twitter
  consumer_key        asdf
  consumer_secret     asdf
  oauth_token         poiu
  oauth_token_secret  poiu
  tag                 twitter.timeline
  timeline            userstream
  output_format       flat                    # Optional (nest or flat or simple[default])
&lt;/source&gt;
&lt;match twitter.timeline&gt;
  type copy
  &lt;store&gt;
    type s3

    aws_key_id qwer
    aws_sec_key qwer
    s3_bucket nona-twitter
    s3_region ap-northeast-1
    s3_object_key_format %{path}%{time_slice}_%{index}.%{file_extension}
    path logs/
    buffer_path /var/log/fluent/s3

    time_slice_format %Y/%m/%d-%H
    time_slice_wait 10m
    utc
  &lt;/store&gt;
  &lt;store&gt;
    type bigquery

    method insert    # default

    auth_method private_key   # default
    email lkjh
    private_key_path /etc/td-agent/twitter/lkjh.p12
    private_key_passphrase notasecret # default

    project united-crane-800
    dataset twitter
    auto_create_table true
    table   timeline_%Y_%m

    time_field created_at
    field_integer id, in_reply_to_status_id, in_reply_to_user_id, user.id, user.followers_count, user.friends_count, user.listed_count, user.favourites_count, retweet_count, favorite_count
    field_string id_str, text, source, in_reply_to_status_id_str, in_reply_to_user_id_str, in_reply_to_screen_name, user.id_str, user.name, user.screen_name, user.location, user.url, user.profile.image_url_https, user.following, place, user.description
    field_boolean truncated, user.protected

    flush_interval 20
  &lt;/store&gt;
&lt;/match&gt;
</code></pre>

なんかもっと良い方法無いですか。

# SSHに二段階認証でも入れるように設定。

今までずっと鍵のみ認証にしていたけど、二段階認証+パスワードでも入れるようにした。

[ここ](https://wiki.archlinux.org/index.php/Google_Authenticator_(%E6%97%A5%E6%9C%AC%E8%AA%9E))とかを参考に適当に設定。

[前から設定方法だけは知ってた](http://www.kmc.gr.jp/advent-calendar/ssh/2013/12/16/googleAuthenticator.html)(一年前の自分の文章読むのつらすぎる)けど、実際に使ってはいなかった。

意外と鍵が無い時がけっこうあるので、そういう時に便利そう。


ぱっと思いつくのはこれぐらいかな。
もっと良い感じの方法とかあったら是非教えてください。
