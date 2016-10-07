---
title: hstsping
date: 2016-08-24 01:46 JST
tags: SSL, TLS
---

最近ブログを全然書いていないので、もっと雑に頻繁に更新していきましょう。
家計簿と同じで、もっと雑に高頻度で。

# 何

Dropboxを眺めていたら、

<pre><code>&lt;img src="https://dropbox.com/hstsping" alt="" style="display:none;"&gt;</code></pre>

こんなのをみつけたので、真似してみた。
そもそもhttpにアクセス来たらhttpsに301してるし、あんまり意味ないんじゃないのかなー という気もしなくもないけど、[Heroku](https://nna774-net.herokuapp.com/)で見たりしても、HSTS更新されるし良いかーという感じでつけた。

これ↓がこっそり読み込まれている。

![ping](/hstspng.png)

普段の画像は相対パス表記で書くようにしているけど、hstspingの用途としては[https://nna774.net/hstspng.png](https://nna774.net/hstspng.png)が決め打ちで書かれている。

# はい

これをすると同時にnna774.netのHSTSをinclude subdomainsにした。

それにともなって幾つかの自分用のURI(http://moe.nna774.net:3000なのをつかってたりしていた)を別のドメインに移して(お名前.comであたらしいのを取った)、
ついでにnna774.netのドメイン更新期限がちかかったのでしはらった。

今日はやっていったと言えるかな。
みなさんは、やっていってますか？
