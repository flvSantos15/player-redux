import ReactPlayer from 'react-player'

// import { next, useCurrentLesson } from '../store/slices/player'
// import { useAppDispatch, useAppSelector } from '../store'
import { Loader } from 'lucide-react'
import { useCurrentLesson, useStore } from '../zustand-store'

export function Video() {
  const { next, isLoading } = useStore((store) => {
    return {
      next: store.next,
      isLoading: store.isLoading
    }
  })
  // const dispatch = useAppDispatch()
  const { currentLesson: lesson } = useCurrentLesson()
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  function handlePlayNext() {
    next()
    // dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className='flex items-center justify-center h-full'><Loader className='w-6 h-6 text-zinc-400 animate-spin' /></div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${lesson?.id}`}
        />
      )}

    </div>
  )
}
