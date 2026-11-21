# Design and verification notes

## 1. Relax

A sleeping passenger, cool glass, a long hush, and the carriage's gentle rocking make the journey feel sheltered. Snow closing over the tracks reinforces the sense of being carried safely home while the outside world grows quiet.

## 2. Show, don't instruct

The entry describes the passenger's experience without giving directions or advice. The feeling of safety emerges from the train's rhythm, the shelter of the carriage, and the promise of home rather than from any claim about how the reader should feel.

## 3. Craft

The isolated clacks and intervening hush establish a measured rail rhythm. Short lines move from immediate sensations to the glacier and back to the carriage, while the final paired sentences let human and geological motion settle beside each other.

## 4. Dwarfing scale

A glacier carrying one blue stone toward an unseen sea dwarfs the overnight journey in both distance and duration. Its motion continuing after the passenger reaches home places a familiar human arrival inside an immense, patient span of geological time.

## 5. Freshness

This night-train variant joins an intimate journey home to the slow passage of a single stone through a glacier. Snow, glass, rail sounds, and the blue stone keep the deep-time image concrete instead of relying on a stock wellness affirmation.

## Verification

The night-train variant was run twice with `node main.ts` on Node.js v22.23.5, using two new, distinct output directories outside the repository. Each run created only `entry.txt`. The outputs were byte-identical, decoded as strict UTF-8, contained non-whitespace text, and had no trailing newline.

- Runs: 2
- Length: 279 Unicode code points, within the required 1..280 range
- Size: 279 bytes
- SHA-256: `a2fc1df37aa071a7407b70538409e3257e6a60aedcc7e93533d5bb74000ca586`
- Implementation: deterministic, standard library only, with no network access
- Repository hygiene: generated `entry.txt` files remained outside the repository
