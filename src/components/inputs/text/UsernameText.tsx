type Props = {
  username: string
  setUsername: (username: string) => void
}
const UsernameText: React.FC<Props> = ({ username, setUsername }) => {
  return (
    <>
      <label
        htmlFor="username"
        className="mr-2 inline-block w-full max-w-[120px]"
      >
        Username
      </label>
      <input
        id="username"
        type="text"
        className="text-black px-2 py-1"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  )
}

export default UsernameText
