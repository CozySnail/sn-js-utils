# 文档
这是一个通用的 JS 工具类库，包含如下功能请见👇
***
# DateUtil 日期工具类

### 1. parseDate()
* 方法定义<br>
**parseDate(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 函数详细介绍<br>
**将 字符串/时间戳 解析成日期对象**

* 参数<br>

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| date            | Date, String, Number   | 否               |                  | 输入的日期字符串，如'2014-09-13',或者时间戳                        |
| format          | String                 | 是               | 'yyyy-MM-dd'     | 支持如下：y、M、d、H、m、s、S，不支持w和q                          |
- 返回值 [return] {Date} 返回解析后的Date对象

* 举个例子

```js
parseDate('2018-11-26'); // new Date(2018, 10, 26)
parseDate('26/11/2018', 'MM/dd/yyyy') // new Date(2018, 10, 26)
parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss') // new Date(2018, 10, 26, 13, 28, 43)
parseDate('2018年11月26日', 'yyyy年MM月dd日') // new Date(2018, 10, 26)
parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分') // new Date(2018, 10, 26, 11, 40)
```

* 特殊说明: 如果传入的 date 参数不符合要求的类型，则抛出异常

<br>

### 2. formatDate()
* 方法定义<br>
**formatDate(date: Date | number = new Date(), format: string = 'yyyy-MM-dd HH:mm:ss')**

* 函数详细介绍<br>
**将日期格式化成指定格式的字符串**

* 参数<br>

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| date            | Date, Number           | 否               |                  | 要格式化的日期，不传时默认当前时间，也可以是一个时间戳                        |
| format          | String                 | 是               | 'yyyy-MM-dd HH:mm:ss'     | 支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss                          |
- 返回值 [return] {String} 返回格式化后的日期字符串

* 举个例子

```js
formatDate(); // 2016-09-02 13:17:13
formatDate(new Date(), 'yyyy-MM-dd'); // 2016-09-02
formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS'); // 2016-09-02 第3季度 星期五 13:19:15:792
formatDate(1472793615764); // 2016-09-02 13:20:15
```

* 特殊说明: 日期不合法时返回字符串 'invalid date'

<br>
<br>

***
# StringUtil 字符串工具类

### 1. isEmpty()
* 方法定义<br>
**isEmpty(input: string)**

* 函数详细介绍<br>
**判断字符串是否为空**

* 参数<br>

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input            | String                | 否               |                  | 输入字符串，如'我是测试的字符串'                        |
- 返回值 [return] {boolean} 返回判断结果 true/false

* 举个例子

```js
isEmpty('我是测试的字符串'); // false
isEmpty(''); // true
```

* 特殊说明: [无]

<br>

### 2. isNotEmpty()
* 方法定义<br>
**isNotEmpty(input: string)**

* 函数详细介绍<br>
**判断字符串是否不为空**

* 参数<br>

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input            | String                | 否               |                  | 输入字符串，如'我是测试的字符串'                        |
- 返回值 [return] {boolean} 返回判断结果 true/false

* 举个例子

```js
isNotEmpty('我是测试的字符串'); // true
isNotEmpty(''); // false
```

* 特殊说明: [无]


