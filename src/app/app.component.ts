import { Component } from '@angular/core';
import { Institution } from './select-with-search/institution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-ng-select';

  institutions: Institution[] = [
    {
      name: 'Sample Portfolio',
      cityState: 'Memphis, TN',
      imageUrl:
        '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
      refNum: 111890,
      fedId: 485559,
      acctType: 'a',
      ppaViewId: 1,
      ppaPreviousMonthEnd: false,
    },
    {
      name: 'Vilnius',
      cityState: 'Nashville, TN',
      imageUrl:
        '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15',
      refNum: 4234,
      fedId: 56456,
      acctType: 'a',
      ppaViewId: 1,
      ppaPreviousMonthEnd: false,
    },
    {
      name: 'Kaunas',
      cityState: 'Knoxville, TN',
      imageUrl:
        '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15',
      refNum: 678678,
      fedId: 235788,
      acctType: 'a',
      ppaViewId: 1,
      ppaPreviousMonthEnd: false,
    },
    {
      name: 'Pavilnys',
      cityState: 'Lorem, TN',
      imageUrl:
        '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
      refNum: 4845534,
      fedId: 27859,
      acctType: 'a',
      ppaViewId: 1,
      ppaPreviousMonthEnd: false,
    },
  ];
  selectedItem = this.institutions[0].name;
}
