import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CanalesService } from '../../Services/canales.service';

@Component({
  selector: 'app-recient-channels',
  imports: [CommonModule],
  templateUrl: './recient-channels.component.html',
  styleUrl: './recient-channels.component.css'
})
export class RecientChannelsComponent  implements OnInit{
  
  public servicio = inject(CanalesService);
  public Data:Array<object> = []

  ngOnInit(): void {
      this.Data = this.servicio.Canales
  }

}
