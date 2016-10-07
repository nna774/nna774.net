---
title: Golangのnet/httpに困っている。
Date: 2015-07-23 05:46 JST
tags: Golang
---

最近バイトでGolangを書いてみたりしてるのだけれど、Golangへの細かい不満はあるんだけど、
今回のは小さな不満がどうでも良くなるような感じの不満だ。

# はじめに

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">golangのhttp.Get()、エンコードして渡したURIをデコードしてからリクエスト送るの、完全に気が狂ってると思うんだけど、なんでこんな風になってるんだ。</p>&mdash; 中野のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/621635918609297408">2015, 7月 16</a></blockquote>

GoogleのAPI扱ってたら、`%2F`を含んだURIにリソースが置かれて、それをGolangのnet/httpで取りに行こうとしてたら、何故かうまく行かなくて、
`fmt.Print(resp.Request.URL.String())`してみたら、なぜか`%2F`が`/`に直されていたので、それに関するツイート。

あきらかにバグだと思ってググってみたら、仕様らしくて、Won't Fixらしい。

<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> urlの仕様上、pathは%エンコード可能で%2fはエンコード対象ではないけれど世の中のサーバの殆どが%2fをデコードして扱ってるので、ならばgolangは療法持つかーって RawPath も持ってるという経緯だと思います。</p>&mdash; mattn (@mattn_jp) <a href="https://twitter.com/mattn_jp/status/621675810907250688">2015, 7月 16</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> req.Opaque を変えて下さい。 <a href="http://t.co/WNPV79ENX1">http://t.co/WNPV79ENX1</a></p>&mdash; mattn (@mattn_jp) <a href="https://twitter.com/mattn_jp/status/621689125842784256">2015, 7月 16</a></blockquote>

こういう時の対処法を教えて頂いて、その通りに修正したら上手く行くかと思い、次の時に試してみた。

# しかし

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">golangのnet/http、%2Fを/に書き換えられるのを、それを区別するサーバの為に回避するのはOpaqueを変更すれば良いということはわかったんだけど、307 リダイレクトで飛ばされるときも勝手に%2Fを/にされてるっぽくて困るのだけれど、これは回避できるのかな……。</p>&mdash; 中野のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/623404664642338816">2015, 7月 21</a></blockquote>

Opaqueを書き換えて、狙ったところにリクエストを送ることには成功したものの、
そこから307リダイレクトされた先に欲しいコンテンツが有る(言ってしまうと、Google Cloud StorageのAPIです)。
そしてそのリダイレクトする時にもまた`%2F`を`/`に書き換えられてしまい、思ったところにリクエストを飛ばしてくれない(これもRequest.URL.String()を見て判明した)。

HTTPクライアントにリクエストハンドラ的なものがあると[golang.org/pkg/net/http/](https://golang.org/pkg/net/http/)を眺めていると気づいたのだけれど、

<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr">CheckRedirectとかでなんとか出来るかと思ったら、これでリクエストを書き換えることはできない……？</p>&mdash; 中野のな(鴨川水量bot) (@nonamea774) <a href="https://twitter.com/nonamea774/status/623408314462814208">2015, 7月 21</a></blockquote>

なような感じでできなさそうな感じである。

しょうがないので今のとこ、

    cmd := exec.Command("curl", "-L", uri)

のようなひどいコードでごまかしてるが、何とかする方法は無いのでしょうか。誰か教えてください。
流石に何か方法が無いなら完全に壊れていると思うし、何かあるとは思うけれど、見つけられなかった……。

# 追記

CheckRedirectでリクエストを書き換えることはできそうな感じだったけれど、
そこのリクエストには既に`%2F`を`/`に書き換えられて破壊されたURIが格納されていた という感じでした。

一応そこから心のこもった置換で(`%2F`の使われている場所は大体予測できる)もとに戻すことはできそうな感じだけれど……。
なんとかならないのかなぁ……。
