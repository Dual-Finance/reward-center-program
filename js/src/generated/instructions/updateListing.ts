/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  UpdateListingParams,
  updateListingParamsBeet,
} from '../types/UpdateListingParams'

/**
 * @category Instructions
 * @category UpdateListing
 * @category generated
 */
export type UpdateListingInstructionArgs = {
  updateListingParams: UpdateListingParams
}
/**
 * @category Instructions
 * @category UpdateListing
 * @category generated
 */
const updateListingStruct = new beet.BeetArgsStruct<
  UpdateListingInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['updateListingParams', updateListingParamsBeet],
  ],
  'UpdateListingInstructionArgs'
)
/**
 * Accounts required by the _updateListing_ instruction
 *
 * @property [_writable_, **signer**] wallet
 * @property [_writable_] listing
 * @property [] rewardCenter
 * @property [] auctionHouse
 * @property [] metadata
 * @property [] tokenAccount
 * @property [] auctionHouseProgram
 * @category Instructions
 * @category UpdateListing
 * @category generated
 */
export type UpdateListingInstructionAccounts = {
  wallet: web3.PublicKey
  listing: web3.PublicKey
  rewardCenter: web3.PublicKey
  auctionHouse: web3.PublicKey
  metadata: web3.PublicKey
  tokenAccount: web3.PublicKey
  auctionHouseProgram: web3.PublicKey
}

const updateListingInstructionDiscriminator = [
  192, 174, 210, 68, 116, 40, 242, 253,
]

/**
 * Creates a _UpdateListing_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateListing
 * @category generated
 */
export function createUpdateListingInstruction(
  accounts: UpdateListingInstructionAccounts,
  args: UpdateListingInstructionArgs
) {
  const {
    wallet,
    listing,
    rewardCenter,
    auctionHouse,
    metadata,
    tokenAccount,
    auctionHouseProgram,
  } = accounts

  const [data] = updateListingStruct.serialize({
    instructionDiscriminator: updateListingInstructionDiscriminator,
    ...args,
  })
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
      pubkey: metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: tokenAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouseProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'rwdLstiU8aJU1DPdoPtocaNKApMhCFdCg283hz8dd3u'
    ),
    keys,
    data,
  })
  return ix
}
