---
Directory_index: false
title: Drone.ioがつらい……。
Date: 2016-12-01 18:09 JST
tags: アドベントカレンダー
---

今年もはじまりましたやる気の無いアドベントカレンダー[のなの12月日記 Advent Calendar 2016](http://www.adventar.org/calendars/1437)一日目

毎日特に意味の無い日記を書いていったりします。

昨日bundle updateを[tachicomal](http://tachikoma.io)経由で行なったら、いきなりCIが壊れて自動でブログをデプロイするしくみがこわれてつらい。

[ログ](https://drone.io/github.com/nna774/nna774.net/419)を見るに、

<pre><code>Gem::InstallError: activesupport requires Ruby version >= 2.2.2.</code></pre>

でdrone.ioで選べるruby-versionが1.8.7, 1.9.3, 2.0.0なので辛いという感じとなった。

drone捨ててどっかに移る……？

まぁとりあえず手動ビルドでデプロイをしています。

明日も続くかな。今日はここまで。これから飲みに行きます。
