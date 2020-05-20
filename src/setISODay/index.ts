import toInteger from '../_lib/toInteger/index.js'
import toDate from '../toDate/index.js'
import addDays from '../addDays/index.js'
import getISODay from '../getISODay/index.js'

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
export default function setISODay(dirtyDate: Date | number, dirtyDay: number) {
  var date = toDate(dirtyDate)
  var day = toInteger(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}