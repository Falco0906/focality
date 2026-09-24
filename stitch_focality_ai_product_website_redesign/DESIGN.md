---
name: Warm Editorial Tech
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#464742'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#777871'
  outline-variant: '#c7c7c0'
  surface-tint: '#5f5e5d'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1c1a'
  on-primary-container: '#858382'
  inverse-primary: '#c9c6c4'
  secondary: '#605e57'
  on-secondary: '#ffffff'
  secondary-container: '#e3dfd6'
  on-secondary-container: '#64635b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1c14'
  on-tertiary-container: '#878479'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e0'
  primary-fixed-dim: '#c9c6c4'
  on-primary-fixed: '#1c1c1a'
  on-primary-fixed-variant: '#474745'
  secondary-fixed: '#e5e2d9'
  secondary-fixed-dim: '#c9c6bd'
  on-secondary-fixed: '#1c1c16'
  on-secondary-fixed-variant: '#484740'
  tertiary-fixed: '#e7e2d5'
  tertiary-fixed-dim: '#cac6ba'
  on-tertiary-fixed: '#1d1c14'
  on-tertiary-fixed-variant: '#49473e'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  canvas-base: '#FAF9F5'
  surface-white: '#FFFFFF'
  surface-subtle: '#F2F0E8'
  border-hairline: '#E8E6DF'
  border-strong: '#D1CEC4'
  text-primary: '#111110'
  text-secondary: '#57564F'
  text-tertiary: '#8C897E'
  accent-signal: '#D96A38'
  accent-positive: '#2F6846'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a calm, intellectually confident, and technical editorial presence for an AI product. Rather than relying on transient tropes of artificial intelligence—such as neon gradients, iridescent orbs, or fluorescent purple glass—this system treats AI as rigorous cognitive infrastructure. The aesthetic bridges the disciplined typography of literary journals with the surgical precision of modern developer tools.

The design movement combines **Minimalism** with an **Editorial Tactile** sensitivity. Visual gravity is achieved through meticulous layout ratios, deliberate negative space, razor-sharp hairline borders, and authoritative typographic contrast. Interfaces evoke quiet focus, transparency, and enduring utility.

## Colors

The palette rests upon an intentional temperature foundation: a warm ivory canvas (`#FAF9F5`) balanced by stark, near-black slate typography (`#111110`). Pure white (`#FFFFFF`) is reserved exclusively as an elevated layer for interactive cards, dialogs, and active inputs to establish crisp architectural hierarchy against the tinted canvas.

- **Primary (`#111110`):** Charcoal slate. Drives primary typography, solid micro-interaction states, and high-contrast badges.
- **Secondary (`#57564F`):** Deep warm stone. Dedicated to supporting body copy, meta timestamps, and deactivated states.
- **Tertiary (`#8C897E`):** Neutral silt. Reserved for placeholder text, disabled boundaries, and secondary label icons.
- **Neutral (`#FAF9F5`):** The foundational tinted ivory sheet. Provides visual warmth that reduces glare and prevents clinical sterility.

Functional accents remain restrained: `accent-signal` (a deep burnt terracotta) conveys live states, caution, or attention without visual agitation, while `accent-positive` (deep pine) handles verification and positive confirmations. Borders leverage `#E8E6DF` to create hairline 1px divisions that frame content with architectural precision.

## Typography

The typography leverages an intentional dialectic between humanist editorial tradition and technical modernism:

- **Display & Large Headlines (`Newsreader`):** Utilized for landing hero statements, deep thinking prompts, narrative chapter headings, and key qualitative insights. Set in lower weights with tight tracking to evoke literary prestige.
- **System Interface & Body (`Geist`):** Delivers neutral, low-friction utilitarian clarity for data tables, operational commands, AI outputs, and interactive controls.
- **Code & Metadata (`JetBrains Mono`):** Applied to telemetry metrics, token usage counters, model parameter readouts, and raw data dumps.

Maintain strict adherence to vertical proportions. Editorial body sections should avoid line lengths past 68 characters to preserve effortless scanning.

## Layout & Spacing

The layout is grounded in a 12-column responsive fluid grid with generous structural margins that create a natural proscenium around technical tooling and thought spaces.

- **Breakpoints:**
  - Mobile: `< 640px` (4-column grid, fluid margin of `1.25rem`, gutter `1rem`).
  - Tablet: `640px – 1024px` (8-column grid, margin `2rem`, gutter `1.25rem`).
  - Desktop: `> 1024px` (12-column grid, max-content container width `1280px` centered, canvas margin `3rem`).

