# RxJS State Management & Component Communication in Angular

A clean demo project showcasing decoupled cross-component communication using **RxJS `BehaviorSubject`** and **`Subject`** in an Angular standalone application.

---

## 🎯 Architecture Overview

This project demonstrates the core architectural differences between:
- **`BehaviorSubject` (`favorites$`)**:
  - Maintains persistent application state with an initial value (`[]`).
  - Supports **late subscribers**: when a component mounts later (such as the `<app-summary />`), it immediately receives the current state snapshot without needing to re-trigger any action.
  - Consumed cleanly in templates using Angular's `AsyncPipe`.

- **`Subject` (`toast$`)**:
  - Handles transient, point-in-time broadcast events (notifications / toasts).
  - Has no memory: late subscribers do not receive past notifications.
  - Subscribed to in `<app-toast />` with auto-dismiss timers and `ChangeDetectorRef.markForCheck()`.

---

## 🧩 Components

1. **`State` (`src/app/services/state.ts`)**:
   - Centralized singleton service holding state and event streams.
   - Encapsulates private subjects (`favoritesSubject`, `toastSubject`) while exposing read-only observables (`favorites$`, `toast$`).
   - `toggleFavorite(item: string)` adds/removes items immutably using array spreading and filtering.

2. **`Navbar` (`src/app/components/navbar/navbar.ts`)**:
   - Displays brand header and reactive favorites count badge powered by `AsyncPipe`.

3. **`ItemList` (`src/app/components/item-list/item-list.ts`)**:
   - Lists available properties with dynamic action buttons (`Add to Favorites` vs `Remove`).

4. **`Toast` (`src/app/components/toast/toast.ts`)**:
   - Fixed, floating notification banner reacting to `toast$` events.

5. **`Summary` (`src/app/components/summary/summary.ts`)**:
   - Conditionally toggled component (`@if (showSummary)`) demonstrating late-subscription data reception from `BehaviorSubject`.

---

## 🚀 How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   ng serve
   ```

3. Open your browser at `http://localhost:4200/`.
