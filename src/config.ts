import {
    AppConfigs,
    Chain,
    ChainFactory,
    ChainFactoryConfigs,
} from 'xp.network';
import { AptosAccount } from 'aptos';
import {config} from 'dotenv'; config();

const setup = async () => {

    const factory = ChainFactory(
        AppConfigs.TestNet(),
        await ChainFactoryConfigs.TestNet(),
    );

    const aptos = await factory.inner(Chain.APTOS);
    const bsc = await factory.inner(Chain.BSC);

    const signer = new AptosAccount(
        Buffer.from(process.env.SK!, 'hex')
    );

    return{
        signer,
        aptos,
        bsc
    }
}

// (async () => {
//     const {
//         signer,
//         aptos,
//         bsc
//     } = await setup();

//     console.log("signer",signer);
//     console.log("aptos",aptos);
//     console.log("bsc",bsc);
    
//     process.exit(0);
// })().catch(e => {
//     console.error(e);
//     process.exit(1);
// });