import { H1 } from '@/components/ui/typography'

export const Gifts = () => {
  return (
    <div className="text-primary/80 bg-countdown-background bg-100% flex h-full min-h-[20rem] w-full transform flex-col items-center justify-start gap-4 rounded-2xl bg-center bg-no-repeat p-6 shadow-[0_20px_50px_rgba(225,_29,_72,_0.7)] backdrop-blur-sm transition-all duration-300 hover:scale-105">
      <H1 className="uppercase">
        <span className="decoration-8 underline-offset-3">Svatební dary</span>
      </H1>
      <div className="text-center">
        Největším dárkem pro nás bude, když tento den strávíte s námi a užijete si ho. Pokud byste
        nás i přesto chtěli obdarovat, budeme rádi za jakýkoliv finanční příspěvek na svatební cestu
        a společný start do života.
      </div>
    </div>
  )
}
