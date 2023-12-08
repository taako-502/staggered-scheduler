type Props = {
  title: string
  setTitle: (title: string) => void
}
const TodoTitleText: React.FC<Props> = ({ title, setTitle }) => {
  return (
    <>
      <label htmlFor="new-todo-title" className="block w-full max-w-[160px]">
        Title
      </label>
      <input
        id="new-todo-title"
        className="w-full text-black px-2 py-1"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  )
}

export default TodoTitleText
