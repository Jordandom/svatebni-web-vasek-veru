import { H1 } from '@/components/ui/typography'

export const DressCode = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-4">
      <H1 className="text-center uppercase">
        <span className="text-secondary decoration-8 underline-offset-3">
          Co na sebe a v jakém stylu bude svatba?
        </span>
      </H1>

      <div className="flex w-full flex-col gap-8">
        {/* First Card */}
        <div>
          <h2 className="text-secondary mb-4 text-center text-3xl font-bold decoration-8 underline-offset-3">
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
        <div>
          <h2 className="text-secondary mb-4 text-center text-3xl font-bold">Barevné ladění</h2>
          <p className="text-center leading-relaxed">
            Svatba bude laděna do podzimních přírodních barev (vínová, tmavě zelená atp.), takže
            pokud budete chtít, můžete se sladit s námi. Oblečte se hlavně tak, abyste se cítili
            dobře a pohodlně, ale vyvarujte se prosím pastelových barev (žlutá, oranžová atp.).
          </p>
        </div>
      </div>
    </div>
  )
}
