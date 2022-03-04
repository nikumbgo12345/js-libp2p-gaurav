import { MESSAGE_TYPE_LOOKUP } from '../message/index.js'
import type { SendingQueryEvent, PeerResponseEvent, MessageType, DialingPeerEvent, AddingPeerEvent, ValueEvent, ProviderEvent, QueryErrorEvent, FinalPeerEvent } from '@libp2p/interfaces/dht'
import type { PeerData } from '@libp2p/interfaces/peer-data'
import type { PeerId } from '@libp2p/interfaces/peer-id'
import type { Libp2pRecord } from '@libp2p/record'

const MESSAGE_NAMES = [
  'PUT_VALUE',
  'GET_VALUE',
  'ADD_PROVIDER',
  'GET_PROVIDERS',
  'FIND_NODE',
  'PING'
]

export interface QueryEventFields {
  to: PeerId
  type: MessageType
}

export function sendingQueryEvent (fields: QueryEventFields): SendingQueryEvent {
  return {
    ...fields,
    name: 'SENDING_QUERY',
    type: 0,
    // @ts-expect-error cannot look up values like this
    messageName: MESSAGE_TYPE_LOOKUP[fields.type],
    messageType: fields.type
  }
}

export interface PeerResponseEventField {
  from: PeerId
  messageType: MessageType
  closer?: PeerData[]
  providers?: PeerData[]
  record?: Libp2pRecord
}

export function peerResponseEvent (fields: PeerResponseEventField): PeerResponseEvent {
  return {
    ...fields,
    name: 'PEER_RESPONSE',
    type: 1,
    // @ts-expect-error cannot look up values like this
    messageName: MESSAGE_NAMES[fields.messageType],
    closer: (fields.closer != null) ? fields.closer : [],
    providers: (fields.providers != null) ? fields.providers : []
  }
}

export interface FinalPeerEventFields {
  from: PeerId
  peer: PeerData
}

export function finalPeerEvent (fields: FinalPeerEventFields): FinalPeerEvent {
  return {
    ...fields,
    name: 'FINAL_PEER',
    type: 2
  }
}

export interface ErrorEventFields {
  from: PeerId
  error: Error
}

export function queryErrorEvent (fields: ErrorEventFields): QueryErrorEvent {
  return {
    ...fields,
    name: 'QUERY_ERROR',
    type: 3
  }
}

export interface ProviderEventFields {
  from: PeerId
  providers: PeerData[]
}

export function providerEvent (fields: ProviderEventFields): ProviderEvent {
  return {
    ...fields,
    name: 'PROVIDER',
    type: 4
  }
}

export interface ValueEventFields {
  from: PeerId
  value: Uint8Array
}

export function valueEvent (fields: ValueEventFields): ValueEvent {
  return {
    ...fields,
    name: 'VALUE',
    type: 5
  }
}

export interface PeerEventFields {
  peer: PeerId
}

export function addingPeerEvent (fields: PeerEventFields): AddingPeerEvent {
  return {
    ...fields,
    name: 'ADDING_PEER',
    type: 6
  }
}

export interface DialingPeerEventFields {
  peer: PeerId
}

export function dialingPeerEvent (fields: DialingPeerEventFields): DialingPeerEvent {
  return {
    ...fields,
    name: 'DIALING_PEER',
    type: 7
  }
}
