import web3 from "./web3";

// Aici avem adresa contractului
export const address = "0x12B178Fc2530E3E6657293f213dD016F2f1E7046";

// Interfata cu functiile care se vor implementa ulterior in solidity
export const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "course",
        type: "string",
      },
      {
        name: "email",
        type: "string",
      },
    ],
    name: "addcert",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "coladd",
        type: "address",
      },
      {
        name: "name",
        type: "string",
      },
    ],
    name: "addCollege",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "added",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "certs",
    outputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "course",
        type: "string",
      },
      {
        name: "email",
        type: "string",
      },
      {
        name: "sender",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "col",
        type: "address",
      },
    ],
    name: "checkcoll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "id",
        type: "uint256",
      },
    ],
    name: "getcert",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getid",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

// Exportam contractul pentru a putea fi folosit in App.js pentru a gestiona functiile
export default new web3.eth.Contract(abi, address);
