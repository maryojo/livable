import Link from 'next/link'
import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Safe Commute</h1>
        <p className="text-xl mb-8">
          Your AI-powered companion for safer and smarter travel.
        </p>
        {session ? (
          <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Dashboard
          </Link>
        ) : (
          <Link href="/auth/signin" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </Link>
        )}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Real-time Updates
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get instant notifications about your commute conditions.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            AI-Powered Insights
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Leverage machine learning for smarter route suggestions.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Community Driven
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Benefit from and contribute to crowdsourced safety information.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Personalized Alerts
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Set up custom notifications tailored to your commute.
          </p>
        </div>
      </div>
    </main>
  )
}