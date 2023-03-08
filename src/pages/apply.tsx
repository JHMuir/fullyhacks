import ApplicationForm from '@/components/Form/ApplicationForm'
import { GenericNavBar } from '@/components/NavBar/NavBar'
import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession, signOut } from 'next-auth/react'

const apply: NextPage = () => {
  return (
    <section>
      <GenericNavBar />
      <button onClick={() => signOut()}> Sign out</button>
      <div className="font-rubik text-purple_main mt-10 flex flex-col items-center">
        <p className="text-lg font-semibold">My Application</p>
        <ApplicationForm />
      </div>
    </section>
  )
}

export default apply
