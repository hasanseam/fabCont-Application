# Connect to Docker CLI
- docker exec -it cli bash 

# Install Chaincode on Docker CLI

- peer chaincode install -n spp -v 1.0 -p github.com/hyperledger/fabric-samples/chaincode/fabcont/go

# Instantiate connections config (json)
- peer chaincode instantiate --channelID mychannel --collections-config github.com/hyperledger/fabric-samples/chaincode/fabcont/collections_config.json 


---

- The hash of private data can also only be queried by authorized users ( -> tried to output hash for unauthorized user)
