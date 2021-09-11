---
directory_index: false
title: emacs24.4 にアップデートして困ってることとか
date: 2014-10-22 09:20 JST
tags: emacs
---

emacs 24.4 にアップデートが来てたので更新。

いくつかのelisp に問題が起きたり、あたらしい機能が入ったりしたらしいので、とりあえずいくつか。

# (setq load-prefer-newer t)

`(setq load-prefer-newer t)`

[Emacs 24.4リリース！ファーストインプレッション | るびきち「日刊Emacs」](http://rubikitch.com/2014/10/21/emacs244-2/)
load-prefer-newer: バイトコンパイル忘れでハマることはもうない

新しい方を読んでくれるらしい。

# 【対処療法的解決？】scratch-log.el

[スクラッチバッファを安心して利用できるようにする拡張をつくった - わからん](http://d.hatena.ne.jp/kitokitoki/20100612/p1)

個人的に必須elisp

なにやらエラーが出てるけどよくわからん。<br />
`sl-dump-scratch-for-timer()` は定期的に`*scratch*` を保存してくれる関数っぽい。<br />
`sl-dump-scratch-when-kill-emacs` とかが取り敢えず終了時に保存してくれるらしいので気にしないでいいのかな……

<pre><code>Debugger entered--Lisp error: (args-out-of-range 0 51640)
  compare-buffer-substrings(#<buffer  *temp*> 0 51640 #<buffer *scratch*> 0 51640)
  sl-need-to-save()
  sl-dump-scratch-for-timer()
  apply(sl-dump-scratch-for-timer nil)
  byte-code("r\301\302H\303H\"\210)\301\207" [timer apply 5 6] 4)
  timer-event-handler([t 0 30 0 t sl-dump-scratch-for-timer nil idle 0])
</code></pre>

さっきのページからリンクされている[https://github.com/wakaran/scratch-log](https://github.com/wakaran/scratch-log)、Github のアカウントごと消えてるっぽいので、elisp はGPL になっているので再配布とりあえずしておきます。[ここ](https://gist.github.com/nna774/c2f68062ed762c4c55e5)

## 追記1 10/23 00:20

[https://gist.github.com/nna774/c2f68062ed762c4c55e5#file-scratch-log-el-L90-L91](https://gist.github.com/nna774/c2f68062ed762c4c55e5#file-scratch-log-el-L90-L91)<br />
90行目, 91行目の

    (current-buffer) 0 (point-max)
    it 0 scratch-point-max)

にある二つの0 を共に1 にしたらエラーは出なくなった。<br />
`*Scratch*` の最初の一文字目だけの変更が検知されなくなりそうだけど、
一文字目だけの変更に気付かずに定期的に保存されるのと、エラーで定期的に保存されないのなら
まだ前者のほうがマシに思うので、とりあえずこうしておこうと思う……。

## 追記2 10/26 23:55

このようなリプライを頂いた

<blockquote class="twitter-tweet" lang="ja"><p><a href="https://twitter.com/nonamea774">@nonamea774</a> 今のscratch-log.elのリポジトリは <a href="https://t.co/izDp5pnDr1">https://t.co/izDp5pnDr1</a> ですね。 <a href="https://t.co/tXvIha3iQV">https://t.co/tXvIha3iQV</a></p>&mdash; Takashi Masuda (@masutaka) <a href="https://twitter.com/masutaka/status/526384292813733888">2014, 10月 26</a></blockquote>

scratch-log.el のレポジトリは、削除されたのではなく[mori-dev/scratch-log](https://github.com/mori-dev/scratch-log) へと移動していたらしい。

また、追記1 で行なった変更についても教えていただいた。

<blockquote class="twitter-tweet" lang="ja"><p><a href="https://twitter.com/nonamea774">@nonamea774</a> バッファの先頭で(point)すると1が返るので、1が正しい気はします。Emacs-24.3とEmacs-24.4で確認しました。Issueも立ってますね <a href="https://t.co/Fs6ArHZ3pe">https://t.co/Fs6ArHZ3pe</a></p>&mdash; Takashi Masuda (@masutaka) <a href="https://twitter.com/masutaka/status/526384718304911360">2014, 10月 26</a></blockquote>

更にPR の形にして投げてくださいました。ありがとうございます！<br />
[mori-dev/scratch-log#9 Fix running timer error](https://github.com/mori-dev/scratch-log/pull/9)

# 【解決】zlc.el

[mooz/emacs-zlc](https://github.com/mooz/emacs-zlc)

補完をいいかんじにやってくれるelisp なのですが、24.4 に上げた瞬間からうまくうごきません……

<pre><code>Debugger entered--Lisp error: (wrong-number-of-arguments (2 . 4) 0)
  completion--do-completion()
  zlc-minibuffer-complete()
  (if zlc--mode (zlc-minibuffer-complete) (setq ad-return-value (with-no-warnings (funcall ad--addoit-function))))
  (let (ad-return-value) (if zlc--mode (zlc-minibuffer-complete) (setq ad-return-value (with-no-warnings (funcall ad--addoit-function)))) ad-return-value)
  ad-Advice-minibuffer-complete(#[0 "\302\303 d	$\207" [minibuffer-completion-table minibuffer-completion-predicate completion-in-region minibuffer-prompt-end] 5 1938442 nil])
  apply(ad-Advice-minibuffer-complete #[0 "\302\303 d	$\207" [minibuffer-completion-table minibuffer-completion-predicate completion-in-region minibuffer-prompt-end] 5 1938442 nil] nil)
  minibuffer-complete()
  call-interactively(minibuffer-complete nil nil)
  command-execute(minibuffer-complete)
  read-from-minibuffer("Find file: " "~/" (keymap (keymap (32)) keymap (7 . minibuffer-keyboard-quit) (10 . minibuffer-complete-and-exit) (13 . minibuffer-complete-and-exit) keymap (7 . minibuffer-keyboard-quit) (menu-bar keymap (minibuf "Minibuf" keymap (tab menu-item "Complete" minibuffer-complete :help "Complete as far as possible") (space menu-item "Complete Word" minibuffer-complete-word :help "Complete at most one word") (63 menu-item "List Completions" minibuffer-completion-help :help "Display all possible completions") "Minibuf")) (27 keymap (118 . switch-to-completions)) (prior . switch-to-completions) (63 . minibuffer-completion-help) (32 . minibuffer-complete-word) (9 . minibuffer-complete) keymap (6 . zlc-select-next) (2 . zlc-select-previous) (14 . zlc-select-next-vertical) (16 . zlc-select-previous-vertical) (left . zlc-select-previous) (right . zlc-select-next) (S-tab . zlc-select-previous) (backtab . zlc-select-previous) (menu-bar keymap (minibuf "Minibuf" keymap (previous menu-item "Previous History Item" previous-history-element :help "Put previous minibuffer history element in the minibuffer") (next menu-item "Next History Item" next-history-element :help "Put next minibuffer history element in the minibuffer") (isearch-backward menu-item "Isearch History Backward" isearch-backward :help "Incrementally search minibuffer history backward") (isearch-forward menu-item "Isearch History Forward" isearch-forward :help "Incrementally search minibuffer history forward") (return menu-item "Enter" exit-minibuffer :key-sequence "" :help "Terminate input and exit minibuffer") (quit menu-item "Quit" abort-recursive-edit :help "Abort input and exit minibuffer") "Minibuf")) (10 . exit-minibuffer) (13 . exit-minibuffer) (7 . minibuffer-keyboard-quit) (C-tab . file-cache-minibuffer-complete) (9 . self-insert-command) (XF86Back . previous-history-element) (up . zlc-select-previous-vertical) (prior . previous-history-element) (XF86Forward . next-history-element) (down . zlc-select-next-vertical) (next . next-history-element) (27 keymap (114 . previous-matching-history-element) (115 . next-matching-history-element) (112 . previous-history-element) (110 . next-history-element))) nil file-name-history "~/" nil)
  completing-read-default("Find file: " read-file-name-internal file-exists-p confirm-after-completion "~/" file-name-history "~/" nil)
  completing-read("Find file: " read-file-name-internal file-exists-p confirm-after-completion "~/" file-name-history "~/")
  read-file-name-default("Find file: " nil "~/" confirm-after-completion nil nil)
  read-file-name("Find file: " nil "~/" confirm-after-completion)
  find-file-read-args("Find file: " confirm-after-completion)
  byte-code("\300\301\302 \"\207" [find-file-read-args "Find file: " confirm-nonexistent-file-or-buffer] 3)
  call-interactively(find-file nil nil)
  command-execute(find-file)
</code></pre>

## 追記 10/22 23:50

Twitter で治しかたを教えていただきました。<br />
その人のツイートは既に削除されているので、方法だけ載せておきます。

`zlc-minibuffer-complete` の`(completion--do-completion)` を
`(completion--do-completion (minibuffer-prompt-end) (point-max))`
にすれば動くようになりました。

[https://github.com/nna774/emacs-zlc/commit/e57daf87987bb0b49af2e2323b787bd3e9e58cbc](https://github.com/nna774/emacs-zlc/commit/e57daf87987bb0b49af2e2323b787bd3e9e58cbc)

共になんとかする方法がわかったら追記します。<br />
誰かなんとかする方法がわかる人、教えてください。。。 > [@nonamea774](https://twitter.com/nonamea774) or [nonamea774@gmail.com](mailto:nonamea774@gmail.com)

# memo

書いとかないとぜったい忘れるのでメモ

スタックトレースを出してほしい時は

`M-x toggle-debug-on-error`
