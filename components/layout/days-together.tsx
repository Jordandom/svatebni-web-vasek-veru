import { CountUp } from '@/components/ui/count-up'

export const DaysTogether = () => {
  const startDate = new Date('2020-09-03')
  const currentDate = new Date()
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return (
    <div className="text-primary/80 mt-4 flex items-center gap-4">
      <CountUp
        from={0}
        to={diffDays}
        separator=","
        direction="up"
        duration={1}
        className="text-3xl font-bold sm:text-5xl"
      />
      <div className="text-3xl font-bold sm:text-5xl">společných dní</div>
    </div>
  )
}
