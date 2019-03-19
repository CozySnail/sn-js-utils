# 文档

这是一个通用的 JS 工具类库，包含如下功能请见👇

---

# DateUtil 日期工具类

### 1. parseDate()

* 方法签名  
**parseDate(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**将 字符串/时间戳 解析成日期对象**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| date          | Date, String, Number   | 是 |          无          | 日期字符串，如'2014-09-13'，或者时间戳，如`1546272000000`|
| format       | String                         | 否  | 'yyyy-MM-dd' | 支持格式：y、M、d、H、m、s、S|

* 返回值 `Date`  
**解析后的Date对象**

* 举个例子

```js
parseDate('2018-11-26'); // new Date(2018, 10, 26)
parseDate('11/26/2018', 'MM/dd/yyyy') // new Date(2018, 10, 26)
parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss') // new Date(2018, 10, 26, 13, 28, 43)
parseDate('2018年11月26日', 'yyyy年MM月dd日') // new Date(2018, 10, 26)
parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分') // new Date(2018, 10, 26, 11, 40)
parseDate(1546272000000) // new Date(2019, 0, 1)
```

> 特殊说明:  
> 如果传入的 date 参数不符合要求的类型，则抛出 `TypeError` 错误

<br>

### 2. formatDate()

* 方法签名  
**formatDate(date: Date | number = new Date(), format: string = 'yyyy-MM-dd HH:mm:ss')**

* 方法详细介绍  
**将日期格式化成指定格式的字符串**

* 参数  

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, Number    | 否      |      new Date()     | 要格式化的日期，默认当前时间，也可以是一个时间戳 |
| format | String              | 否      | 'yyyy-MM-dd HH:mm:ss' | 支持的格式：y,M,d,q,w,H,h,m,S，默认：'yyyy-MM-dd HH:mm:ss' |

* 返回值 `String`  
**格式化后的日期字符串**

* 举个例子

```js
formatDate(); // 2016-09-02 13:17:13
formatDate(new Date(), 'yyyy-MM-dd'); // 2016-09-02
formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS'); // 2016-09-02 第3季度 星期五 13:19:15:792
formatDate(1472793615764); // 2016-09-02 13:20:15
```

> 特殊说明:  
> `date` 参数类型不合法时，返回字符串 'invalid date'

<br>

### 3.formatDateToFriendly()

* 方法签名  
**formatDateToFriendly(date: Date | number = new Date())**

* 方法详细介绍  
**将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，当天的返回时分，当年的返回月日，否则，返回年月日**

* 参数  

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, Number    | 否      |      new Date()     | 要格式化的日期，默认当前时间，支持时间戳 |

* 返回值 `String`  
**解析后的友好化日期格式**

* 举个例子

```js
// 假设当前时间为 2019-03-18 18:00:00
formatDateToFriendly(); // 刚刚
formatDateToFriendly(new Date()); // 刚刚
formatDateToFriendly(new Date(2019,2,18)); // 00:00
formatDateToFriendly(new Date(2019,1,18)); // 2月18日
formatDateToFriendly(new Date(2018,1,18)); // 2018年2月18
```

> 特殊说明: 无

<br>

### 4. timestamp()

* 方法签名  
**timestamp(date: Date | string = new Date(), format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**获取日期对应的时间戳**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String    | 否     |      new Date()     | 日期对象/日期字符串，默认当前时间 |
| format  | String             | 否     |     'yyyy-MM-dd'  | 字符串模板(date参数为字符串时有效) |

* 返回值 `Number`  
**时间戳(单位:毫秒)**

* 举个例子

```js
timestamp() // 获取当前时间的时间戳
timestamp(new Date(2018, 0, 1)) // 2018年1月1日的时间戳
timestamp('2018-01-01', 'yyyy-MM-dd') // 2018年1月1日的时间戳
timestamp([]) // -1
```

> 特殊说明:  
> 如果date参数不合法，则返回-1

<br>

### 5. dateBefore()

* 方法签名  
**dateBefore(date: Date | string | number, diff: IDateDiff, format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**计算指定日期往前偏移指定时间**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 初始日期，支持 Date 对象、日期字符串(需配合format参数)、时间戳 |
| diff     | IDateDiff                     | 是  |     无     | 日期差值，支持year、month、week、day、hour、minute、second、millsecond |
| format  | String                          | 否  |     'yyyy-MM-dd'  | 字符串模板(date参数为字符串时有效) |

* 返回值 `Date`  
**偏移后的日期**

* 举个例子

```js
dateBefore(new Date(2017, 11, 10), { year: 3 })
// 结果: new Date(2014, 11, 10)
dateBefore(new Date(2016, 1, 29), { year: 1 })
// 结果: new Date(2015, 1, 28)
dateBefore(new Date(2016, 2, 31), { month: 1 })
// 结果: new Date(2016, 1, 29)
dateBefore(new Date(2016, 0, 1), { day: 1 })
// 结果: new Date(2015, 11, 31)
dateBefore(new Date(2016, 2, 31), { month: 1, day: 1 })
// 结果: new Date(2016, 1, 29)
// 注意: 这里的结果不是 new Date(2016, 1, 28)，因为先计算 day ，后计算 month
dateBefore('2016年3月31日', { month: 1, day: 1 }, 'yyyy年M月dd日')
// 结果: new Date(2016, 1, 29)
```

> 特殊说明:  
> 1. `IDataDiff` 接口类型的参数可传入js的对象，比如 `{year:1,day:3}` 表示1年零3天
> 2. 如果 `diff` 参数采用混合模式(同时包含年月日)，则会先计算最小单位。  
> 比如，2015年12月30日 加上 2个月零1天，先计算最小单位会得到 2016年2月29日；先计算最大单位会得到 2016年3月1日。  
> 参考:https://www.timeanddate.com/date/dateadded.html?m1=12&d1=30&y1=2015&type=add&ay=&am=02&aw=&ad=01&rec=

<br>

### 6. dataAfter()

* 方法签名  
**dateAfter(date: Date | string | number, diff: IDateDiff, format: string = 'yyyy-MM-dd')**

* 方法详细介绍
**计算指定日期往后偏移指定时间**

* 参数  

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 初始日期，支持 Date 对象、日期字符串(需配合format参数)、时间戳 |
| diff     | IDateDiff                     | 是  |     无     | 日期差值，支持year、month、week、day、hour、minute、second、millsecond |
| format  | String                          | 否  |     'yyyy-MM-dd'  | 字符串模板(date参数为字符串时有效) |

* 返回值 `Date`  
**偏移后的日期**

* 举个例子

```js
dateAfter(new Date(2014, 11, 10), { year: 3 })
// 结果: new Date(2017, 11, 10)
dateAfter(new Date(2016, 1, 29), { year: 1 })
// 结果: new Date(2017, 1, 28)
dateAfter(new Date(2016, 2, 31), { month: 1 })
// 结果: new Date(2016, 3, 30)
dateAfter(new Date(2015, 11, 31), { day: 1 })
// 结果: new Date(2016, 0, 1)
dateAfter(new Date(2015, 11, 30), { month: 2, day: 1 })
// 结果: new Date(2016, 1, 29)
dateAfter('2015年12月30日', { month: 2, day: 1 }, 'yyyy年M月dd日')
// 结果: new Date(2016, 1, 29)
```

> 特殊说明:  
> 1. `IDataDiff` 接口类型的参数可传入js的对象，比如 `{year:1,day:3}` 表示1年零3天
> 2. 如果 `diff` 参数采用混合模式(同时包含年月日)，则会先计算最小单位。  
> 比如，2015年12月30日 加上 2个月零1天，先计算最小单位会得到 2016年2月29日；先计算最大单位会得到 2016年3月1日。  
> 参考:https://www.timeanddate.com/date/dateadded.html?m1=12&d1=30&y1=2015&type=add&ay=&am=02&aw=&ad=01&rec=

<br>

### 7. isLeapYear()

* 方法签名  
**isLeapYear(year: number)**

* 方法详细介绍  
**判断是否为闰年**

* 参数  

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| year     | Number   | 是  |     无     | 4位数的年份 |

* 返回值 `Boolean`  
**是否为闰年**

* 举个例子

```js
isLeapYear(1900) => false
isLeapYear(2000) => true
isLeapYear(2001) => false
isLeapYear(2004) => true
```

> 特殊说明: 无

<br>

### 8. getDaysInMonth()

* 方法签名  
**getDaysInMonth(year: number, month: number)**

* 方法详细介绍  
**计算在给定的年份中，给定的月份有多少天(会自动判断是否为闰年)**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| year     | Number   | 是  |     无     | 4位数的年份 |
| month   | Number   | 是  |     无     | 月份(0-11) |

* 返回值 `Number`  
**当月的天数**

* 举个例子

```js
getDaysInMonth(2019, 2) => 31
getDaysInMonth(2019, 1) => 28
getDaysInMonth(2016, 1) => 29
```

> 特殊说明： 月份从0开始

<br>

### 9. getDataStart()

* 方法签名  
**getDateStart(date: Date | string | number, mode: TimeDimension, format: string = 'yyyy-MM-dd')**

* 方法详细介绍
**获取日期指定时间维度的开始**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 日期 |
| mode     | TimeDimension              | 是  |     无     | 时间维度，可以使用 `0:Year` `1:Month` `2:Week` `3:Day` `4:Hour` `5:Minute` `6:Second` |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Date`  
**开始日期**

* 举个例子

```js
getDateStart(new Date(2018, 2, 3), 0) 
// new Date(2018, 0, 1) 年初
getDateStart(new Date(2018, 2, 3), 1) 
// new Date(2018, 2, 1) 月初
getDateStart(new Date(2018, 2, 3, 10, 20), 3) 
// new Date(2018, 2, 3) 当天凌晨
```

> 特殊说明：无

<br>

### 10. getDateEnd()

* 方法签名  
**getDateEnd(date: Date | string | number, mode: TimeDimension, format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**获取日期指定时间维度的结尾**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 日期 |
| mode     | TimeDimension              | 是  |     无     | 时间维度，可以使用 `Year` `Month` `Day` `Week` `Hour` `Minute` `Second` |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Date`  
**结尾日期**

* 举个例子

```js
getDateEnd(new Date(2018, 2, 3), 0) 
// new Date(2018, 11, 31, 23, 59, 59, 999) 年末
getDateEnd(new Date(2018, 2, 3), 1) 
// new Date(2018, 2, 31, 23, 59, 59, 999) 月末
getDateEnd(new Date(2018, 2, 3, 10, 20), 3) 
// new Date(2018, 2, 3, 23, 59, 59, 999) 当天凌晨
```

> 特殊说明：无

<br>

### 11. getDayCountOfYear()

* 方法签名  
**getDayCountOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**获取给定日期所在当年总共有多少天**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`  
**当年的总天数**

* 举个例子

```js
getDayOfYear('2018-11-26') => 365
getDayOfYear('12/20/2019', 'MM/dd/yyyy') => 365
getDayOfYear('2020-12-20') => 366
```

> 特殊说明：无

<br>

### 12. getDayIndexOfYear()

* 方法签名  
**getDayIndexOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**获取给定日期在当年的第几天**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`  
**日期在当年的第几天**

* 举个例子

```js
getDayIndexOfYear('2017-01-20') => 20
getDayIndexOfYear('2018-05-20') => 140
```

> 特别说明：无

<br>

### 13. getWeekIndexOfYear()

* 方法签名  
**getWeekIndexOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**获取给定日期在当年的第几周**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`  
**日期在当年的第几周**

* 举个例子

```js
getWeekIndexOfYear('2017-01-20') => 3
getWeekIndexOfYear('2018-05-20') => 20
```

> 特别说明：无

<br>

### 14. getWeekIndexOfMonth()

* 方法签名  
**getWeekIndexOfMonth(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**获取给定日期在当月的第几周**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`  
**日期在当月的第几周**

* 举个例子

```js
getWeekIndexOfMonth('2017-01-20') => 3
getWeekIndexOfMonth('2018-05-20') => 2
```

> 特别说明：无

<br>

### 15. getDateDiff()

* 方法签名  
**getDateDiff(date1: Date | string | number, date2: Date | string | number, format1: string = 'yyyy-MM-dd', format2: string = 'yyyy-MM-dd')**

* 方法详细介绍  
**计算两个日期的差**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date1     | Date, String, Number   | 是  |     无     | 日期对象/日期字符串/时间戳 |
| date2     | Date, String, Number   | 是  |     无     | 日期对象/日期字符串/时间戳 |
| format1  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date1`参数为字符串时有效 |
| format2  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date2`参数为字符串时有效 |

* 返回值 `ITimeSpan`  
**日期的差值对象**

* 举个例子

```js
getDateDiff('2019-01-01', '2019-01-02')
// { Day: 1, Hour: 0, Minute: 0, Second: 0, Millsecond: 0 }
getDateDiff('20190101', '2019-01-02 03:00:30', 'yyyyMMdd', 'yyyy-MM-dd HH:mm:ss')
// { Day: 1, Hour: 3, Minute: 0, Second: 30, Millsecond: 0 }
getDateDiff(new Date(2019, 0, 1), '2019-01-02 03:00:30', 'yyyy-MM-dd HH:mm:ss')
// { Day: 1, Hour: 3, Minute: 0, Second: 30, Millsecond: 0 }
```

> 特别说明： 
> 1. ITimeSpan是一个对象接口，字段包含 `Day` `Hour` `Minute` `Second` `Millsecond`
> 2. 当 `date` 和 `date2` 只有一个是字符串时，只需传入一个字符串模板参数

<br>

---

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

> 特殊说明: [无]

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

> 特殊说明: [无]


