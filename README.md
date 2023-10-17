# quick_web_node
快速搭建WEB（Node版）

#### 启动
```text
1、先启动docker-compose
2、ts-node index.js
```

#### Error: error:0308010C:digital envelope routines::unsupported
```shell
# linux & mac
export NODE_OPTIONS=--openssl-legacy-provider
# windows
set NODE_OPTIONS=--openssl-legacy-provider
```
