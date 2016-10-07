---
directory_index: false
title: サイボウズ・ラボユースHackathon に参加してOpenYo の開発を進めてきたはなし。
date: 2014-09-11 00:00 JST
tags: OpenYo
---

みなさんYo はまだ使ってますか？<br />
もちろんまだまだ使ってますよね？<br />
誰かはやく[ないんたん](http://blog.imoz.jp/post/7316967132/ninetan-forecast) の機嫌が悪くなって雨振りそうになったらYo が来るシステム作ってください(自分で作れ)。

というわけで大人気のYo ですが、Yo の自由な実装欲しいという話を以前からやっていて、[私立・プログラミングキャンプ 2014 関西大会 - #upcamp #upcampKansai](https://atnd.org/events/52714) でも若干作りかけた(API の定義をしたぐらい) のですが、それを[サイボウズ・ラボユースHackathon](http://developer.cybozu.co.jp/tech/?p=7403) で進めてきました。実装してきました。<small>写真のどれとかそういうアレは勘弁してほしい……。私はかわいい女の子だし、いつも代理として女子高生をリアルワールドに出してるんだけど代理の容易が今回は間に合わなかった。</small>

で、以下のレポジトリに生成物があります。ちょっとづつ更新していきたいです。<br />
[nna774/OpenYo](https://github.com/nna774/OpenYo)

んで以下のが発表に使ったスライドです。

<iframe src="https://docs.google.com/presentation/d/1wOR9Jq27dWBJsF9GkwDVyHW8Ly8S-dnWcIdQUwyrSBs/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

で、取り敢えず以下のURI を私が開発する用に使っています。<br />
[`OpenYo.nna774.net`](http://OpenYo.nna774.net/)

以下のようにして私にYo を送ることができます(API token は仮のものなので、いつのまにか使えなくなってるかもしれません)。<br />
`$ curl -d "api_ver=0.1&api_token=huga&username=nona7" http://OpenYo.nna774.net/yo/`

以下のようにわたしのところにきます。

<blockquote class="twitter-tweet" lang="ja"><p>良い <a href="http://t.co/u1084poORt">pic.twitter.com/u1084poORt</a></p>&mdash; 綾波型駆逐艦のな[46/461] 10% (@nonamea774) <a href="https://twitter.com/nonamea774/status/509541811426045952">2014, 9月 10</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

以下のURI から簡単に送信することもできます。(この/sender/API_TOKEN は機能として実装したいですが、やっぱり仮のAPI token なのでここからはいつのまにか送れないようになるかもしれません)。<br />
[`http://OpenYo.nna774.net/sender/huga`](http://OpenYo.nna774.net/sender/huga)

現在まだ送る回数の制限とか設けてないので、無限に送ることができますが、わたしに通知が来まくって辛いきもちになるので、常識的な回数の送信に留めてくれると幸いです。

で、今回このOpenYo でラボユースHackathon で勝ってしまいました。商品として以下の中から選択で貰えることになりました。<br />

* 社員と豪華焼肉会へご招待
* iPad mini
* Kindle Paperwhite
* レッドブル100本
で、みんなで飲もうとレッドブル100本をKMC にもちかえることにしました。無限レッドブル。

豪華焼肉会も結構気になったのですが、9月の残りは免許合宿に行ってしまうので諦めました。<br />
iPad mini, 既に持ってると思ったけど、今考えてみると実はRetina になってて一世代良くなってたのでは、って思ってきた。<br />
Kindle Paperwhite も結構惹かれたけど、この中ではちょっと安いかなって思ってしまって選べなかった(。でも調べてしまったら結構欲くなってきてしまった。<small>((値段だけ考えるとiPad?))</small>

またレッドブルが届いたら部室にもっていって100本の圧力を報告したいです。
