type Props = {
  description: string
  setDescription: (description: string) => void
}
const TodoDescriptionText: React.FC<Props> = ({
  description,
  setDescription,
}) => {
  return (
    <>
      <label
        htmlFor="new-todo-description"
        className="block w-full max-w-[160px]"
      >
        Description
      </label>
      <textarea
        id="new-todo-description"
        className="w-full text-black px-2 py-1"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </>
  )
}

export default TodoDescriptionText
