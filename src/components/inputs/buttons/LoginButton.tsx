type Props = {
  handler: (event: { preventDefault: () => void }) => void
  loading: boolean
}
const LoginButton: React.FC<Props> = ({ handler, loading }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded block mx-auto mt-2"
    type="button"
    onClick={handler}
    disabled={loading}
  >
    Login
  </button>
)

export default LoginButton
