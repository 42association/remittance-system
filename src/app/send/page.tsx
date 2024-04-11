import { SendInput } from '@/src/components/send/SendInput';
import { SendConfirm } from '@/src/components/send/sendConfirm';
import { SendComplete } from '@/src/components/send/sendComplete';

export default function SendPage() {
    //処理状況に応じてstepが++されて表示画面が切り替わる
    let step:　number = 1;

    if (step === 1)
        return (<SendInput />)
    else if(step === 2)
        return (<SendConfirm />)
    else if(step === 3)
        return (<SendComplete />)
}