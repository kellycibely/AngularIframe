import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iframe';
  response: any = {
    iframeVisible: false,
  }

  closeIframe(message: string, alertType: string) {
    window.parent.postMessage(this.facture(message, alertType), '*')
  }

  facture(message: string, alertType: string) {
    if (message !== '' && alertType !== '') {
      this.response['feedback'] = {
        message,
        alertType
      }
    }

    return this.response;
  }
}
