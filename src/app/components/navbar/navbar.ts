import { Component } from "@angular/core";
import { State } from "../../services/state";
import { AsyncPipe } from "@angular/common";

@Component({
  imports: [AsyncPipe],
  selector: "app-navbar",
  styles: `
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 32px;
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
      border-bottom: 1px solid #eaeaea;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand h2 {
      font-size: 20px;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }

    .brand-icon {
      font-size: 22px;
    }

    .favorites-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #f1f5f9;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      color: #334155;
    }

    .count-pill {
      background: #6366f1;
      color: white;
      min-width: 22px;
      height: 22px;
      padding: 0 6px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
    }
  `,
  template: `
    <nav class="navbar">
      <div class="brand">
        <span class="brand-icon">🏡</span>
        <h2>Homes Explorer</h2>
      </div>
      <div class="favorites-badge">
        <span>⭐ Favorites</span>
        <span class="count-pill">{{ (favorites$ | async)?.length ?? 0 }}</span>
      </div>
    </nav>
  `,
})
export class Navbar {
  constructor(private state: State) {}
  favorites$ = this.state.favorites$;
}
