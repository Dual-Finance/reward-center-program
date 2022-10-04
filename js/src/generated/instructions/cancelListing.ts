/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { CancelListingParams, cancelListingParamsBeet } from '../types/CancelListingParams';

/**
 * @category Instructions
 * @category CancelListing
 * @category generated
 */
export type CancelListingInstructionArgs = {
  cancelListingParams: CancelListingParams;
};
/**
 * @category Instructions
 * @category CancelListing
 * @category generated
 */
const cancelListingStruct = new beet.BeetArgsStruct<
  CancelListingInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['cancelListingParams', cancelListingParamsBeet],
  ],
  'CancelListingInstructionArgs',
);
/**
 * Accounts required by the _cancelListing_ instruction
 *
 * @property [_writable_, **signer**] wallet
 * @property [_writable_] listing
 * @property [] metadata
 * @property [_writable_] tokenAccount
 * @property [] tokenMint
 * @property [] authority
 * @property [] rewardCenter
 * @property [] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] tradeState
 * @property [] ahAuctioneerPda
 * @property [] auctionHouseProgram
 * @category Instructions
 * @category CancelListing
 * @category generated
 */
export type CancelListingInstructionAccounts = {
  wallet: web3.PublicKey;
  listing: web3.PublicKey;
  metadata: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  tokenMint: web3.PublicKey;
  authority: web3.PublicKey;
  rewardCenter: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  tradeState: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
  auctionHouseProgram: web3.PublicKey;
};

const cancelListingInstructionDiscriminator = [41, 183, 50, 232, 230, 233, 157, 70];

/**
 * Creates a _CancelListing_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CancelListing
 * @category generated
 */
export function createCancelListingInstruction(
  accounts: CancelListingInstructionAccounts,
  args: CancelListingInstructionArgs,
) {
  const {
    wallet,
    listing,
    metadata,
    tokenAccount,
    tokenMint,
    authority,
    rewardCenter,
    auctionHouse,
    auctionHouseFeeAccount,
    tradeState,
    ahAuctioneerPda,
    auctionHouseProgram,
  } = accounts;

  const [data] = cancelListingStruct.serialize({
    instructionDiscriminator: cancelListingInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: wallet,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: listing,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: rewardCenter,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouse,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouseFeeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: ahAuctioneerPda,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouseProgram,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('rwdLstiU8aJU1DPdoPtocaNKApMhCFdCg283hz8dd3u'),
    keys,
    data,
  });
  return ix;
}
