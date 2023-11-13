export type ContoryCodeType = '' | 'asia-tokyo' | 'africa-cairo'

export const getTimeDifference = (contory: ContoryCodeType): number => {
  // TODO: 適切なタイムゾーンを取得するためのAPIを実装する必要がある
  switch (contory) {
    case 'asia-tokyo':
      return 9
    case 'africa-cairo':
      return 2
    default:
      return 0
  }
}

export const addHoursToDate = (date: Date, hours: number): Date => {
  return new Date(date.getTime() + hours * 3600000)
}

export const subtractHoursFromDate = (date: Date, hours: number): Date => {
  return new Date(date.getTime() - hours * 3600000)
}

export type Locales = 'ja-JP' | 'en-EG'

export const formatDateISO8601 = (date: Date): string => {
  if (!(date instanceof Date)) {
    console.error('Invalid date object')
    return ''
  }

  return date.toISOString()
}

export const convertToDate = (dueDateTime: string): Date | null => {
  // 空文字列または不正な日付フォーマットをチェック
  if (!dueDateTime || isNaN(Date.parse(dueDateTime))) {
    return null
  }

  // Date オブジェクトを生成
  return new Date(dueDateTime)
}
