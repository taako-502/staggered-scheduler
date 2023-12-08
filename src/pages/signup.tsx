import dynamic from 'next/dynamic'

const DynamicSignupForm = dynamic(() => import('@/components/SignupForm'), {
  ssr: false,
})

const SignUp = () => {
  return (
    <div>
      <h1>SignUp</h1>
      <DynamicSignupForm />
    </div>
  )
}

export default SignUp
