import { Mail, User, X } from "lucide-react"
import { FormEvent } from "react"

type GuestModalConfirmProps = {
    closeGuestModalConfirm: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function GuestModalConfirm(props: GuestModalConfirmProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 shadow-shape">
              <div className="flex items-center justify-between">
                <h2>Confirmar criação da viagem</h2>
                <button onClick={props.closeGuestModalConfirm}>
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>
              <p className="text-sm text-zinc-400 text-left">
                Para concluir a criação da viagem para <span className="text-zinc-100 font-bold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-bold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
              </p>

              <form onSubmit={props.createTrip}>
                <div className="bg-zinc-950 flex items-center justify-between mt-4 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                    <User className="size-5"/>
                    <input type="text" name="text" className="bg-transparent outline-none flex-1" placeholder="Seu nome completo"/>
                    </div>
                </div>
                <div className="bg-zinc-950 flex items-center justify-between mt-2 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                    <Mail className="size-5"/>
                    <input type="email" name="email" className="bg-transparent outline-none flex-1" placeholder="Seu e-mail pessoal"/>
                    </div>
                </div>

                <button type="submit" className="bg-lime-300 text-lime-950 w-full px-5 py-2 mt-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-lime-400">
                    Confirmar criação da viagem          
                </button>
              </form>
              
            </div>
          </div>
    )
}