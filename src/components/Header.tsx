// import { useAppSelector } from '../store'
// import { useCurrentLesson } from '../store/slices/player'
import { useStore, useCurrentLesson } from '../zustand-store'

export function Header() {
  const isLoading = useStore((store) => store.isLoading)
  const { currentModule, currentLesson } = useCurrentLesson()
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  if (isLoading) return <h1 className="text-2xl font-bold">Carregando...</h1>

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule?.title}</h1>
      <span className="text-sm text-zinc-400">{currentLesson?.title}</span>
    </div>
  )
}
