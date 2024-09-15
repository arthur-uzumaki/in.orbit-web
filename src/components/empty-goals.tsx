import Image from 'next/image'
import letsStartIllustration from '@/assets/lets-start-illustration.svg'
import logo from '@/assets/logo-in-orbit.svg'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { DialogTrigger } from '@/components/ui/dialog'

export function EmptyGoals() {
  return (
    <main className=" flex items-center justify-center h-screen flex-col gap-8">
      <header>
        <Image alt="logo in-orbit" src={logo} />
      </header>
      <Image alt="lest-start-illustration" src={letsStartIllustration} />
      <p className="text-base text-zinc-300 font-normal  leading-relaxed text-center max-w-80 ">
        Você ainda não cadastrou nenhuma meta, que tal{' '}
        <span className="underline">cadastrar um</span> agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button className=" gap-2 bg-violet-500 hover:bg-violet-600">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </main>
  )
}
