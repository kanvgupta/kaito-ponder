import { ponder } from "ponder:registry";
import {
  account,
} from "ponder:schema";

ponder.on("ERC20:Transfer", async ({ event, context }) => {
  console.log(event.args.from, event.args.to, event.args.amount);
  if (event.args.from.toLowerCase() === "0xeB7d383B0c77EA0Bed28b42D0C288F9071Bd8a7a".toLowerCase()) {
    await context.db
      .insert(account)
      .values({ address: event.args.to, claimedAmount: event.args.amount })
      .onConflictDoUpdate((row) => ({
        claimedAmount: row.claimedAmount + event.args.amount,
      }));
  }
});