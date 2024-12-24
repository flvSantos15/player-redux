import { useAppSelector } from '../store'

export function Header() {
  const { currentModule, currentLesson } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return { currentModule, currentLesson }
  })
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule.title}</h1>
      <span className="text-sm text-zinc-400">{currentLesson.title}</span>
    </div>
  )
}
