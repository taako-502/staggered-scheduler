import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-md mx-auto text-center">
        <span className="mr-8">@2023 Takao</span>
        <Link
          href="https://github.com/taako-502/staggered-scheduler"
          className="inline-block"
        >
          <Image src="/github-mark.png" alt="github" width="28" height="28" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
