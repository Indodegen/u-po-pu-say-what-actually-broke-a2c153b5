# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Indodegen/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Indodegen/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the make.fun bounty [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5): one line of software error copy, at most 200 characters, that tells the user the brutal truth about what went wrong and makes them laugh.

## The entry

> Wrong password. The account is fine; the typing is the problem. Try again, slowly.

## Why this line

- **It names the real failure in plain words.** The password is wrong — not "something went wrong", not "an unexpected error occurred". The reader knows exactly what broke.
- **It tells the reader what to do next.** Try again, slowly. One concrete action, no guessing.
- **The twist is the joke.** The first sentence blames the password; the second clears the account and pins the fault on the typing, then "slowly" lands the punchline. It is the kind of line a user repeats to a colleague.
- **It is shippable.** Cheeky, but it never insults the user, never swears, and never embarrasses the team. It fits in a real product's error dialog as-is.
- **It is short on purpose.** 82 characters, 82 bytes — the tie-break rewards the smaller text, so every word earns its place and there is no padding.

## How it works

`main.ts` (Node 22 TypeScript) reads `entry.txt` from the same directory — all paths are resolved via `import.meta.url`, never relative paths, so it works no matter which directory it is run from. It gates the entry: exactly one line, 1–200 characters, not only whitespace. Then it writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out/`), creating the directory if needed, and prints nothing to stdout.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/broke-test-out node main.ts
cat /tmp/broke-test-out/entry.txt
```
