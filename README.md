<a name="Timecode"></a>

# typscript-timecode

A typscript tool to convert timecodes

<div>
   <img alt="GitHub Workflow Status" src="https://github.com/ijazulrehman/typescript-timecode/actions/workflows/main.yml/badge.svg">
   <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/ijazulrehman/typescript-timecode">
   <img alt="GitHub" src="https://img.shields.io/github/license/ijazulrehman/typescript-timecode">
</div>

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
const t1 = Timecode.MillisecondsToTime(320009); // t1 = "05:20";
//if need ms then pass separator
const t2 = Timecode.MillisecondsToTime(320009, "."); // t2 = "05:20.009";

// To convert millisecond to HH:MM:ss time code
const t3 = Timecode.MillisecondsToHHMMss(320009); // t3 = "00:05:20";

// To convert millisecond to HH:MM:ss.SSS time code
const t4 = Timecode.MillisecondsToHHMMssSSS(320009); // t4 = "00:05:20.009";

// To convert millisecond to HH:MM:ss.SSS time code
const t5 = Timecode.MillisecondsToHHMMssSSS(320009, ","); // t5 = "00:05:20,009";

// To convert millisecond to HH:MM:ss.SSS time code
const t6 = Timecode.MillisecondsToHHMMssSSS(320009, ":"); // t6 = "00:05:20:009";

// To convert a standard time code, HHMMss, and HHMMssSSS to milliseconds.
const ms1 = Timecode.TimetoMilliseconds("00:00:03.09"); // ms1 = 3009;
```

## Tests

To run them, just do:

```shell
npm run test
```

## Contributing

Any is welcomed. Just open a PR.
