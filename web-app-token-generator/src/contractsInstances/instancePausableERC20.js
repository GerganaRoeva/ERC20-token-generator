const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "totalSupply_",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "decimals_",
        "type": "uint8"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const bytecode =  "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a082311161009757806395d89b411161006657806395d89b4114610266578063a9059cbb14610284578063dd62ed3e146102b4578063f2fde38b146102e4576100f5565b806370a08231146101f0578063715018a6146102205780638456cb591461022a5780638da5cb5b14610248576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce567146101965780633f4ba83a146101b45780635c975abb146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610300565b60405161010f91906111f1565b60405180910390f35b610132600480360381019061012d91906112ac565b610392565b60405161013f9190611307565b60405180910390f35b6101506103f7565b60405161015d9190611331565b60405180910390f35b610180600480360381019061017b919061134c565b610401565b60405161018d9190611307565b60405180910390f35b61019e610472565b6040516101ab91906113bb565b60405180910390f35b6101bc610489565b6040516101c99190611307565b60405180910390f35b6101da610556565b6040516101e79190611307565b60405180910390f35b61020a600480360381019061020591906113d6565b61056d565b6040516102179190611331565b60405180910390f35b6102286105b5565b005b610232610636565b60405161023f9190611307565b60405180910390f35b610250610704565b60405161025d9190611412565b60405180910390f35b61026e61072e565b60405161027b91906111f1565b60405180910390f35b61029e600480360381019061029991906112ac565b6107c0565b6040516102ab9190611307565b60405180910390f35b6102ce60048036038101906102c9919061142d565b610825565b6040516102db9190611331565b60405180910390f35b6102fe60048036038101906102f991906113d6565b6108ac565b005b60606002805461030f9061149c565b80601f016020809104026020016040519081016040528092919081815260200182805461033b9061149c565b80156103885780601f1061035d57610100808354040283529160200191610388565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b5050505050905090565b600061039c610556565b156103dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d39061151a565b60405180910390fd5b60003390506103ec81858561099d565b600191505092915050565b6000600554905090565b600061040b610556565b1561044b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104429061151a565b60405180910390fd5b600033905061045b858285610b7a565b610466858585610c06565b60019150509392505050565b6000600460009054906101000a900460ff16905090565b6000610493610556565b6104d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c990611586565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166104f1610704565b73ffffffffffffffffffffffffffffffffffffffff1614610547576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053e906115f2565b60405180910390fd5b61054f610e71565b6001905090565b6000600660149054906101000a900460ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff166105d4610704565b73ffffffffffffffffffffffffffffffffffffffff161461062a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610621906115f2565b60405180910390fd5b6106346000610f81565b565b6000610640610556565b15610680576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106779061151a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1661069f610704565b73ffffffffffffffffffffffffffffffffffffffff16146106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec906115f2565b60405180910390fd5b6106fd611047565b6001905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606003805461073d9061149c565b80601f01602080910402602001604051908101604052809291908181526020018280546107699061149c565b80156107b65780601f1061078b576101008083540402835291602001916107b6565b820191906000526020600020905b81548152906001019060200180831161079957829003601f168201915b5050505050905090565b60006107ca610556565b1561080a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108019061151a565b60405180910390fd5b600033905061081a818585610c06565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b3373ffffffffffffffffffffffffffffffffffffffff166108cb610704565b73ffffffffffffffffffffffffffffffffffffffff1614610921576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610918906115f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610991576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098890611684565b60405180910390fd5b61099a81610f81565b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0490611716565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a74906117a8565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b0991906117f7565b925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b6d9190611331565b60405180910390a3505050565b6000610b868484610825565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c005781811015610bf2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be990611899565b60405180910390fd5b610bff848484840361099d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6d9061192b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ce6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdd906119bd565b60405180910390fd5b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6390611a4f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dff91906117f7565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e639190611331565b60405180910390a350505050565b610e79610556565b610eb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eaf90611586565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16610ed7610704565b73ffffffffffffffffffffffffffffffffffffffff1614610f2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f24906115f2565b60405180910390fd5b6000600660146101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051610f779190611412565b60405180910390a1565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61104f610556565b1561108f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110869061151a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166110ae610704565b73ffffffffffffffffffffffffffffffffffffffff1614611104576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fb906115f2565b60405180910390fd5b6001600660146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2583360405161114e9190611412565b60405180910390a1565b600081519050919050565b600082825260208201905092915050565b60005b83811015611192578082015181840152602081019050611177565b838111156111a1576000848401525b50505050565b6000601f19601f8301169050919050565b60006111c382611158565b6111cd8185611163565b93506111dd818560208601611174565b6111e6816111a7565b840191505092915050565b6000602082019050818103600083015261120b81846111b8565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061124382611218565b9050919050565b61125381611238565b811461125e57600080fd5b50565b6000813590506112708161124a565b92915050565b6000819050919050565b61128981611276565b811461129457600080fd5b50565b6000813590506112a681611280565b92915050565b600080604083850312156112c3576112c2611213565b5b60006112d185828601611261565b92505060206112e285828601611297565b9150509250929050565b60008115159050919050565b611301816112ec565b82525050565b600060208201905061131c60008301846112f8565b92915050565b61132b81611276565b82525050565b60006020820190506113466000830184611322565b92915050565b60008060006060848603121561136557611364611213565b5b600061137386828701611261565b935050602061138486828701611261565b925050604061139586828701611297565b9150509250925092565b600060ff82169050919050565b6113b58161139f565b82525050565b60006020820190506113d060008301846113ac565b92915050565b6000602082840312156113ec576113eb611213565b5b60006113fa84828501611261565b91505092915050565b61140c81611238565b82525050565b60006020820190506114276000830184611403565b92915050565b6000806040838503121561144457611443611213565b5b600061145285828601611261565b925050602061146385828601611261565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806114b457607f821691505b602082108114156114c8576114c761146d565b5b50919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000611504601083611163565b915061150f826114ce565b602082019050919050565b60006020820190508181036000830152611533816114f7565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b6000611570601483611163565b915061157b8261153a565b602082019050919050565b6000602082019050818103600083015261159f81611563565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006115dc602083611163565b91506115e7826115a6565b602082019050919050565b6000602082019050818103600083015261160b816115cf565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061166e602683611163565b915061167982611612565b604082019050919050565b6000602082019050818103600083015261169d81611661565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611700602483611163565b915061170b826116a4565b604082019050919050565b6000602082019050818103600083015261172f816116f3565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611792602283611163565b915061179d82611736565b604082019050919050565b600060208201905081810360008301526117c181611785565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061180282611276565b915061180d83611276565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611842576118416117c8565b5b828201905092915050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611883601d83611163565b915061188e8261184d565b602082019050919050565b600060208201905081810360008301526118b281611876565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611915602583611163565b9150611920826118b9565b604082019050919050565b6000602082019050818103600083015261194481611908565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006119a7602383611163565b91506119b28261194b565b604082019050919050565b600060208201905081810360008301526119d68161199a565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611a39602683611163565b9150611a44826119dd565b604082019050919050565b60006020820190508181036000830152611a6881611a2c565b905091905056fea2646970667358221220131f4a4a40e0e5e2ee977ed663470e63b931cc22fde658d3e51161eb11a0edee64736f6c634300080c0033";

export {abiPausable, bytecodePausable};
