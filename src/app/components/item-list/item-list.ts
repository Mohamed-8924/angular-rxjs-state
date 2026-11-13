import { Component } from "@angular/core";
import { State } from "../../services/state";
import { AsyncPipe } from "@angular/common";

@Component({
  imports: [AsyncPipe],
  selector: "app-item-list",
  styles: `
    .items-container {
      margin-bottom: 24px;
    }

    .title {
      font-size: 18px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 16px;
    }

    .grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 520px;
    }

    .item-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 18px;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      transition: all 0.2s ease;
    }

    .item-card:hover {
      border-color: #cbd5e1;
      transform: translateY(-1px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
    }

    .item-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .item-icon {
      font-size: 20px;
      background: #f8fafc;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .item-name {
      font-size: 15px;
      font-weight: 600;
      color: #334155;
      margin: 0;
    }

    .btn {
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid transparent;
    }

    .btn-add {
      background: #6366f1;
      color: white;
    }

    .btn-add:hover {
      background: #4f46e5;
    }

    .btn-remove {
      background: #fef2f2;
      color: #ef4444;
      border-color: #fecaca;
    }

    .btn-remove:hover {
      background: #fee2e2;
    }
  `,
  template: `
    <div class="items-container">
      <h3 class="title">Available Properties</h3>
      <div class="grid">
        @for (item of items; track item) {
          @let isFav = (state.favorites$ | async)?.includes(item) ?? false;
          <div class="item-card">
            <div class="item-info">
              <span class="item-icon">🏠</span>
              <p class="item-name">{{ item }}</p>
            </div>
            <button
              class="btn"
              [class.btn-add]="!isFav"
              [class.btn-remove]="isFav"
              (click)="state.toggleFavorite(item)"
            >
              {{ isFav ? "Remove ✕" : "Add to Favorites +" }}
            </button>
          </div>
        }
      </div>
    </div>
  `,
})
export class ItemList {
  constructor(public state: State) {}

  items = ["Villa A", "Villa B", "Villa C", "Villa D", "Villa E"];
}

