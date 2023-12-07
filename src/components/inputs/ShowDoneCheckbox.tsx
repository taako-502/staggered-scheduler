type Props = {
  setDisplayDone: (displayDone: boolean) => void
}

const ShowDoneCheckbox: React.FC<Props> = ({ setDisplayDone }) => {
  return (
    <>
      <input
        id="show-done"
        type="checkbox"
        onChange={(e) => setDisplayDone(e.target.checked)}
      />
      <label htmlFor="show-done">Display Closed Schedules</label>
    </>
  )
}

export default ShowDoneCheckbox
