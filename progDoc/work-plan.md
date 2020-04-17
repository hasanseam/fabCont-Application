Hasanaur designs a web-page that allows to query and update our
Container data base as created by Marc.

At first this corresponds to the query.js and invoke.js scripts from
fabric-samples/fabcar/javascript

We let two of this web-pages run by each user of Org1 and Org2 and try
out what happens if inconsistent state changes are submitted (or if
one peer is down and does not endorse).

Later on we add more players and rename them according to the port scenario.
The update scripts will be specialized for each player according to roles.

The container database will be extended to contain private data that
is only accessible by a subset of the players. We should demonstrate
that such private data is not accessible by other players.
