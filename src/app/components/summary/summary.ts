import { Component } from "@angular/core";
import { State } from "../../services/state";
import { AsyncPipe } from "@angular/common";

@Component({
  imports: [AsyncPipe],
  selector: "app-summary",
  styles: `
    .summary-card {
      margin-top: 20px;
      max-width: 520px;
      background: #f8fafc;
      border: 2px dashed #cbd5e1;
      border-radius: 12px;
      padding: 20px;
      animation: fadeIn 0.25s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .summary-title {
      font-size: 16px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .fav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .fav-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      font-size: 14px;
      font-weight: 600;
      color: #334155;
    }

    .empty-state {
      color: #64748b;
      font-size: 14px;
      font-style: italic;
      margin: 0;
    }
  `,
  template: `
    <div class="summary-card">
      <h4 class="summary-title">
        <span>📋</span>
        <span>Saved Favorites Summary (Late Subscriber)</span>
      </h4>

      <ul class="fav-list">
        @for (fav of favorites$ | async; track fav) {
          <li class="fav-item">
            <span>⭐ {{ fav }}</span>
            <span style="font-size: 12px; color: #10b981; font-weight: 700;">Saved</span>
          </li>
        } @empty {
          <p class="empty-state">No items added to favorites yet!</p>
        }
      </ul>
    </div>
  `,
})
export class Summary {
  constructor(private state: State) {}

  favorites$ = this.state.favorites$;
}

