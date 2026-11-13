import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import { State } from "../../services/state";

@Component({
  imports: [],
  selector: "app-toast",
  styles: `
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      pointer-events: none;
    }

    .toast-box {
      background: #10b981;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
      font-weight: 600;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  template: `
    <div class="toast-container">
      @if (message) {
        <div class="toast-box">
          <span>🔔</span>
          <span>{{ message }}</span>
        </div>
      }
    </div>
  `,
})
export class Toast implements OnInit {
  constructor(
    private state: State,
    private cdr: ChangeDetectorRef
  ) {}

  message = "";

  ngOnInit() {
    this.state.toast$.subscribe((msg) => {
      this.message = msg;
      this.cdr.markForCheck();

      setTimeout(() => {
        this.message = "";
        this.cdr.markForCheck();
      }, 2000);
    });
  }
}

