/**
 * @packageDocumentation
 *
 * We can't use PeerIds as collection keys because collection keys are compared using same-value-zero equality, so this is just a group of collections that stringifies PeerIds before storing them.
 *
 * PeerIds cache stringified versions of themselves so this should be a cheap operation.
 *
 * Tracked versions are also available which report their current size to the libp2p Metrics collector.
 *
 * @example Peer lists
 *
 * ```TypeScript
 * import { peerList } from '@libp2p/peer-collections'
 *
 * const list = peerList()
 * list.push(peerId)
 * ```
 *
 * @example Tracked peer lists
 *
 * ```TypeScript
 * import { trackedPeerList } from '@libp2p/peer-collections'
 * import { createLibp2p } from 'libp2p'
 *
 * const libp2p = await createLibp2p()
 *
 * const list = trackedPeerList({ name: 'my_metric_name', metrics: libp2p.metrics })
 * list.push(peerId)
 * ```
 *
 * @example Peer maps
 *
 * ```TypeScript
 * import { peerMap } from '@libp2p/peer-collections'
 *
 * const map = peerMap<string>()
 * map.set(peerId, 'value')
 * ```
 *
 * @example Tracked peer maps
 *
 * ```TypeScript
 * import { trackedPeerMap } from '@libp2p/peer-collections'
 * import { createLibp2p } from 'libp2p'
 *
 * const libp2p = await createLibp2p()
 *
 * const list = trackedPeerMap({ name: 'my_metric_name', metrics: libp2p.metrics })
 * map.set(peerId, 'value')
 * ```
 *
 * @example Peer sets
 *
 * ```TypeScript
 * import { peerSet } from '@libp2p/peer-collections'
 *
 * const set = peerSet()
 * set.add(peerId)
 * ```
 *
 * @example Tracked peer sets
 *
 * ```TypeScript
 * import { trackedPeerSet } from '@libp2p/peer-collections'
 * import { createLibp2p } from 'libp2p'
 *
 * const libp2p = await createLibp2p()
 *
 * const list = trackedPeerSet({ name: 'my_metric_name', metrics: libp2p.metrics })
 * map.add(peerId)
 * ```
 */

export { PeerMap, peerMap } from './map.js'
export { PeerSet, peerSet } from './set.js'
export { PeerList, peerList } from './list.js'

export { trackedPeerMap } from './tracked-map.js'
export { trackedPeerSet } from './tracked-set.js'
export { trackedPeerList } from './tracked-list.js'
