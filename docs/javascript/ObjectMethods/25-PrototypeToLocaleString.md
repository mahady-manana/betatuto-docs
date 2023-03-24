---
tag: "javascript"
slug: /javascript/object/object-prototype-tolocalestring
date: "2023-03-18"
title: Object.prototype.toLocaleString()
description: "The Object.prototype.toLocaleString() method is a built-in method in JavaScript that returns a string representation of the object using the locale-specific formatting and language-specific sorting rules. It is available on all objects through the Object.prototype object."
category: "Object Methods"
order: 25
prevPath: /javascript/object/object-prototype-valueof
nextPath: /javascript/object/object-prototype-isprototypeof
githubPath: /javascript/ObjectMethods/25-PrototypeToLocaleString.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The `Object.prototype.toLocaleString()` method is a built-in method in JavaScript that returns a string representation of the object using the locale-specific formatting and language-specific sorting rules. It is available on all objects through the `Object.prototype` object.

## How it works ?

The `Object.prototype.toLocaleString()` method returns a string representation of the object by first converting it to a string using the [Object.prototype.toString()](/javascript/object/object-prototype-tostring/) method, and then applying locale-specific formatting rules based on the user's locale. The resulting string can be used to represent the object in a way that is appropriate for the user's language and culture.

## Examples

```js
const number = 123456.789;
console.log(number.toLocaleString()); // "123,456.789"

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString('de-DE')); // "123.456,789"

// English uses period as decimal separator and comma for thousands
console.log(number.toLocaleString('en-US')); // "123,456.789"

// Arabic in most Arabic speaking countries uses Arabic digits
console.log(number.toLocaleString('ar-EG')); // "١٢٣٬٤٥٦٫٧٨٩"

```

```js
const date = new Date(Date.UTC(2022, 2, 18, 12, 0, 0));
console.log(date.toLocaleString()); // "3/18/2022, 8:00:00 AM"
```

In this example, the `Object.prototype.toLocaleString()` method is used to format a date object according to the user's locale.

## Detailed explanation

### Syntax

```js
obj.toLocaleString([locales[, options]])
```

- `obj`: The object that you want to convert to a string.
- `locales` (optional): A string or array of strings that specifies the language or region to use for formatting. If this parameter is not specified or is `undefined`, the default locale of the user's environment will be used.
- `options` (optional): An object that contains additional formatting options. This can include options such as style (for specifying the format of numbers and dates), currency (for specifying the currency symbol), and `timeZone` (for specifying the time zone).

### Parameter

- `locales` parameter:

  - If this parameter is not specified or is `undefined`, the default locale of the user's environment will be used.
  - If it is a string, it should be a language tag in the form of a BCP 47 language tag, such as `en-US`, `fr-FR`, `de-DE`.
  - If it is an array of strings, the language tags will be used in the order specified until a supported locale is found.

- `options` parameter:

  `options` parameter is an object that can include any of the following properties:

  - `localeMatcher`: Specifies how to match the user's preferred language and region to the available locales. Possible values are "`lookup`" (default) and "`best fit`".
  - `style`: Specifies the style of formatting to use for numbers, dates, and times. Possible values are "`decimal`" (for numbers), "`percent`", "`currency`", "`unit`", "`short`", and "`long`".
  - `currency`: Specifies the currency code to use for currency formatting. This should be a 3-letter ISO currency code, such as "`USD`" or "`EUR`".
  - `currencyDisplay`: Specifies how to display the currency symbol in currency formatting. Possible values are "`symbol`" (default), "`code`", and "`name`".
  - `useGrouping`: Specifies whether to use grouping separators (such as commas) in number formatting. Default is `true`.
  - `minimumIntegerDigits`: Specifies the minimum number of digits to use for the integer part of a number. Default is 1.
  - `minimumFractionDigits`: Specifies the minimum number of digits to use for the fractional part of a number. Default is 0.
  - `maximumFractionDigits`: Specifies the maximum number of digits to use for the fractional part of a number. Default is 3.
  - `minimumSignificantDigits`: Specifies the minimum number of significant digits to use for a number. This can be used instead of `minimumFractionDigits` to ensure that trailing zeros are not displayed. Default is 1.
  - `maximumSignificantDigits`: Specifies the maximum number of significant digits to use for a number. Default is `Infinity`.
  - `timeZone`: Specifies the time zone to use for date and time formatting. This should be a string that specifies the time zone identifier, such as "`America/New_York`" or "`UTC`".
  - `hour12`: Specifies whether to use a 12-hour clock for time formatting. Default is `undefined`, which uses the user's environment settings.

### Return Value

The `Object.prototype.toLocaleString()` method returns a string that represents the object in the specified format. The format of the string will depend on the type of object and the formatting options that are specified. If the object cannot be converted to a string using the specified format, an error will be thrown.


### Limitations

The `Object.prototype.toLocaleString()` method only provides a string representation of an object and does not modify the object in any way. It also relies on the locale settings of the user, which means that the same object can be represented differently in different locales.

### Common use cases:

The `Object.prototype.toLocaleString()` method is commonly used to format dates, times, and currency values according to the user's locale settings. It can also be used to provide a localized string representation of any object.

### Tips and tricks:

When using `Object.prototype.toLocaleString()` with a currency value, it is recommended to use the options parameter to specify the currency symbol and format. This can help ensure that the currency is displayed correctly in different locales.

When using `Object.prototype.toLocaleString()` with a date object, it is recommended to use the `options` parameter to specify the date and time format. This can help ensure consistent formatting across different locales. It is also recommended to test the output of the method in different locales to ensure that it is working as expected.

### Ecmascript specification

The `Object.prototype.toLocaleString()` method is part of the ECMAScript Internationalization API, which was introduced in ECMAScript 5.1. It is also included in the ECMAScript 6 specification. It is part of the standard Object prototype and is supported by all major web browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.tolocalestring" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.prototype.toLocaleString()`:

1.  With a Date object, write a function that takes a Date object as input and returns a string representing the date formatted according to the current locale settings using the `Object.prototype.toLocaleString()` method.

<details>

<summary>Solution</summary>

```js
function formatDate(date) {
  return date.toLocaleString();
}

const date = new Date();
console.log(formatDate(date));
```

</details>

2. Write a function that takes a number representing a currency value as input and returns a string representing the value formatted according to the current locale settings using the `Object.prototype.toLocaleString()` method.

<details>

<summary>Solution</summary>

```js
function formatCurrency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const value = 12345.67;
console.log(formatCurrency(value));
```

</details>

3. Write a function that takes a string representing a locale as input and returns a string representing the current date and time formatted according to that locale using the `Object.prototype.toLocaleString()` method.

<details>

<summary>Solution</summary>

```js
function formatLocaleDate(locale) {
  const date = new Date();
  return date.toLocaleString(locale);
}

console.log(formatLocaleDate('en-US'));
console.log(formatLocaleDate('fr-FR'));
```

</details>