import { Component, OnInit } from '@angular/core';
import { cilSearch, cilShieldAlt } from '@coreui/icons';


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{
  icons = { cilSearch, cilShieldAlt };

  constructor() 
  {
  }


  ngOnInit(): void 
  {
  }

 
}
