type Props = {
  dueDateTime: '' | Date
  setDueDateTime: (dueDateTime: Date) => void
}
const DueDateTime: React.FC<Props> = ({ dueDateTime, setDueDateTime }) => {
  const formatDateForInput = (date: Date | null): string => {
    if (!date) {
      return ''
    }

    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:${minutes}`
  }

  return (
    <>
      <label
        htmlFor="new-todo-due-date-time"
        className="block w-full max-w-[160px]"
      >
        Due Date Time
      </label>
      <input
        id="new-todo-due-date-time"
        type="datetime-local"
        className="w-full text-black px-2 py-1 mr-2"
        value={dueDateTime ? formatDateForInput(dueDateTime) : ''}
        onChange={(e) => setDueDateTime(new Date(e.target.value))}
      />
    </>
  )
}

export default DueDateTime
