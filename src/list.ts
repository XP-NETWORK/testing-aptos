import {setup} from "./config";

export const listNfts = async (
    address: string
) => {

    const {
        factory,
        aptos,
        signer
    } = await setup();

    const nfts = factory.nftList(
        aptos,
        address
    );

    return nfts;

}

// (async () => {

//     const {
//         signer
//     } = await setup();

//     const nfts = await listNfts(
//         signer.address().toString()
//     );

//     console.log("NFTs:", nfts);
    
//     process.exit(0);
// })().catch(e => {
//     console.error(e);
//     process.exit(1)
// });