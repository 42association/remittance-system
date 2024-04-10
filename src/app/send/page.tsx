import { SendInput } from '@/src/components/send/SendInput';
import { SendConfirm } from '@/src/components/send/sendConfirm';
import { SendComplete } from '@/src/components/send/sendComplete';

export default function SendPage() {
    let step:　number = 3;

    if (step === 1)
        return (<SendInput />)
    else if(step === 2)
        return (<SendConfirm />)
    else if(step === 3)
        return (<SendComplete />)
}