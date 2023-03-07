---
tag: "javascript"
slug: "/javascript/dates"
date: "2023-03-06"
title: JavaScript Dates and Times
description: "JavaScript Date object is used to work with dates and times. It provides methods for creating, formatting, and manipulating dates and times."
category: "Get Started"
order: 14
prevPath: /javascript/javascript-keywords
nextPath: /javascript/sets
githubPath: /javascript/GetStarted/Dates.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

**JavaScript Date** object is used to work with dates and times. It provides methods for creating, formatting, and manipulating dates and times.

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 4
class-name: "table-of-contents"
```

## Creating a Date Object

You can create a new Date object in several ways.

This creates a new Date object with the current date and time:

```js
new Date();
```

This creates a new Date object with a specified number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix epoch):

```js
new Date(milliseconds);
```

This creates a new Date object from a string representing a date and time:

```js
new Date(dateString);
```

This creates a new Date object with the specified date and time.

```js
new Date(year, monthIndex[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```

Examples:

```js
const now = new Date(); // current date and time
const januaryFirst1970 = new Date(0); // Unix epoch
const januaryFirst2000 = new Date("January 1, 2000"); // January 1, 2000
const noonOnJanuaryFirst2000 = new Date(2000, 0, 1, 12); // January 1, 2000 at noon
```

## Formatting Dates

You can format a Date object using its built-in methods:

### Date.toDateString()

`toDateString()` returns the date portion of the Date object as a human-readable string in American English.

```js
const now = new Date();
const dateStr = now.toDateString(); // returns "Thu Mar 03 2023"
```

### Date.toISOString()

`toISOString()` returns a string in simplified extended ISO format (ISO 8601) representing the Date object in UTC time zone.

```js
const now = new Date();
const isoStr = now.toISOString(); // returns "2023-03-03T07:05:18.774Z"
```

### Date.toLocaleDateString()

`toLocaleDateString()` returns a string representing the Date object's value in the current time zone using a format appropriate for the current locale.

```js
const now = new Date();
const localeDateStr = now.toLocaleDateString(); // returns localized date string, e.g. "3/3/2023" in the US
```

### Date.toLocaleString()

`toLocaleString()` returns a string representing the Date object's value in the current time zone using a format appropriate for the current locale.

```js
const now = new Date();
const localeStr = now.toLocaleString(); // returns localized date and time string, e.g. "3/3/2023, 7:05:18 AM" in the US
```

### Date.toLocaleTimeString()

`toLocaleTimeString()` returns a string representation of the time portion of the date object in the current locale's time zone.

```js
const now = new Date();
console.log(now.toLocaleTimeString()); // "12:00:00 AM" (depending on your local time)
```

### Date.toString()

`toString()` returns a string representation of the date object in the format specified by the implementation.

```js
const now = new Date();
console.log(now.toString()); // "Fri Mar 03 2023 00:00:00 GMT-0800 (Pacific Standard Time)"
```

### Date.toTimeString()

`toTimeString()` returns a string representation of the time portion of the date object.

```js
const now = new Date();
console.log(now.toTimeString()); // "00:00:00 GMT-0800 (Pacific Standard Time)"
```

### Date.toUTCString()

`toUTCString()` returns a string representation of the date object in UTC format.

```js
const now = new Date();
console.log(now.toUTCString()); // "Fri, 03 Mar 2023 08:00:00 GMT"
```

### Date.UTC()

`UTC()` returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for a date specified in UTC.

```js
const utcTime = Date.UTC(2023, 2, 3, 0, 0, 0);
console.log(new Date(utcTime)); // Fri Mar 03 2023 00:00:00 GMT-0800 (Pacific Standard Time)
```

### Date.toJSON()

`toJSON()` returns a string representation of the date object in ISO format.

```javascript
const now = new Date();
console.log(now.toJSON()); // "2023-03-03T00:00:00.000Z"
```

### Date.parse()

`parse()` parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```js
const dateStr = "2023-03-03T00:00:00.000Z";
console.log(Date.parse(dateStr)); // 1688380800000
```

### Date.valueOf()

`valueOf()` returns the primitive value of a date object, which is the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```js
const now = new Date();
console.log(now.valueOf()); // 1688380800000
```

## Get Date Method

You can manipulate a Date object using its built-in methods:

### Date.now()

`now()` returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

```javascript
const nowInMilliseconds = Date.now();
console.log(nowInMilliseconds); // 1646855326193
```

### Date.getDate()

`getDate()` returns the day of the month (1-31) for the specified date according to local time.

```js
const now = new Date();
const dayOfMonth = now.getDate(); // returns current day of the month, e.g. 3
```

### Date.getMonth()

`getMonth()` returns the month (0-11) in the specified date according to local time. Note: January is 0, February is 1, and so on.

```js
const now = new Date();
const month = now.getMonth(); // returns current month, e.g. 2 for March (0-based index)
```

### Date.getFullYear()

`getFullYear()` returns the year (4 digits for 4-digit years) of the specified date according to local time.

```js
const now = new Date();
const year = now.getFullYear(); // returns current year, e.g. 2023
```

### Date.getHours()

`getHours()` returns the hour (0-23) in the specified date according to local time.

```js
const now = new Date();
const hours = now.getHours(); // returns current hour, e.g. 7 (24-hour clock)
```

### Date.getMinutes()

`getMinutes()` returns the minutes (0-59) in the specified date according to local time.

```js
const now = new Date();
const minutes = now.getMinutes(); // returns current minute, e.g. 5
```

### Date.getSeconds()

`getSeconds()` returns the seconds (0-59) in the specified date according to local time.

```js
const now = new Date();
const seconds = now.getSeconds(); // returns current second, e.g. 18
```

### Date.getMilliseconds()

`getMilliseconds()` returns the milliseconds (0-999) in the specified date according to local time.

```js
const now = new Date();
const milliseconds = now.getMilliseconds();
console.log(milliseconds); // output: e.g. 346
```

### Date.getTime()

`getTime()` returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```js
const now = new Date();
const time = now.getTime();
console.log(time); // output: e.g. 1678085166266
```

### Date.getTimezoneOffset()

`getTimezoneOffset()` returns the time-zone offset from UTC, in minutes.

```js
const date = new Date();
const offsetInMinutes = date.getTimezoneOffset();
console.log(offsetInMinutes); // -60 (if your time zone is UTC+1)
```

### Date.getUTCDate()

`getUTCDate()` returns the day of the month, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30 UTC");
const utcDate = date.getUTCDate();
console.log(utcDate); // 19
```

### Date.getUTCDay()

`getUTCDay()` returns the day of the week, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30 UTC");
const utcDay = date.getUTCDay();
console.log(utcDay); // 2 (Tuesday)
```

### Date.getUTCFullYear()

`getUTCFullYear()` returns the year, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30 UTC");
const utcYear = date.getUTCFullYear();
console.log(utcYear); // 1975
```

### Date.getUTCMonth()

`getUTCMonth()` returns the month, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30 UTC");
const utcMonth = date.getUTCMonth();
console.log(utcMonth); // 7 (August)
```

### Date.getUTCHours()

`getUTCHours()` returns the hour, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30 UTC");
const utcHours = date.getUTCHours();
console.log(utcHours); // 23
```

### Date.getUTCMinutes()

`getUTCMinutes()` returns the minutes, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30 UTC");
const utcMinutes = date.getUTCMinutes();
console.log(utcMinutes); // 15
```

### Date.getUTCSeconds()

`getUTCSeconds()` returns the seconds, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30 UTC");
const utcSeconds = date.getUTCSeconds();
console.log(utcSeconds); // 30
```

### Date.getUTCMilliseconds()

`getUTCMilliseconds()` returns the milliseconds, according to universal time (UTC).

```js
const date = new Date("August 19, 1975 23:15:30.123 UTC");
const utcMilliseconds = date.getUTCMilliseconds();
console.log(utcMilliseconds); // 123
```

## Set Date Method

You can manipulate a Date object using its built-in methods:

### Date.setDate()

`setDate()` sets the day of the month for a specified date according to local time.

```js
const now = new Date();
now.setDate(30); // 2023-03-30T06:53:16.981Z
```

### Date.setMonth()

`setMonth()` sets the month for a specified date according to local time. Note: January is 0, February is 1, and so on.

```js
const now = new Date();
now.setMonth(2);
console.log(now); // 2023-06-06T07:00:52.208Z
```

### Date.setFullYear()

`setFullYear()` sets the year (4 digits for 4-digit years) for a specified date according to local time.

```js
const now = new Date();
now.setFullYear(2024); // 2024-03-06T07:01:11.938Z
```

### Date.setHours()

`setHours()` sets the hour for a specified date according to local time.

```js
const now = new Date();
now.setHours(10); // 2023-03-06T09:01:57.743Z
```

### Date.setMinutes()

`setMinutes()` sets the minutes for a specified date according to local time.

```js
const now = new Date();
now.setMinutes(58); // 2023-03-06T07:55:42.119Z
```

### Date.setSeconds()

`setSeconds()` sets the seconds for a specified date according to local time.

```js
const now = new Date();
now.setSeconds(30); // check it yourself
```

### Date.setMilliseconds()

`setMilliseconds()` sets the milliseconds for a specified date according to local time.

```js
const now = new Date();
now.setMilliseconds(60); // check it yourself
```

### Date.setTime()

`setTime()` sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

```js
const now = new Date();
now.setTime(1678085166300); // check it yourself
```

### Date.setUTCDate()

`setUTCDate()` - Sets the day of the month (0-31) for a specified date according to universal time.

```js
const date = new Date();
date.setUTCDate(15);
console.log(date.toUTCString()); // output: "Thu, 15 Mar 2023 16:47:56 GMT"
```

### Date.setUTCFullYear()

`setUTCFullYear()` - Sets the year (optionally month and day) for a specified date according to universal time.

```js
const date = new Date();
date.setUTCFullYear(2024, 11, 31);
console.log(date.toUTCString()); // output: "Wed, 31 Dec 2024 16:47:56 GMT"
```

### Date.setUTCMonth()

`setUTCMonth()` - Sets the month (0-11) and day of the month (0-31) for a specified date according to universal time.

```js
const date = new Date();
date.setUTCMonth(11, 31);
console.log(date.toUTCString()); // output: "Fri, 31 Jan 2024 16:47:56 GMT"
```

### Date.setUTCHours()

`setUTCHours()` - Sets the hours (0-23), minutes, seconds, and milliseconds for a specified date according to universal time.

```js
const date = new Date();
date.setUTCHours(12, 30, 45, 500);
console.log(date.toUTCString()); // output: "Thu, 03 Mar 2023 12:30:45 GMT"
```

### Date.setUTCMinutes()

`setUTCMinutes()` - Sets the minutes (0-59), seconds, and milliseconds for a specified date according to universal time.

```js
const date = new Date();
date.setUTCMinutes(30, 45, 500);
console.log(date.toUTCString()); // output: "Thu, 03 Mar 2023 16:30:45 GMT"
```

### Date.setUTCSeconds()

`setUTCSeconds()` - Sets the seconds (0-59) and milliseconds for a specified date according to universal time.

```js
const date = new Date();
date.setUTCSeconds(45, 500);
console.log(date.toUTCString()); // output: "Thu, 03 Mar 2023 16:47:45 GMT"
```

### Date.setUTCMilliseconds()

`setUTCMilliseconds()` - Sets the milliseconds (0-999) for a specified date according to universal time.

```js
const date = new Date();
date.setUTCMilliseconds(500);
console.log(date.toUTCString()); // output: "Thu, 03 Mar 2023 16:47:56 GMT"
```