Whitespace must remain asymmetrical and intentional: large spans of vertical padding (`space-xl` and above) bracket conceptual headings, whereas compact data dashboards and prompt orchestrators compress into tight, dense clusters using `space-xs` and `space-sm`. Hairline horizontal rules (`1px solid #E8E6DF`) are preferred over deep gutters to demarcate operational panels.

## Elevation & Depth

Visual hierarchy is constructed through **Tonal Layers** and **Low-Contrast Outlines** rather than physical drop shadows:

1. **Canvas Layer (`#FAF9F5`):** The structural viewport foundation. Completely flat and non-interactive.
2. **Surface Tier (`#FFFFFF`):** Work surfaces, document boards, prompt canvases, and code sandboxes. Differentiated from the canvas using a crisp 1px hairline border (`#E8E6DF`).
3. **Floating Overlays & Modals (`#FFFFFF`):** Command palettes, context menus, and contextual inspector trays. Elevated exclusively by a razor-thin border (`#D1CEC4`) accompanied by an ultra-diffused, ambient shadow: `0 8px 30px rgba(17, 17, 16, 0.04)`.

Glass effects and blurred backdrops are explicitly forbidden, except for a subtle sticky navigation header overlay (`rgba(250, 249, 245, 0.85)` with `backdrop-filter: blur(8px)`).

## Shapes

The design system embraces a **Soft (Level 1)** geometric silhouette. Radii are kept modest and restrained to reflect technical precision:

- **Standard Buttons, Inputs, & Badges:** `0.25rem` (4px).
- **Cards, Panels, & Code Blocks:** `rounded-lg` (`0.5rem` / 8px).
- **Floating Modals & Command Palettes:** `rounded-xl` (`0.75rem` / 12px).
- **Pills/Circles:** Strictly reserved for status dots (`w-2 h-2 rounded-full`) and user avatar indicators. Form controls and primary buttons must never use fully circular pill shapes.

## Components

### Buttons
- **Primary:** Solid `#111110` background, `#FAF9F5` text, 4px border radius. Subtle hover shift to `#27272A`. Zero elevation shadows.
- **Secondary:** Surface `#FFFFFF` with hairline border `1px solid #E8E6DF`, text `#111110`. Hover transitions to `#F2F0E8` border and background.
- **Ghost/Tertiary:** No background, no border, text `#57564F`. Hover brings text to `#111110` with background `#F2F0E8`.
- **Sizing:** Compact padding (`px-3 py-1.5` for standard, `px-2 py-1` for micro).

### Chips & Badges
- Constructed with `label-caps` typography, `px-2 py-0.5`, rounded 4px.
- Background tinted to `#F2F0E8` with a 1px border of `#E8E6DF`. Text is set to `#57564F`.
- Live status badges feature an inline 6px circular dot using `accent-signal` or `accent-positive`.

### Inputs & Textareas
- Crisp `#FFFFFF` surface background framed by `1px solid #E8E6DF`.
- Text set to `#111110`, placeholder to `#8C897E`.
- Focus state: Replaces border with `#111110` (no colored glow rings or thick outlines).

### Cards & Grouping Containers
- Base `#FFFFFF` background encased in `1px solid #E8E6DF`, corner radius `8px`.
- Card headers feature an optional bottom hairline divider (`#E8E6DF`) to segregate metadata controls from primary content.

### Checkboxes & Radios
- Square 16px boxes with 3px border radius for checkboxes; 16px circular for radios.
- Unchecked: `#FFFFFF` fill with `1.5px solid #D1CEC4`.
- Checked: `#111110` fill with white indicator tick or dot.

### Specialized AI Product Components
- **Prompt Composer:** Integrated multiline input anchored to the bottom screen edge, rendered in `#FFFFFF` with a structural `#E8E6DF` outline, accompanied by keyboard shortcuts styled in `code-inline` badges.
- **Model Parameter Slider:** Minimalist 2px horizontal track in `#E8E6DF` with a square 12px scrubber handle in `#111110`. Numeric readouts accompany labels in `JetBrains Mono`.
- **Response Stream Container:** Typography switches rhythm between editorial narrative (`body-lg`) and structured monospace execution blocks with copy actions embedded in the hairline header.