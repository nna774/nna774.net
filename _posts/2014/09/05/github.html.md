---
directory_index: false
title: git push -f してこわかったはなし
date: 2014-09-05 03:51 JST
tags: Git
---

カレントブランチにforce push しようとして、

<pre>$ git push -f</pre>

した。

<pre> $ git push -f
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 417 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
To git@github.com:kmc-jp/Klang.git
  + 2b0b0f8...c981d5c gtest -> gtest (forced update)
  + 9d8a0e8...3a1dc66 master -> master (forced update)
</pre>

まだpull してなかった`master` までforce push して歴史がまきもどった。

なおさないといけない。

`master` を`9d8a0e8` に戻してpush するだけだろ と思った。
でも、手元に`9d8a0e8` が無い。

http アクセスで直接`9d8a0e8` のコミットオブジェクトを取ってきたらなんとかなるかと思ったけど、今はhttp では簡単には見えないらしい？

いろいろためしてたら、<br />
![ここ](/blog/2014/09/05/gh.png)<br />
よく見たら、"Find or **create** a branch..." って書いてある。

ここから適当なブランチを作成して手元にもってきてpush して元通り。

こわかった。
