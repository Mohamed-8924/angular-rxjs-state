import { Component } from "@angular/core";
import { Navbar } from "./components/navbar/navbar";
import { ItemList } from "./components/item-list/item-list";
import { Toast } from "./components/toast/toast";
import { Summary } from "./components/summary/summary";

@Component({
  selector: "app-root",
  imports: [Navbar, ItemList, Toast, Summary],
  template: `
    <app-navbar />
    <app-toast />

    <main class="main-container">
      <app-item-list />

      <div style="margin-top: 16px;">
        <button
          class="toggle-summary-btn"
          [class.active]="showSummary"
          (click)="showSummary = !showSummary"
        >
          <span>{{ showSummary ? "👁️ Hide Summary" : "📋 Show Summary (Test BehaviorSubject)" }}</span>
        </button>

        @if (showSummary) {
          <app-summary />
        }
      </div>
    </main>
  `,
  styleUrls: ["./app.css"],
})
export class App {
  title = "homes";
  showSummary = false;
}
