import { MeteorsDynamic } from '@/components/ui/meteors-dynamic'
import { H1 } from '@/components/ui/typography'

const OurStory = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-8">
      <H1 className="uppercase">
        <span className="text-secondary decoration-8 underline-offset-3">Náš příběh</span>
      </H1>
      <div className="flex flex-col gap-4">
        <div>
          Náš společný příběh začal na vysoké škole, kde se z dvou kamarádů postupně stal nerozlučný
          pár. I přes složité začátky jsme si k sobě našli tu správnou cestu. Procestovali jsme
          spolu kus světa, obletěli pár mráčků, zamilovali si Šumavu a prožili spoustu radostných i
          náročných chvil.
        </div>
        <div>
          Naše společné dobrodružství pak obohatil čtyřnohý parťák, který sehrál klíčovou roli při
          žádosti o ruku. Nebýt Dobbyho pohotové reakce na nechtěné turisty u Vyhlídky na kaňon
          Křemelné, možná by s námi prstýnek dodnes jezdil na výlety, aniž by o něm měla Verča
          tušení.
        </div>
        <div>
          A tak jsme tu dnes — připraveni říct si své “ANO” a s nadšením vyhlížíme všechny krásné
          okamžiky, které nám náš další společný život přinese.
        </div>
      </div>
      <MeteorsDynamic number={20} />
    </div>
  )
}

export default OurStory
