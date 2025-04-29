import { CountUp } from '@/components/ui/count-up'

export const DaysTogether = () => {
  const startDate = new Date('2020-09-03')
  const currentDate = new Date()
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return (
    <div className="text-primary/80 flex items-center gap-4">
      <CountUp
        from={0}
        to={diffDays}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text text-5xl font-bold"
      />
      <div className="text-5xl font-bold">společných dní</div>
    </div>
  )
}
