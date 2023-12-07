import dynamic from 'next/dynamic'

const DynamicSignUpForm = dynamic(() => import('@/components/SignUpForm'), {
  ssr: false,
})

const SignUp = () => {
  return (
    <div>
      <h1>SignUp</h1>
      <DynamicSignUpForm />
    </div>
  )
}

export default SignUp
