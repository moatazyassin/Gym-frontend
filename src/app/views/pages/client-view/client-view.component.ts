import { Component, OnInit } from '@angular/core';
import { cilSearch, cilPencil } from '@coreui/icons';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit
{
  ngOnInit(): void {
   }
  icons = { cilSearch, cilPencil };

}
