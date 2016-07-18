---
title: memory
date: 2016-07-18 21:56 JST
tags: 
---

```
2016-07-18T20:39:47.945+0900 E STORAGE  [conn2] WiredTiger (12) [1468841987:945104][23859:0x7f9b2a6f6700], file:collection-2-4772634932404760316.wt, WT_CURSOR.search: memory allocation of 2748
4 bytes failed: Cannot allocate memory
2016-07-18T20:39:47.945+0900 I -        [conn2] Invariant failure: seekRet resulted in status UnknownError: 12: Cannot allocate memory at src/mongo/db/storage/wiredtiger/wiredtiger_record_stor
e.cpp 527
2016-07-18T20:39:47.965+0900 F -        [conn2] out of memory.
```

うあー

[Kagoya](https://www.kagoya.jp/cloud/vps/)のサーバ、保証1GBなの、地味に少ないな……。

どうしようかな……。
