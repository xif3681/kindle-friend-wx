* 1. 首页

* 实施搜索文本
```shell
 curl -XPOST "api/v1/kindle/queryWords"

```
>分页 默认pageSize=10
#### request

```json
    { 
      "queryString" : "",
      "curPage": 1,
      "pageSize": 10
    }
```
#### response

```json
{
  "data":[{
      "id": "0001",
      "imgsrc": "base64.icon60",
      "title": "老子今注今译",
      "grade": "9.0",
      "author": "老子",
      "time": "2003",
      "Publisher": "商务印书馆",
      "abstract": "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
    }],
  
  "status": 200
}
```
* 2. 下载页
* 电子书详情
```shell
 curl -XGET "api/v1/kindle/detail/{id}"

```
#### response

```json
{
  "data":[{
      "id": "0001",
      "imgsrc": "base64.icon60",
      "title": "老子今注今译",
      "grade": "9.0",
      "author": "老子",
      "time": "2003",
      "Publisher": "商务印书馆",
      "abstract": "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
      "downloadInfo": {
        "fileName" : "",
        "fileSize": "",
        "fileAuth": "",
        "format": ["AMZ3", "MOBI", "EPUB"]

      }
    }],
  
  "status": 200
}
```

* 下载电子书
```shell
 curl -XGET "api/v1/kindle/book/{id}"

```
* 发送邮件 （待定）

* 3. 电子书列表页--及实时搜索文本
```shell
 curl -XPOST "api/v1/kindle/queryWords"

```


