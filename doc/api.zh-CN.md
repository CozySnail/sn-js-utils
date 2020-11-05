# 文档

这是一个通用的 JS 工具类库，包含如下功能请见👇

---

# CommonUtil 常用工具类

[phoneIsValid 检查手机号是否合法](#1-phoneIsValid)<br>
[maskPhone 对手机号进行脱敏处理](#2-maskPhone)<br>
[idcardIsValid 检查身份证是否合法](#3-idcardIsValid)<br>
[maskIDCard 对身份证进行脱敏处理](#4-maskIDCard)<br>

<br>

# NumberUtil 数字工具类

[isInteger 是否为整数](#1-isInteger)<br>
[isFloat 是否为小数](#2-isFloat)<br>
[inRange 是否在范围内](#3-inRange)<br>
[random 随机数](#4-random)<br>

<br>

# ArrayUtil 数组工具类

[chunk 数组分块](#1-chunk)<br>
[slice 数组切片](#2-slice)<br>
[group 对象数组分组](#3-group)<br>

<br>

# DateUtil 日期工具类

[parseDate 将 字符串/时间戳 解析成日期对象](#1-parseDate)<br>
[formatDate 将日期格式化成指定格式的字符串](#2-formatDate)<br>
[formatDateToFriendly 日期格式化成友好格式](#3-formatDateToFriendly)<br>
[timestamp 获取时间戳](#4-timestamp)<br>
[dateBefore 日期向前偏移](#5-dateBefore)<br>
[dateAfter 日期向后偏移](#6-dateAfter)<br>
[isLeapYear 判断是否闰年](#7-isLeapYear)<br>
[getDaysInMonth 给定的月份有多少天](#8-getDaysInMonth)<br>
[getDateStart 获取日期指定时间维度的开头](#9-getDataStart)<br>
[getDateEnd 获取日期指定时间维度的结尾](#10-getDateEnd)<br>
[getDayCountOfYear 获取给定日期所在当年总共有多少天](#11-getDayCountOfYear)<br>
[getDayIndexOfYear 获取给定日期在当年的第几天](#12-getDayIndexOfYear)<br>
[getWeekIndexOfYear 获取给定日期在当年的第几周](#13-getWeekIndexOfYear)<br>
[getWeekIndexOfMonth 获取给定日期在当月的第几周](#14-getWeekIndexOfMonth)<br>
[getDateDiff 计算两个日期的差](#15-getDateDiff)<br>

<br>

# StringUtil 字符串工具类

[isEmpty 判断字符串是否为空](#1-isEmpty)<br> 
[isNotEmpty 判断字符串是否不为空](#2-isNotEmpty)<br> 
[trim 将字符串去除空格](#3-trim)<br>
[startsWith 判断字符串是否以某个字符串开头](#4-startsWith)<br> 
[endsWith 判断字符串是否以某个字符串结束](#5-endsWith)<br>
[contains 判断字符串是否包含某个字符串](#6-contains)<br>
[equals 判断两个字符串是否相等](#7-equals)<br> 
[equalsIgnoreCase 忽略大小写判断两个字符串是否相等](#8-equalsIgnoreCase)<br> 
[containsWhitespace 判断字符串是否含有空格](#9-containsWhitespace)<br> 
[repeat 按指定数量生成给定字符串字符](#10-repeat)<br> 
[deleteWhitespace 去除字符串中的空格](#11-deleteWhitespace)<br> 
[rightPad 将给定字符串进行右侧填充](#12-rightPad)<br> 
[leftPad 将给定字符串进行左侧填充](#13-leftPad)<br> 
[capitalize 将字符串首字母转大写](#14-capitalize)<br> 
[unCapitalize 将字符串首字母转小写](#15-unCapitalize)<br> 
[swapCase 将字符串中的字母大写转小写，小写转大写](#16-swapCase)<br> 
[countMatches 统计含有的子字符串的个数](#17-countMatches)<br> 
[isAlpha 判断字符串是否为字母](#18-isAlpha)<br> 
[isAlphaSpace 判断字符串是否为字母、空格](#19-isAlphaSpace)<br> 
[isAlphanumeric 判断字符串是否为字母、数字](#20-isAlphanumeric)<br> 
[isAlphanumericSpace 判断字符串是否为字母、数字、空格](#21-isAlphanumericSpace)<br> 
[isNumeric 判断字符串是否为数字](#22-isNumeric)<br> 
[isDecimal 判断字符串是否为小数](#23-isDecimal)<br> 
[isNegativeDecimal 判断字符串是否为负小数](#24-isNegativeDecimal)<br> 
[isPositiveDecimal 判断字符串是否为正小数](#25-isPositiveDecimal)<br> 
[isInteger 判断字符串是否为整数](#26-isInteger)<br> 
[isPositiveInteger 判断字符串是否为正整数](#27-isPositiveInteger)<br> 
[isNegativeInteger 判断字符串是否为负整数](#28-isNegativeInteger)<br> 
[isNumericSpace  判断字符串是否为数字、空格](#29-isNumericSpace)<br> 
[isWhitespace 判断字符串是否为空格](#30-isWhitespace)<br> 
[isAllLowerCase 判断字符串是否为小写字母](#31-isAllLowerCase)<br> 
[isAllUpperCase 判断字符串是否为大写字母](#32-isAllUpperCase)<br> 
[defaultIfEmpty 如果字符串为空则使用默认字符串, 否则不变](#33-defaultIfEmpty)<br> 
[reverse 字符串反转](#34-reverse)<br> 
[removeSpecialCharacter 删掉特殊字符(英文状态下)](#35-removeSpecialCharacter)<br> 
[isSpecialCharacterAlphanumeric 只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）](#36-isSpecialCharacterAlphanumeric)<br> 
[format 消息格式化后的字符串](#37-format)<br> 
[isChinese 中文校验](#38-isChinese)<br>
[removeChinese 去掉中文字符](#39-removeChinese)<br> 
[escapeMetacharacter 转义元字符](#40-escapeMetacharacter)<br> 
[escapeMetacharacterOfStr 转义字符串中的元字符](#41-escapeMetacharacterOfStr)<br>
[camelize 将中划线分隔形式的字符串转换为驼峰式的字符串](#42-camelize)<br> 
[hyphenate 将驼峰式的字符串转换为中划线分隔形式的字符串](#43-hyphenate)<br> 

---

### 1. isInteger()

* 方法签名<br>
**isInteger(num: number)**

* 方法详细介绍<br>
**判断是否为整数**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| num    | Number     | 是 |    无      | 判断对象    |

* 返回值<br>
**true是整数/false不是整数**

* 举个例子

```js
isInteger(0)
// => true
isInteger(0.1)
// => false
isInteger(Math.PI)
// => false
isInteger('10')
// => false
isInteger(true)
// => false
```

> 特别说明：只有 `num` 是数字并且是整数时，才返回 `true`；其他情况都返回 `false`。

<br>

### 2. isFloat()

* 方法签名<br>
**isFloat(num: number)**

* 方法详细介绍<br>
**判断是否为小数**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| num    | Number     | 是 |    无      | 判断对象    |

* 返回值<br>
**true是小数/false不是小数**

* 举个例子

```js
isFloat(0)
// => false
isFloat(3)
// => false
isFloat(0.1)
// => true
isFloat(3.3)
// => true
isFloat(Math.PI)
// => true
// 注:Math.PI 在计算机中是有理数
```

> 特别说明：`1.0` 被认为是整数，而不是小数

<br>

### 3. inRange()

* 方法签名<br>
**inRange(num: number, start: number, end: number)**

* 方法详细介绍<br>
**检查数字是否在指定区间内**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| num    | Number     | 是 |    无      | 判断对象    |
| start | Number     | 否 |    0      | 区间的开始    |
| end     | Number     | 是 |    无      | 区间的结束    |

* 返回值<br>
**true/false**

* 举个例子

```js
inRange(3, 2, 4)
// => true
inRange(4, 8)
// => inRange(4, 0, 8) => true
inRange(5.2, 4)
// => false
inRange(-3, -2, -6)
// => true
```

> 特别说明：`end` 参数不包含在区间中

<br>

### 4. random()

* 方法签名<br>
**random(lower: number, upper: number, floating: number = 0)**

* 方法详细介绍<br>
**生成随机数，支持随机整数和随机小数**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| lower        | Number     | 是 |    无      | 下边界，默认0    |
| upper        | Number     | 是 |    无      | 上边界，默认1    |
| floating   | Number     | 否 |    0       | 随机小数的位数，默认0    |

* 返回值<br>
**随机数**

* 举个例子

```js
random(0, 5)
// => an integer between 0 and 5
random(5)
// => also random(0, 5)
random(1.2, 5.2)
// => a floating-point number between 1.2 and 5.2
random(1.2, 5.2, 1)
// => 返回的随机数只有一位小数
```

> 特别说明：无

<br>

---

### 1. phoneIsValid()

* 方法签名<br>
**phoneIsValid(phone: string)**

* 方法详细介绍<br>
**检查手机号是否合法**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| phone     | String     | 是 |    无      | 手机号    |

* 返回值<br>
**true有效/false无效**

* 举个例子

```js
phoneIsValid(null)
// => false
phoneIsValid('123')
// => false
phoneIsValid('12345678901')
// => true
```

> 特别说明：无

<br>

### 2. maskPhone()

* 方法签名<br>
**maskPhone(phone: string, start: number = 3, len: number = 4)**

* 方法详细介绍<br>
**对手机号进行去敏处理，用*替换**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| phone     | String     | 是 |    无      | 手机号    |
| start     | Number     | 否 |    3      | 开始位置，从0开始    |
| len         | Number     | 否 |    4      | 掩码长度    |

* 返回值<br>
**脱敏手机号**

* 举个例子

```js
maskPhone('13641601234')
// => '136****1234'
maskPhone('1234')
// => '1234'
maskPhone('13641601234', 3, 8)
// => '136********'
```

> 特别说明：无

<br>

### 3. idcardIsValid()

* 方法签名<br>
**idcardIsValid(idcard: string)**

* 方法详细介绍<br>
**检查身份证是否合法**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| idcard     | String     | 是 |    无      | 身份证号    |

* 返回值 `Boolean`<br>
**true有效/false无效**

* 举个例子

```js
idcardIsValid('110410199001011234')
// => false
idcardIsValid('410482199001080000')
// => true
```

> 特别说明： 目前进支持18位的二代身份证

<br>

### 4. maskIDCard()

* 方法签名<br>
**maskIDCard(idcard: string, start: number = 6, len: number = 8)**

* 方法详细介绍<br>
**对身份证进行去敏处理，用*替换**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| idcard     | String     | 是 |    无      | 身份证    |
| start     | Number     | 否 |    6      | 开始位置，从0开始    |
| len         | Number     | 否 |    8      | 掩码长度    |

* 返回值<br>
**脱敏身份证**

* 举个例子

```js
maskIDCard('110410199001011234')
// => '110410********1234'
maskIDCard('110410199001011234', 6, 10)
// => '110410**********34'
```

> 特别说明：无

<br>

---

### 1. chunk()

* 方法签名<br>
**chunk(array: any[], size: number = 1)**

* 方法详细介绍<br>
**对目标数组进行分块，每块size个元素**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| array     | Array     | 是 |    无      | 数组    |
| size       | Number   | 否 |     1      | 块大小 |

* 返回值<br>
**分块之后的数组**

* 举个例子

```js
chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]
```

> 特别说明：无

<br>

### 2. slice()

* 方法签名<br>
**slice(array: any[], start: number = 0, end: number)**

* 方法详细介绍<br>
**数组切片**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| array       | Array     | 是 |    无      | 数组    |
| start       | Number   | 否 |     0      | 开始    |
| end          | Number   | 否 |     0      | 结束     |

* 返回值<br>
**切片**

* 举个例子

```js
slice([1, 2, 3, 4])
// => [1, 2, 3, 4]
slice([1, 2, 3, 4], 1)
// => [2, 3, 4]
slice([1, 2, 3, 4], 1, 3)
// => [2, 3]
slice([1, 2, 3, 4], -1)
// => [4]
slice([1, 2, 3, 4], -3, -1)
// => [2, 3]
```

> 特别说明：无

<br>

### 3. group()

* 方法签名<br>
**group(array: any[], by: string)**

* 方法详细介绍<br>
**分组，将对象属性相同的对象分为一组**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| array       | Array     | 是 |    无      | 数组    |
| by            | String   | 是 |     无      | 属性名    |

* 返回值<br>
**分组之后的数组**

* 举个例子

```js
group([{a:1,b:2,c:3}, {a:1,b:3}, {a:2, b:3, c:2}], 'a')
// => [[{a:1, b:2, c:3}, {a:1, b:3}], [{a:2, b:3, c:2}]]
group([{a:1,b:2,c:3}, {a:1,b:3}, {a:2, b:3, c:2}], 'b')
// => [[{a:1, b:2, c:3}], [{a:1, b:3}, {a:2, b:3, c:2}]]
group([{a:1,b:2,c:3}, {a:1,b:3}, {a:2, b:3, c:2}], 'c')
// => [[{a:1, b:2, c:3}], [{a:1, b:3}], [{a:2, b:3, c:2}]]
```

> 特别说明：无

<br>

---

### 1. parseDate()

* 方法签名<br>
**parseDate(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**将 字符串/时间戳 解析成日期对象**

* 参数

| 参数 | 类型 | 是否必传 | 默认值 | 说明 |
|:---|:----|:-----:|:------:|:---|
| date          | Date, String, Number   | 是 |          无          | 日期字符串，如'2014-09-13'，或者时间戳，如`1546272000000`|
| format       | String                         | 否  | 'yyyy-MM-dd' | 支持格式：y、M、d、H、m、s、S|

* 返回值 `Date`<br>
**解析后的Date对象**

* 举个例子

```js
parseDate('2018-11-26')
// => new Date(2018, 10, 26)
parseDate('11/26/2018', 'MM/dd/yyyy')
// => new Date(2018, 10, 26)
parseDate('2018-11-26 13:28:43', 'yyyy-MM-dd HH:mm:ss')
// => new Date(2018, 10, 26, 13, 28, 43)
parseDate('2018年11月26日', 'yyyy年MM月dd日')
// => new Date(2018, 10, 26)
parseDate('2018年11月26日 11时40分', 'yyyy年MM月dd日 HH时mm分')
// => new Date(2018, 10, 26, 11, 40)
parseDate(1546272000000)
// => new Date(2019, 0, 1)
```

> 特殊说明：如果传入的 date 参数不符合要求的类型，则抛出 `TypeError` 错误

<br>

### 2. formatDate()

* 方法签名<br>
**formatDate(date: Date | number = new Date(), format: string = 'yyyy-MM-dd HH:mm:ss')**

* 方法详细介绍<br>
**将日期格式化成指定格式的字符串**

* 参数  

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, Number    | 否      |      new Date()     | 要格式化的日期，默认当前时间，也可以是一个时间戳 |
| format | String              | 否      | 'yyyy-MM-dd HH:mm:ss' | 支持的格式：y,M,d,q,w,H,h,m,S，默认：'yyyy-MM-dd HH:mm:ss' |

* 返回值 `String`<br>
**格式化后的日期字符串**

* 举个例子

```js
formatDate()
// => 2016-09-02 13:17:13
formatDate(new Date(), 'yyyy-MM-dd')
// => 2016-09-02
formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS')
// => 2016-09-02 第3季度 星期五 13:19:15:792
formatDate(1472793615764)
// => 2016-09-02 13:20:15
```

> 特殊说明:  `date` 参数类型不合法时，返回字符串 'invalid date'

<br>

### 3. formatDateToFriendly()

* 方法签名
**formatDateToFriendly(date: Date | number = new Date())**

* 方法详细介绍
**将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，当天的返回时分，当年的返回月日，否则，返回年月日**

* 参数  

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, Number    | 否      |      new Date()     | 要格式化的日期，默认当前时间，支持时间戳 |

* 返回值 `String`<br>
**解析后的友好化日期格式**

* 举个例子

```js
// 假设当前时间为 2019-03-18 18:00:00
formatDateToFriendly()
// => 刚刚
formatDateToFriendly(new Date())
// => 刚刚
formatDateToFriendly(new Date(2019,2,18))
// => 00:00
formatDateToFriendly(new Date(2019,1,18))
// => 2月18日
formatDateToFriendly(new Date(2018,1,18))
// => 2018年2月18
```

> 特殊说明: 无

<br>

### 4. timestamp()

* 方法签名<br>
**timestamp(date: Date | string = new Date(), format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**获取日期对应的时间戳**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String    | 否     |      new Date()     | 日期对象/日期字符串，默认当前时间 |
| format  | String             | 否     |     'yyyy-MM-dd'  | 字符串模板(date参数为字符串时有效) |

* 返回值 `Number`<br>
**时间戳(单位:毫秒)**

* 举个例子

```js
timestamp()
// => 获取当前时间的时间戳
timestamp(new Date(2018, 0, 1))
// => 2018年1月1日的时间戳
timestamp('2018-01-01', 'yyyy-MM-dd')
// => 2018年1月1日的时间戳
timestamp([])
// => -1
```

> 特殊说明:  如果 `date` 参数不合法，则返回-1

<br>

### 5. dateBefore()

* 方法签名<br>
**dateBefore(date: Date | string | number, diff: IDateDiff, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**计算指定日期往前偏移指定时间**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 初始日期，支持 Date 对象、日期字符串(需配合format参数)、时间戳 |
| diff     | IDateDiff                     | 是  |     无     | 日期差值，支持year、month、week、day、hour、minute、second、millsecond |
| format  | String                          | 否  |     'yyyy-MM-dd'  | 字符串模板(date参数为字符串时有效) |

* 返回值 `Date`<br>
**偏移后的日期**

* 举个例子

```js
dateBefore(new Date(2017, 11, 10), { year: 3 })
// => new Date(2014, 11, 10)
dateBefore(new Date(2016, 1, 29), { year: 1 })
// => new Date(2015, 1, 28)
dateBefore(new Date(2016, 2, 31), { month: 1 })
// => new Date(2016, 1, 29)
dateBefore(new Date(2016, 0, 1), { day: 1 })
// => new Date(2015, 11, 31)
dateBefore(new Date(2016, 2, 31), { month: 1, day: 1 })
// => new Date(2016, 1, 29)
// 注意: 这里的结果不是 new Date(2016, 1, 28)，因为先计算 day ，后计算 month
dateBefore('2016年3月31日', { month: 1, day: 1 }, 'yyyy年M月dd日')
// => new Date(2016, 1, 29)
```

> 特殊说明:  
> 1. `IDataDiff` 接口类型的参数可传入js的对象，比如 `{year:1,day:3}` 表示1年零3天
> 2. 如果 `diff` 参数采用混合模式(同时包含年月日)，则会先计算最小单位。  
> 比如，2015年12月30日 加上 2个月零1天，先计算最小单位会得到 2016年2月29日；先计算最大单位会得到 2016年3月1日。  
> 参考:https://www.timeanddate.com/date/dateadded.html?m1=12&d1=30&y1=2015&type=add&ay=&am=02&aw=&ad=01&rec=

<br>

### 6. dateAfter()

* 方法签名<br>
**dateAfter(date: Date | string | number, diff: IDateDiff, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**计算指定日期往后偏移指定时间**

* 参数  

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 初始日期，支持 Date 对象、日期字符串(需配合format参数)、时间戳 |
| diff     | IDateDiff                     | 是  |     无     | 日期差值，支持year、month、week、day、hour、minute、second、millsecond |
| format  | String                          | 否  |     'yyyy-MM-dd'  | 字符串模板(date参数为字符串时有效) |

* 返回值 `Date`<br>
**偏移后的日期**

* 举个例子

```js
dateAfter(new Date(2014, 11, 10), { year: 3 })
// => new Date(2017, 11, 10)
dateAfter(new Date(2016, 1, 29), { year: 1 })
// => new Date(2017, 1, 28)
dateAfter(new Date(2016, 2, 31), { month: 1 })
// => new Date(2016, 3, 30)
dateAfter(new Date(2015, 11, 31), { day: 1 })
// => new Date(2016, 0, 1)
dateAfter(new Date(2015, 11, 30), { month: 2, day: 1 })
// => new Date(2016, 1, 29)
dateAfter('2015年12月30日', { month: 2, day: 1 }, 'yyyy年M月dd日')
// => new Date(2016, 1, 29)
```

> 特殊说明:  
> 1. `IDataDiff` 接口类型的参数可传入js的对象，比如 `{year:1,day:3}` 表示1年零3天
> 2. 如果 `diff` 参数采用混合模式(同时包含年月日)，则会先计算最小单位。  
> 比如，2015年12月30日 加上 2个月零1天，先计算最小单位会得到 2016年2月29日；先计算最大单位会得到 2016年3月1日。  
> 参考:https://www.timeanddate.com/date/dateadded.html?m1=12&d1=30&y1=2015&type=add&ay=&am=02&aw=&ad=01&rec=

<br>

### 7. isLeapYear()

* 方法签名<br>
**isLeapYear(year: number)**

* 方法详细介绍<br>
**判断是否为闰年**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| year     | Number   | 是  |     无     | 4位数的年份 |

* 返回值 `Boolean`<br>
**是否为闰年**

* 举个例子

```js
isLeapYear(1900)
// => false
isLeapYear(2000)
// => true
isLeapYear(2001)
// => false
isLeapYear(2004)
// => true
```

> 特殊说明: 无

<br>

### 8. getDaysInMonth()

* 方法签名<br>
**getDaysInMonth(year: number, month: number)**

* 方法详细介绍<br>
**计算在给定的年份中，给定的月份有多少天(会自动判断是否为闰年)**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| year     | Number   | 是  |     无     | 4位数的年份 |
| month   | Number   | 是  |     无     | 月份(0-11) |

* 返回值 `Number`<br>
**当月的天数**

* 举个例子

```js
getDaysInMonth(2019, 2)
// => 31
getDaysInMonth(2019, 1)
// => 28
getDaysInMonth(2016, 1)
// => 29
```

> 特殊说明： 月份从0开始

<br>

### 9. getDateStart()

* 方法签名<br>
**getDateStart(date: Date | string | number, mode: TimeDimension, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**获取日期指定时间维度的开头**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 日期 |
| mode     | TimeDimension              | 是  |     无     | 时间维度，可以使用 `0:Year` `1:Month` `2:Week` `3:Day` `4:Hour` `5:Minute` `6:Second` |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Date`<br>
**开始日期**

* 举个例子

```js
getDateStart(new Date(2018, 2, 3), 0) 
// => new Date(2018, 0, 1) 年初
getDateStart(new Date(2018, 2, 3), 1) 
// => new Date(2018, 2, 1) 月初
getDateStart(new Date(2018, 2, 3, 10, 20), 3) 
// => new Date(2018, 2, 3) 当天凌晨
```

> 特殊说明：无

<br>

### 10. getDateEnd()

* 方法签名<br>
**getDateEnd(date: Date | string | number, mode: TimeDimension, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**获取日期指定时间维度的结尾**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 是  |     无     | 日期 |
| mode     | TimeDimension              | 是  |     无     | 时间维度，可以使用 `0:Year` `1:Month` `2:Week` `3:Day` `4:Hour` `5:Minute` `6:Second` |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Date`<br>
**结尾日期**

* 举个例子

```js
getDateEnd(new Date(2018, 2, 3), 0) 
// => new Date(2018, 11, 31, 23, 59, 59, 999) 年末
getDateEnd(new Date(2018, 2, 3), 1) 
// => new Date(2018, 2, 31, 23, 59, 59, 999) 月末
getDateEnd(new Date(2018, 2, 3, 10, 20), 3) 
// => new Date(2018, 2, 3, 23, 59, 59, 999) 当天凌晨
```

> 特殊说明：无

<br>

### 11. getDayCountOfYear()

* 方法签名<br>
**getDayCountOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**获取给定日期所在当年总共有多少天**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`<br>
**当年的总天数**

* 举个例子

```js
getDayOfYear('2018-11-26')
// => 365
getDayOfYear('12/20/2019', 'MM/dd/yyyy')
// => 365
getDayOfYear('2020-12-20')
// => 366
```

> 特殊说明：无

<br>

### 12. getDayIndexOfYear()

* 方法签名<br>
**getDayIndexOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**获取给定日期在当年的第几天**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`<br>
**日期在当年的第几天**

* 举个例子

```js
getDayIndexOfYear('2017-01-20')
// => 20
getDayIndexOfYear('2018-05-20')
// => 140
```

> 特别说明：无

<br>

### 13. getWeekIndexOfYear()

* 方法签名<br>
**getWeekIndexOfYear(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**获取给定日期在当年的第几周**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`<br>
**日期在当年的第几周**

* 举个例子

```js
getWeekIndexOfYear('2017-01-20')
// => 3
getWeekIndexOfYear('2018-05-20')
// => 20
```

> 特别说明：无

<br>

### 14. getWeekIndexOfMonth()

* 方法签名<br>
**getWeekIndexOfMonth(date: Date | string | number, format: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**获取给定日期在当月的第几周**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date     | Date, String, Number   | 否  |     new Date()     | 日期对象/日期字符串/时间戳 |
| format  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date`参数为字符串时有效 |

* 返回值 `Number`<br>
**日期在当月的第几周**

* 举个例子

```js
getWeekIndexOfMonth('2017-01-20')
// => 3
getWeekIndexOfMonth('2018-05-20')
// => 2
```

> 特别说明：无

<br>

### 15. getDateDiff()

* 方法签名<br>
**getDateDiff(date1: Date | string | number, date2: Date | string | number, format1: string = 'yyyy-MM-dd', format2: string = 'yyyy-MM-dd')**

* 方法详细介绍<br>
**计算两个日期的差**

* 参数

| 参数    | 类型 | 是否必传 | 默认值   | 说明       |
|:-----|:----|:-----:|:------:| :-------- |
| date1     | Date, String, Number   | 是  |     无     | 日期对象/日期字符串/时间戳 |
| date2     | Date, String, Number   | 是  |     无     | 日期对象/日期字符串/时间戳 |
| format1  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date1`参数为字符串时有效 |
| format2  | String                          | 否  | 'yyyy-MM-dd'     | 字符串模板，当`date2`参数为字符串时有效 |

* 返回值 `ITimeSpan`<br>
**日期的差值对象**

* 举个例子

```js
getDateDiff('2019-01-01', '2019-01-02')
// => { Day: 1, Hour: 0, Minute: 0, Second: 0, Millsecond: 0 }
getDateDiff('20190101', '2019-01-02 03:00:30', 'yyyyMMdd', 'yyyy-MM-dd HH:mm:ss')
// => { Day: 1, Hour: 3, Minute: 0, Second: 30, Millsecond: 0 }
getDateDiff(new Date(2019, 0, 1), '2019-01-02 03:00:30', 'yyyy-MM-dd HH:mm:ss')
// => { Day: 1, Hour: 3, Minute: 0, Second: 30, Millsecond: 0 }
```

> 特别说明: <br>
> 1. ITimeSpan是一个对象接口，字段包含 `Day` `Hour` `Minute` `Second` `Millsecond`
> 2. 当 `date` 和 `date2` 只有一个是字符串时，只需传入一个字符串模板参数
> 3. date1 小于 date2 时，返回值为正；反之为负。

<br>

---

# StringUtil 字符串工具类

### 1. isEmpty()
* 方法定义<br>
**isEmpty(input: string)**

* 函数详细介绍<br>
**判断字符串是否为空**

* 参数

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input            | String                | 否               |                  | 输入字符串，如'我是测试的字符串'                                   |

* 返回值 `Boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isEmpty('我是测试的字符串')
// => false
isEmpty('')
// => true
isEmpty(' ')
// => true
```

> 特殊说明: [无]

<br>

### 2. isNotEmpty()
* 方法定义<br>
**isNotEmpty(input: string)**

* 函数详细介绍<br>
**判断字符串是否不为空**

* 参数

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input            | String                | 否               |                  | 输入字符串，如'我是测试的字符串'                                 |
* 返回值 `Boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isNotEmpty('我是测试的字符串');
// => true
isNotEmpty('');
// => false
isNotEmpty(' ');
// => false

```

> 特殊说明: [无]

<br>

### 3. trim()
* 方法定义<br>
**trim(input: string)**

* 函数详细介绍<br>
**将字符串去除空格**

* 参数

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input            | String                | 是               |                  | 输入字符串，如'我是测 试的字符串'                                 |
* 返回值 `String`<br>
**返回去除空格后的字符串**

* 举个例子

```js
trim(' 测试字符串 '); 
// => 测试字符串
trim('我是测 试的字符串'); 
// => 我是测试的字符串

```

> 特殊说明: 字符串前,后,中间的空格都可去除

<br>

### 4. startsWith()
* 方法定义<br>
**startsWith(input: string,prefix: string)**

* 函数详细介绍<br>
**判断字符串是否以某个字符串开头**

* 参数

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input           | String                 | 是               |                  | 输入字符串，如'abcdefg'                                  |
| prefix          | String                 | 是               |                  | 输入数字，如'ab'                                                |

* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
startsWith('abcdefg','ab'); 
// => true
startsWith('abcdefg','b'); 
// => false
startsWith('abcdefg','a'); 
// => true

```

> 特殊说明: [无]

<br>

### 5. endsWith()
* 方法定义<br>
**endsWith(input: string,suffix: string)**

* 函数详细介绍<br>
**判断字符串是否以某个字符串结束**

* 参数

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input            | String                | 是               |                  | 输入字符串，如'abcdefg'                                         |
| suffix           | String                | 是               |                  | 输入数字，如'fg'                                                  |

* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
endsWith('abcdefg','fg'); 
// => true
endsWith('abcdefg','gh'); 
// => false
endsWith('abcdefg','g'); 
// => true

```

> 特殊说明: [无]

<br>

### 6. contains()
* 方法定义<br>
**contains(input: string,searchSeq: string)**

* 函数详细介绍<br>
**判断字符串是否包含某个字符串**

* 参数

| 参数             | 类型                    | 是否必传         | 默认值            | 说明                                                         |
|:-----------      | :-----------           |:----------:      | :------:         | :------------------------------------------------------------ |
| input            | String                 | 是               |                  | 输入字符串，如'abcdefg'                                      |
| searchSeq        | String                 | 是               |                  | 输入数字，如'abc'                                                       |

* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
contains('abcdefg','abc'); 
// => true
contains('abcdefg','gh'); 
// => false
contains('abcdefg','a'); 
// => true

```

> 特殊说明: [无]

<br>

### 7. equals()
* 方法定义<br>
**equals(input1: string | number,input2: string | number)**

* 函数详细介绍<br>
**判断两个字符串是否相等**

* 参数<br>

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:      | :------:         | :------------------------------------------------------------ |
| input1            | String,number       | 是               |                  | 输入字符串，如'我是测试的字符串' 或 输入数字如 220022                     |
| input2            | String,number       | 是               |                  | 输入字符串，如'我是测试的字符串' 或 输入数字如 220022                       |

* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
equals(220022,220022); 
// => true
equals('我是测试的 字符串  ', '我是测试的字符串'); 
// => false
equals('我不是测试的字符串 ', '我是测试的字符串');
// => false

```

> 特殊说明: [无]

<br>

### 8. equalsIgnoreCase()
* 方法定义<br>
**equalsIgnoreCase(input1: string,input2: string)**

* 函数详细介绍<br>
**忽略大小写判断两个字符串是否相等**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值             | 说明                                                          |
|:-----------     | :-----------          |:----------:      | :------:         | :------------------------------------------------------------ |
| input1            | String              | 是               |                   | 输入字符串，如'equalsIgnoreCasE'                                       |
| input2            | String              | 是               |                   | 输入字符串，如 'equalsIgnoreCase'                                      |

* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
equalsIgnoreCase('equalsIgnoreCasE', 'equalsIgnoreCase'); 
// => true
equalsIgnoreCase('equals ', 'equalsIgnoreCase'); 
// => false

```

> 特殊说明: [无]

<br>

### 9. containsWhitespace()
* 方法定义<br>
**containsWhitespace(input: string)**

* 函数详细介绍<br>
**判断字符串是否含有空格**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:      | :------:         | :------------------------------------------------------------ |
| input           | String                | 是               |                  | 输入字符串，如'我是 测试 的 字符串'                              |

* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
containsWhitespace('我是 测试 的 字符串  '); 
// => true
containsWhitespace('我是测试的字符串'); 
// => false
containsWhitespace('  我是测试的字符串  '); 
// => true

```

> 特殊说明: 字符串前边,后边,中间的空格都包含在判断范围内

<br>

### 10. repeat()
* 方法定义<br>
**repeat(ch: String | number, repeatTimes: number)**

* 函数详细介绍<br>
**按指定数量生成给定字符串字符**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:      | :------:         | :------------------------------------------------------------ |
| ch              | String,number         | 是               |                  | 输入字符串,如'我是测试的字符串', 或 输入数字如 220022                   |
| repeatTimes     | number                | 是               |                  | 输入数字,如 '6'                                                        |

* 返回值 `String`<br>
 **返回指定数量的给定字符串**

* 举个例子

```js
repeat('AB ',6); 
// => 'AB AB AB AB AB AB '
repeat('C  D',3); 
// =>'C  DC  DC  D'
repeat('*', 3)
// => '***'
repeat('ABC', 3)
// => 'ABCABCABC'

```

> 特殊说明: [无]

<br>

### 11. deleteWhitespace()
* 方法定义<br>
**deleteWhitespace(input: String)**

* 函数详细介绍<br>
**去除字符串中的空格**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:      | :------:         | :------------------------------------------------------------ |
| input           | String                | 是               |                  | 输入字符串,如'我是 测试 的 字符串  '                               |

* 返回值 `String`<br>
 **返回去除空格后的字符串**

* 举个例子

```js
deleteWhitespace('我是 测试 的 字符串  ');
// => '我是测试的字符串'
deleteWhitespace('  测试  '); 
// => '测试'

```

> 特殊说明: [无]

<br>

### 12. rightPad()
* 方法定义<br>
**rightPad(input: string | number, size: number, padStr: number | string)**

* 函数详细介绍<br>
**将给定字符串进行右侧填充**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String,number         | 是               |                  | 输入字符串,如'我是测试的字符串', 或 输入数字如 2222             |
| size            | number                | 是               |                  | 输入数字,如 2                                                        |
| padStr          | String,number         | 是               |                  | 输入填充字符, 如 '--' 或 输入数字如 33                         |

* 返回值 `String`<br>
 **右侧填充后的字符串**

* 举个例子

```js
rightPad(2222, 1, 33); 
// => '222233'
rightPad('我是测试的字符串', 2, '--'); 
// => '我是测试的字符串----'

```

> 特殊说明: [无]

<br>

### 13. leftPad()
* 方法定义<br>
**leftPad(input: string | number, size: number, padStr: number | string)**

* 函数详细介绍<br>
**将给定字符串进行左侧填充**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String,number         | 是               |                  | 输入字符串,如'我是测试的字符串', 或 输入数字如 220022             |
| size            | number                | 是               |                  | 输入数字,如 2                                                    |
| padStr          | String,number         | 是               |                  | 输入填充字符, 如 '--' 或 输入数字如 220022                      |

* 返回值 `String`<br>
 **左侧填充后的字符串**

* 举个例子

```js
leftPad(2222, 2, 3); 
// => '332222'
leftPad('我是测试的字符串', 2, '--');
// => '----我是测试的字符串'

```

> 特殊说明: [无]

<br>

### 14. capitalize()
* 方法定义<br>
**capitalize(input: string)**

* 函数详细介绍<br>
**将字符串首字母转大写**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'admin'                                             |

* 返回值  `String`<br>
**首字母转大写后的字符串**

* 举个例子

```js
capitalize('admin'); 
// => 'Admin'
capitalize('capitalize'); 
// => 'Capitalize'

```

> 特殊说明: [无]

<br>

### 15. unCapitalize()
* 方法定义<br>
**unCapitalize(input: string)**

* 函数详细介绍<br>
**将字符串首字母转小写**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'Capitalize'                                        |
* 返回值 `String`<br>
 **首字母转小写后的字符串**

* 举个例子

```js
unCapitalize('Capitalize');
// => 'capitalize'
unCapitalize('SetTimeout');
// => 'setTimeout'


```

> 特殊说明: [无]

<br>

### 16. swapCase()
* 方法定义<br>
**swapCase(input: string)**

* 函数详细介绍<br>
**将字符串中的字母大写转小写，小写转大写**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'abcdE'                                             |
* 返回值 `String`<br>
**大写转小写，小写转大写后的字符串**

* 举个例子

```js
swapCase('aBcde'); 
// => 'AbCDE'
swapCase('ABCDe');
// => 'abcdE'
```

> 特殊说明: [无]

<br>

### 17. countMatches()
* 方法定义<br>
**countMatches(input: string, sub: string)**

* 函数详细介绍<br>
**统计含有的子字符串的个数**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'abcdeabcdeabcde',            |
| sub             | String                | 是              |                   | 输入字符串,如'ab',                                             |
* 返回值 `String`<br>
**统计后字符串的个数**

* 举个例子

```js
countMatches('dabddadb', 'da'); 
// => 2
countMatches('abcdeabcdeabcde','ab'); 
// => 3

```

> 特殊说明: [无]

<br>

### 18. isAlpha()
* 方法定义<br>
**isAlpha(input: string)**

* 函数详细介绍<br>
**判断字符串是否为字母**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'abcdeabcdeabcde'                                 |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isAlpha('abce测试');
// => false
isAlpha('abcdeabcdeabcde'); 
// => true
 
```

> 特殊说明: [无]

<br>

### 19. isAlphaSpace()
* 方法定义<br>
**isAlphaSpace(input: string)**

* 函数详细介绍<br>
**判断字符串是否为字母、空格**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'abcd eabc deab cde',                             |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isAlphaSpace(' 测试 ');
// => false
isAlphaSpace('abcd eabc deab cde'); 
// => true
 
```

> 特殊说明: [无]

<br>

### 20. isAlphanumeric()
* 方法定义<br>
**isAlphanumeric(input: string)**

* 函数详细介绍<br>
**判断字符串是否为字母、数字**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'22abcdeabcdeabcde22',                           |
* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
isAlphanumeric('abcd串abcd'); 
// => false
isAlphanumeric('22abcdeabcdeabcde22'); 
// => true
 
```

> 特殊说明: [无]

<br>

### 21. isAlphanumericSpace()
* 方法定义<br>
**isAlphanumericSpace(input: string)**

* 函数详细介绍<br>
**判断字符串是否为字母、数字、空格**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'22abcde abcde abcde 22',                        |
* 返回值 `boolean<br>
**返回判断结果 true/false**

* 举个例子

```js
isAlphanumericSpace('我是测试的 222字符串');  
// => false
isAlphanumericSpace('22abcde abcde abcde 22'); 
// => true
 
```

> 特殊说明: [无]

<br>

### 22. isNumeric()
* 方法定义<br>
**isNumeric(input: string)**

* 函数详细介绍<br>
**判断字符串是否为数字**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                  | 输入数字,如'220022',                                            |
* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
isNumeric('我是测试的 字符串'); 
// => false
isNumeric(220022); 
// => true
 
```

> 特殊说明: [无]

<br>

### 23. isDecimal()
* 方法定义<br>
**isDecimal(input: string)**

* 函数详细介绍<br>
**判断字符串是否为小数**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                  | 输入数字,如'22.0022',                                             |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isDecimal('220022'); 
// => false
isDecimal('22.0022'); 
// => true
 
```

> 特殊说明: [无]

<br>

### 24. isNegativeDecimal()
* 方法定义<br>
**isNegativeDecimal(input: string)**

* 函数详细介绍<br>
**判断字符串是否为负小数**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                  | 输入数字,如'-22.0022',                                           |
* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
isNegativeDecimal('22.0022'); 
// => false
isNegativeDecimal('-22.0022'); 
// => true
 
```

> 特殊说明: [无]

<br>

### 25. isPositiveDecimal()
* 方法定义<br>
**isPositiveDecimal(input: string)**

* 函数详细介绍<br>
**判断字符串是否为正小数**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ | 
| input           | String                | 是              |                  | 输入数字,如 '22.0022',                                         |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isPositiveDecimal('22.0022'); 
// => true
isPositiveDecimal('-22.0022'); 
// => false
 
```

> 特殊说明: [无]

<br>

### 26. isInteger()
* 方法定义<br>
**isInteger(input: string)**

* 函数详细介绍<br>
**判断字符串是否为整数**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                  | 输入数字,如'-220022',                                          |
* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
isInteger('-220022'); 
// => true
isInteger('22.0022');
// => false
 
```

> 特殊说明: [无]

<br>

### 27. isPositiveInteger()
* 方法定义<br>
**isPositiveInteger(input: string)**

* 函数详细介绍<br>
**判断字符串是否为正整数**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入数字,如'220022',                                          |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isPositiveInteger('220022'); 
// => true
isPositiveInteger('-22.22'); 
// => false
 
```

> 特殊说明: [无]

<br>

### 28. isNegativeInteger()
* 方法定义<br>
**isNegativeInteger(input: string)**

* 函数详细介绍<br>
**判断字符串是否为负整数**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入数字,如'-220022',                                         |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isPositiveInteger('-220022'); 
// => true
isPositiveInteger('22.22');
// => false
 
```

> 特殊说明: [无]

<br>

### 29. isNumericSpace()
* 方法定义<br>
**isNumericSpace(input: string)**

* 函数详细介绍<br>
**判断字符串是否为数字、空格**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'2 2 0 0 2 2',                                    |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isNumericSpace('2 2 0 0 2 2'); 
// => true
isNumericSpace('2222aa'); 
// => false
 
```

> 特殊说明: [无]

<br>

### 30. isWhitespace()
* 方法定义<br>
**isWhitespace(input: string)**

* 函数详细介绍<br>
**判断字符串是否为空格**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'  ',                                             |
* 返回值 `boolean`<br>
 **返回判断结果 true/false**

* 举个例子

```js
isWhitespace(' '); 
// => true
isWhitespace('22.22'); 
// => false
 
```

> 特殊说明: [无]

<br>

### 31. isAllLowerCase()
* 方法定义<br>
**isAllLowerCase(input: string)**

* 函数详细介绍<br>
**判断字符串是否为小写字母**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串, 如'abcdefg ',                                      |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isAllLowerCase('abcdefg'); 
// => true
isAllLowerCase('isAllLowerCase');
// => false
 
```

> 特殊说明: [无]

<br>

### 32. isAllUpperCase()
* 方法定义<br>
**isAllUpperCase(input: string)**

* 函数详细介绍<br>
**判断字符串是否为大写字母**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串, 如'ABCDEFG ',                                      |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isAllUpperCase('ABCDEFG'); 
// => true
isAllUpperCase('isAllLowerCase'); 
// => false
 
```

> 特殊说明: [无]

<br>

### 33. defaultIfEmpty()
* 方法定义<br>
**defaultIfEmpty(input: string, defaultStr: string)**

* 函数详细介绍<br>
**如果字符串为空则使用默认字符串, 否则不变**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串, 如'',                                              |
| defaultStr      | String                | 是              |                   | 输入字符串, 如'我是测试的字符串',                                 |
* 返回值 `String`<br>
 **返回字符串为空则使用默认字符串, 否则不变**

* 举个例子

```js
defaultIfEmpty('', 'abcd'); 
// => 'abcd'
defaultIfEmpty('我是测试的字符串isAllLowerCase', '我是测试的字符串');
// => '我是测试的字符串isAllLowerCase'
 
```

> 特殊说明: 当传入值不为空时,返回传入值.

<br>

### 34. reverse()
* 方法定义<br>
**reverse(input: string)**

* 函数详细介绍<br>
**字符串反转**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'abcd',                                          |
* 返回值 `String`<br>
 **返回反转后的字符串**

* 举个例子

```js
reverse('abcd'); 
// => 'dcba'
reverse('ABCD'); 
// => 'DCBA'

 
```

> 特殊说明: [无]

<br>

### 35. removeSpecialCharacter()
* 方法定义<br>
**removeSpecialCharacter(input: string)**

* 函数详细介绍<br>
**删掉特殊字符(英文状态下)**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如''remove SpecialCharacter$%%^'',                  |
* 返回值 `String`<br>
**删掉特殊字符(英文状态下)后的字符串**

* 举个例子

```js
removeSpecialCharacter('remove SpecialCharacter$%%^');
// => 'remove SpecialCharacter'
removeSpecialCharacter('removeSpecialCharacter##*'); 
// => 'removeSpecialCharacter' 

```

> 特殊说明:[无]

<br>

### 36. isSpecialCharacterAlphanumeric()
* 方法定义<br>
**isSpecialCharacterAlphanumeric(input: string)**

* 函数详细介绍<br>
**只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'2222SpecialCharacter$%%^',                       |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子

```js
isSpecialCharacterAlphanumeric('2222SpecialCharacter$%%^'); 
// => true
isSpecialCharacterAlphanumeric('(字符串2222SpecialCharacter$%%^)'); 
// => false

```

> 特殊说明:[无]

<br>

### 37. format()
* 方法定义<br>
**format(message: string, arr: any)**

* 函数详细介绍<br>
**消息格式化**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| message         | String              | 是                |                  | 输入字符串,如'for m at ',                                      |
| arr             | any                 | 是                |                  | 输入字符串,如'format',                                         |
* 返回值 `String`<br>
**消息格式化后的字符串**

* 举个例子 

```js
format('format ', ['123']); 
// => 'format '
format('format {0}', ['123']);
// => 'format 123'
format('format {0} {0}', ['123']);
// => 'format 123 123'
 format('format {0} {1}', ['123']);
// => 'format 123 undefined'
```

> 特殊说明:[无]

<br>

### 38. isChinese()
* 方法定义<br>
**isChinese(input: string)**

* 函数详细介绍<br>
**中文校验**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                  | 输入字符串,如'我是测试的字符串',                                    |
* 返回值 `boolean`<br>
**返回判断结果 true/false**

* 举个例子 

```js
isChinese('我是测试的字符串');
// => true
isChinese('我是测试的字  abc  符串'); 
// => false
 
```

> 特殊说明:[无]

<br>

### 39. removeChinese()
* 方法定义<br>
**removeChinese(input: string)**

* 函数详细介绍<br>
**去掉中文字符**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'我是测试的字  abc  符串',                        |
* 返回值 `String`<br>
**返回去掉中文字符后的字符串**

* 举个例子 

```js
removeChinese('我是测试的字  abc  符串'); 
// =>  abc 
removeChinese('测试abc'); 
// => abc
 
```

> 特殊说明:[无]

<br>

### 40. escapeMetacharacter()
* 方法定义<br>
**escapeMetacharacter(input: string)**

* 函数详细介绍<br>
**转义元字符**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'\n\\?',                                        |
* 返回值 `String`<br>
**返回转义后的字符**

* 举个例子 

```js
escapeMetacharacter('\'\''); 
// => '\'\''
escapeMetacharacter('\n\\?'); 
// => '\n\\?'
 
```

> 特殊说明:[无]

<br>

### 41. escapeMetacharacterOfStr()
* 方法定义<br>
**escapeMetacharacterOfStr(input: string)**

* 函数详细介绍<br>
**转义字符串中的元字符**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'我是测试的字abc符串',                             |
* 返回值 `String`<br> 
**返回转义后的字符串**

* 举个例子 

```js
escapeMetacharacterOfStr('\'\'');
// => '\'\''
escapeMetacharacterOfStr('我是测试的字abc\n符串'); 
// => '我是测试的字abc\n符串'
 
```

> 特殊说明:[无]

<br>

### 42. camelize()
* 方法定义<br>
**camelize(input: string)**

* 函数详细介绍<br>
**将中划线分隔形式的字符串转换为驼峰式的字符串**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'last-index-of',                                   |
* 返回值 `String`<br>
**中划线分隔形式的字符串转换为驼峰式的字符串**
 

* 举个例子 

```js
camelize('last-index-of'); 
// => 'lastIndexOf'
camelize('escape-metacharacter-of-str');
// => 'escapeMetacharacterOfStr'
  
```

> 特殊说明:[无]

<br>

### 43. hyphenate()
* 方法定义<br>
**hyphenate(input: string)**

* 函数详细介绍<br>
**将驼峰式的字符串转换为中划线分隔形式的字符串**

* 参数

| 参数             | 类型                  | 是否必传         | 默认值            | 说明                                                         |
|:-----------     | :-----------          |:----------:     | :------:         | :------------------------------------------------------------ |
| input           | String                | 是              |                   | 输入字符串,如'lastIndexOf',                                    |
* 返回值 `String`<br>
**驼峰式的字符串转换为中划线分隔形式的字符串**

* 举个例子 

```js
hyphenate('lastIndexOf'); 
// => 'last-index-of'
hyphenate('escapeMetacharacterOfStr');
// => 'escape-metacharacter-of-str'
 
```

> 特殊说明:[无]

<br>









