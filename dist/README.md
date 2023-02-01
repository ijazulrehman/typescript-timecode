<a name="Timecode"></a>

# typscript-timecode

A typscript tool to convert timecodes

## Installation

For npm users:

```bash
npm install typescript-timecode
```

For yarn users:

```bash
yarn add typescript-timecode
```

```typescript
import Timecode from "typescript-timecode";

// To convert millisecond to standard time code
const t1 = Timecode.MillisecondsToTime(32000000); // t1 = "05:20";
const t2 = Timecode.MillisecondsToTime(32000009); // t2 = "05:20";

// To convert millisecond to HH:MM:ss time code
const t3 = Timecode.MillisecondsToHHMMss(3000); // t3 = "00:00:03";

// To convert millisecond to HH:MM:ss.SSS time code
const t4 = Timecode.MillisecondsToHHMMss(3009); // t3 = "00:00:03.09";

// To convert a standard time code, HHMMss, and HHMMssSSS to milliseconds.
const ms1 = Timecode.HHMMssSSStoMilliseconds("00:00:03.09"); // ms1 = 3009;
```

## Tests

To run them, just do:

```shell
npm run test
```

## Contributing

Any is welcomed. Just open a PR.
