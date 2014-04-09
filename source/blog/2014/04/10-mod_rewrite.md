---
title: mod_rewrite
date: 2014-04-10 00:39 JST
tags: Blog
---

現状、このページは、静的html等は事前にgzip で圧縮して、それをmod_rewrite でいいかんじにURL を書きかえてAccept-Encoding: gzip があればgzip版を返すよう設定してある。
……と思ってたんだけれども、Accept-Encoding: gzip がついてなくても、gzip で返したり、対応するgz ファイルが存在しないと404 になったりしていた。

<pre><code>RewriteCond %{HTTP:Accept-encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)\.css$ $1.css.gz [QSA,L]
RewriteRule ^(.*)\.js$ $1.js.gz [QSA,L]
RewriteRule ^(.*)\.html$ $1.html.gz [QSA,L]
</code></pre>

のように書いていた。

調べていると、結局、RewriteCond が影響するのは、次のRewriteRule だけであることがわかった。
それでAccept-Encoding: gzip のないindex.html へのアクセスにもgzip圧縮されたものを返したり、index.html.gz がないと404 になったりしていたのだ。

<pre><code>RewriteCond %{HTTP:Accept-encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)\.css$ $1.css.gz [QSA,L]
RewriteCond %{HTTP:Accept-encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)\.js$ $1.js.gz [QSA,L]
RewriteCond %{HTTP:Accept-encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)\.html$ $1.html.gz [QSA,L]
</code></pre>

のように書きなおした現在、期待どうりの挙動をしているように見える。
