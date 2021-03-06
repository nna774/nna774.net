---
directory_index: false
title: Golangのnet/httpが期待通りの挙動をするようになっていた。
date: 2016-01-22 21:20 JST
tags: Golang
---

以前[Golangのnet/httpに困っている](/blog/2015/07/23/golang.html)的な記事を書いたのだけれど、
それがいつの間にか治っていたので書いておく。

結局前回はcurlを使うことで解決(解決とは……)していたのだけれど、
プロセス呼ぶコストが高いのでなんとかできないかと再挑戦したところうまくいった。

`%2F`がURIに含まれていた時に勝手に`/`に置換されて、
それだと挙動の変わるサーバ(具体的にはGoogleのAPIサーバ)相手にGetリクエストを投げたい、という状況でした。

久しぶりに試してみると普通に

	http.Get(uri)

のようなコードで正常に動作した。
以前は動作しなくて困っていたので、何があったのかとchangeLogを漁っていると、
[このコミット](https://github.com/golang/go/commit/874a605af0764a8f340c3de65406963f514e21bc)で修正されていた。

1.5から入った修正なのに、本番が1.4.2だったことに気づかずにデプロイしてしまって慌ててリバートする羽目になったりしたものの、
これでcurlの呼び出しは削除された。
めでたしめでたし。
