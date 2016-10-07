---
title:	［実績］Btrfs を壊す を解除しました。
date: 2015-05-09 19:18 JST
tags: Btrfs, Togetter
---

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# はい
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">[実績] Btrfs を壊す を解除しました。</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596351443306557440">2015, 5月 7</a></blockquote>

# まとめ

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">データが吹っ飛んだ者は幸いである。彼らは天の国で吹っ飛んだデータを見つけるからである。</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596325790318338048">2015, 5月 7</a></blockquote>

# くわしく

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">readyNAS が起きてこなくてつらい。コンソールが無いから何が起きてるのかよくわからない。</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596328084883705856">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">一方 Gentoo マシンの様子です。 <a href="http://t.co/pzHlxCoFtO">pic.twitter.com/pzHlxCoFtO</a></p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596329167374852098">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="en" dir="ltr">BTRFS critical</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596329790799368193">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">これはもうダメかもわからんね。 <a href="http://t.co/cE1zSUb0RA">pic.twitter.com/cE1zSUb0RA</a></p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596329570095091712">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> これなら直せる</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596330195889467392">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">Btrfs のプロから朗報リプライを頂いた。</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596330502409179137">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">めちゃめちゃ力強い御言葉だ</p>&mdash; しゅううさん (@syuu1228) <a href="https://twitter.com/syuu1228/status/596330748858081281">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/naota344">@naota344</a> これはどういう状況なのでしょうか……？</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596330341754769409">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> b-treeってわかりますかね</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596330532935376896">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/naota344">@naota344</a> あまり詳しくはわからないです……。 なんとなくしか。</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596330901019070464">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> Btrfsではb-treeにキー(たとえばファイル名とか)に対応する値(たとえばそのファイルのデータ位置)が記録されてる。値のサイズは可変である。そのため、このキーに対応する値はここというオフセットと値のサイズが保存される。</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596331696972148736">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> 値はブロックの後ろから積めて配置される。ここで、あるキーkとその次のキーlを考える。lの値のオフセット+lのサイズ=kの値のオフセットという式が成り立つ。&#10;今回のエラーログはある一つのブロックについて、この式が成り立っていない場所があることを示唆している</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596332485962661888">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/naota344">@naota344</a> 一つのブロックが壊れているだけ、ということですか？ どのように回復可能でしょうか？</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596334750593257472">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> 一つのブロックのしかもオフセットなので周りから計算可能ということですね。てきとーにそのブロックのoffset直すCのプログラム書くと直るよ。btrfsckのコード見ながら書けばよい</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596335052360847360">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> これの「さて、ここまでは」以降を参照のこと&#10;<a href="http://t.co/sAtyn9SIpa">http://t.co/sAtyn9SIpa</a></p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596335583691034624">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> なお、近年のbtrfsckにはoffset fixのコードが入っているので、バックアップ後にbtrfsckするのもよい</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596337046240657409">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> <a href="https://t.co/09vq4VS6ay">https://t.co/09vq4VS6ay</a> を冒頭のmake ruleにしたがってmake (Makefile に追記すれば多分動くかな?)して ./oreorefsck 実行したら多分直る</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596355167139692545">2015, 5月 7</a></blockquote>

とりあえずこれで治りました。

# なにか
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">btrfs-debug-tree が SEGV した。</p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596336732980649984">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">あーそっか stripped だからよくわからないな……。 <a href="http://t.co/MLLQNuCxO9">pic.twitter.com/MLLQNuCxO9</a></p>&mdash; 中野のな改ぽよ (@nonamea774) <a href="https://twitter.com/nonamea774/status/596344883113168896">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/nonamea774">@nonamea774</a> 正しい値は16104(0x3eea)で書かれてる値は48874(0xbee4)ですね。一つbitが立ってる。そういうことです</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596347117574041600">2015, 5月 7</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">btrfs の slot offset が1bit立ってておかしくなる問題、自分のところでも何度か起きたことがあるが、なぜ起きてしまうのだろう &#10;<a href="https://t.co/yyw6wnyNx1">https://t.co/yyw6wnyNx1</a></p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596573513244217344">2015, 5月 8</a></blockquote>
<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">これがおもしろいのは checksum (crc32c) は通っているところ。 crc32c は通るが1bit 確実にflipしてる</p>&mdash; 倍増計画へのcontribution (@naota344) <a href="https://twitter.com/naota344/status/596574257963892736">2015, 5月 8</a></blockquote>

# Togetter でやれ
一理ある。

# その他
HDD 治ったのはいいけれど、`emerge` 中に謎の ICE を踏む現象<br />
[![Gyazo](https://i.gyazo.com/335edda2082e61504d280e9b3d894ea3.png)](https://gyazo.com/335edda2082e61504d280e9b3d894ea3) <br />
が辛すぎる感じだ。 Gentoo はむずかしい。
