import { H1 } from '@/components/ui/typography'

export const DressCode = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-4">
      <H1 className="text-center uppercase">
        <span className="text-blue decoration-8 underline-offset-3">
          Co na sebe a v jakém stylu bude svatba?
        </span>
      </H1>

      <div className="text-primary/80 flex w-full flex-col gap-8">
        {/* First Card */}
        <div className="bg-countdown-background bg-100% flex h-full w-full transform flex-col justify-start rounded-2xl bg-center bg-no-repeat p-6 shadow-[0_20px_50px_rgba(225,_29,_72,_0.7)] backdrop-blur-sm transition-all duration-300 hover:scale-105">
          <h2 className="mb-4 text-center text-3xl font-bold decoration-8 underline-offset-3">
            Dress Code
          </h2>

          <ul className="flex flex-col items-center space-y-3">
            <li className="flex items-center gap-2">
              <span className="bg-blue h-2 w-2 rounded-full" />
              <span>Svatební obřad: semiformal</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-blue h-2 w-2 rounded-full" />
              <span>Zbytek svatebního dne: smart casual</span>
            </li>
          </ul>
        </div>

        {/* Second Card */}
        <div className="bg-countdown-background bg-100% flex h-full min-h-[20rem] w-full transform flex-col items-center justify-center rounded-2xl bg-center bg-no-repeat p-6 shadow-[0_20px_50px_rgba(225,_29,_72,_0.7)] backdrop-blur-sm transition-all duration-300 hover:scale-105">
          <h2 className="mb-4 text-center text-3xl font-bold">Barevné ladění</h2>
          <p className="leading-relaxed">
            Svatba bude laděna do podzimních přírodních barev (vínová, tmavě zelená atp.), takže
            pokud budete chtít, můžete se sladit s námi. Oblečte se hlavně tak, abyste se cítili
            dobře a pohodlně, ale vyvarujte se prosím pastelových barev (žlutá, oranžová atp.).
          </p>
        </div>
      </div>
    </div>
  )
}
