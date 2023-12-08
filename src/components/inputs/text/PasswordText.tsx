type Props = {
  password: string
  setPassword: (password: string) => void
}
const PasswordText: React.FC<Props> = ({ password, setPassword }) => {
  return (
    <>
      <label
        htmlFor="password"
        className="mr-2 inline-block w-full max-w-[120px]"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        className="text-black px-2 py-1"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  )
}

export default PasswordText
