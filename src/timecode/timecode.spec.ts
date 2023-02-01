import Timecode from "./timecode";

describe("Timecode test", () => {
  test("Converts millisecond to standard time code", () => {
    const res = Timecode.MillisecondsToTime(320009);
    expect(res).toBe("05:20");
  });

  test("Converts millisecond to standard time code", () => {
    const res = Timecode.MillisecondsToTime(320009, ".");
    expect(res).toBe("05:20.009");
  });

  test("Converts millisecond to standard time code", () => {
    const res = Timecode.TimetoMilliseconds("05:20");
    expect(res).toBe(320000);
  });

  test("Converts millisecond to HH:MM:ss format timecode", () => {
    const res = Timecode.MillisecondsToHHMMss(320009);
    expect(res).toBe("00:05:20");
  });

  test("Converts millisecond to HH:MM:ss.SSS format timecode", () => {
    const res = Timecode.MillisecondsToHHMMssSSS(320009);
    expect(res).toBe("00:05:20.009");
  });

  test("Converts millisecond to HH:MM:ss,SSS format timecode", () => {
    const res = Timecode.MillisecondsToHHMMssSSS(320009, ",");
    expect(res).toBe("00:05:20,009");
  });

  test("Converts millisecond to HH:MM:ss:SSS format timecode", () => {
    const res = Timecode.MillisecondsToHHMMssSSS(320009, ":");
    expect(res).toBe("00:05:20:009");
  });
});
