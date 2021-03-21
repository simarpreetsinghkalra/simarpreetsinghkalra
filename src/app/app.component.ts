import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  titles = ['Simar Preet.', 'Developer.', 'Sarcastic.', 'Logical.'];
  deleting = false;
  count = 0;
  period = 2000;

  ngOnInit(): void {
    this.rotate();
  }

  rotate(): void {
    const i = this.count % this.titles.length;
    const fullText = this.titles[i];

    if (this.deleting) {
      this.title = fullText.substring(0, this.title.length - 1);
    } else {
      this.title = fullText.substring(0, this.title.length + 1);
    }
    let delta = 300 - Math.random() * 100;

    if (this.deleting) { delta /= 2; }

    if (!this.deleting && this.title === fullText) {
      delta = this.period;
      this.deleting = true;
    } else if (this.deleting && this.title === '') {
      this.deleting = false;
      this.count++;
      delta = 500;
    }

    setTimeout(() => {
      this.rotate();
    }, delta);
  }
}
