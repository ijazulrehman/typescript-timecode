export default class Timecode {
  /**
   * Converts millisecond to standard time code
   * @param ms Milliseconds in number
   * @returns {string} Converted Timecode Eg. 05:20
   * @example
   *
   * ```js
   * const time = Timecode.MillisecondsToTime(32000000)
   * ```
   */
  static MillisecondsToTime(millisecs: number, msSeparator?: string): string {
    const msString = String(millisecs % 1000)
      .padStart(3, "0")
      .replace(/0+$/, "");

    const seconds = Math.floor((millisecs / 1000) % 60);
    const minutes = Math.floor((millisecs / 60000) % 60);
    const hours = Math.floor(millisecs / 3600000);

    const secondsT = `${seconds}`.padStart(2, "0");
    const minutesT = `${minutes}`.padStart(2, "0");
    const hoursT = `${hours}`.padStart(2, "0");

    return `${hours ? `${hoursT}:` : ""}${minutesT}:${secondsT}${
      msSeparator && msSeparator ? msSeparator + msString : ""
    }`;
  }

  /**
   * Converts millisecond to HH:MM:ss.SSS time code
   * @param millisecs
   * @returns {string} Converted Timecode Eg. 00:00:03.09
   * @example
   *
   * ```js
   * const timecode = Timecode.MillisecondsToHHMMssSSS(3009);
   * ```
   *
   */
  static MillisecondsToHHMMssSSS = (
    millisecs: number,
    msSeparator: string = "."
  ): string => {
    const msString = String(millisecs % 1000)
      .padStart(3, "0")
      .replace(/0+$/, "");

    return this.MillisecondsToHHMMss(millisecs) + msSeparator + msString;
  };

  /**
   * Converts millisecond to HH:MM:ss time code
   * @param millisecs
   * @returns {string} Converted Timecode Eg. 00:00:03
   * @example
   *
   * ```js
   * const timecode = Timecode.MillisecondsToHHMMss(3000);
   * ```
   *
   */
  static MillisecondsToHHMMss = (millisecs: number): string => {
    const ms = millisecs % 1000;
    millisecs = (millisecs - ms) / 1000;
    const secs = millisecs % 60;
    millisecs = (millisecs - secs) / 60;
    const mins = millisecs % 60;
    const hrs = (millisecs - mins) / 60;

    return `${this.pad(hrs)}:${this.pad(mins)}:${this.pad(secs)}`;
  };

  /**
   * Converts a standard time code, HHMMss, and HHMMssSSS to milliseconds.
   * @param time
   * @returns {number} Milliseconds Converted Timecode Eg. 3009
   * @example
   *
   * ```js
   * const timecode1 = Timecode.HHMMssSSStoMilliseconds("00:00:03.09") // 3009
   * const timecode = Timecode.HHMMsstoMilliseconds("00:00:03") // 3000
   * ```
   */
  static TimetoMilliseconds = (time: string): number => {
    const milliSecondSplit = time.split(".");
    const items = milliSecondSplit[0].split(":");

    const SSS =
      milliSecondSplit.length > 1
        ? Number((milliSecondSplit[1] + "000").slice(0, 3))
        : 0;

    return (
      items.reduceRight(
        (prev, curr, i, arr) =>
          prev + parseInt(curr) * 60 ** (arr.length - 1 - i),
        0
      ) *
        1000 +
      SSS
    );
  };

  static pad = (number: number, z: number = 2): string => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: z,
      useGrouping: false,
    });
  };
}
