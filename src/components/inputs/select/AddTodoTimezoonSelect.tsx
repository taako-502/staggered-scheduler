import { ContoryCodeType } from '@/utilities/time.utility'

type Props = {
  contoryCd: ContoryCodeType
  setContoryCd: (contoryCd: ContoryCodeType) => void
}
const AddTodoTimezoonSelect: React.FC<Props> = ({
  contoryCd,
  setContoryCd,
}) => (
  <select
    className="text-black"
    value={contoryCd}
    onChange={(e) => setContoryCd(e.target.value as ContoryCodeType)}
  >
    <option value="asia-tokyo">Asia/Tokyo</option>
    <option value="africa-cairo">Africa/Cairo</option>
  </select>
)

export default AddTodoTimezoonSelect
