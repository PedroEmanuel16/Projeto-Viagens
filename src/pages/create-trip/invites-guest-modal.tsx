import { ArrowRight, AtSign, Plus, UserRoundPlus, X } from "lucide-react";
import { FormEvent } from "react";

type InvitesGuestModalProps = {
    closeGuestModalWho: () => void
    emailsToInvite: string[]
    removeEmailInvite: (email : string) => void
    addEmailToInvite: (event : FormEvent<HTMLFormElement>) => void
}

export function InvitesGuestModal (props: InvitesGuestModalProps){
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 shadow-shape">
                <div className="flex items-center justify-between">
                <h2>Selecionar convidados</h2>
                <button onClick={props.closeGuestModalWho}>
                    <X className="size-5 text-zinc-400"/>
                </button>
                </div>
                <p className="text-sm text-zinc-400 text-left">
                Os convidados irão receber e-mails para confirmar a participação na viagem.
                </p>

                <div className="flex flex-wrap my-4 gap-2">
                {props.emailsToInvite.map(email => {
                    return (
                    <div key={email} className="flex items-center gap-2 text-zinc-300 bg-zinc-800 p-2 rounded-lg text-sm">
                    {email}
                    <button onClick={() => props.removeEmailInvite(email)}>
                        < X className="size-5 text-zinc-400"/>
                    </button>
                    
                    </div>
                    )
                })}
                
                </div>

                <div className="h-px bg-zinc-800"></div>

                <form onSubmit={props.addEmailToInvite} className="bg-zinc-950 flex items-center justify-between mt-4 p-2.5 rounded-lg">
                <div className="flex items-center gap-2">
                    <AtSign className="size-5"/>
                    <input type="email" name="email" className="bg-transparent outline-none flex-1" placeholder="Digite o e-mail do convidado"/>
                </div>
                
                <button type="submit" className="bg-lime-300 text-lime-950  px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400">
                    Adicionar
                    <Plus className="size-5"/>          
                </button>
                </form>
            </div>
        </div>
    )
}