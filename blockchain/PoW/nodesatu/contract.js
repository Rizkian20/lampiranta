var abi_sm1 = [{"inputs":[],"name":"getsensorU1","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getsensorU2","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getsensorU3","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getsensorU4","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_sensorU1","type":"string"}],"name":"setsensorU1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_sensorU2","type":"string"}],"name":"setsensorU2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_sensorU3","type":"string"}],"name":"setsensorU3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_sensorU4","type":"string"}],"name":"setsensorU4","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var bytecode_sm1 = '0x608060405234801561001057600080fd5b50610974806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806371797b541161005b57806371797b54146100ff578063767cb4701461011b578063b7a8b2f214610139578063df67a1101461015757610088565b806307d7377a1461008d5780630da63672146100a9578063120f1369146100c75780632aaa7806146100e3575b600080fd5b6100a760048036038101906100a29190610563565b610175565b005b6100b1610188565b6040516100be9190610634565b60405180910390f35b6100e160048036038101906100dc9190610563565b61021a565b005b6100fd60048036038101906100f89190610563565b61022d565b005b61011960048036038101906101149190610563565b610240565b005b610123610253565b6040516101309190610634565b60405180910390f35b6101416102e5565b60405161014e9190610634565b60405180910390f35b61015f610377565b60405161016c9190610634565b60405180910390f35b8060019081610184919061086c565b5050565b60606003805461019790610685565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610685565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b5050505050905090565b8060039081610229919061086c565b5050565b806002908161023c919061086c565b5050565b806000908161024f919061086c565b5050565b60606001805461026290610685565b80601f016020809104026020016040519081016040528092919081815260200182805461028e90610685565b80156102db5780601f106102b0576101008083540402835291602001916102db565b820191906000526020600020905b8154815290600101906020018083116102be57829003601f168201915b5050505050905090565b6060600080546102f490610685565b80601f016020809104026020016040519081016040528092919081815260200182805461032090610685565b801561036d5780601f106103425761010080835404028352916020019161036d565b820191906000526020600020905b81548152906001019060200180831161035057829003601f168201915b5050505050905090565b60606002805461038690610685565b80601f01602080910402602001604051908101604052809291908181526020018280546103b290610685565b80156103ff5780601f106103d4576101008083540402835291602001916103ff565b820191906000526020600020905b8154815290600101906020018083116103e257829003601f168201915b5050505050905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61047082610427565b810181811067ffffffffffffffff8211171561048f5761048e610438565b5b80604052505050565b60006104a2610409565b90506104ae8282610467565b919050565b600067ffffffffffffffff8211156104ce576104cd610438565b5b6104d782610427565b9050602081019050919050565b82818337600083830152505050565b6000610506610501846104b3565b610498565b90508281526020810184848401111561052257610521610422565b5b61052d8482856104e4565b509392505050565b600082601f83011261054a5761054961041d565b5b813561055a8482602086016104f3565b91505092915050565b60006020828403121561057957610578610413565b5b600082013567ffffffffffffffff81111561059757610596610418565b5b6105a384828501610535565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105e65780820151818401526020810190506105cb565b838111156105f5576000848401525b50505050565b6000610606826105ac565b61061081856105b7565b93506106208185602086016105c8565b61062981610427565b840191505092915050565b6000602082019050818103600083015261064e81846105fb565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061069d57607f821691505b6020821081036106b0576106af610656565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026107187fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826106db565b61072286836106db565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061076961076461075f8461073a565b610744565b61073a565b9050919050565b6000819050919050565b6107838361074e565b61079761078f82610770565b8484546106e8565b825550505050565b600090565b6107ac61079f565b6107b781848461077a565b505050565b5b818110156107db576107d06000826107a4565b6001810190506107bd565b5050565b601f821115610820576107f1816106b6565b6107fa846106cb565b81016020851015610809578190505b61081d610815856106cb565b8301826107bc565b50505b505050565b600082821c905092915050565b600061084360001984600802610825565b1980831691505092915050565b600061085c8383610832565b9150826002028217905092915050565b610875826105ac565b67ffffffffffffffff81111561088e5761088d610438565b5b6108988254610685565b6108a38282856107df565b600060209050601f8311600181146108d657600084156108c4578287015190505b6108ce8582610850565b865550610936565b601f1984166108e4866106b6565b60005b8281101561090c578489015182556001820191506020850194506020810190506108e7565b868310156109295784890151610925601f891682610832565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220d483e2233314e12baf315477075ca694b819faf65c783e737e3b5a119ece9ccb64736f6c634300080f0033'
var abi_sm2 = [{"inputs":[],"name":"getsensorsuhuair","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getsensorsuhuruang","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_sensorsuhuair","type":"string"}],"name":"setsensorsuhuair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_sensorsuhuruang","type":"string"}],"name":"setsensorsuhuruang","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var bytecode_sm2 = '0x608060405234801561001057600080fd5b5061077a806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806375a68af014610051578063a135ff5f1461006d578063c725d1ee1461008b578063fa4e9f46146100a9575b600080fd5b61006b60048036038101906100669190610369565b6100c5565b005b6100756100d8565b604051610082919061043a565b60405180910390f35b61009361016a565b6040516100a0919061043a565b60405180910390f35b6100c360048036038101906100be9190610369565b6101fc565b005b80600190816100d49190610672565b5050565b6060600080546100e79061048b565b80601f01602080910402602001604051908101604052809291908181526020018280546101139061048b565b80156101605780601f1061013557610100808354040283529160200191610160565b820191906000526020600020905b81548152906001019060200180831161014357829003601f168201915b5050505050905090565b6060600180546101799061048b565b80601f01602080910402602001604051908101604052809291908181526020018280546101a59061048b565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b5050505050905090565b806000908161020b9190610672565b5050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102768261022d565b810181811067ffffffffffffffff821117156102955761029461023e565b5b80604052505050565b60006102a861020f565b90506102b4828261026d565b919050565b600067ffffffffffffffff8211156102d4576102d361023e565b5b6102dd8261022d565b9050602081019050919050565b82818337600083830152505050565b600061030c610307846102b9565b61029e565b90508281526020810184848401111561032857610327610228565b5b6103338482856102ea565b509392505050565b600082601f8301126103505761034f610223565b5b81356103608482602086016102f9565b91505092915050565b60006020828403121561037f5761037e610219565b5b600082013567ffffffffffffffff81111561039d5761039c61021e565b5b6103a98482850161033b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103ec5780820151818401526020810190506103d1565b838111156103fb576000848401525b50505050565b600061040c826103b2565b61041681856103bd565b93506104268185602086016103ce565b61042f8161022d565b840191505092915050565b600060208201905081810360008301526104548184610401565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806104a357607f821691505b6020821081036104b6576104b561045c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261051e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826104e1565b61052886836104e1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061056f61056a61056584610540565b61054a565b610540565b9050919050565b6000819050919050565b61058983610554565b61059d61059582610576565b8484546104ee565b825550505050565b600090565b6105b26105a5565b6105bd818484610580565b505050565b5b818110156105e1576105d66000826105aa565b6001810190506105c3565b5050565b601f821115610626576105f7816104bc565b610600846104d1565b8101602085101561060f578190505b61062361061b856104d1565b8301826105c2565b50505b505050565b600082821c905092915050565b60006106496000198460080261062b565b1980831691505092915050565b60006106628383610638565b9150826002028217905092915050565b61067b826103b2565b67ffffffffffffffff8111156106945761069361023e565b5b61069e825461048b565b6106a98282856105e5565b600060209050601f8311600181146106dc57600084156106ca578287015190505b6106d48582610656565b86555061073c565b601f1984166106ea866104bc565b60005b82811015610712578489015182556001820191506020850194506020810190506106ed565b8683101561072f578489015161072b601f891682610638565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220e9987bf564d5001effdcc5d27590a88b61301d6b1d9c0dbdbbb53716321f7adc64736f6c634300080f0033'
var deploysm1 = { from: eth.coinbase, data: bytecode_sm1, gas: 2700001 }
var deploysm2 = { from: eth.coinbase, data: bytecode_sm2, gas: 2700001 }

var sm1 = eth.contract(abi_sm1)
var sm2 = eth.contract(abi_sm2)

var sm1new = sm1.new(deploysm1)
var sm2new = sm2.new(deploysm2)
