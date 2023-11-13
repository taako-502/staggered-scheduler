import { subtractHoursFromDate } from './time.utility'

describe('subtractHoursFromDate', () => {
  it('指定された時間で減算する', () => {
    const baseDate = new Date('2023-01-01T12:00:00')
    const hoursToSubtract = 5

    const expectedDate = new Date('2023-01-01T07:00:00')
    const resultDate = subtractHoursFromDate(baseDate, hoursToSubtract)

    expect(resultDate).toEqual(expectedDate)
  })
})
