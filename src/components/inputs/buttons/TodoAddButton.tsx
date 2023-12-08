type Props = {
  handler: () => void
}
const TodoAddButton: React.FC<Props> = ({ handler }) => (
  <button
    id="new-todo-submit"
    className="px-2 py-[2px] mt-2 border-2 border-slate-300	border-dotted"
    type="submit"
    onClick={handler}
  >
    Add
  </button>
)

export default TodoAddButton
