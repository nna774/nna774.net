---
directory_index: false
title: OpenYo のエンドポイントをSSL 対応にしました。
date: 2014-09-21 13:20 JST
tags: OpenYo
---

endpoint は

[`https://OpenYo.nna774.net/`](https://OpenYo.nna774.net/)

です。
<del>オレオレ証明書なので証明書警告が出ます。</del>

* <del>SHA-256 指紋</del>
  * <del>24 A8 46 7E BD 08 29 28 3D 2F 23 40 A1 21 19 16
    64 9B 0B FB E1 BC FF 48 0D 9C 1E D4 56 3E 07 84</del>

* <del>SHA-1 指紋</del>
  * <del>6F 16 83 6B 73 3D F8 FC 0C 0F BC E7 88 A1 A5 B0
    DB 6B D2 AD</del>

【追記 9/22 12:50】<br />
Start SSL で取得しました。これで警告も出ません！<br />
【追記ここまで】

今のところ今までどうり、http でも使えます。

# ref
今のところまだぜんぜんドキュメントが無いです。
レポジトリの[README](https://github.com/nna774/OpenYo) と、[前の記事](/blog/2014/09/11/cybozu.html)が今のところの主なドキュメントとなります。
