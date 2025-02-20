import { createConfig } from "ponder";
import { http } from "viem";
import { erc20ABI } from "./abis/erc20ABI";

export default createConfig({
  networks: {
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
      maxRequestsPerSecond: 300,
    },
  },
  contracts: {
    ERC20: {
      network: "base",
      abi: erc20ABI,
      address: "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
      startBlock: 26620977,
    },
  },
});
