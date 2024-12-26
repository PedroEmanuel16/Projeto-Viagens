import { ArrowRight, UserRoundPlus } from "lucide-react";

type InvitesGuestsStepProps = {
    openGuestModalWho: () => void
    emailsToInvite: string[]
    openGuestModalConfirm: () => void
}

export function InvitesGuestsStep(props: InvitesGuestsStepProps){
    return (
        <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button onClick={props.openGuestModalWho} className="flex items-center gap-2 flex-1">
            <UserRoundPlus className="size-5 text-zinc-400"/>
            {props.emailsToInvite.length > 0 ? (
                <span className="flex-1 text-left text-zinc-100">{props.emailsToInvite.length} pessoa(s) convidada(s)</span>
            ): (
                <span className="flex-1 text-left text-zinc-400">Quem estará na viagem?</span>
            )}
            
            </button>

            <div className="w-px h-6 bg-zinc-800"></div>

        
            <button onClick={props.openGuestModalConfirm} className="bg-lime-300 text-lime-950  px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400">
            Confirmar Viagem
            <ArrowRight className="size-5"/>          
            </button>
        
        </div>
    )
}