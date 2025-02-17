[![libp2p.io](https://img.shields.io/badge/project-libp2p-yellow.svg?style=flat-square)](http://libp2p.io/)
[![Discuss](https://img.shields.io/discourse/https/discuss.libp2p.io/posts.svg?style=flat-square)](https://discuss.libp2p.io)
[![codecov](https://img.shields.io/codecov/c/github/libp2p/js-libp2p.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p)
[![CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/main.yml?branch=main\&style=flat-square)](https://github.com/libp2p/js-libp2p/actions/workflows/main.yml?query=branch%3Amain)

> Implementation of Ping Protocol

# About

The ping service implements the [libp2p ping spec](https://github.com/libp2p/specs/blob/master/ping/ping.md) allowing you to make a latency measurement to a remote peer.

## Example

```typescript
import { createLibp2p } from 'libp2p'
import { ping } from '@libp2p/ping'
import { multiaddr } from '@multiformats/multiaddr'

const node = await createLibp2p({
  services: {
    ping: ping()
  }
})

const rtt = await node.services.ping.ping(multiaddr('/ip4/...'))

console.info(rtt)
```

# Install

```console
$ npm i @libp2p/ping
```

## Browser `<script>` tag

Loading this module through a script tag will make it's exports available as `Libp2pPing` in the global namespace.

```html
<script src="https://unpkg.com/@libp2p/ping/dist/index.min.js"></script>
```

# API Docs

- <https://libp2p.github.io/js-libp2p/modules/_libp2p_ping.html>

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
