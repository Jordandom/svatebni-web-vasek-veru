import { H1 } from '@/components/ui/typography'

export const Gifts = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <H1 className="uppercase">
        <span className="text-secondary decoration-8 underline-offset-3">Svatební dary</span>
      </H1>
      <div className="">
        <div className="text-center">
          Největším dárkem pro nás bude, když tento den strávíte s námi a užijete si ho. Pokud byste
          nás i přesto chtěli obdarovat, budeme rádi za jakýkoliv finanční příspěvek na svatební
          cestu a společný start do života.
        </div>
      </div>
    </div>
  )
}
