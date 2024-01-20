import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-we-candidate-job-search',
  templateUrl: './we-candidate-job-search.component.html',
  styleUrls: ['./we-candidate-job-search.component.css']
})
export class WeCandidateJobSearchComponent {
  @ViewChildren('boxContainer') boxContainers! : QueryList<ElementRef>;

  doScroll(index: number): void {
    if (this.boxContainers.length > index) {
      const boxContainer = this.boxContainers.toArray()[index];
      boxContainer.nativeElement.scrollLeft += 220;
    }
  }
}
