import Link from 'next/link'

const Introduction = () => (
  <main>
    <section className="px-8 py-12">
      <div>
        <h2 className="text-xl">Welcome to Staggered Scheduler!</h2>
        Are you part of a team spread across different time zones? Or do you
        often find yourself scheduling tasks and meetings across continents? Our
        app is here to simplify your life. Key
        <h2 className="text-xl mt-2">Features:</h2>
        <ul className="list-disc pl-[18px]">
          <li>
            <b>Multi-Time Zone Support:</b> Schedule and view tasks in any time
            zone, eliminating the confusion of time differences.
          </li>
          <li>
            <b>Efficient Task Management:</b> Like a traditional to-do list, but
            with enhanced features for tracking task status and deadlines across
            time zones.
          </li>
          <li>
            <b>User-Friendly Interface:</b> Our intuitive design makes
            scheduling and managing your tasks a breeze.
          </li>
        </ul>
        <h2 className="text-xl mt-2">Getting Started is Easy:</h2>
        <ol className="list-decimal pl-[18px]">
          <li>
            <b>Sign In:</b> Create your account or sign in to access your
            dashboard.
          </li>
          <li>
            <b>Add Tasks:</b> Easily add tasks and set deadlines in your
            preferred time zone.
          </li>
          <li>
            <b>Manage and View:</b> Organize your tasks, view them in different
            time zones, and stay on top of your schedule.
          </li>
        </ol>
        <p>
          Join the countless professionals and individuals who have streamlined
          their scheduling process with Global Time Scheduler. Say goodbye to
          the complexities of time zone differences and hello to effortless
          scheduling.
        </p>
        <h2 className="text-xl mt-2">Ready to Get Started?</h2>
        <ul className="list-disc pl-[18px]">
          <li>
            Click the Sign-In button to begin your journey towards seamless time
            zone management!
          </li>
        </ul>
      </div>
      <div className="text-center mt-4">
        <Link
          href="/signin"
          className="px-2 py-1 border-dotted border-2 border-slate-300"
        >
          SignIn
        </Link>
      </div>
    </section>
  </main>
)

export default Introduction
