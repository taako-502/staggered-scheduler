import { ContoryCodeType } from '@/utilities/time.utility'

type Props = {
  displayTimezoon: ContoryCodeType
  setDisplayTimezoon: (displayTimezoon: ContoryCodeType) => void
}
const TimezoonSelect: React.FC<Props> = ({
  displayTimezoon,
  setDisplayTimezoon,
}) => (
  <>
    <label htmlFor="show-timezoon">Display Timezoon</label>
    <select
      id="show-timezoon"
      value={displayTimezoon}
      onChange={(e) => setDisplayTimezoon(e.target.value as ContoryCodeType)}
      className="bg-black"
    >
      <option value="gmt">GMT</option>
      <option value="asia-tokyo">Asia/Tokyo</option>
      <option value="africa-cairo">Africa/Cairo</option>
    </select>
  </>
)

export default TimezoonSelect
