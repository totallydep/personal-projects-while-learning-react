## Date() in JavaScript

- `YYYY` is the year, with four digits (0000 to 9999), or as an expanded year of + or - followed by six digits. The sign is required for expanded years. -000000 is explicitly disallowed as a valid year.
- `MM` is the month, with two digits (01 to 12). Defaults to 01.
  DD is the day of the month, with two digits (01 to 31). Defaults to 01.
- `T` is a literal character, which indicates the beginning of the time part of the string. The T is required when specifying the time part.
- `HH` is the hour, with two digits (00 to 23). As a special case, 24:00:00 is allowed, and is interpreted as midnight at the beginning of the next day. Defaults to 00.
- `mm` is the minute, with two digits (00 to 59). Defaults to 00.
  ss is the second, with two digits (00 to 59). Defaults to 00.
  sss is the millisecond, with three digits (000 to 999). Defaults to 000.
- `Z` is the timezone offset, which can either be the literal character Z (indicating UTC), or + or - followed by HH:mm, the offset in hours and minutes from UTC.
