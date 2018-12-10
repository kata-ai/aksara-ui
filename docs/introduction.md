# Introduction

**Wicara** (previously kata-kit) is an implementation of Aksara using the React framework. It is the true implementation of Aksara in raw code form, designed to communicate with users and bring delightful experiences. Wicara is the designation for Aksara React components.

**Note: Wicara is still in beta.**

## Leading Design Goals (North Star)

These goals guide us on what to strive for when building components for Wicara.

### Clear and transparent.

- Use component/prop names that are as clear and standard as possible.
- Strive for component + prop names no longer than 2-3 words.
- Use the onVerb naming structure for event handlers.
- Keep component/prop names concise without being clever.
- When in doubt, look at other component libraries for inspiration.

### Modular and reusable.

- Components should do one thing and do it well.
- Strive for a modular component architecture. Prefer importing existing components with similar uses rather than reinventing the wheel.
- Consider leveraging React features + patterns like render/children props for enhanced modularity + easy reuse of components.
- Strive for a cleaner API. Don’t expose underlying internals in the API unless necessary.
- Use the theming API to ensure components can be restyled outside of the library itself.

### Accessibility comes first.

- Components should be designed with accessibility in mind. Make sure the fancy features doesn’t break accessibility. (Morten Rand-Hendriksen)
- Strive for an accessible color contrast ratio. Aim for a contrast rating higher than “AA” and “AA Large”. (Check your color contrast [here](https://colorable.jxnblk.com/))
- Make sure components work well with screen readers, as well as for users with limited access to keyboards and mice.
